import { unzipSync, strFromU8 } from 'fflate';

export interface LoadedScore {
  name: string;
  xml: string;
}

export class IngestError extends Error {}

/** DOM helpers that ignore XML namespaces, so we work with plain and namespaced files alike. */
export function kids(el: Element | null | undefined, name: string): Element[] {
  const out: Element[] = [];
  if (!el) return out;
  for (let i = 0; i < el.children.length; i++) {
    const c = el.children[i];
    if (localName(c) === name) out.push(c);
  }
  return out;
}

export function kid(el: Element | null | undefined, name: string): Element | null {
  if (!el) return null;
  for (let i = 0; i < el.children.length; i++) {
    const c = el.children[i];
    if (localName(c) === name) return c;
  }
  return null;
}

/** Depth-first search for the first descendant with the given local name. */
export function deep(el: Element | null | undefined, name: string): Element | null {
  if (!el) return null;
  for (let i = 0; i < el.children.length; i++) {
    const c = el.children[i];
    if (localName(c) === name) return c;
    const found = deep(c, name);
    if (found) return found;
  }
  return null;
}

export function localName(el: Element): string {
  return el.localName || el.nodeName.replace(/^.*:/, '');
}

export function textOf(el: Element | null | undefined, name: string, dflt = ''): string {
  const k = kid(el, name);
  return k?.textContent?.trim() ?? dflt;
}

export function numOf(el: Element | null | undefined, name: string, dflt = 0): number {
  const t = textOf(el, name, '');
  if (!t) return dflt;
  const n = Number(t);
  return Number.isFinite(n) ? n : dflt;
}

export function attr(el: Element | null | undefined, name: string, dflt = ''): string {
  return el?.getAttribute(name) ?? dflt;
}

/**
 * Read a "which staff is this about" number.
 *
 * MusicXML is inconsistent here: `<clef number="2">` carries it as an attribute,
 * while `<note><staff>2</staff></note>` carries it as a child element. Reading
 * the wrong one silently sends every clef to staff 1, which swaps the clefs of
 * a two-staff part and scatters the notes across the wrong staff.
 */
export function staffNumberOf(el: Element | null | undefined, dflt = 1): number {
  const raw = attr(el, 'number') || textOf(el, 'staff', '') || textOf(el, 'number', '');
  const n = Number(raw);
  return Number.isFinite(n) && n >= 1 ? Math.round(n) : dflt;
}

export function parseXml(text: string): Document {
  const doc = new DOMParser().parseFromString(text, 'application/xml');
  const err = doc.getElementsByTagName('parsererror')[0];
  if (err) throw new IngestError(`The file is not valid XML: ${err.textContent?.slice(0, 160)}`);
  return doc;
}

function isZip(bytes: Uint8Array): boolean {
  return bytes.length > 3 && bytes[0] === 0x50 && bytes[1] === 0x4b;
}

function isGzip(bytes: Uint8Array): boolean {
  return bytes.length > 2 && bytes[0] === 0x1f && bytes[1] === 0x8b;
}

/** Unpack a compressed .mxl and pull out the root score part named by META-INF/container.xml. */
function extractFromMxl(bytes: Uint8Array): string {
  let files: Record<string, Uint8Array>;
  try {
    files = unzipSync(bytes);
  } catch {
    throw new IngestError('This looks like a .mxl but the ZIP could not be opened.');
  }

  const names = Object.keys(files);
  const containerKey = names.find((n) => n.toLowerCase() === 'meta-inf/container.xml');
  let rootPath: string | undefined;

  if (containerKey) {
    const doc = parseXml(strFromU8(files[containerKey]));
    // The rootfile element carries full-path="…"; the score file name is arbitrary.
    for (let i = 0; i < doc.documentElement.children.length; i++) {
      const c = doc.documentElement.children[i];
      if (localName(c) === 'rootfile') {
        rootPath = c.getAttribute('full-path') ?? undefined;
        break;
      }
    }
  }

  const scoreKey =
    (rootPath && files[rootPath] && rootPath) ||
    names.find((n) => /(^|\/)(score|.*score.*)\.(xml|musicxml)$/i.test(n)) ||
    names.find((n) => n.toLowerCase().endsWith('.xml') && !n.toLowerCase().includes('meta-inf'));

  if (!scoreKey) throw new IngestError('No score XML found inside the .mxl archive.');
  return strFromU8(files[scoreKey]);
}

async function toText(input: ArrayBuffer | Uint8Array): Promise<{ text: string; wasZip: boolean }> {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  if (isZip(bytes)) return { text: extractFromMxl(bytes), wasZip: true };
  if (isGzip(bytes)) {
    // .mxl files are occasionally gzipped rather than zipped.
    const ds = new DecompressionStream('gzip');
    const stream = new Blob([bytes as BlobPart]).stream().pipeThrough(ds);
    const buf = await new Response(stream).arrayBuffer();
    return { text: extractFromMxl(new Uint8Array(buf)), wasZip: true };
  }
  return { text: new TextDecoder('utf-8').decode(bytes), wasZip: false };
}

export async function loadFromUrl(url: string): Promise<LoadedScore> {
  const trimmed = url.trim();
  if (!trimmed) throw new IngestError('Please enter a URL.');
  let res: Response;
  try {
    res = await fetch(trimmed, { redirect: 'follow' });
  } catch (e) {
    throw new IngestError(
      `Could not fetch that URL (${(e as Error).message}). The server must allow cross-origin requests (CORS).`,
    );
  }
  if (!res.ok) throw new IngestError(`The server replied ${res.status} ${res.statusText}.`);
  const { text } = await toText(await res.arrayBuffer());
  return { name: decodeURIComponent(trimmed.split('/').pop() || 'score'), xml: text };
}

export async function loadFromFile(file: File): Promise<LoadedScore> {
  const { text } = await toText(await file.arrayBuffer());
  return { name: file.name, xml: text };
}
