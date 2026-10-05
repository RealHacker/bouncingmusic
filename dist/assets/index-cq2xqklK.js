(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Kt=Uint8Array,cr=Uint16Array,ud=Int32Array,yh=new Kt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wh=new Kt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),hd=new Kt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),bh=function(n,e){for(var t=new cr(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new ud(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Sh=bh(yh,2),Th=Sh.b,fd=Sh.r;Th[28]=258,fd[258]=28;var dd=bh(wh,0),pd=dd.b,To=new cr(32768);for(var ut=0;ut<32768;++ut){var ii=(ut&43690)>>1|(ut&21845)<<1;ii=(ii&52428)>>2|(ii&13107)<<2,ii=(ii&61680)>>4|(ii&3855)<<4,To[ut]=((ii&65280)>>8|(ii&255)<<8)>>1}var kr=function(n,e,t){for(var i=n.length,r=0,s=new cr(e);r<i;++r)n[r]&&++s[n[r]-1];var a=new cr(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new cr(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],u=e-n[r],h=a[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[To[h]>>c]=l}else for(o=new cr(i),r=0;r<i;++r)n[r]&&(o[r]=To[a[n[r]-1]++]>>15-n[r]);return o},Kr=new Kt(288);for(var ut=0;ut<144;++ut)Kr[ut]=8;for(var ut=144;ut<256;++ut)Kr[ut]=9;for(var ut=256;ut<280;++ut)Kr[ut]=7;for(var ut=280;ut<288;++ut)Kr[ut]=8;var Eh=new Kt(32);for(var ut=0;ut<32;++ut)Eh[ut]=5;var md=kr(Kr,9,1),gd=kr(Eh,5,1),ya=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},pn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},wa=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},_d=function(n){return(n+7)/8|0},Sc=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Kt(n.subarray(e,t))},vd=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],$t=function(n,e,t){var i=new Error(e||vd[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,$t),!t)throw i;return i},xd=function(n,e,t,i){var r=n.length,s=i?i.length:0;if(!r||e.f&&!e.l)return t||new Kt(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new Kt(r*3));var l=function(Ce){var xe=t.length;if(Ce>xe){var R=new Kt(Math.max(xe*2,Ce));R.set(t),t=R}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,g=e.d,_=e.m,p=e.n,m=r*8;do{if(!d){u=pn(n,h,1);var b=pn(n,h+1,3);if(h+=3,b)if(b==1)d=md,g=gd,_=9,p=5;else if(b==2){var C=pn(n,h,31)+257,M=pn(n,h+10,15)+4,P=C+pn(n,h+5,31)+1;h+=14;for(var W=new Kt(P),v=new Kt(19),w=0;w<M;++w)v[hd[w]]=pn(n,h+w*3,7);h+=M*3;for(var A=ya(v),F=(1<<A)-1,$=kr(v,A,1),w=0;w<P;){var B=$[pn(n,h,F)];h+=B&15;var x=B>>4;if(x<16)W[w++]=x;else{var I=0,q=0;for(x==16?(q=3+pn(n,h,3),h+=2,I=W[w-1]):x==17?(q=3+pn(n,h,7),h+=3):x==18&&(q=11+pn(n,h,127),h+=7);q--;)W[w++]=I}}var k=W.subarray(0,C),ae=W.subarray(C);_=ya(k),p=ya(ae),d=kr(k,_,1),g=kr(ae,p,1)}else $t(1);else{var x=_d(h)+4,T=n[x-4]|n[x-3]<<8,D=x+T;if(D>r){c&&$t(0);break}o&&l(f+T),t.set(n.subarray(x,D),f),e.b=f+=T,e.p=h=D*8,e.f=u;continue}if(h>m){c&&$t(0);break}}o&&l(f+131072);for(var oe=(1<<_)-1,fe=(1<<p)-1,Ne=h;;Ne=h){var I=d[wa(n,h)&oe],de=I>>4;if(h+=I&15,h>m){c&&$t(0);break}if(I||$t(2),de<256)t[f++]=de;else if(de==256){Ne=h,d=null;break}else{var j=de-254;if(de>264){var w=de-257,ee=yh[w];j=pn(n,h,(1<<ee)-1)+Th[w],h+=ee}var ce=g[wa(n,h)&fe],O=ce>>4;ce||$t(3),h+=ce&15;var ae=pd[O];if(O>3){var ee=wh[O];ae+=wa(n,h)&(1<<ee)-1,h+=ee}if(h>m){c&&$t(0);break}o&&l(f+131072);var Q=f+j;if(f<ae){var re=s-ae,ge=Math.min(ae,Q);for(re+f<0&&$t(3);f<ge;++f)t[f]=i[re+f]}for(;f<Q;++f)t[f]=t[f-ae]}}e.l=d,e.p=Ne,e.b=f,e.f=u,d&&(u=1,e.m=_,e.d=g,e.n=p)}while(!u);return f!=t.length&&a?Sc(t,0,f):t.subarray(0,f)},yd=new Kt(0),Rn=function(n,e){return n[e]|n[e+1]<<8},sn=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},ba=function(n,e){return sn(n,e)+sn(n,e+4)*4294967296};function wd(n,e){return xd(n,{i:2},e&&e.out,e&&e.dictionary)}var Eo=typeof TextDecoder<"u"&&new TextDecoder,bd=0;try{Eo.decode(yd,{stream:!0}),bd=1}catch{}var Sd=function(n){for(var e="",t=0;;){var i=n[t++],r=(i>127)+(i>223)+(i>239);if(t+r>n.length)return{s:e,r:Sc(n,t-1)};r?r==3?(i=((i&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?e+=String.fromCharCode((i&31)<<6|n[t++]&63):e+=String.fromCharCode((i&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(i)}};function Mo(n,e){if(e){for(var t="",i=0;i<n.length;i+=16384)t+=String.fromCharCode.apply(null,n.subarray(i,i+16384));return t}else{if(Eo)return Eo.decode(n);var r=Sd(n),s=r.s,t=r.r;return t.length&&$t(8),s}}var Td=function(n,e){return e+30+Rn(n,e+26)+Rn(n,e+28)},Ed=function(n,e,t){var i=Rn(n,e+28),r=Rn(n,e+30),s=Mo(n.subarray(e+46,e+46+i),!(Rn(n,e+8)&2048)),a=e+46+i,o=Md(n,a,r,t,sn(n,e+20),sn(n,e+24),sn(n,e+42)),c=o[0],l=o[1],u=o[2];return[Rn(n,e+10),c,l,s,a+r+Rn(n,e+32),u]},Md=function(n,e,t,i,r,s,a){var o=r==4294967295,c=s==4294967295,l=a==4294967295,u=e+t,h=o+c+l;if(i&&h){for(;e+4<u;e+=4+Rn(n,e+2))if(Rn(n,e)==1)return[o?ba(n,e+4+8*c):r,c?ba(n,e+4):s,l?ba(n,e+4+8*(c+o)):a,1];i<2&&$t(13)}return[r,s,a,0]};function Cd(n,e){for(var t={},i=n.length-22;sn(n,i)!=101010256;--i)(!i||n.length-i>65558)&&$t(13);var r=Rn(n,i+8);if(!r)return{};var s=sn(n,i+16),a=sn(n,i-20)==117853008;if(a){var o=sn(n,i-12);a=sn(n,o)==101075792,a&&(r=sn(n,o+32),s=sn(n,o+48))}for(var c=0;c<r;++c){var l=Ed(n,s,a),u=l[0],h=l[1],f=l[2],d=l[3],g=l[4],_=l[5],p=Td(n,_);s=g,u?u==8?t[d]=wd(n.subarray(p,p+h),{out:new Kt(f)}):$t(14,"unknown compression type "+u):t[d]=Sc(n,p,p+h)}return t}class ki extends Error{}function nn(n,e){const t=[];if(!n)return t;for(let i=0;i<n.children.length;i++){const r=n.children[i];Hn(r)===e&&t.push(r)}return t}function St(n,e){if(!n)return null;for(let t=0;t<n.children.length;t++){const i=n.children[t];if(Hn(i)===e)return i}return null}function ar(n,e){if(!n)return null;for(let t=0;t<n.children.length;t++){const i=n.children[t];if(Hn(i)===e)return i;const r=ar(i,e);if(r)return r}return null}function Hn(n){return n.localName||n.nodeName.replace(/^.*:/,"")}function Gn(n,e,t=""){return St(n,e)?.textContent?.trim()??t}function Mt(n,e,t=0){const i=Gn(n,e,"");if(!i)return t;const r=Number(i);return Number.isFinite(r)?r:t}function di(n,e,t=""){return n?.getAttribute(e)??t}function Ad(n,e=1){const t=di(n,"number")||Gn(n,"staff","")||Gn(n,"number",""),i=Number(t);return Number.isFinite(i)&&i>=1?Math.round(i):e}function Mh(n){const e=new DOMParser().parseFromString(n,"application/xml"),t=e.getElementsByTagName("parsererror")[0];if(t)throw new ki(`The file is not valid XML: ${t.textContent?.slice(0,160)}`);return e}function Rd(n){return n.length>3&&n[0]===80&&n[1]===75}function Pd(n){return n.length>2&&n[0]===31&&n[1]===139}function ul(n){let e;try{e=Cd(n)}catch{throw new ki("This looks like a .mxl but the ZIP could not be opened.")}const t=Object.keys(e),i=t.find(a=>a.toLowerCase()==="meta-inf/container.xml");let r;if(i){const a=Mh(Mo(e[i]));for(let o=0;o<a.documentElement.children.length;o++){const c=a.documentElement.children[o];if(Hn(c)==="rootfile"){r=c.getAttribute("full-path")??void 0;break}}}const s=r&&e[r]&&r||t.find(a=>/(^|\/)(score|.*score.*)\.(xml|musicxml)$/i.test(a))||t.find(a=>a.toLowerCase().endsWith(".xml")&&!a.toLowerCase().includes("meta-inf"));if(!s)throw new ki("No score XML found inside the .mxl archive.");return Mo(e[s])}async function Ch(n){const e=n instanceof Uint8Array?n:new Uint8Array(n);if(Rd(e))return{text:ul(e),wasZip:!0};if(Pd(e)){const t=new DecompressionStream("gzip"),i=new Blob([e]).stream().pipeThrough(t),r=await new Response(i).arrayBuffer();return{text:ul(new Uint8Array(r)),wasZip:!0}}return{text:new TextDecoder("utf-8").decode(e),wasZip:!1}}async function Id(n){const e=n.trim();if(!e)throw new ki("Please enter a URL.");let t;try{t=await fetch(e,{redirect:"follow"})}catch(r){throw new ki(`Could not fetch that URL (${r.message}). The server must allow cross-origin requests (CORS).`)}if(!t.ok)throw new ki(`The server replied ${t.status} ${t.statusText}.`);const{text:i}=await Ch(await t.arrayBuffer());return{name:decodeURIComponent(e.split("/").pop()||"score"),xml:i}}async function Fd(n){const{text:e}=await Ch(await n.arrayBuffer());return{name:n.name,xml:e}}const hl={C:0,D:2,E:4,F:5,G:7,A:9,B:11},Ud={C:0,D:1,E:2,F:3,G:4,A:5,B:6},Dd={G2:30,G1:37,F4:18,F3:25,F5:11,C1:28,C2:26,C3:24,C4:22,C5:31,perc:28};function Ld(n){return n.sign==="percussion"?"perc":`${n.sign}${n.line}`}function qs(n){return Dd[Ld(n)]??30}const Nd=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function fl(n){const e=Math.round(n);return`${Nd[(e%12+12)%12]}${Math.floor(e/12)-1}`}const Ah={pppppp:.06,ppppp:.1,pppp:.16,ppp:.24,pp:.34,p:.45,mp:.55,mf:.68,f:.82,ff:.9,fff:.95,ffff:.98,fffff:1,ffffff:1};function Bd(n){return Object.prototype.hasOwnProperty.call(Ah,n)}const Od={whole:4,half:2,quarter:1,eighth:.5,"16th":.25,"32nd":.125,"64th":.0625,breve:8,long:16};let kd=1;const Co=(n,e,t)=>`${n}/${e}/${t}`;function zd(n){const e=n.split(/[\\/]/).pop()??n;return e.replace(/\.(mxl|xml|musicxml)$/i,"").replace(/[_]+/g," ").replace(/\s*-\s*/g," — ").replace(/\s+/g," ").trim()||e||"Untitled"}function dl(n){const e=St(n,"pitch");if(!e)return null;const t=Gn(e,"step","C").toUpperCase(),i=Mt(e,"alter",0),r=Mt(e,"octave",4);return t in hl?{step:t,alter:i,octave:r,midi:(r+1)*12+hl[t]+i,dia:Ud[t]+r*7}:null}function pl(n,e,t){for(const i of nn(n,"tie"))if(di(i,"type")===t)return!0;for(const i of nn(e,"tied"))if(di(i,"type")===t)return!0;return!1}function Vd(n,e){const t=n.documentElement,i=[];if(Hn(t)!=="score-partwise")throw Hn(t)==="score-timewise"?new Error('This is a timewise MusicXML file. Please re-save it as "MusicXML (partwise)".'):new Error(`Expected a <score-partwise> document but found <${Hn(t)}>.`);const r=new Map;for(const A of nn(St(t,"part-list"),"score-part")){const F=di(A,"id"),$=ar(A,"part-name")?.textContent?.trim()||St(A,"part-name")?.textContent?.trim()||F,B=Mt(ar(A,"midi-instrument"),"midi-program",-1);r.set(F,{name:$,midiProgram:B>=0?B:null})}const s={sign:"G",line:2};let a=0,o=4,c=4,l=.5;const u=[],h=[],f=[],d=[],g=[],_=[],p=new Map,m=new Map;let b=0,x=0,T=0;function D(A,F,$,B){const I=Co(A,F,$);let q=p.get(I);return q||(q={id:I,partId:A,partName:r.get(A)?.name??A,staffNo:F,voiceNo:$,clef:{...B.clefs.get(F)??s},clefTimeline:(B.clefTimeline.get(F)??[]).map(k=>({beat:k.beat,clef:{...k.clef}})),keyFifths:a,transpose:B.transpose,midiProgram:r.get(A)?.midiProgram??null,cursor:0,events:[],lastEvent:null,sounding:!1},p.set(I,q)),q}function C(A,F){const $=F===null?A:A.filter(B=>B.staffNo===F);return $.length?$.reduce((B,I)=>Math.min(B,I.cursor),1/0):NaN}nn(t,"part").forEach((A,F)=>{const $=di(A,"id",`P${F+1}`),B=()=>[...p.values()].filter(oe=>oe.partId===$),I={clefs:new Map([[1,{...s}]]),clefTimeline:new Map([[1,[{beat:0,clef:{...s}}]]]),transpose:0};m.set($,I);let q=1,k=!1,ae=1;for(const oe of nn(A,"measure")){const fe=C(B(),null);F===0&&h.push(Number.isFinite(fe)?fe:0);for(const de of Array.from(oe.children)){const j=Hn(de);switch(j){case"attributes":{const ee=Mt(de,"divisions",0);ee>0&&(q=ee);const ce=St(de,"key");if(ce){a=Mt(ce,"fifths",a);for(const Q of B())Q.keyFifths=a}const O=St(de,"time");O&&(o=Mt(O,"beats",o)||o,c=Mt(O,"beat-type",c)||c,k=!0,f.push({measure:Math.max(0,h.length-1),beats:o,beatType:c}));for(const Q of nn(de,"clef")){const re=Gn(Q,"sign","G"),ge=Mt(Q,"line",re==="F"?4:re==="G"?2:3),Ce=Ad(Q,1),xe={sign:re,line:ge};I.clefs.set(Ce,xe);const R=B().filter(se=>se.cursor>0),He=R.length?R.reduce((se,Ye)=>Math.min(se,Ye.cursor),1/0):0,ye=I.clefTimeline.get(Ce)??[],Be=ye[ye.length-1];Be&&Be.clef.sign===xe.sign&&Be.clef.line===xe.line||ye.push({beat:He,clef:xe}),I.clefTimeline.set(Ce,ye)}for(const Q of nn(de,"transpose")){I.transpose=Mt(Q,"chromatic",I.transpose);for(const re of B())re.transpose=I.transpose}break}case"note":{const ee=!!St(de,"chord"),ce=!!St(de,"rest"),O=!!St(de,"grace"),Q=Gn(de,"voice","1"),re=Mt(de,"staff",1)||1,ge=D($,re,Q,I);ee||(ae=re);const Ce=O?0:Mt(de,"duration",0)/q,xe=St(de,"notations"),R=St(de,"time-modification"),He=R?{actual:Mt(R,"actual-notes",1)||1,normal:Mt(R,"normal-notes",1)||1}:null;if(ee&&ge.lastEvent){const se=ce?null:dl(de);se&&ge.lastEvent.pitches.push(se);break}b++,O&&x++;const ye={id:kd++,trackId:ge.id,onsetBeat:ge.cursor,durBeat:Ce,onsetSec:0,durSec:0,pitches:[],rest:ce,tieStart:pl(de,xe,"start"),tieStop:pl(de,xe,"stop"),grace:O,dots:nn(de,"dot").length,timeMod:He,typeName:Gn(de,"type",ce?"rest":"quarter"),stems:St(de,"stem")?.textContent?.trim()??null,x:0,y:0,lane:0,staffStep:0,stemUp:!0,clefBottomDia:0},Be=ce?null:dl(de);Be&&(ye.pitches.push(Be),ge.sounding=!0),ge.events.push(ye),ge.lastEvent=ye,O||(ge.cursor+=Ce);break}case"backup":case"forward":{const ee=Mt(de,"duration",0)/q,ce=j==="backup"?-1:1,O=St(de,"staff")?Mt(de,"staff",1):ae,Q=B().filter(re=>re.staffNo===O);for(const re of Q)re.cursor=Math.max(0,re.cursor+ce*ee);break}case"direction":{const ee=St(de,"staff")?Mt(de,"staff",1):null;let ce=C(B(),ee);Number.isFinite(ce)||(ce=Number.isFinite(fe)?fe:0);const O=Gn(de,"voice",""),Q=Hd(p,$,ee??1,O),re=St(de,"sound"),ge=ar(de,"metronome");let Ce=null;if(ge){const xe=Gn(ge,"beat-unit","quarter"),R=!!St(ge,"beat-unit-dot")||xe.endsWith("."),He=Od[xe.replace(/\.$/,"")]??1,ye=R?He*1.5:He,Be=Mt(ge,"per-minute",0);Be>0&&(Ce=60/(Be*ye))}if(Ce===null&&re){const xe=Number(re.getAttribute("tempo"));Number.isFinite(xe)&&xe>0&&(Ce=60/xe)}if(Ce!==null){const xe=u[u.length-1];xe&&Math.abs(xe.beat-ce)<1e-6?xe.secPerBeat=Ce:u.push({beat:ce,secPerBeat:Ce}),l=Ce}for(const xe of nn(de,"direction-type")){const R=St(xe,"dynamics");if(R)for(const He of Array.from(R.children)){const ye=Hn(He);Bd(ye)?d.push({beat:ce,kind:ye,value:Ah[ye],trackId:Q}):ye!=="other-dynamics"&&T++}for(const He of nn(xe,"wedge")){const ye=di(He,"type");ye==="crescendo"?g.push({beat:ce,dir:1,trackId:Q}):ye==="diminuendo"&&g.push({beat:ce,dir:-1,trackId:Q})}for(const He of nn(xe,"words")){const ye=He.textContent?.trim();ye&&(_.push({beat:ce,text:ye,trackId:Q,above:di(de,"placement")==="above"}),/\bcresc|\bcrescendo/i.test(ye)?g.push({beat:ce,dir:1,trackId:Q}):/\bdim(in)?\b|\bdiminuendo/i.test(ye)&&g.push({beat:ce,dir:-1,trackId:Q}))}}break}}}const Ne=B().reduce((de,j)=>Math.max(de,j.cursor),0);for(const de of B())de.cursor<Ne-1e-9&&(de.cursor=Ne)}F===0&&!k&&f.push({measure:0,beats:o,beatType:c})}),u.length||u.push({beat:0,secPerBeat:l}),u.sort((A,F)=>A.beat-F.beat);for(let A=u.length-1;A>0;A--)Math.abs(u[A].beat-u[A-1].beat)<1e-6&&u.splice(A-1,1);const P=Tc(u),W=[];for(const A of p.values()){if(!A.events.some(B=>B.pitches.length))continue;for(const B of A.events)B.onsetSec=P(B.onsetBeat),B.durSec=Math.max(0,P(B.onsetBeat+B.durBeat)-B.onsetSec);A.events.sort((B,I)=>B.onsetBeat-I.onsetBeat||B.id-I.id),Gd(A.events);const $=[...m.get(A.partId)?.clefTimeline.get(A.staffNo)??A.clefTimeline].sort((B,I)=>B.beat-I.beat).filter((B,I,q)=>I===0||B.beat!==q[I-1].beat);W.push({id:A.id,partId:A.partId,partName:A.partName,staffNo:A.staffNo,voiceNo:A.voiceNo,clef:$[0]?.clef??A.clef,clefTimeline:$,keyFifths:A.keyFifths,transpose:A.transpose,midiProgram:A.midiProgram,events:A.events,sounding:!0})}W.sort((A,F)=>ml(F)-ml(A)||A.partId.localeCompare(F.partId)||A.staffNo-F.staffNo||A.voiceNo.localeCompare(F.voiceNo));const v=new Map;for(const A of W){const F=(v.get(A.partId)??0)+1;v.set(A.partId,F),A.partName=F>1?`${A.partName} · ${F}`:A.partName}let w=0;for(const A of W)for(const F of A.events)w=Math.max(w,F.onsetSec+F.durSec);return x&&i.push(`${x} grace note(s) — drawn, but they do not advance the clock.`),T&&i.push(`${T} uncommon dynamic marking(s) ignored.`),{title:ar(t,"work-title")?.textContent?.trim()||ar(t,"movement-title")?.textContent?.trim()||zd(e),composer:(()=>{for(const A of nn(St(t,"identification"),"creator"))if(di(A,"type")==="composer")return A.textContent?.trim()||"";return""})(),sourceName:e,timeSigs:Wd(f),keyFifths:a,tempoMap:u,measureBeats:h,tracks:W,dynamics:d,wedges:g,annotations:_,durationSec:w,noteCount:b,warnings:i}}function Hd(n,e,t,i){if(i){const s=n.get(Co(e,t,i));if(s)return s.id}const r=[...n.values()].filter(s=>s.partId===e&&s.staffNo===t);return r.length?r[0].id:Co(e,t,i||"1")}function ml(n){let e=0,t=0;for(const i of n.events)for(const r of i.pitches)e+=r.midi,t++;return t?e/t:-1e9}const Sa=1e-6;function Gd(n){const e=new Set,t=[...n].sort((i,r)=>i.onsetBeat-r.onsetBeat||i.id-r.id);for(let i=0;i<t.length-1;i++){const r=t[i];if(e.has(r)||r.grace)continue;if(!(r.rest&&!r.pitches.length)){if(!r.pitches.length)continue}let s=!1;for(let a=i+1;a<t.length;a++){const o=t[a];if(Math.abs(o.onsetBeat-r.onsetBeat)>Sa)break;if(!e.has(o)){if(r.rest!==o.rest){const c=r.rest?r:o;!c.grace&&!c.tieStart&&(e.add(c),s=!0);continue}r.rest||o.grace||o.rest||o.tieStart||Math.abs(o.durBeat-r.durBeat)>Sa||o.pitches.some(c=>r.pitches.some(l=>Math.abs(l.dia-c.dia)<Sa))||(r.pitches.push(...o.pitches),e.add(o),s=!0)}}s&&(r.pitches.sort((a,o)=>a.dia-o.dia),r.tieStop=r.tieStop||!1)}if(e.size)for(let i=n.length-1;i>=0;i--)e.has(n[i])&&n.splice(i,1)}function Wd(n){const e=[];for(const t of n){const i=e[e.length-1];i&&i.beats===t.beats&&i.beatType===t.beatType||e.push(t)}return e}function Tc(n){const e=n.length?[...n].sort((i,r)=>i.beat-r.beat):[{beat:0,secPerBeat:.5}],t=[0];for(let i=1;i<e.length;i++)t[i]=t[i-1]+(e[i].beat-e[i-1].beat)*e[i-1].secPerBeat;return i=>{if(i<=e[0].beat)return t[0]+(i-e[0].beat)*e[0].secPerBeat;let r=0,s=e.length-1;for(;r<s;){const a=r+s+1>>1;e[a].beat<=i?r=a:s=a-1}return t[r]+(i-e[r].beat)*e[r].secPerBeat}}const Xd={lineGap:.42,laneGap:.95,minGap:.85,durScale:.62,maxSpanBeats:4,systemWidth:46,pxPerUnit:30},gl=1.2;function ur(n,e,t){return n+(e-2)*t}function qd(n,e,t){if(!n.length)return e;let i=n[0];for(const r of n)if(r.beat<=t+1e-6)i=r;else break;return qs(i.clef)}function Ta(n,e){if(!n.length)return 0;let t=0;for(const i of n){const r=e(i);let s=1/0,a=-1/0;for(const o of i.pitches){const c=o.dia-r;c<s&&(s=c),c>a&&(a=c)}Math.abs((s+a)/2-2)<=4&&t++}return t/n.length}const $d=[30,18,24],Yd=.25;function jd(n){const e=qs(n.clef),t=n.clefTimeline??[],i=n.events.filter(d=>d.pitches.length);if(!i.length)return{clefAt:()=>e,fit:1};const r=d=>qd(t,e,d),s=Ta(i,d=>r(d.onsetBeat)),a=new Set([e,...t.map(d=>qs(d.clef))]);let o=e,c=-1;for(const d of a){const g=Ta(i,()=>d);g>c&&(c=g,o=d)}let l=-1,u=-1;for(const d of $d){if(a.has(d))continue;const g=Ta(i,()=>d);g>u&&(u=g,l=d)}const h=l>0&&u>c+Yd,f=h||s<.75&&c>s+.05;return h?{clefAt:()=>l,fit:u}:f?{clefAt:()=>o,fit:c}:{clefAt:r,fit:s}}function Kd(n,e={},t){const i={...Xd,...e},{lineGap:r,minGap:s,durScale:a,maxSpanBeats:o,systemWidth:c}=i,l=t?n.tracks.filter(O=>t.has(O.id)):n.tracks,u=new Set([0]);for(const O of l)for(const Q of O.events)Q.grace||(u.add(os(Q.onsetBeat)),Q.durBeat>0&&u.add(os(Q.onsetBeat+Q.durBeat)));for(const O of n.measureBeats)u.add(os(O));const h=[...u].filter(O=>Number.isFinite(O)).sort((O,Q)=>O-Q);h[0]!==0&&h.unshift(0);const f=new Array(h.length);f[0]=0;for(let O=1;O<h.length;O++){const Q=Math.min(h[O]-h[O-1],o);f[O]=f[O-1]+s+Q*a}const d=new Map;h.forEach((O,Q)=>d.set(O,Q));function g(O){if(h.length===1)return 0;if(O<=h[0])return f[0]+(O-h[0])*((f[1]-f[0])/(h[1]-h[0]||1));const Q=h.length-1;if(O>=h[Q]){const He=(f[Q]-f[Q-1])/(h[Q]-h[Q-1]||1);return f[Q]+(O-h[Q])*He}let re=0,ge=Q;for(;re<ge;){const He=re+ge+1>>1;h[He]<=O?re=He:ge=He-1}const Ce=h[re],xe=h[re+1],R=xe===Ce?0:(O-Ce)/(xe-Ce);return f[re]+(f[re+1]-f[re])*R}const _=n.measureBeats.map(O=>g(O)),p=n.measureBeats.map(O=>d.get(os(O))).filter(O=>O!==void 0),m=new Set(p),b=l.length,x=i.laneGap,T=3.4*r,D=new Map,C=[],M=l.map(O=>{const Q=jd(O);D.set(O.id,Q.clefAt),Q.fit<.45&&C.push(O.partName);const re=D.get(O.id);let ge=-2*r,Ce=2*r;for(const xe of O.events){if(!xe.pitches.length)continue;const R=re(xe.onsetBeat);let He=1/0,ye=-1/0;for(const Ye of xe.pitches){const Pe=Ye.dia-R;Pe<He&&(He=Pe),Pe>ye&&(ye=Pe)}const Be=ur(0,ye,r)+T,se=ur(0,He,r)-T;Be>Ce&&(Ce=Be),se<ge&&(ge=se)}return{lo:ge,hi:Ce}}),P=[];let W=0;for(let O=0;O<b;O++){const Q=W-M[O].hi;P.push(Q),W=Q+M[O].lo-x}const v=(0+W)/2;for(let O=0;O<b;O++)P[O]+=v;const w=O=>{let Q=null;for(const re of n.timeSigs)n.measureBeats[re.measure]<=O+1e-6&&(Q=re);return Q??n.timeSigs[0]??null},A=Ea(n.dynamics.map(O=>({...O,x:0})),O=>O.trackId),F=Ea(n.wedges,O=>O.trackId),$=Ea(n.annotations,O=>O.trackId),B=l.map((O,Q)=>{const re=P[Q],ge=D.get(O.id),Ce=O.events,xe=re+M[Q].lo,R=re+M[Q].hi;for(const se of Ce){const Ye=ge(se.onsetBeat);se.clefBottomDia=Ye;let Pe=0,E=0;if(se.pitches.length){let y=1/0,z=-1/0;for(const Z of se.pitches){const ie=Z.dia-Ye;ie<y&&(y=ie),ie>z&&(z=ie)}Pe=y,E=z}se.staffStep=Pe,se.lane=Q,se.stemUp=(Pe+E)/2<=4,se.y=ur(re,Pe,r)}for(const se of Ce)se.grace||(se.x=g(se.onsetBeat));let He=[];for(const se of Ce)se.grace?He.push(se):(He.forEach((Ye,Pe)=>{Ye.x=se.x-(He.length-Pe)*.3}),He=[]);for(const se of He)se.x=g(0);const ye=[];for(const se of A.get(O.id)??[])ye.push({x:g(se.beat),text:se.kind,value:se.value,dir:0});for(const se of F.get(O.id)??[])ye.push({x:g(se.beat),text:"",value:0,dir:se.dir});for(const se of $.get(O.id)??[])se.text.length>18||ye.push({x:g(se.beat),text:se.text,value:0,dir:0});ye.sort((se,Ye)=>se.x-Ye.x);const Be=Ce.filter(se=>!se.grace).map(se=>se.x);return{track:O,index:Q,y:re,clefBottomDia:qs(O.clef),notes:Ce,minY:xe,maxY:R,marks:ye,keyFifths:O.keyFifths,timeSig:w(Ce[0]?.onsetBeat??0),range:Be.length?[Math.min(...Be),Math.max(...Be)]:[0,0]}}),I=[],q=h.length-1;let k=0,ae=0;for(;k<q&&ae++<1e4;){const O=f[k]+c;let Q=k+1;for(;Q<=q&&f[Q]<O;)Q++;if(Q>q)break;let re=Q-1;for(let ge=Q-1;ge>k;ge--){if(m.has(ge)){re=ge;break}if(f[Q]-f[ge]>c*.6)break}re<=k&&(re=k+1),I.push({index:I.length,x0:f[k],x1:f[re],a0:k,a1:re}),k=re}I.push({index:I.length,x0:f[k],x1:f[q],a0:k,a1:q});const oe=f[q];let fe=-1/0,Ne=1/0;for(const O of B)O.maxY>fe&&(fe=O.maxY),O.minY<Ne&&(Ne=O.minY);B.length||(fe=2*r,Ne=-2*r);const de=fe-Ne+2*gl;if(C.length){const O=[...new Set(C)].join(", ");n.warnings.push(`${O}: these voices sit far from the staff under every clef the file declares. The score data looks inconsistent — the notes are placed on the best-fitting clef, but they will spread well above and below their staff.`)}const j=B.filter(O=>{const Q=O.notes.filter(ge=>!ge.grace);return Q.length<24?!1:new Set(Q.map(ge=>Math.round(ge.onsetBeat*1e4))).size<Q.length*.6});if(j.length){const O=j.map(Q=>`${Q.track.partName} (${Q.notes.length} notes in ${new Set(Q.notes.map(re=>Math.round(re.onsetBeat*1e4))).size} positions)`).join(", ");n.warnings.push(`${O}. These voices stack many notes at the same moment, which usually means the file interleaves voices on one staff in a way this parser does not fully separate. The notes are all there, but they overlap instead of lining up.`)}const ee=Qd(n.tempoMap);Tc(n.tempoMap);const ce=O=>g(ee(O));return{lanes:B,anchors:h,xAt:f,barAnchorIdx:p,barX:_,systems:I,totalWidth:oe,height:de,topY:fe+gl,options:i,beatToX:g,secToX:ce,beatAt:ee}}function Qd(n){if(!n.length)return i=>i/.5;const e=[...n].sort((i,r)=>i.beat-r.beat),t=[0];for(let i=1;i<e.length;i++)t[i]=t[i-1]+(e[i].beat-e[i-1].beat)*e[i-1].secPerBeat;return i=>{if(i<=t[0])return e[0].beat+(i-t[0])/e[0].secPerBeat;let r=0,s=e.length-1;for(;r<s;){const a=r+s+1>>1;t[a]<=i?r=a:s=a-1}return e[r].beat+(i-t[r])/e[r].secPerBeat}}function Ea(n,e){const t=new Map;for(const i of n){const r=e(i),s=t.get(r);s?s.push(i):t.set(r,[i])}return t}function os(n){return Math.round(n*1e6)/1e6}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="169",Zd=0,_l=1,Jd=2,Rh=1,ep=2,zn=3,yi=0,Ht=1,Wn=2,jn=0,hr=1,zi=2,vl=3,xl=4,tp=5,Li=100,np=101,ip=102,rp=103,sp=104,ap=200,op=201,cp=202,lp=203,Ao=204,Ro=205,up=206,hp=207,fp=208,dp=209,pp=210,mp=211,gp=212,_p=213,vp=214,Po=0,Io=1,Fo=2,pr=3,Uo=4,Do=5,Lo=6,No=7,Ph=0,xp=1,yp=2,vi=0,Ih=1,Fh=2,Uh=3,Mc=4,wp=5,Dh=6,Lh=7,Nh=300,mr=301,gr=302,Bo=303,Oo=304,ra=306,ko=1e3,Oi=1001,zo=1002,un=1003,bp=1004,cs=1005,ln=1006,Ma=1007,mi=1008,Zn=1009,Bh=1010,Oh=1011,Wr=1012,Cc=1013,Vi=1014,Xn=1015,Kn=1016,Ac=1017,Rc=1018,_r=1020,kh=35902,zh=1021,Vh=1022,yn=1023,Hh=1024,Gh=1025,fr=1026,vr=1027,Wh=1028,Pc=1029,Xh=1030,Ic=1031,Fc=1033,Ns=33776,Bs=33777,Os=33778,ks=33779,Vo=35840,Ho=35841,Go=35842,Wo=35843,Xo=36196,qo=37492,$o=37496,Yo=37808,jo=37809,Ko=37810,Qo=37811,Zo=37812,Jo=37813,ec=37814,tc=37815,nc=37816,ic=37817,rc=37818,sc=37819,ac=37820,oc=37821,zs=36492,cc=36494,lc=36495,qh=36283,uc=36284,hc=36285,fc=36286,Sp=3200,Tp=3201,Ep=0,Mp=1,pi="",an="srgb",Ti="srgb-linear",Uc="display-p3",sa="display-p3-linear",$s="linear",ct="srgb",Ys="rec709",js="p3",qi=7680,yl=519,Cp=512,Ap=513,Rp=514,$h=515,Pp=516,Ip=517,Fp=518,Up=519,wl=35044,bl="300 es",qn=2e3,Ks=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sl=1234567;const zr=Math.PI/180,Xr=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function Dc(n,e){return(n%e+e)%e}function Dp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Lp(n,e,t){return n!==e?(t-n)/(e-n):0}function Vr(n,e,t){return(1-t)*n+t*e}function Np(n,e,t,i){return Vr(n,e,1-Math.exp(-t*i))}function Bp(n,e=1){return e-Math.abs(Dc(n,e*2)-e)}function Op(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function kp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vp(n,e){return n+Math.random()*(e-n)}function Hp(n){return n*(.5-Math.random())}function Gp(n){n!==void 0&&(Sl=n);let e=Sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wp(n){return n*zr}function Xp(n){return n*Xr}function qp(n){return(n&n-1)===0&&n!==0}function $p(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jp(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*f,o*l);break;case"YZY":n.set(c*f,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*f,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*d,o*l);break;case"YXY":n.set(c*d,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ls={DEG2RAD:zr,RAD2DEG:Xr,generateUUID:Sr,clamp:Dt,euclideanModulo:Dc,mapLinear:Dp,inverseLerp:Lp,lerp:Vr,damp:Np,pingpong:Bp,smoothstep:Op,smootherstep:kp,randInt:zp,randFloat:Vp,randFloatSpread:Hp,seededRandom:Gp,degToRad:Wp,radToDeg:Xp,isPowerOfTwo:qp,ceilPowerOfTwo:$p,floorPowerOfTwo:Yp,setQuaternionFromProperEuler:jp,normalize:Ft,denormalize:or};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,s,a,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],p=r[3],m=r[6],b=r[1],x=r[4],T=r[7],D=r[2],C=r[5],M=r[8];return s[0]=a*_+o*b+c*D,s[3]=a*p+o*x+c*C,s[6]=a*m+o*T+c*M,s[1]=l*_+u*b+h*D,s[4]=l*p+u*x+h*C,s[7]=l*m+u*T+h*M,s[2]=f*_+d*b+g*D,s[5]=f*p+d*x+g*C,s[8]=f*m+d*T+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,d=l*s-a*c,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new qe;function Yh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kp(){const n=Qs("canvas");return n.style.display="block",n}const Tl={};function Vs(n){n in Tl||(Tl[n]=!0,console.warn(n))}function Qp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Zp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const El=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ml=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[Ti]:{transfer:$s,primaries:Ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[an]:{transfer:ct,primaries:Ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[sa]:{transfer:$s,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ml),fromReference:n=>n.applyMatrix3(El)},[Uc]:{transfer:ct,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ml),fromReference:n=>n.applyMatrix3(El).convertLinearToSRGB()}},em=new Set([Ti,sa]),tt={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!em.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Mr[e].toReference,r=Mr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Mr[n].primaries},getTransfer:function(n){return n===pi?$s:Mr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Mr[e].luminanceCoefficients)}};function dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class tm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=Qs("canvas")),$i.width=e.width,$i.height=e.height;const i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=dr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dr(t[i]/255)*255):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nm=0;class jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ra(r[a].image)):s.push(Ra(r[a]))}else s=Ra(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let im=0;class Bt extends br{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Oi,r=Oi,s=ln,a=mi,o=yn,c=Zn,l=Bt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Sr(),this.name="",this.source=new jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ko:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ko:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Nh;Bt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,T=(d+1)/2,D=(m+1)/2,C=(u+f)/4,M=(h+_)/4,P=(g+p)/4;return x>T&&x>D?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=M/i):T>D?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=C/r,s=P/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=M/s,r=P/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends rm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kh extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sm extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let p=1-o;const m=c*f+l*d+u*g+h*_,b=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const D=Math.sqrt(x),C=Math.atan2(D,m*b);p=Math.sin(p*C)/D,o=Math.sin(o*C)/D}const T=o*b;if(c=c*p+f*T,l=l*p+d*T,u=u*p+g*T,h=h*p+_*T,p===1-o){const D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new H,Cl=new Qr;class Zr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),hs.subVectors(this.max,Cr),Yi.subVectors(e.a,Cr),ji.subVectors(e.b,Cr),Ki.subVectors(e.c,Cr),ri.subVectors(ji,Yi),si.subVectors(Ki,ji),Mi.subVectors(Yi,Ki);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!Ia(t,Yi,ji,Ki,hs)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,Yi,ji,Ki,hs))?!1:(fs.crossVectors(ri,si),t=[fs.x,fs.y,fs.z],Ia(t,Yi,ji,Ki,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new H,new H,new H,new H,new H,new H,new H,new H],mn=new H,us=new Zr,Yi=new H,ji=new H,Ki=new H,ri=new H,si=new H,Mi=new H,Cr=new H,hs=new H,fs=new H,Ci=new H;function Ia(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ci.fromArray(n,s);const o=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const am=new Zr,Ar=new H,Fa=new H;class Lc{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):am.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Fa)),this.expandByPoint(Ar.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new H,Ua=new H,ds=new H,ai=new H,Da=new H,ps=new H,La=new H;class om{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ua.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ua);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ds),o=ai.dot(this.direction),c=-ai.dot(ds),l=ai.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ua).addScaledVector(ds,f),d}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){Da.subVectors(t,e),ps.subVectors(i,e),La.crossVectors(Da,ps);let a=this.direction.dot(La),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);const c=o*this.direction.dot(ps.crossVectors(ai,ps));if(c<0)return null;const l=o*this.direction.dot(Da.cross(ai));if(l<0||c+l>a)return null;const u=-o*ai.dot(La);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,c,l,u,h,f,d,g,_,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,f,d,g,_,p)}set(e,t,i,r,s,a,o,c,l,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,lm)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),oi.crossVectors(i,Xt),oi.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),oi.crossVectors(i,Xt)),oi.normalize(),ms.crossVectors(Xt,oi),r[0]=oi.x,r[4]=ms.x,r[8]=Xt.x,r[1]=oi.y,r[5]=ms.y,r[9]=Xt.y,r[2]=oi.z,r[6]=ms.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],b=i[3],x=i[7],T=i[11],D=i[15],C=r[0],M=r[4],P=r[8],W=r[12],v=r[1],w=r[5],A=r[9],F=r[13],$=r[2],B=r[6],I=r[10],q=r[14],k=r[3],ae=r[7],oe=r[11],fe=r[15];return s[0]=a*C+o*v+c*$+l*k,s[4]=a*M+o*w+c*B+l*ae,s[8]=a*P+o*A+c*I+l*oe,s[12]=a*W+o*F+c*q+l*fe,s[1]=u*C+h*v+f*$+d*k,s[5]=u*M+h*w+f*B+d*ae,s[9]=u*P+h*A+f*I+d*oe,s[13]=u*W+h*F+f*q+d*fe,s[2]=g*C+_*v+p*$+m*k,s[6]=g*M+_*w+p*B+m*ae,s[10]=g*P+_*A+p*I+m*oe,s[14]=g*W+_*F+p*q+m*fe,s[3]=b*C+x*v+T*$+D*k,s[7]=b*M+x*w+T*B+D*ae,s[11]=b*P+x*A+T*I+D*oe,s[15]=b*W+x*F+T*q+D*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*c*h-r*l*h-s*o*f+i*l*f+r*o*d-i*c*d)+_*(+t*c*d-t*l*f+s*a*f-r*a*d+r*l*u-s*c*u)+p*(+t*l*h-t*o*d-s*a*h+i*a*d+s*o*u-i*l*u)+m*(-r*o*u-t*c*h+t*o*f+r*a*h-i*a*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],b=h*p*l-_*f*l+_*c*d-o*p*d-h*c*m+o*f*m,x=g*f*l-u*p*l-g*c*d+a*p*d+u*c*m-a*f*m,T=u*_*l-g*h*l+g*o*d-a*_*d-u*o*m+a*h*m,D=g*h*c-u*_*c-g*o*f+a*_*f+u*o*p-a*h*p,C=t*b+i*x+r*T+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=b*M,e[1]=(_*f*s-h*p*s-_*r*d+i*p*d+h*r*m-i*f*m)*M,e[2]=(o*p*s-_*c*s+_*r*l-i*p*l-o*r*m+i*c*m)*M,e[3]=(h*c*s-o*f*s-h*r*l+i*f*l+o*r*d-i*c*d)*M,e[4]=x*M,e[5]=(u*p*s-g*f*s+g*r*d-t*p*d-u*r*m+t*f*m)*M,e[6]=(g*c*s-a*p*s-g*r*l+t*p*l+a*r*m-t*c*m)*M,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*d+t*c*d)*M,e[8]=T*M,e[9]=(g*h*s-u*_*s-g*i*d+t*_*d+u*i*m-t*h*m)*M,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*m+t*o*m)*M,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*d-t*o*d)*M,e[12]=D*M,e[13]=(u*_*r-g*h*r+g*i*f-t*_*f-u*i*p+t*h*p)*M,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*p-t*o*p)*M,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*f+t*o*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,d=s*u,g=s*h,_=a*u,p=a*h,m=o*h,b=c*l,x=c*u,T=c*h,D=i.x,C=i.y,M=i.z;return r[0]=(1-(_+m))*D,r[1]=(d+T)*D,r[2]=(g-x)*D,r[3]=0,r[4]=(d-T)*C,r[5]=(1-(f+m))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(g+x)*M,r[9]=(p-b)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const a=Qi.set(r[4],r[5],r[6]).length(),o=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const l=1/s,u=1/a,h=1/o;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,t.setFromRotationMatrix(gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=qn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(o===qn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ks)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=qn){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*l,d=(i+r)*u;let g,_;if(o===qn)g=(a+s)*h,_=-2*h;else if(o===Ks)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qi=new H,gn=new mt,cm=new H(0,0,0),lm=new H(1,1,1),oi=new H,ms=new H,Xt=new H,Al=new mt,Rl=new Qr;class Jn{constructor(e=0,t=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Al,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let um=0;const Pl=new H,Zi=new Qr,Bn=new mt,gs=new H,Rr=new H,hm=new H,fm=new Qr,Il=new H(1,0,0),Fl=new H(0,1,0),Ul=new H(0,0,1),Dl={type:"added"},dm={type:"removed"},Ji={type:"childadded",child:null},Na={type:"childremoved",child:null};class It extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new H,t=new Jn,i=new Qr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(Fl,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(Fl,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gs.copy(e):gs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Rr,gs,this.up):Bn.lookAt(gs,Rr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dm),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new H(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new H,On=new H,Ba=new H,kn=new H,er=new H,tr=new H,Ll=new H,Oa=new H,ka=new H,za=new H,Va=new pt,Ha=new pt,Ga=new pt;class xn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),On.subVectors(i,t),Ba.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(On),c=_n.dot(Ba),l=On.dot(On),u=On.dot(Ba),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,kn.x),c.addScaledVector(a,kn.y),c.addScaledVector(o,kn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Va.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),Va.fromBufferAttribute(e,t),Ha.fromBufferAttribute(e,i),Ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Va,s.x),a.addScaledVector(Ha,s.y),a.addScaledVector(Ga,s.z),a}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),On.subVectors(e,t),_n.cross(On).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),On.subVectors(this.a,this.b),_n.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;er.subVectors(r,i),tr.subVectors(s,i),Oa.subVectors(e,i);const c=er.dot(Oa),l=tr.dot(Oa);if(c<=0&&l<=0)return t.copy(i);ka.subVectors(e,r);const u=er.dot(ka),h=tr.dot(ka);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(er,a);za.subVectors(e,s);const d=er.dot(za),g=tr.dot(za);if(g>=0&&d<=g)return t.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(tr,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Ll.subVectors(s,r),o=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Ll,o);const m=1/(p+_+f);return a=_*m,o=f*m,t.copy(i).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Wa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Dc(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Wa(a,s,e+1/3),this.g=Wa(a,s,e),this.b=Wa(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=an){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=Zh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return tt.fromWorkingColorSpace(At.copy(this),e),Math.round(Dt(At.r*255,0,255))*65536+Math.round(Dt(At.g*255,0,255))*256+Math.round(Dt(At.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=an){tt.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(_s);const i=Vr(ci.h,_s.h,t),r=Vr(ci.s,_s.s,t),s=Vr(ci.l,_s.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new je;je.NAMES=Zh;let pm=0;class aa extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=hr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ao&&(i.blendSrc=this.blendSrc),this.blendDst!==Ro&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wi extends aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new H,vs=new $e;class Fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wl,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}}class Jh extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ef extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hn extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mm=0;const tn=new mt,Xa=new It,nr=new H,qt=new Zr,Pr=new Zr,bt=new H;class ei extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?ef:Jh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(qt.min,Pr.min),qt.expandByPoint(bt),bt.addVectors(qt.max,Pr.max),qt.expandByPoint(bt)):(qt.expandByPoint(Pr.min),qt.expandByPoint(Pr.max))}qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)bt.fromBufferAttribute(o,l),c&&(nr.fromBufferAttribute(e,l),bt.add(nr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new H,c[P]=new H;const l=new H,u=new H,h=new H,f=new $e,d=new $e,g=new $e,_=new H,p=new H;function m(P,W,v){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,W),h.fromBufferAttribute(i,v),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,W),g.fromBufferAttribute(s,v),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(w),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),o[P].add(_),o[W].add(_),o[v].add(_),c[P].add(p),c[W].add(p),c[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,W=b.length;P<W;++P){const v=b[P],w=v.start,A=v.count;for(let F=w,$=w+A;F<$;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new H,T=new H,D=new H,C=new H;function M(P){D.fromBufferAttribute(r,P),C.copy(D);const W=o[P];x.copy(W),x.sub(D.multiplyScalar(D.dot(W))).normalize(),T.crossVectors(C,W);const w=T.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,W=b.length;P<W;++P){const v=b[P],w=v.start,A=v.count;for(let F=w,$=w+A;F<$;F+=3)M(e.getX(F+0)),M(e.getX(F+1)),M(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let m=0;m<u;m++)f[g++]=l[d++]}return new Fn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new mt,Ai=new om,xs=new Lc,Bl=new H,ys=new H,ws=new H,bs=new H,qa=new H,Ss=new H,Ol=new H,Ts=new H;class Tt extends It{constructor(e=new ei,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ss.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(qa.fromBufferAttribute(h,e),a?Ss.addScaledVector(qa,u):Ss.addScaledVector(qa.sub(t),u))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(xs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(xs,Bl)===null||Ai.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(Nl.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Nl),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let T=b,D=x;T<D;T+=3){const C=o.getX(T),M=o.getX(T+1),P=o.getX(T+2);r=Es(this,m,e,i,l,u,h,C,M,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const b=o.getX(p),x=o.getX(p+1),T=o.getX(p+2);r=Es(this,a,e,i,l,u,h,b,x,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),x=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let T=b,D=x;T<D;T+=3){const C=T,M=T+1,P=T+2;r=Es(this,m,e,i,l,u,h,C,M,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const b=p,x=p+1,T=p+2;r=Es(this,a,e,i,l,u,h,b,x,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function gm(n,e,t,i,r,s,a,o){let c;if(e.side===Ht?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===yi,o),c===null)return null;Ts.copy(o),Ts.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ts);return l<t.near||l>t.far?null:{distance:l,point:Ts.clone(),object:n}}function Es(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,ys),n.getVertexPosition(c,ws),n.getVertexPosition(l,bs);const u=gm(n,e,t,i,ys,ws,bs,Ol);if(u){const h=new H;xn.getBarycoord(Ol,ys,ws,bs,h),r&&(u.uv=xn.getInterpolatedAttribute(r,o,c,l,h,new $e)),s&&(u.uv1=xn.getInterpolatedAttribute(s,o,c,l,h,new $e)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,c,l,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new H,materialIndex:0};xn.getNormal(ys,ws,bs,f.normal),u.face=f,u.barycoord=h}return u}class Jr extends ei{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new hn(l,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(h,2));function g(_,p,m,b,x,T,D,C,M,P,W){const v=T/M,w=D/P,A=T/2,F=D/2,$=C/2,B=M+1,I=P+1;let q=0,k=0;const ae=new H;for(let oe=0;oe<I;oe++){const fe=oe*w-F;for(let Ne=0;Ne<B;Ne++){const de=Ne*v-A;ae[_]=de*b,ae[p]=fe*x,ae[m]=$,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[p]=0,ae[m]=C>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Ne/M),h.push(1-oe/P),q+=1}}for(let oe=0;oe<P;oe++)for(let fe=0;fe<M;fe++){const Ne=f+fe+B*oe,de=f+fe+B*(oe+1),j=f+(fe+1)+B*(oe+1),ee=f+(fe+1)+B*oe;c.push(Ne,de,ee),c.push(de,j,ee),k+=6}o.addGroup(d,k,W),d+=k,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=xr(n[t]);for(const r in i)e[r]=i[r]}return e}function _m(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const qr={clone:xr,merge:Ut};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=_m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nf extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new H,kl=new $e,zl=new $e;class on extends nf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,kl,zl),t.subVectors(zl,kl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class ym extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new on(ir,rr,e,t);s.layers=this.layers,this.add(s);const a=new on(ir,rr,e,t);a.layers=this.layers,this.add(a);const o=new on(ir,rr,e,t);o.layers=this.layers,this.add(o);const c=new on(ir,rr,e,t);c.layers=this.layers,this.add(c);const l=new on(ir,rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rf extends Bt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wm extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:jn});s.uniforms.tEquirect.value=t;const a=new Tt(r,s),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=ln),new ym(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const $a=new H,bm=new H,Sm=new qe;class Ui{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$a.subVectors(i,t).cross(bm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($a),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sm.getNormalMatrix(e),r=this.coplanarPoint($a).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Lc,Ms=new H;class Nc{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,a=new Ui){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],p=r[11],m=r[12],b=r[13],x=r[14],T=r[15];if(i[0].setComponents(c-s,f-l,p-d,T-m).normalize(),i[1].setComponents(c+s,f+l,p+d,T+m).normalize(),i[2].setComponents(c+a,f+u,p+g,T+b).normalize(),i[3].setComponents(c-a,f-u,p-g,T-b).normalize(),i[4].setComponents(c-o,f-h,p-_,T-x).normalize(),t===qn)i[5].setComponents(c+o,f+h,p+_,T+x).normalize();else if(t===Ks)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ms.x=r.normal.x>0?e.max.x:e.min.x,Ms.y=r.normal.y>0?e.max.y:e.min.y,Ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Tm(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Wi extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const b=m*f-a;for(let x=0;x<l;x++){const T=x*h-s;g.push(T,-b,0),_.push(0,0,1),p.push(x/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<o;b++){const x=b+l*m,T=b+l*(m+1),D=b+1+l*(m+1),C=b+1+l*m;d.push(x,T,C),d.push(T,D,C)}this.setIndex(d),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Om=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ym=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Km=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Em,alphahash_pars_fragment:Mm,alphamap_fragment:Cm,alphamap_pars_fragment:Am,alphatest_fragment:Rm,alphatest_pars_fragment:Pm,aomap_fragment:Im,aomap_pars_fragment:Fm,batching_pars_vertex:Um,batching_vertex:Dm,begin_vertex:Lm,beginnormal_vertex:Nm,bsdfs:Bm,iridescence_fragment:Om,bumpmap_pars_fragment:km,clipping_planes_fragment:zm,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Gm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:$m,common:Ym,cube_uv_reflection_fragment:jm,defaultnormal_vertex:Km,displacementmap_pars_vertex:Qm,displacementmap_vertex:Zm,emissivemap_fragment:Jm,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:rg,envmap_pars_fragment:sg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:_g,envmap_vertex:og,fog_vertex:cg,fog_pars_vertex:lg,fog_fragment:ug,fog_pars_fragment:hg,gradientmap_pars_fragment:fg,lightmap_pars_fragment:dg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:vg,lights_toon_pars_fragment:xg,lights_phong_fragment:yg,lights_phong_pars_fragment:wg,lights_physical_fragment:bg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Tg,lights_fragment_maps:Eg,lights_fragment_end:Mg,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Pg,map_fragment:Ig,map_pars_fragment:Fg,map_particle_fragment:Ug,map_particle_pars_fragment:Dg,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Ng,morphinstance_vertex:Bg,morphcolor_vertex:Og,morphnormal_vertex:kg,morphtarget_pars_vertex:zg,morphtarget_vertex:Vg,normal_fragment_begin:Hg,normal_fragment_maps:Gg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:qg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:Qg,opaque_fragment:Zg,packing:Jg,premultiplied_alpha_fragment:e0,project_vertex:t0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:o0,shadowmap_vertex:c0,shadowmask_pars_fragment:l0,skinbase_vertex:u0,skinning_pars_vertex:h0,skinning_vertex:f0,skinnormal_vertex:d0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:v0,transmission_pars_fragment:x0,uv_pars_fragment:y0,uv_pars_vertex:w0,uv_vertex:b0,worldpos_vertex:S0,background_vert:T0,background_frag:E0,backgroundCube_vert:M0,backgroundCube_frag:C0,cube_vert:A0,cube_frag:R0,depth_vert:P0,depth_frag:I0,distanceRGBA_vert:F0,distanceRGBA_frag:U0,equirect_vert:D0,equirect_frag:L0,linedashed_vert:N0,linedashed_frag:B0,meshbasic_vert:O0,meshbasic_frag:k0,meshlambert_vert:z0,meshlambert_frag:V0,meshmatcap_vert:H0,meshmatcap_frag:G0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:$0,meshphysical_vert:Y0,meshphysical_frag:j0,meshtoon_vert:K0,meshtoon_frag:Q0,points_vert:Z0,points_frag:J0,shadow_vert:e_,shadow_frag:t_,sprite_vert:n_,sprite_frag:i_},pe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},An={basic:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ut([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ut([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ut([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ut([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ut([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ut([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ut([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ut([pe.lights,pe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};An.physical={uniforms:Ut([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Cs={r:0,b:0,g:0},Pi=new Jn,r_=new mt;function s_(n,e,t,i,r,s,a){const o=new je(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const T=g(b);T===null?m(o,c):T&&T.isColor&&(m(T,1),x=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===ra)?(u===void 0&&(u=new Tt(new Jr(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:xr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pi.copy(x.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(r_.makeRotationFromEuler(Pi)),u.material.toneMapped=tt.getTransfer(T.colorSpace)!==ct,(h!==T||f!==T.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Tt(new Wi(2,2),new Lt({name:"BackgroundMaterial",uniforms:xr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=tt.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,x){b.getRGB(Cs,tf(n)),i.buffers.color.setClear(Cs.r,Cs.g,Cs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(o,c)},render:_,addToRenderList:p}}function a_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(v,w,A,F,$){let B=!1;const I=h(F,A,w);s!==I&&(s=I,l(s.object)),B=d(v,F,A,$),B&&g(v,F,A,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,T(v,w,A,F),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,w,A){const F=A.wireframe===!0;let $=i[v.id];$===void 0&&($={},i[v.id]=$);let B=$[w.id];B===void 0&&(B={},$[w.id]=B);let I=B[F];return I===void 0&&(I=f(c()),B[F]=I),I}function f(v){const w=[],A=[],F=[];for(let $=0;$<t;$++)w[$]=0,A[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:A,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,w,A,F){const $=s.attributes,B=w.attributes;let I=0;const q=A.getAttributes();for(const k in q)if(q[k].location>=0){const oe=$[k];let fe=B[k];if(fe===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),oe===void 0||oe.attribute!==fe||fe&&oe.data!==fe.data)return!0;I++}return s.attributesNum!==I||s.index!==F}function g(v,w,A,F){const $={},B=w.attributes;let I=0;const q=A.getAttributes();for(const k in q)if(q[k].location>=0){let oe=B[k];oe===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor));const fe={};fe.attribute=oe,oe&&oe.data&&(fe.data=oe.data),$[k]=fe,I++}s.attributes=$,s.attributesNum=I,s.index=F}function _(){const v=s.newAttributes;for(let w=0,A=v.length;w<A;w++)v[w]=0}function p(v){m(v,0)}function m(v,w){const A=s.newAttributes,F=s.enabledAttributes,$=s.attributeDivisors;A[v]=1,F[v]===0&&(n.enableVertexAttribArray(v),F[v]=1),$[v]!==w&&(n.vertexAttribDivisor(v,w),$[v]=w)}function b(){const v=s.newAttributes,w=s.enabledAttributes;for(let A=0,F=w.length;A<F;A++)w[A]!==v[A]&&(n.disableVertexAttribArray(A),w[A]=0)}function x(v,w,A,F,$,B,I){I===!0?n.vertexAttribIPointer(v,w,A,$,B):n.vertexAttribPointer(v,w,A,F,$,B)}function T(v,w,A,F){_();const $=F.attributes,B=A.getAttributes(),I=w.defaultAttributeValues;for(const q in B){const k=B[q];if(k.location>=0){let ae=$[q];if(ae===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),ae!==void 0){const oe=ae.normalized,fe=ae.itemSize,Ne=e.get(ae);if(Ne===void 0)continue;const de=Ne.buffer,j=Ne.type,ee=Ne.bytesPerElement,ce=j===n.INT||j===n.UNSIGNED_INT||ae.gpuType===Cc;if(ae.isInterleavedBufferAttribute){const O=ae.data,Q=O.stride,re=ae.offset;if(O.isInstancedInterleavedBuffer){for(let ge=0;ge<k.locationSize;ge++)m(k.location+ge,O.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ge=0;ge<k.locationSize;ge++)p(k.location+ge);n.bindBuffer(n.ARRAY_BUFFER,de);for(let ge=0;ge<k.locationSize;ge++)x(k.location+ge,fe/k.locationSize,j,oe,Q*ee,(re+fe/k.locationSize*ge)*ee,ce)}else{if(ae.isInstancedBufferAttribute){for(let O=0;O<k.locationSize;O++)m(k.location+O,ae.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let O=0;O<k.locationSize;O++)p(k.location+O);n.bindBuffer(n.ARRAY_BUFFER,de);for(let O=0;O<k.locationSize;O++)x(k.location+O,fe/k.locationSize,j,oe,fe*ee,fe/k.locationSize*O*ee,ce)}}else if(I!==void 0){const oe=I[q];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(k.location,oe);break;case 3:n.vertexAttrib3fv(k.location,oe);break;case 4:n.vertexAttrib4fv(k.location,oe);break;default:n.vertexAttrib1fv(k.location,oe)}}}}b()}function D(){P();for(const v in i){const w=i[v];for(const A in w){const F=w[A];for(const $ in F)u(F[$].object),delete F[$];delete w[A]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;const w=i[v.id];for(const A in w){const F=w[A];for(const $ in F)u(F[$].object),delete F[$];delete w[A]}delete i[v.id]}function M(v){for(const w in i){const A=i[w];if(A[v.id]===void 0)continue;const F=A[v.id];for(const $ in F)u(F[$].object),delete F[$];delete A[v.id]}}function P(){W(),a=!0,s!==r&&(s=r,l(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:W,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function o_(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function c_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==yn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const P=M===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Zn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Xn&&!P)}function c(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:D,maxSamples:C}}function l_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ui,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const b=s?0:i,x=b*4;let T=m.clippingState||null;c.value=T,T=u(g,f,x,d);for(let D=0;D!==x;++D)T[D]=t[D];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=d+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,T=d;x!==_;++x,T+=4)a.copy(h[x]).applyMatrix4(b,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function u_(n){let e=new WeakMap;function t(a,o){return o===Bo?a.mapping=mr:o===Oo&&(a.mapping=gr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Bo||o===Oo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new wm(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Bc extends nf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,Vl=[.125,.215,.35,.446,.526,.582],Ni=20,Ya=new Bc,Hl=new je;let ja=null,Ka=0,Qa=0,Za=!1;const Di=(1+Math.sqrt(5))/2,sr=1/Di,Gl=[new H(-Di,sr,0),new H(Di,sr,0),new H(-sr,0,Di),new H(sr,0,Di),new H(0,Di,-sr),new H(0,Di,sr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,Ka,Qa),this._renderer.xr.enabled=Za,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Kn,format:yn,colorSpace:Ti,depthBuffer:!1},r=Xl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(s)),this._blurMaterial=f_(s,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,i,r){const o=new on(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Hl),u.toneMapping=vi,u.autoClear=!1;const d=new wi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Tt(new Jr,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Hl),_=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):b===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const x=this._cubeSize;As(r,b*x,m>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===mr||e.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;As(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gl[(r-s-1)%Gl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ni-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ni;p>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);const m=[];let b=0;for(let M=0;M<Ni;++M){const P=M/_,W=Math.exp(-P*P/2);m.push(W),M===0?b+=W:M<p&&(b+=2*W)}for(let M=0;M<m.length;M++)m[M]=m[M]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const T=this._sizeLods[r],D=3*T*(r>x-lr?r-x+lr:0),C=4*(this._cubeSize-T);As(t,D,C,3*T,2*T),c.setRenderTarget(t),c.render(h,Ya)}}function h_(n){const e=[],t=[],i=[];let r=n;const s=n-lr+1+Vl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-lr?c=Vl[a-n+lr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*d),x=new Float32Array(p*g*d),T=new Float32Array(m*g*d);for(let C=0;C<d;C++){const M=C%3*2/3-1,P=C>2?0:-1,W=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];b.set(W,_*g*C),x.set(f,p*g*C);const v=[C,C,C,C,C,C];T.set(v,m*g*C)}const D=new ei;D.setAttribute("position",new Fn(b,_)),D.setAttribute("uv",new Fn(x,p)),D.setAttribute("faceIndex",new Fn(T,m)),e.push(D),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xl(n,e,t){const i=new bn(n,e,t);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function f_(n,e,t){const i=new Float32Array(Ni),r=new H(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ql(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function $l(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Bo||c===Oo,u=c===mr||c===gr;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Wl(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Wl(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function p_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function m_(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let x=0,T=b.length;x<T;x+=3){const D=b[x+0],C=b[x+1],M=b[x+2];f.push(D,C,C,M,M,D)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,T=b.length/3-1;x<T;x+=3){const D=x+0,C=x+1,M=x+2;f.push(D,C,C,M,M,D)}}else return;const p=new(Yh(f)?ef:Jh)(f,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function g_(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function h(f,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b];for(let b=0;b<_.length;b++)t.update(m,i,_[b])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function __(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function v_(n,e,t){const i=new WeakMap,r=new pt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let v=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let D=o.attributes.position.count*T,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const M=new Float32Array(D*C*4*h),P=new Kh(M,D,C,h);P.type=Xn,P.needsUpdate=!0;const W=T*4;for(let w=0;w<h;w++){const A=m[w],F=b[w],$=x[w],B=D*C*4*w;for(let I=0;I<A.count;I++){const q=I*W;g===!0&&(r.fromBufferAttribute(A,I),M[B+q+0]=r.x,M[B+q+1]=r.y,M[B+q+2]=r.z,M[B+q+3]=0),_===!0&&(r.fromBufferAttribute(F,I),M[B+q+4]=r.x,M[B+q+5]=r.y,M[B+q+6]=r.z,M[B+q+7]=0),p===!0&&(r.fromBufferAttribute($,I),M[B+q+8]=r.x,M[B+q+9]=r.y,M[B+q+10]=r.z,M[B+q+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new $e(D,C)},i.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function x_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class af extends Bt{constructor(e,t,i,r,s,a,o,c,l,u=fr){if(u!==fr&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fr&&(i=Vi),i===void 0&&u===vr&&(i=_r),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:un,this.minFilter=c!==void 0?c:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const of=new Bt,Yl=new af(1,1),cf=new Kh,lf=new sm,uf=new rf,jl=[],Kl=[],Ql=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=jl[r];if(s===void 0&&(s=new Float32Array(r),jl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oa(n,e){let t=Kl[e];t===void 0&&(t=new Int32Array(e),Kl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function y_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function T_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(yt(t,i))return;Jl.set(i),n.uniformMatrix2fv(this.addr,!1,Jl),wt(t,i)}}function E_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(yt(t,i))return;Zl.set(i),n.uniformMatrix3fv(this.addr,!1,Zl),wt(t,i)}}function M_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(yt(t,i))return;Ql.set(i),n.uniformMatrix4fv(this.addr,!1,Ql),wt(t,i)}}function C_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function P_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function I_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function D_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function L_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yl.compareFunction=$h,s=Yl):s=of,t.setTexture2D(e||s,r)}function N_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lf,r)}function B_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||uf,r)}function O_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cf,r)}function k_(n){switch(n){case 5126:return y_;case 35664:return w_;case 35665:return b_;case 35666:return S_;case 35674:return T_;case 35675:return E_;case 35676:return M_;case 5124:case 35670:return C_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return P_;case 5125:return I_;case 36294:return F_;case 36295:return U_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(n,e){n.uniform1fv(this.addr,e)}function V_(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function H_(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function G_(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function W_(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function X_(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function q_(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $_(n,e){n.uniform1iv(this.addr,e)}function Y_(n,e){n.uniform2iv(this.addr,e)}function j_(n,e){n.uniform3iv(this.addr,e)}function K_(n,e){n.uniform4iv(this.addr,e)}function Q_(n,e){n.uniform1uiv(this.addr,e)}function Z_(n,e){n.uniform2uiv(this.addr,e)}function J_(n,e){n.uniform3uiv(this.addr,e)}function ev(n,e){n.uniform4uiv(this.addr,e)}function tv(n,e,t){const i=this.cache,r=e.length,s=oa(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||of,s[a])}function nv(n,e,t){const i=this.cache,r=e.length,s=oa(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lf,s[a])}function iv(n,e,t){const i=this.cache,r=e.length,s=oa(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||uf,s[a])}function rv(n,e,t){const i=this.cache,r=e.length,s=oa(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||cf,s[a])}function sv(n){switch(n){case 5126:return z_;case 35664:return V_;case 35665:return H_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return $_;case 35667:case 35671:return Y_;case 35668:case 35672:return j_;case 35669:case 35673:return K_;case 5125:return Q_;case 36294:return Z_;case 36295:return J_;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}class av{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=k_(t.type)}}class ov{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sv(t.type)}}class cv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function eu(n,e){n.seq.push(e),n.map[e.id]=e}function lv(n,e,t){const i=n.name,r=i.length;for(Ja.lastIndex=0;;){const s=Ja.exec(i),a=Ja.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){eu(t,l===void 0?new av(o,n,e):new ov(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new cv(o),eu(t,h)),t=h}}}class Hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);lv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function tu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uv=37297;let hv=0;function fv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function dv(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===js&&t===Ys?i="LinearDisplayP3ToLinearSRGB":e===Ys&&t===js&&(i="LinearSRGBToLinearDisplayP3"),n){case Ti:case sa:return[i,"LinearTransferOETF"];case an:case Uc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function nu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fv(n.getShaderSource(e),a)}else return r}function pv(n,e){const t=dv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mv(n,e){let t;switch(e){case Ih:t="Linear";break;case Fh:t="Reinhard";break;case Uh:t="Cineon";break;case Mc:t="ACESFilmic";break;case Dh:t="AgX";break;case Lh:t="Neutral";break;case wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new H;function gv(){tt.getLuminanceCoefficients(Rs);const n=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function vv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Br(n){return n!==""}function iu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ru(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(n){return n.replace(yv,bv)}const wv=new Map;function bv(n,e){let t=Xe[e];if(t===void 0){const i=wv.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dc(t)}const Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(n){return n.replace(Sv,Tv)}function Tv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function au(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ev(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ep?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Mv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function Av(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case xp:e="ENVMAP_BLENDING_MIX";break;case yp:e="ENVMAP_BLENDING_ADD";break}return e}function Rv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Pv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ev(t),l=Mv(t),u=Cv(t),h=Av(t),f=Rv(t),d=_v(t),g=vv(s),_=r.createProgram();let p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`)):(p=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),m=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==vi?mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,pv("linearToOutputTexel",t.outputColorSpace),gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=dc(a),a=iu(a,t),a=ru(a,t),o=dc(o),o=iu(o,t),o=ru(o,t),a=su(a),o=su(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=b+p+a,T=b+m+o,D=tu(r,r.VERTEX_SHADER,x),C=tu(r,r.FRAGMENT_SHADER,T);r.attachShader(_,D),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(w){if(n.debug.checkShaderErrors){const A=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(D).trim(),$=r.getShaderInfoLog(C).trim();let B=!0,I=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,D,C);else{const q=nu(r,D,"vertex"),k=nu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+A+`
`+q+`
`+k)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(F===""||$==="")&&(I=!1);I&&(w.diagnostics={runnable:B,programLog:A,vertexShader:{log:F,prefix:p},fragmentShader:{log:$,prefix:m}})}r.deleteShader(D),r.deleteShader(C),P=new Hs(r,_),W=xv(r,_)}let P;this.getUniforms=function(){return P===void 0&&M(this),P};let W;this.getAttributes=function(){return W===void 0&&M(this),W};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,uv)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=C,this}let Iv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Uv(e),t.set(e,i)),i}}class Uv{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Dv(n,e,t,i,r,s,a){const o=new Qh,c=new Fv,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,w,A,F,$){const B=F.fog,I=$.geometry,q=v.isMeshStandardMaterial?F.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),ae=k&&k.mapping===ra?k.image.height:null,oe=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const fe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Ne=fe!==void 0?fe.length:0;let de=0;I.morphAttributes.position!==void 0&&(de=1),I.morphAttributes.normal!==void 0&&(de=2),I.morphAttributes.color!==void 0&&(de=3);let j,ee,ce,O;if(oe){const kt=An[oe];j=kt.vertexShader,ee=kt.fragmentShader}else j=v.vertexShader,ee=v.fragmentShader,c.update(v),ce=c.getVertexShaderID(v),O=c.getFragmentShaderID(v);const Q=n.getRenderTarget(),re=$.isInstancedMesh===!0,ge=$.isBatchedMesh===!0,Ce=!!v.map,xe=!!v.matcap,R=!!k,He=!!v.aoMap,ye=!!v.lightMap,Be=!!v.bumpMap,se=!!v.normalMap,Ye=!!v.displacementMap,Pe=!!v.emissiveMap,E=!!v.metalnessMap,y=!!v.roughnessMap,z=v.anisotropy>0,Z=v.clearcoat>0,ie=v.dispersion>0,J=v.iridescence>0,Ie=v.sheen>0,me=v.transmission>0,Se=z&&!!v.anisotropyMap,Je=Z&&!!v.clearcoatMap,le=Z&&!!v.clearcoatNormalMap,Te=Z&&!!v.clearcoatRoughnessMap,ze=J&&!!v.iridescenceMap,Ve=J&&!!v.iridescenceThicknessMap,Ee=Ie&&!!v.sheenColorMap,Qe=Ie&&!!v.sheenRoughnessMap,Ge=!!v.specularMap,ot=!!v.specularColorMap,U=!!v.specularIntensityMap,we=me&&!!v.transmissionMap,Y=me&&!!v.thicknessMap,ne=!!v.gradientMap,_e=!!v.alphaMap,be=v.alphaTest>0,Ze=!!v.alphaHash,vt=!!v.extensions;let Ot=vi;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const et={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:j,fragmentShader:ee,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:O,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ge,batchingColor:ge&&$._colorsTexture!==null,instancing:re,instancingColor:re&&$.instanceColor!==null,instancingMorph:re&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ti,alphaToCoverage:!!v.alphaToCoverage,map:Ce,matcap:xe,envMap:R,envMapMode:R&&k.mapping,envMapCubeUVHeight:ae,aoMap:He,lightMap:ye,bumpMap:Be,normalMap:se,displacementMap:d&&Ye,emissiveMap:Pe,normalMapObjectSpace:se&&v.normalMapType===Mp,normalMapTangentSpace:se&&v.normalMapType===Ep,metalnessMap:E,roughnessMap:y,anisotropy:z,anisotropyMap:Se,clearcoat:Z,clearcoatMap:Je,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:ie,iridescence:J,iridescenceMap:ze,iridescenceThicknessMap:Ve,sheen:Ie,sheenColorMap:Ee,sheenRoughnessMap:Qe,specularMap:Ge,specularColorMap:ot,specularIntensityMap:U,transmission:me,transmissionMap:we,thicknessMap:Y,gradientMap:ne,opaque:v.transparent===!1&&v.blending===hr&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:be,alphaHash:Ze,combine:v.combine,mapUv:Ce&&p(v.map.channel),aoMapUv:He&&p(v.aoMap.channel),lightMapUv:ye&&p(v.lightMap.channel),bumpMapUv:Be&&p(v.bumpMap.channel),normalMapUv:se&&p(v.normalMap.channel),displacementMapUv:Ye&&p(v.displacementMap.channel),emissiveMapUv:Pe&&p(v.emissiveMap.channel),metalnessMapUv:E&&p(v.metalnessMap.channel),roughnessMapUv:y&&p(v.roughnessMap.channel),anisotropyMapUv:Se&&p(v.anisotropyMap.channel),clearcoatMapUv:Je&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&p(v.sheenRoughnessMap.channel),specularMapUv:Ge&&p(v.specularMap.channel),specularColorMapUv:ot&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:we&&p(v.transmissionMap.channel),thicknessMapUv:Y&&p(v.thicknessMap.channel),alphaMapUv:_e&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(se||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!I.attributes.uv&&(Ce||_e),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:de,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wn,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function b(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)w.push(A),w.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(x(w,v),T(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function T(v,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){const w=_[v.type];let A;if(w){const F=An[w];A=qr.clone(F.uniforms)}else A=v.uniforms;return A}function C(v,w){let A;for(let F=0,$=u.length;F<$;F++){const B=u[F];if(B.cacheKey===w){A=B,++A.usedTimes;break}}return A===void 0&&(A=new Pv(n,w,v,s),u.push(A)),A}function M(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),v.destroy()}}function P(v){c.remove(v)}function W(){c.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:D,acquireProgram:C,releaseProgram:M,releaseShaderCache:P,programs:u,dispose:W}}function Lv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Nv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ou(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,d,g,_,p){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function o(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):t.push(m)}function c(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function l(h,f){t.length>1&&t.sort(h||Nv),i.length>1&&i.sort(f||ou),r.length>1&&r.sort(f||ou)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Bv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new cu,n.set(i,[a])):r>=s.length?(a=new cu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ov(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new je};break;case"SpotLight":t={position:new H,direction:new H,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function kv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zv=0;function Vv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hv(n){const e=new Ov,t=kv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const r=new H,s=new mt,a=new mt;function o(l){let u=0,h=0,f=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,b=0,x=0,T=0,D=0,C=0,M=0;l.sort(Vv);for(let W=0,v=l.length;W<v;W++){const w=l[W],A=w.color,F=w.intensity,$=w.distance,B=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=A.r*F,h+=A.g*F,f+=A.b*F;else if(w.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(w.sh.coefficients[I],F);M++}else if(w.isDirectionalLight){const I=e.get(w);if(I.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,k=t.get(w);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=B,i.directionalShadowMatrix[d]=w.shadow.matrix,b++}i.directional[d]=I,d++}else if(w.isSpotLight){const I=e.get(w);I.position.setFromMatrixPosition(w.matrixWorld),I.color.copy(A).multiplyScalar(F),I.distance=$,I.coneCos=Math.cos(w.angle),I.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),I.decay=w.decay,i.spot[_]=I;const q=w.shadow;if(w.map&&(i.spotLightMap[D]=w.map,D++,q.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[_]=q.matrix,w.castShadow){const k=t.get(w);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=B,T++}_++}else if(w.isRectAreaLight){const I=e.get(w);I.color.copy(A).multiplyScalar(F),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=I,p++}else if(w.isPointLight){const I=e.get(w);if(I.color.copy(w.color).multiplyScalar(w.intensity),I.distance=w.distance,I.decay=w.decay,w.castShadow){const q=w.shadow,k=t.get(w);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=w.shadow.matrix,x++}i.point[g]=I,g++}else if(w.isHemisphereLight){const I=e.get(w);I.skyColor.copy(w.color).multiplyScalar(F),I.groundColor.copy(w.groundColor).multiplyScalar(F),i.hemi[m]=I,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==b||P.numPointShadows!==x||P.numSpotShadows!==T||P.numSpotMaps!==D||P.numLightProbes!==M)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=T+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=b,P.numPointShadows=x,P.numSpotShadows=T,P.numSpotMaps=D,P.numLightProbes=M,i.version=zv++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const x=l[m];if(x.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),h++}else if(x.isSpotLight){const T=i.spot[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:i}}function lu(n){const e=new Hv(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Gv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new lu(n),e.set(r,[o])):s>=a.length?(o=new lu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Wv extends aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xv extends aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yv(n,e,t){let i=new Nc;const r=new $e,s=new $e,a=new pt,o=new Wv({depthPacking:Tp}),c=new Xv,l={},u=t.maxTextureSize,h={[yi]:Ht,[Ht]:yi,[Wn]:Wn},f=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:qv,fragmentShader:$v}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ei;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let m=this.type;this.render=function(C,M,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const W=n.getRenderTarget(),v=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),A=n.state;A.setBlending(jn),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const F=m!==zn&&this.type===zn,$=m===zn&&this.type!==zn;for(let B=0,I=C.length;B<I;B++){const q=C[B],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ae=k.getFrameExtents();if(r.multiply(ae),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,k.mapSize.y=s.y)),k.map===null||F===!0||$===!0){const fe=this.type!==zn?{minFilter:un,magFilter:un}:{};k.map!==null&&k.map.dispose(),k.map=new bn(r.x,r.y,fe),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const oe=k.getViewportCount();for(let fe=0;fe<oe;fe++){const Ne=k.getViewport(fe);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),A.viewport(a),k.updateMatrices(q,fe),i=k.getFrustum(),T(M,P,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===zn&&b(k,P),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(W,v,w)};function b(C,M){const P=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new bn(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(M,null,P,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(M,null,P,d,_,null)}function x(C,M,P,W){let v=null;const w=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)v=w;else if(v=P.isPointLight===!0?c:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const A=v.uuid,F=M.uuid;let $=l[A];$===void 0&&($={},l[A]=$);let B=$[F];B===void 0&&(B=v.clone(),$[F]=B,M.addEventListener("dispose",D)),v=B}if(v.visible=M.visible,v.wireframe=M.wireframe,W===zn?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:h[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const A=n.properties.get(v);A.light=P}return v}function T(C,M,P,W,v){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===zn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const F=e.update(C),$=C.material;if(Array.isArray($)){const B=F.groups;for(let I=0,q=B.length;I<q;I++){const k=B[I],ae=$[k.materialIndex];if(ae&&ae.visible){const oe=x(C,ae,W,v);C.onBeforeShadow(n,C,M,P,F,oe,k),n.renderBufferDirect(P,null,F,oe,C,k),C.onAfterShadow(n,C,M,P,F,oe,k)}}}else if($.visible){const B=x(C,$,W,v);C.onBeforeShadow(n,C,M,P,F,B,null),n.renderBufferDirect(P,null,F,B,C,null),C.onAfterShadow(n,C,M,P,F,B,null)}}const A=C.children;for(let F=0,$=A.length;F<$;F++)T(A[F],M,P,W,v)}function D(C){C.target.removeEventListener("dispose",D);for(const P in l){const W=l[P],v=C.target.uuid;v in W&&(W[v].dispose(),delete W[v])}}}const jv={[Po]:Io,[Fo]:Lo,[Uo]:No,[pr]:Do,[Io]:Po,[Lo]:Fo,[No]:Uo,[Do]:pr};function Kv(n){function e(){let U=!1;const we=new pt;let Y=null;const ne=new pt(0,0,0,0);return{setMask:function(_e){Y!==_e&&!U&&(n.colorMask(_e,_e,_e,_e),Y=_e)},setLocked:function(_e){U=_e},setClear:function(_e,be,Ze,vt,Ot){Ot===!0&&(_e*=vt,be*=vt,Ze*=vt),we.set(_e,be,Ze,vt),ne.equals(we)===!1&&(n.clearColor(_e,be,Ze,vt),ne.copy(we))},reset:function(){U=!1,Y=null,ne.set(-1,0,0,0)}}}function t(){let U=!1,we=!1,Y=null,ne=null,_e=null;return{setReversed:function(be){we=be},setTest:function(be){be?ce(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(be){Y!==be&&!U&&(n.depthMask(be),Y=be)},setFunc:function(be){if(we&&(be=jv[be]),ne!==be){switch(be){case Po:n.depthFunc(n.NEVER);break;case Io:n.depthFunc(n.ALWAYS);break;case Fo:n.depthFunc(n.LESS);break;case pr:n.depthFunc(n.LEQUAL);break;case Uo:n.depthFunc(n.EQUAL);break;case Do:n.depthFunc(n.GEQUAL);break;case Lo:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=be}},setLocked:function(be){U=be},setClear:function(be){_e!==be&&(n.clearDepth(be),_e=be)},reset:function(){U=!1,Y=null,ne=null,_e=null}}}function i(){let U=!1,we=null,Y=null,ne=null,_e=null,be=null,Ze=null,vt=null,Ot=null;return{setTest:function(et){U||(et?ce(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(et){we!==et&&!U&&(n.stencilMask(et),we=et)},setFunc:function(et,kt,Dn){(Y!==et||ne!==kt||_e!==Dn)&&(n.stencilFunc(et,kt,Dn),Y=et,ne=kt,_e=Dn)},setOp:function(et,kt,Dn){(be!==et||Ze!==kt||vt!==Dn)&&(n.stencilOp(et,kt,Dn),be=et,Ze=kt,vt=Dn)},setLocked:function(et){U=et},setClear:function(et){Ot!==et&&(n.clearStencil(et),Ot=et)},reset:function(){U=!1,we=null,Y=null,ne=null,_e=null,be=null,Ze=null,vt=null,Ot=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,b=null,x=null,T=null,D=null,C=new je(0,0,0),M=0,P=!1,W=null,v=null,w=null,A=null,F=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,I=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=I>=1):q.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=I>=2);let k=null,ae={};const oe=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),Ne=new pt().fromArray(oe),de=new pt().fromArray(fe);function j(U,we,Y,ne){const _e=new Uint8Array(4),be=n.createTexture();n.bindTexture(U,be),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<Y;Ze++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(we+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return be}const ee={};ee[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),s.setFunc(pr),ye(!1),Be(_l),ce(n.CULL_FACE),R(jn);function ce(U){l[U]!==!0&&(n.enable(U),l[U]=!0)}function O(U){l[U]!==!1&&(n.disable(U),l[U]=!1)}function Q(U,we){return u[U]!==we?(n.bindFramebuffer(U,we),u[U]=we,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=we),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=we),!0):!1}function re(U,we){let Y=f,ne=!1;if(U){Y=h.get(we),Y===void 0&&(Y=[],h.set(we,Y));const _e=U.textures;if(Y.length!==_e.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let be=0,Ze=_e.length;be<Ze;be++)Y[be]=n.COLOR_ATTACHMENT0+be;Y.length=_e.length,ne=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ne=!0);ne&&n.drawBuffers(Y)}function ge(U){return d!==U?(n.useProgram(U),d=U,!0):!1}const Ce={[Li]:n.FUNC_ADD,[np]:n.FUNC_SUBTRACT,[ip]:n.FUNC_REVERSE_SUBTRACT};Ce[rp]=n.MIN,Ce[sp]=n.MAX;const xe={[ap]:n.ZERO,[op]:n.ONE,[cp]:n.SRC_COLOR,[Ao]:n.SRC_ALPHA,[pp]:n.SRC_ALPHA_SATURATE,[fp]:n.DST_COLOR,[up]:n.DST_ALPHA,[lp]:n.ONE_MINUS_SRC_COLOR,[Ro]:n.ONE_MINUS_SRC_ALPHA,[dp]:n.ONE_MINUS_DST_COLOR,[hp]:n.ONE_MINUS_DST_ALPHA,[mp]:n.CONSTANT_COLOR,[gp]:n.ONE_MINUS_CONSTANT_COLOR,[_p]:n.CONSTANT_ALPHA,[vp]:n.ONE_MINUS_CONSTANT_ALPHA};function R(U,we,Y,ne,_e,be,Ze,vt,Ot,et){if(U===jn){g===!0&&(O(n.BLEND),g=!1);return}if(g===!1&&(ce(n.BLEND),g=!0),U!==tp){if(U!==_||et!==P){if((p!==Li||x!==Li)&&(n.blendEquation(n.FUNC_ADD),p=Li,x=Li),et)switch(U){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zi:n.blendFunc(n.ONE,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,b=null,T=null,D=null,C.set(0,0,0),M=0,_=U,P=et}return}_e=_e||we,be=be||Y,Ze=Ze||ne,(we!==p||_e!==x)&&(n.blendEquationSeparate(Ce[we],Ce[_e]),p=we,x=_e),(Y!==m||ne!==b||be!==T||Ze!==D)&&(n.blendFuncSeparate(xe[Y],xe[ne],xe[be],xe[Ze]),m=Y,b=ne,T=be,D=Ze),(vt.equals(C)===!1||Ot!==M)&&(n.blendColor(vt.r,vt.g,vt.b,Ot),C.copy(vt),M=Ot),_=U,P=!1}function He(U,we){U.side===Wn?O(n.CULL_FACE):ce(n.CULL_FACE);let Y=U.side===Ht;we&&(Y=!Y),ye(Y),U.blending===hr&&U.transparent===!1?R(jn):R(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ne=U.stencilWrite;a.setTest(ne),ne&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function ye(U){W!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),W=U)}function Be(U){U!==Zd?(ce(n.CULL_FACE),U!==v&&(U===_l?n.cullFace(n.BACK):U===Jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),v=U}function se(U){U!==w&&(B&&n.lineWidth(U),w=U)}function Ye(U,we,Y){U?(ce(n.POLYGON_OFFSET_FILL),(A!==we||F!==Y)&&(n.polygonOffset(we,Y),A=we,F=Y)):O(n.POLYGON_OFFSET_FILL)}function Pe(U){U?ce(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function E(U){U===void 0&&(U=n.TEXTURE0+$-1),k!==U&&(n.activeTexture(U),k=U)}function y(U,we,Y){Y===void 0&&(k===null?Y=n.TEXTURE0+$-1:Y=k);let ne=ae[Y];ne===void 0&&(ne={type:void 0,texture:void 0},ae[Y]=ne),(ne.type!==U||ne.texture!==we)&&(k!==Y&&(n.activeTexture(Y),k=Y),n.bindTexture(U,we||ee[U]),ne.type=U,ne.texture=we)}function z(){const U=ae[k];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(U){Ne.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function Ee(U){de.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),de.copy(U))}function Qe(U,we){let Y=c.get(we);Y===void 0&&(Y=new WeakMap,c.set(we,Y));let ne=Y.get(U);ne===void 0&&(ne=n.getUniformBlockIndex(we,U.name),Y.set(U,ne))}function Ge(U,we){const ne=c.get(we).get(U);o.get(we)!==ne&&(n.uniformBlockBinding(we,ne,U.__bindingPointIndex),o.set(we,ne))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},k=null,ae={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,b=null,x=null,T=null,D=null,C=new je(0,0,0),M=0,P=!1,W=null,v=null,w=null,A=null,F=null,Ne.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ce,disable:O,bindFramebuffer:Q,drawBuffers:re,useProgram:ge,setBlending:R,setMaterial:He,setFlipSided:ye,setCullFace:Be,setLineWidth:se,setPolygonOffset:Ye,setScissorTest:Pe,activeTexture:E,bindTexture:y,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:Te,texImage3D:ze,updateUBOMapping:Qe,uniformBlockBinding:Ge,texStorage2D:Je,texStorage3D:le,texSubImage2D:J,texSubImage3D:Ie,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:Ve,viewport:Ee,reset:ot}}function uu(n,e,t,i){const r=Qv(i);switch(t){case zh:return n*e;case Hh:return n*e;case Gh:return n*e*2;case Wh:return n*e/r.components*r.byteLength;case Pc:return n*e/r.components*r.byteLength;case Xh:return n*e*2/r.components*r.byteLength;case Ic:return n*e*2/r.components*r.byteLength;case Vh:return n*e*3/r.components*r.byteLength;case yn:return n*e*4/r.components*r.byteLength;case Fc:return n*e*4/r.components*r.byteLength;case Ns:case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Os:case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Wo:return Math.max(n,16)*Math.max(e,8)/4;case Vo:case Go:return Math.max(n,8)*Math.max(e,8)/2;case Xo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zs:case cc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qh:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qv(n){switch(n){case Zn:case Bh:return{byteLength:1,components:1};case Wr:case Oh:case Kn:return{byteLength:2,components:1};case Ac:case Rc:return{byteLength:2,components:4};case Vi:case Cc:case Xn:return{byteLength:4,components:1};case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Zv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return d?new OffscreenCanvas(E,y):Qs("canvas")}function _(E,y,z){let Z=1;const ie=Pe(E);if((ie.width>z||ie.height>z)&&(Z=z/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor(Z*ie.width),Ie=Math.floor(Z*ie.height);h===void 0&&(h=g(J,Ie));const me=y?g(J,Ie):h;return me.width=J,me.height=Ie,me.getContext("2d").drawImage(E,0,0,J,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Ie+")."),me}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==un&&E.minFilter!==ln}function m(E){n.generateMipmap(E)}function b(E,y,z,Z,ie=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=y;if(y===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),y===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),y===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),y===n.RGBA){const Ie=ie?$s:tt.getTransfer(Z);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=Ie===ct?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(E,y){let z;return E?y===null||y===Vi||y===_r?z=n.DEPTH24_STENCIL8:y===Xn?z=n.DEPTH32F_STENCIL8:y===Wr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Vi||y===_r?z=n.DEPTH_COMPONENT24:y===Xn?z=n.DEPTH_COMPONENT32F:y===Wr&&(z=n.DEPTH_COMPONENT16),z}function T(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==un&&E.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function D(E){const y=E.target;y.removeEventListener("dispose",D),M(y),y.isVideoTexture&&u.delete(y)}function C(E){const y=E.target;y.removeEventListener("dispose",C),W(y)}function M(E){const y=i.get(E);if(y.__webglInit===void 0)return;const z=E.source,Z=f.get(z);if(Z){const ie=Z[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(E),Object.keys(Z).length===0&&f.delete(z)}i.remove(E)}function P(E){const y=i.get(E);n.deleteTexture(y.__webglTexture);const z=E.source,Z=f.get(z);delete Z[y.__cacheKey],a.memory.textures--}function W(E){const y=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ie=0;ie<y.__webglFramebuffer[Z].length;ie++)n.deleteFramebuffer(y.__webglFramebuffer[Z][ie]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=E.textures;for(let Z=0,ie=z.length;Z<ie;Z++){const J=i.get(z[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(z[Z])}i.remove(E)}let v=0;function w(){v=0}function A(){const E=v;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),v+=1,E}function F(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function $(E,y){const z=i.get(E);if(E.isVideoTexture&&se(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(z,E,y);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function B(E,y){const z=i.get(E);if(E.version>0&&z.__version!==E.version){de(z,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function I(E,y){const z=i.get(E);if(E.version>0&&z.__version!==E.version){de(z,E,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function q(E,y){const z=i.get(E);if(E.version>0&&z.__version!==E.version){j(z,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}const k={[ko]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[zo]:n.MIRRORED_REPEAT},ae={[un]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[cs]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Ma]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},oe={[Cp]:n.NEVER,[Up]:n.ALWAYS,[Ap]:n.LESS,[$h]:n.LEQUAL,[Rp]:n.EQUAL,[Fp]:n.GEQUAL,[Pp]:n.GREATER,[Ip]:n.NOTEQUAL};function fe(E,y){if(y.type===Xn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ln||y.magFilter===Ma||y.magFilter===cs||y.magFilter===mi||y.minFilter===ln||y.minFilter===Ma||y.minFilter===cs||y.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,k[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,k[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,k[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ae[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ae[y.minFilter]),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==cs&&y.minFilter!==mi||y.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ne(E,y){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",D));const Z=y.source;let ie=f.get(Z);ie===void 0&&(ie={},f.set(Z,ie));const J=F(y);if(J!==E.__cacheKey){ie[J]===void 0&&(ie[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[J].usedTimes++;const Ie=ie[E.__cacheKey];Ie!==void 0&&(ie[E.__cacheKey].usedTimes--,Ie.usedTimes===0&&P(y)),E.__cacheKey=J,E.__webglTexture=ie[J].texture}return z}function de(E,y,z){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);const ie=Ne(E,y),J=y.source;t.bindTexture(Z,E.__webglTexture,n.TEXTURE0+z);const Ie=i.get(J);if(J.version!==Ie.__version||ie===!0){t.activeTexture(n.TEXTURE0+z);const me=tt.getPrimaries(tt.workingColorSpace),Se=y.colorSpace===pi?null:tt.getPrimaries(y.colorSpace),Je=y.colorSpace===pi||me===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let le=_(y.image,!1,r.maxTextureSize);le=Ye(y,le);const Te=s.convert(y.format,y.colorSpace),ze=s.convert(y.type);let Ve=b(y.internalFormat,Te,ze,y.colorSpace,y.isVideoTexture);fe(Z,y);let Ee;const Qe=y.mipmaps,Ge=y.isVideoTexture!==!0,ot=Ie.__version===void 0||ie===!0,U=J.dataReady,we=T(y,le);if(y.isDepthTexture)Ve=x(y.format===vr,y.type),ot&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Ve,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ve,le.width,le.height,0,Te,ze,null));else if(y.isDataTexture)if(Qe.length>0){Ge&&ot&&t.texStorage2D(n.TEXTURE_2D,we,Ve,Qe[0].width,Qe[0].height);for(let Y=0,ne=Qe.length;Y<ne;Y++)Ee=Qe[Y],Ge?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,Te,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,Y,Ve,Ee.width,Ee.height,0,Te,ze,Ee.data);y.generateMipmaps=!1}else Ge?(ot&&t.texStorage2D(n.TEXTURE_2D,we,Ve,le.width,le.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Te,ze,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,le.width,le.height,0,Te,ze,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ve,Qe[0].width,Qe[0].height,le.depth);for(let Y=0,ne=Qe.length;Y<ne;Y++)if(Ee=Qe[Y],y.format!==yn)if(Te!==null)if(Ge){if(U)if(y.layerUpdates.size>0){const _e=uu(Ee.width,Ee.height,y.format,y.type);for(const be of y.layerUpdates){const Ze=Ee.data.subarray(be*_e/Ee.data.BYTES_PER_ELEMENT,(be+1)*_e/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,be,Ee.width,Ee.height,1,Te,Ze,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,le.depth,Te,Ee.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ve,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,le.depth,Te,ze,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ve,Ee.width,Ee.height,le.depth,0,Te,ze,Ee.data)}else{Ge&&ot&&t.texStorage2D(n.TEXTURE_2D,we,Ve,Qe[0].width,Qe[0].height);for(let Y=0,ne=Qe.length;Y<ne;Y++)Ee=Qe[Y],y.format!==yn?Te!==null?Ge?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Ve,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,Te,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,Y,Ve,Ee.width,Ee.height,0,Te,ze,Ee.data)}else if(y.isDataArrayTexture)if(Ge){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ve,le.width,le.height,le.depth),U)if(y.layerUpdates.size>0){const Y=uu(le.width,le.height,y.format,y.type);for(const ne of y.layerUpdates){const _e=le.data.subarray(ne*Y/le.data.BYTES_PER_ELEMENT,(ne+1)*Y/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,Te,ze,_e)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,ze,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,le.width,le.height,le.depth,0,Te,ze,le.data);else if(y.isData3DTexture)Ge?(ot&&t.texStorage3D(n.TEXTURE_3D,we,Ve,le.width,le.height,le.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,ze,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,le.width,le.height,le.depth,0,Te,ze,le.data);else if(y.isFramebufferTexture){if(ot)if(Ge)t.texStorage2D(n.TEXTURE_2D,we,Ve,le.width,le.height);else{let Y=le.width,ne=le.height;for(let _e=0;_e<we;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ve,Y,ne,0,Te,ze,null),Y>>=1,ne>>=1}}else if(Qe.length>0){if(Ge&&ot){const Y=Pe(Qe[0]);t.texStorage2D(n.TEXTURE_2D,we,Ve,Y.width,Y.height)}for(let Y=0,ne=Qe.length;Y<ne;Y++)Ee=Qe[Y],Ge?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Te,ze,Ee):t.texImage2D(n.TEXTURE_2D,Y,Ve,Te,ze,Ee);y.generateMipmaps=!1}else if(Ge){if(ot){const Y=Pe(le);t.texStorage2D(n.TEXTURE_2D,we,Ve,Y.width,Y.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,ze,le)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Te,ze,le);p(y)&&m(Z),Ie.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function j(E,y,z){if(y.image.length!==6)return;const Z=Ne(E,y),ie=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);const J=i.get(ie);if(ie.version!==J.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const Ie=tt.getPrimaries(tt.workingColorSpace),me=y.colorSpace===pi?null:tt.getPrimaries(y.colorSpace),Se=y.colorSpace===pi||Ie===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Je=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let ne=0;ne<6;ne++)!Je&&!le?Te[ne]=_(y.image[ne],!0,r.maxCubemapSize):Te[ne]=le?y.image[ne].image:y.image[ne],Te[ne]=Ye(y,Te[ne]);const ze=Te[0],Ve=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type),Qe=b(y.internalFormat,Ve,Ee,y.colorSpace),Ge=y.isVideoTexture!==!0,ot=J.__version===void 0||Z===!0,U=ie.dataReady;let we=T(y,ze);fe(n.TEXTURE_CUBE_MAP,y);let Y;if(Je){Ge&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Qe,ze.width,ze.height);for(let ne=0;ne<6;ne++){Y=Te[ne].mipmaps;for(let _e=0;_e<Y.length;_e++){const be=Y[_e];y.format!==yn?Ve!==null?Ge?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,be.width,be.height,Ve,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,Qe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,be.width,be.height,Ve,Ee,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,Qe,be.width,be.height,0,Ve,Ee,be.data)}}}else{if(Y=y.mipmaps,Ge&&ot){Y.length>0&&we++;const ne=Pe(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){Ge?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te[ne].width,Te[ne].height,Ve,Ee,Te[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Qe,Te[ne].width,Te[ne].height,0,Ve,Ee,Te[ne].data);for(let _e=0;_e<Y.length;_e++){const Ze=Y[_e].image[ne].image;Ge?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Ze.width,Ze.height,Ve,Ee,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,Qe,Ze.width,Ze.height,0,Ve,Ee,Ze.data)}}else{Ge?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ve,Ee,Te[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Qe,Ve,Ee,Te[ne]);for(let _e=0;_e<Y.length;_e++){const be=Y[_e];Ge?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Ve,Ee,be.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,Qe,Ve,Ee,be.image[ne])}}}p(y)&&m(n.TEXTURE_CUBE_MAP),J.__version=ie.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ee(E,y,z,Z,ie,J){const Ie=s.convert(z.format,z.colorSpace),me=s.convert(z.type),Se=b(z.internalFormat,Ie,me,z.colorSpace);if(!i.get(y).__hasExternalTextures){const le=Math.max(1,y.width>>J),Te=Math.max(1,y.height>>J);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,Se,le,Te,y.depth,0,Ie,me,null):t.texImage2D(ie,J,Se,le,Te,0,Ie,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Be(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ie,i.get(z).__webglTexture,0,ye(y)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ie,i.get(z).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(E,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer){const Z=y.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,J=x(y.stencilBuffer,ie),Ie=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=ye(y);Be(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,J,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,J,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,E)}else{const Z=y.textures;for(let ie=0;ie<Z.length;ie++){const J=Z[ie],Ie=s.convert(J.format,J.colorSpace),me=s.convert(J.type),Se=b(J.internalFormat,Ie,me,J.colorSpace),Je=ye(y);z&&Be(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Se,y.width,y.height):Be(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,Se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Se,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const Z=i.get(y.depthTexture).__webglTexture,ie=ye(y);if(y.depthTexture.format===fr)Be(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===vr)Be(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Q(E){const y=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=Z}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");O(y.__webglFramebuffer,E)}else if(z){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),ce(y.__webglDepthbuffer[Z],E,!1);else{const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ce(y.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(E,y,z){const Z=i.get(E);y!==void 0&&ee(Z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Q(E)}function ge(E){const y=E.texture,z=i.get(E),Z=i.get(y);E.addEventListener("dispose",C);const ie=E.textures,J=E.isWebGLCubeRenderTarget===!0,Ie=ie.length>1;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let Se=0;Se<y.mipmaps.length;Se++)z.__webglFramebuffer[me][Se]=n.createFramebuffer()}else z.__webglFramebuffer[me]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<y.mipmaps.length;me++)z.__webglFramebuffer[me]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let me=0,Se=ie.length;me<Se;me++){const Je=i.get(ie[me]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Be(E)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){const Se=ie[me];z.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[me]);const Je=s.convert(Se.format,Se.colorSpace),le=s.convert(Se.type),Te=b(Se.internalFormat,Je,le,Se.colorSpace,E.isXRRenderTarget===!0),ze=ye(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Te,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,z.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),fe(n.TEXTURE_CUBE_MAP,y);for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)ee(z.__webglFramebuffer[me][Se],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else ee(z.__webglFramebuffer[me],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let me=0,Se=ie.length;me<Se;me++){const Je=ie[me],le=i.get(Je);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),fe(n.TEXTURE_2D,Je),ee(z.__webglFramebuffer,E,Je,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),p(Je)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(me=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Z.__webglTexture),fe(me,y),y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)ee(z.__webglFramebuffer[Se],E,y,n.COLOR_ATTACHMENT0,me,Se);else ee(z.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,me,0);p(y)&&m(me),t.unbindTexture()}E.depthBuffer&&Q(E)}function Ce(E){const y=E.textures;for(let z=0,Z=y.length;z<Z;z++){const ie=y[z];if(p(ie)){const J=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ie=i.get(ie).__webglTexture;t.bindTexture(J,Ie),m(J),t.unbindTexture()}}}const xe=[],R=[];function He(E){if(E.samples>0){if(Be(E)===!1){const y=E.textures,z=E.width,Z=E.height;let ie=n.COLOR_BUFFER_BIT;const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(E),me=y.length>1;if(me)for(let Se=0;Se<y.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Se=0;Se<y.length;Se++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Se]);const Je=i.get(y[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,ie,n.NEAREST),c===!0&&(xe.length=0,R.length=0,xe.push(n.COLOR_ATTACHMENT0+Se),E.depthBuffer&&E.resolveDepthBuffer===!1&&(xe.push(J),R.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<y.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Se]);const Je=i.get(y[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ye(E){return Math.min(r.maxSamples,E.samples)}function Be(E){const y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function se(E){const y=a.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function Ye(E,y){const z=E.colorSpace,Z=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Ti&&z!==pi&&(tt.getTransfer(z)===ct?(Z!==yn||ie!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=A,this.resetTextureUnits=w,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=I,this.setTextureCube=q,this.rebindTextures=re,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Be}function Jv(n,e){function t(i,r=pi){let s;const a=tt.getTransfer(r);if(i===Zn)return n.UNSIGNED_BYTE;if(i===Ac)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return n.BYTE;if(i===Oh)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===Cc)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===zh)return n.ALPHA;if(i===Vh)return n.RGB;if(i===yn)return n.RGBA;if(i===Hh)return n.LUMINANCE;if(i===Gh)return n.LUMINANCE_ALPHA;if(i===fr)return n.DEPTH_COMPONENT;if(i===vr)return n.DEPTH_STENCIL;if(i===Wh)return n.RED;if(i===Pc)return n.RED_INTEGER;if(i===Xh)return n.RG;if(i===Ic)return n.RG_INTEGER;if(i===Fc)return n.RGBA_INTEGER;if(i===Ns||i===Bs||i===Os||i===ks)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vo||i===Ho||i===Go||i===Wo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ho)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xo||i===qo||i===$o)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xo||i===qo)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$o)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yo||i===jo||i===Ko||i===Qo||i===Zo||i===Jo||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===ac||i===oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ko)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zs||i===cc||i===lc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zs)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qh||i===uc||i===hc||i===fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ex extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Lt({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sx extends br{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new rx,p=t.getContextAttributes();let m=null,b=null;const x=[],T=[],D=new $e;let C=null;const M=new on;M.layers.enable(1),M.viewport=new pt;const P=new on;P.layers.enable(2),P.viewport=new pt;const W=[M,P],v=new ex;v.layers.enable(1),v.layers.enable(2);let w=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=x[j];return ee===void 0&&(ee=new eo,x[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=x[j];return ee===void 0&&(ee=new eo,x[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=x[j];return ee===void 0&&(ee=new eo,x[j]=ee),ee.getHandSpace()};function F(j){const ee=T.indexOf(j.inputSource);if(ee===-1)return;const ce=x[ee];ce!==void 0&&(ce.update(j.inputSource,j.frame,l||a),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",B);for(let j=0;j<x.length;j++){const ee=T[j];ee!==null&&(T[j]=null,x[j].disconnect(ee))}w=null,A=null,_.reset(),e.setRenderTarget(m),d=null,f=null,h=null,r=null,b=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",$),r.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new bn(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ce=null,O=null;p.depth&&(O=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?vr:fr,ce=p.stencil?_r:Vi);const Q={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Q),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new bn(f.textureWidth,f.textureHeight,{format:yn,type:Zn,depthTexture:new af(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(j){for(let ee=0;ee<j.removed.length;ee++){const ce=j.removed[ee],O=T.indexOf(ce);O>=0&&(T[O]=null,x[O].disconnect(ce))}for(let ee=0;ee<j.added.length;ee++){const ce=j.added[ee];let O=T.indexOf(ce);if(O===-1){for(let re=0;re<x.length;re++)if(re>=T.length){T.push(ce),O=re;break}else if(T[re]===null){T[re]=ce,O=re;break}if(O===-1)break}const Q=x[O];Q&&Q.connect(ce)}}const I=new H,q=new H;function k(j,ee,ce){I.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);const O=I.distanceTo(q),Q=ee.projectionMatrix.elements,re=ce.projectionMatrix.elements,ge=Q[14]/(Q[10]-1),Ce=Q[14]/(Q[10]+1),xe=(Q[9]+1)/Q[5],R=(Q[9]-1)/Q[5],He=(Q[8]-1)/Q[0],ye=(re[8]+1)/re[0],Be=ge*He,se=ge*ye,Ye=O/(-He+ye),Pe=Ye*-He;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Pe),j.translateZ(Ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Q[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const E=ge+Ye,y=Ce+Ye,z=Be-Pe,Z=se+(O-Pe),ie=xe*Ce/y*E,J=R*Ce/y*E;j.projectionMatrix.makePerspective(z,Z,ie,J,E,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ae(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ee=j.near,ce=j.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),v.near=P.near=M.near=ee,v.far=P.far=M.far=ce,(w!==v.near||A!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,A=v.far);const O=j.parent,Q=v.cameras;ae(v,O);for(let re=0;re<Q.length;re++)ae(Q[re],O);Q.length===2?k(v,M,P):v.projectionMatrix.copy(M.projectionMatrix),oe(j,v,O)};function oe(j,ee,ce){ce===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let fe=null;function Ne(j,ee){if(u=ee.getViewerPose(l||a),g=ee,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let O=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,O=!0);for(let re=0;re<ce.length;re++){const ge=ce[re];let Ce=null;if(d!==null)Ce=d.getViewport(ge);else{const R=h.getViewSubImage(f,ge);Ce=R.viewport,re===0&&(e.setRenderTargetTextures(b,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(b))}let xe=W[re];xe===void 0&&(xe=new on,xe.layers.enable(re),xe.viewport=new pt,W[re]=xe),xe.matrix.fromArray(ge.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(ge.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),re===0&&(v.matrix.copy(xe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),O===!0&&v.cameras.push(xe)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const re=h.getDepthInformation(ce[0]);re&&re.isValid&&re.texture&&_.init(e,re,r.renderState)}}for(let ce=0;ce<x.length;ce++){const O=T[ce],Q=x[ce];O!==null&&Q!==void 0&&Q.update(O,ee,l||a)}fe&&fe(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const de=new sf;de.setAnimationLoop(Ne),this.setAnimationLoop=function(j){fe=j},this.dispose=function(){}}}const Ii=new Jn,ax=new mt;function ox(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,tf(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,b,x,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,T)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,b,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ht&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ht&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m),x=b.envMap,T=b.envMapRotation;x&&(p.envMap.value=x,Ii.copy(T),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),p.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Ii)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ht&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cx(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){const T=x.program;i.uniformBlockBinding(b,T)}function l(b,x){let T=r[b.id];T===void 0&&(g(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",p));const D=x.program;i.updateUBOMapping(b,D);const C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function u(b){const x=h();b.__bindingPointIndex=x;const T=n.createBuffer(),D=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,T),T}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],T=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,M=T.length;C<M;C++){const P=Array.isArray(T[C])?T[C]:[T[C]];for(let W=0,v=P.length;W<v;W++){const w=P[W];if(d(w,C,W,D)===!0){const A=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let B=0;B<F.length;B++){const I=F[B],q=_(I);typeof I=="number"||typeof I=="boolean"?(w.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,A+$,w.__data)):I.isMatrix3?(w.__data[0]=I.elements[0],w.__data[1]=I.elements[1],w.__data[2]=I.elements[2],w.__data[3]=0,w.__data[4]=I.elements[3],w.__data[5]=I.elements[4],w.__data[6]=I.elements[5],w.__data[7]=0,w.__data[8]=I.elements[6],w.__data[9]=I.elements[7],w.__data[10]=I.elements[8],w.__data[11]=0):(I.toArray(w.__data,$),$+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,x,T,D){const C=b.value,M=x+"_"+T;if(D[M]===void 0)return typeof C=="number"||typeof C=="boolean"?D[M]=C:D[M]=C.clone(),!0;{const P=D[M];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return D[M]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(b){const x=b.uniforms;let T=0;const D=16;for(let M=0,P=x.length;M<P;M++){const W=Array.isArray(x[M])?x[M]:[x[M]];for(let v=0,w=W.length;v<w;v++){const A=W[v],F=Array.isArray(A.value)?A.value:[A.value];for(let $=0,B=F.length;$<B;$++){const I=F[$],q=_(I),k=T%D,ae=k%q.boundary,oe=k+ae;T+=ae,oe!==0&&D-oe<q.storage&&(T+=D-oe),A.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=q.storage}}}const C=T%D;return C>0&&(T+=D-C),b.__size=T,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}class lx{constructor(e={}){const{canvas:t=Kp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=vi,this.toneMappingExposure=1;const x=this;let T=!1,D=0,C=0,M=null,P=-1,W=null;const v=new pt,w=new pt;let A=null;const F=new je(0);let $=0,B=t.width,I=t.height,q=1,k=null,ae=null;const oe=new pt(0,0,B,I),fe=new pt(0,0,B,I);let Ne=!1;const de=new Nc;let j=!1,ee=!1;const ce=new mt,O=new mt,Q=new H,re=new pt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function xe(){return M===null?q:1}let R=i;function He(S,L){return t.getContext(S,L)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ec}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",be,!1),R===null){const L="webgl2";if(R=He(L,S),R===null)throw He(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ye,Be,se,Ye,Pe,E,y,z,Z,ie,J,Ie,me,Se,Je,le,Te,ze,Ve,Ee,Qe,Ge,ot,U;function we(){ye=new p_(R),ye.init(),Ge=new Jv(R,ye),Be=new c_(R,ye,e,Ge),se=new Kv(R),Be.reverseDepthBuffer&&se.buffers.depth.setReversed(!0),Ye=new __(R),Pe=new Lv,E=new Zv(R,ye,se,Pe,Be,Ge,Ye),y=new u_(x),z=new d_(x),Z=new Tm(R),ot=new a_(R,Z),ie=new m_(R,Z,Ye,ot),J=new x_(R,ie,Z,Ye),Ve=new v_(R,Be,E),le=new l_(Pe),Ie=new Dv(x,y,z,ye,Be,ot,le),me=new ox(x,Pe),Se=new Bv,Je=new Gv(ye),ze=new s_(x,y,z,se,J,f,c),Te=new Yv(x,J,Be),U=new cx(R,Ye,Be,se),Ee=new o_(R,ye,Ye),Qe=new g_(R,ye,Ye),Ye.programs=Ie.programs,x.capabilities=Be,x.extensions=ye,x.properties=Pe,x.renderLists=Se,x.shadowMap=Te,x.state=se,x.info=Ye}we();const Y=new sx(x,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(B,I,!1))},this.getSize=function(S){return S.set(B,I)},this.setSize=function(S,L,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,I=L,t.width=Math.floor(S*q),t.height=Math.floor(L*q),G===!0&&(t.style.width=S+"px",t.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(B*q,I*q).floor()},this.setDrawingBufferSize=function(S,L,G){B=S,I=L,q=G,t.width=Math.floor(S*G),t.height=Math.floor(L*G),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(oe)},this.setViewport=function(S,L,G,X){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,L,G,X),se.viewport(v.copy(oe).multiplyScalar(q).round())},this.getScissor=function(S){return S.copy(fe)},this.setScissor=function(S,L,G,X){S.isVector4?fe.set(S.x,S.y,S.z,S.w):fe.set(S,L,G,X),se.scissor(w.copy(fe).multiplyScalar(q).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(S){se.setScissorTest(Ne=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){ae=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(S=!0,L=!0,G=!0){let X=0;if(S){let N=!1;if(M!==null){const ue=M.texture.format;N=ue===Fc||ue===Ic||ue===Pc}if(N){const ue=M.texture.type,ve=ue===Zn||ue===Vi||ue===Wr||ue===_r||ue===Ac||ue===Rc,Ae=ze.getClearColor(),Re=ze.getClearAlpha(),Oe=Ae.r,ke=Ae.g,Fe=Ae.b;ve?(d[0]=Oe,d[1]=ke,d[2]=Fe,d[3]=Re,R.clearBufferuiv(R.COLOR,0,d)):(g[0]=Oe,g[1]=ke,g[2]=Fe,g[3]=Re,R.clearBufferiv(R.COLOR,0,g))}else X|=R.COLOR_BUFFER_BIT}L&&(X|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Se.dispose(),Je.dispose(),Pe.dispose(),y.dispose(),z.dispose(),J.dispose(),ot.dispose(),U.dispose(),Ie.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",nl),Y.removeEventListener("sessionend",il),Ei.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=Ye.autoReset,L=Te.enabled,G=Te.autoUpdate,X=Te.needsUpdate,N=Te.type;we(),Ye.autoReset=S,Te.enabled=L,Te.autoUpdate=G,Te.needsUpdate=X,Te.type=N}function be(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ze(S){const L=S.target;L.removeEventListener("dispose",Ze),vt(L)}function vt(S){Ot(S),Pe.remove(S)}function Ot(S){const L=Pe.get(S).programs;L!==void 0&&(L.forEach(function(G){Ie.releaseProgram(G)}),S.isShaderMaterial&&Ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,G,X,N,ue){L===null&&(L=ge);const ve=N.isMesh&&N.matrixWorld.determinant()<0,Ae=ad(S,L,G,X,N);se.setMaterial(X,ve);let Re=G.index,Oe=1;if(X.wireframe===!0){if(Re=ie.getWireframeAttribute(G),Re===void 0)return;Oe=2}const ke=G.drawRange,Fe=G.attributes.position;let rt=ke.start*Oe,lt=(ke.start+ke.count)*Oe;ue!==null&&(rt=Math.max(rt,ue.start*Oe),lt=Math.min(lt,(ue.start+ue.count)*Oe)),Re!==null?(rt=Math.max(rt,0),lt=Math.min(lt,Re.count)):Fe!=null&&(rt=Math.max(rt,0),lt=Math.min(lt,Fe.count));const dt=lt-rt;if(dt<0||dt===1/0)return;ot.setup(N,X,Ae,G,Re);let Gt,nt=Ee;if(Re!==null&&(Gt=Z.get(Re),nt=Qe,nt.setIndex(Gt)),N.isMesh)X.wireframe===!0?(se.setLineWidth(X.wireframeLinewidth*xe()),nt.setMode(R.LINES)):nt.setMode(R.TRIANGLES);else if(N.isLine){let De=X.linewidth;De===void 0&&(De=1),se.setLineWidth(De*xe()),N.isLineSegments?nt.setMode(R.LINES):N.isLineLoop?nt.setMode(R.LINE_LOOP):nt.setMode(R.LINE_STRIP)}else N.isPoints?nt.setMode(R.POINTS):N.isSprite&&nt.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)nt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const De=N._multiDrawStarts,Et=N._multiDrawCounts,it=N._multiDrawCount,dn=Re?Z.get(Re).bytesPerElement:1,Xi=Pe.get(X).currentProgram.getUniforms();for(let Wt=0;Wt<it;Wt++)Xi.setValue(R,"_gl_DrawID",Wt),nt.render(De[Wt]/dn,Et[Wt])}else if(N.isInstancedMesh)nt.renderInstances(rt,dt,N.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Et=Math.min(G.instanceCount,De);nt.renderInstances(rt,dt,Et)}else nt.render(rt,dt)};function et(S,L,G){S.transparent===!0&&S.side===Wn&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,as(S,L,G),S.side=yi,S.needsUpdate=!0,as(S,L,G),S.side=Wn):as(S,L,G)}this.compile=function(S,L,G=null){G===null&&(G=S),p=Je.get(G),p.init(L),b.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==G&&S.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const X=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ue=N.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Ae=ue[ve];et(Ae,G,N),X.add(Ae)}else et(ue,G,N),X.add(ue)}),b.pop(),p=null,X},this.compileAsync=function(S,L,G=null){const X=this.compile(S,L,G);return new Promise(N=>{function ue(){if(X.forEach(function(ve){Pe.get(ve).currentProgram.isReady()&&X.delete(ve)}),X.size===0){N(S);return}setTimeout(ue,10)}ye.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let kt=null;function Dn(S){kt&&kt(S)}function nl(){Ei.stop()}function il(){Ei.start()}const Ei=new sf;Ei.setAnimationLoop(Dn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(S){kt=S,Y.setAnimationLoop(S),S===null?Ei.stop():Ei.start()},Y.addEventListener("sessionstart",nl),Y.addEventListener("sessionend",il),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(L),L=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,L,M),p=Je.get(S,b.length),p.init(L),b.push(p),O.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),de.setFromProjectionMatrix(O),ee=this.localClippingEnabled,j=le.init(this.clippingPlanes,ee),_=Se.get(S,m.length),_.init(),m.push(_),Y.enabled===!0&&Y.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&ga(ue,L,-1/0,x.sortObjects)}ga(S,L,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,ae),Ce=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ce&&ze.addToRenderList(_,S),this.info.render.frame++,j===!0&&le.beginShadows();const G=p.state.shadowsArray;Te.render(G,S,L),j===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,N=_.transmissive;if(p.setupLights(),L.isArrayCamera){const ue=L.cameras;if(N.length>0)for(let ve=0,Ae=ue.length;ve<Ae;ve++){const Re=ue[ve];sl(X,N,S,Re)}Ce&&ze.render(S);for(let ve=0,Ae=ue.length;ve<Ae;ve++){const Re=ue[ve];rl(_,S,Re,Re.viewport)}}else N.length>0&&sl(X,N,S,L),Ce&&ze.render(S),rl(_,S,L);M!==null&&(E.updateMultisampleRenderTarget(M),E.updateRenderTargetMipmap(M)),S.isScene===!0&&S.onAfterRender(x,S,L),ot.resetDefaultState(),P=-1,W=null,b.pop(),b.length>0?(p=b[b.length-1],j===!0&&le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ga(S,L,G,X){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||de.intersectsSprite(S)){X&&re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(O);const ve=J.update(S),Ae=S.material;Ae.visible&&_.push(S,ve,Ae,G,re.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||de.intersectsObject(S))){const ve=J.update(S),Ae=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),re.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),re.copy(ve.boundingSphere.center)),re.applyMatrix4(S.matrixWorld).applyMatrix4(O)),Array.isArray(Ae)){const Re=ve.groups;for(let Oe=0,ke=Re.length;Oe<ke;Oe++){const Fe=Re[Oe],rt=Ae[Fe.materialIndex];rt&&rt.visible&&_.push(S,ve,rt,G,re.z,Fe)}}else Ae.visible&&_.push(S,ve,Ae,G,re.z,null)}}const ue=S.children;for(let ve=0,Ae=ue.length;ve<Ae;ve++)ga(ue[ve],L,G,X)}function rl(S,L,G,X){const N=S.opaque,ue=S.transmissive,ve=S.transparent;p.setupLightsView(G),j===!0&&le.setGlobalState(x.clippingPlanes,G),X&&se.viewport(v.copy(X)),N.length>0&&ss(N,L,G),ue.length>0&&ss(ue,L,G),ve.length>0&&ss(ve,L,G),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function sl(S,L,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new bn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Kn:Zn,minFilter:mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[X.id],ve=X.viewport||v;ue.setSize(ve.z,ve.w);const Ae=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(F),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Ce&&ze.render(G);const Re=x.toneMapping;x.toneMapping=vi;const Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),j===!0&&le.setGlobalState(x.clippingPlanes,X),ss(S,G,X),E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Fe=0,rt=L.length;Fe<rt;Fe++){const lt=L[Fe],dt=lt.object,Gt=lt.geometry,nt=lt.material,De=lt.group;if(nt.side===Wn&&dt.layers.test(X.layers)){const Et=nt.side;nt.side=Ht,nt.needsUpdate=!0,al(dt,G,X,Gt,nt,De),nt.side=Et,nt.needsUpdate=!0,ke=!0}}ke===!0&&(E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue))}x.setRenderTarget(Ae),x.setClearColor(F,$),Oe!==void 0&&(X.viewport=Oe),x.toneMapping=Re}function ss(S,L,G){const X=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ue=S.length;N<ue;N++){const ve=S[N],Ae=ve.object,Re=ve.geometry,Oe=X===null?ve.material:X,ke=ve.group;Ae.layers.test(G.layers)&&al(Ae,L,G,Re,Oe,ke)}}function al(S,L,G,X,N,ue){S.onBeforeRender(x,L,G,X,N,ue),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,L,G,X,S,ue),N.transparent===!0&&N.side===Wn&&N.forceSinglePass===!1?(N.side=Ht,N.needsUpdate=!0,x.renderBufferDirect(G,L,X,N,S,ue),N.side=yi,N.needsUpdate=!0,x.renderBufferDirect(G,L,X,N,S,ue),N.side=Wn):x.renderBufferDirect(G,L,X,N,S,ue),S.onAfterRender(x,L,G,X,N,ue)}function as(S,L,G){L.isScene!==!0&&(L=ge);const X=Pe.get(S),N=p.state.lights,ue=p.state.shadowsArray,ve=N.state.version,Ae=Ie.getParameters(S,N.state,ue,L,G),Re=Ie.getProgramCacheKey(Ae);let Oe=X.programs;X.environment=S.isMeshStandardMaterial?L.environment:null,X.fog=L.fog,X.envMap=(S.isMeshStandardMaterial?z:y).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",Ze),Oe=new Map,X.programs=Oe);let ke=Oe.get(Re);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===ve)return cl(S,Ae),ke}else Ae.uniforms=Ie.getUniforms(S),S.onBeforeCompile(Ae,x),ke=Ie.acquireProgram(Ae,Re),Oe.set(Re,ke),X.uniforms=Ae.uniforms;const Fe=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=le.uniform),cl(S,Ae),X.needsLights=cd(S),X.lightsStateVersion=ve,X.needsLights&&(Fe.ambientLightColor.value=N.state.ambient,Fe.lightProbe.value=N.state.probe,Fe.directionalLights.value=N.state.directional,Fe.directionalLightShadows.value=N.state.directionalShadow,Fe.spotLights.value=N.state.spot,Fe.spotLightShadows.value=N.state.spotShadow,Fe.rectAreaLights.value=N.state.rectArea,Fe.ltc_1.value=N.state.rectAreaLTC1,Fe.ltc_2.value=N.state.rectAreaLTC2,Fe.pointLights.value=N.state.point,Fe.pointLightShadows.value=N.state.pointShadow,Fe.hemisphereLights.value=N.state.hemi,Fe.directionalShadowMap.value=N.state.directionalShadowMap,Fe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Fe.spotShadowMap.value=N.state.spotShadowMap,Fe.spotLightMatrix.value=N.state.spotLightMatrix,Fe.spotLightMap.value=N.state.spotLightMap,Fe.pointShadowMap.value=N.state.pointShadowMap,Fe.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function ol(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Hs.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function cl(S,L){const G=Pe.get(S);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function ad(S,L,G,X,N){L.isScene!==!0&&(L=ge),E.resetTextureUnits();const ue=L.fog,ve=X.isMeshStandardMaterial?L.environment:null,Ae=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ti,Re=(X.isMeshStandardMaterial?z:y).get(X.envMap||ve),Oe=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!G.morphAttributes.position,rt=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let dt=vi;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(dt=x.toneMapping);const Gt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=Gt!==void 0?Gt.length:0,De=Pe.get(X),Et=p.state.lights;if(j===!0&&(ee===!0||S!==W)){const en=S===W&&X.id===P;le.setState(X,S,en)}let it=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Et.state.version||De.outputColorSpace!==Ae||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==Re||X.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==le.numPlanes||De.numIntersection!==le.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==ke||De.morphTargets!==Fe||De.morphNormals!==rt||De.morphColors!==lt||De.toneMapping!==dt||De.morphTargetsCount!==nt)&&(it=!0):(it=!0,De.__version=X.version);let dn=De.currentProgram;it===!0&&(dn=as(X,L,N));let Xi=!1,Wt=!1,_a=!1;const gt=dn.getUniforms(),ni=De.uniforms;if(se.useProgram(dn.program)&&(Xi=!0,Wt=!0,_a=!0),X.id!==P&&(P=X.id,Wt=!0),Xi||W!==S){Be.reverseDepthBuffer?(ce.copy(S.projectionMatrix),Zp(ce),Jp(ce),gt.setValue(R,"projectionMatrix",ce)):gt.setValue(R,"projectionMatrix",S.projectionMatrix),gt.setValue(R,"viewMatrix",S.matrixWorldInverse);const en=gt.map.cameraPosition;en!==void 0&&en.setValue(R,Q.setFromMatrixPosition(S.matrixWorld)),Be.logarithmicDepthBuffer&&gt.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,Wt=!0,_a=!0)}if(N.isSkinnedMesh){gt.setOptional(R,N,"bindMatrix"),gt.setOptional(R,N,"bindMatrixInverse");const en=N.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),gt.setValue(R,"boneTexture",en.boneTexture,E))}N.isBatchedMesh&&(gt.setOptional(R,N,"batchingTexture"),gt.setValue(R,"batchingTexture",N._matricesTexture,E),gt.setOptional(R,N,"batchingIdTexture"),gt.setValue(R,"batchingIdTexture",N._indirectTexture,E),gt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&gt.setValue(R,"batchingColorTexture",N._colorsTexture,E));const va=G.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0)&&Ve.update(N,G,dn),(Wt||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,gt.setValue(R,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ni.envMap.value=Re,ni.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&L.environment!==null&&(ni.envMapIntensity.value=L.environmentIntensity),Wt&&(gt.setValue(R,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&od(ni,_a),ue&&X.fog===!0&&me.refreshFogUniforms(ni,ue),me.refreshMaterialUniforms(ni,X,q,I,p.state.transmissionRenderTarget[S.id]),Hs.upload(R,ol(De),ni,E)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Hs.upload(R,ol(De),ni,E),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(R,"center",N.center),gt.setValue(R,"modelViewMatrix",N.modelViewMatrix),gt.setValue(R,"normalMatrix",N.normalMatrix),gt.setValue(R,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const en=X.uniformsGroups;for(let xa=0,ld=en.length;xa<ld;xa++){const ll=en[xa];U.update(ll,dn),U.bind(ll,dn)}}return dn}function od(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function cd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(S,L,G){Pe.get(S.texture).__webglTexture=L,Pe.get(S.depthTexture).__webglTexture=G;const X=Pe.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const G=Pe.get(S);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,G=0){M=S,D=L,C=G;let X=!0,N=null,ue=!1,ve=!1;if(S){const Re=Pe.get(S);if(Re.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(R.FRAMEBUFFER,null),X=!1;else if(Re.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(Re.__hasExternalTextures)E.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Fe=S.depthTexture;if(Re.__boundDepthTexture!==Fe){if(Fe!==null&&Pe.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const ke=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[L])?N=ke[L][G]:N=ke[L],ue=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?N=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[G]:N=ke,v.copy(S.viewport),w.copy(S.scissor),A=S.scissorTest}else v.copy(oe).multiplyScalar(q).floor(),w.copy(fe).multiplyScalar(q).floor(),A=Ne;if(se.bindFramebuffer(R.FRAMEBUFFER,N)&&X&&se.drawBuffers(S,N),se.viewport(v),se.scissor(w),se.setScissorTest(A),ue){const Re=Pe.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,Re.__webglTexture,G)}else if(ve){const Re=Pe.get(S.texture),Oe=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.__webglTexture,G||0,Oe)}P=-1},this.readRenderTargetPixels=function(S,L,G,X,N,ue,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){se.bindFramebuffer(R.FRAMEBUFFER,Ae);try{const Re=S.texture,Oe=Re.format,ke=Re.type;if(!Be.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-X&&G>=0&&G<=S.height-N&&R.readPixels(L,G,X,N,Ge.convert(Oe),Ge.convert(ke),ue)}finally{const Re=M!==null?Pe.get(M).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,L,G,X,N,ue,ve){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){const Re=S.texture,Oe=Re.format,ke=Re.type;if(!Be.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-X&&G>=0&&G<=S.height-N){se.bindFramebuffer(R.FRAMEBUFFER,Ae);const Fe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.bufferData(R.PIXEL_PACK_BUFFER,ue.byteLength,R.STREAM_READ),R.readPixels(L,G,X,N,Ge.convert(Oe),Ge.convert(ke),0);const rt=M!==null?Pe.get(M).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,rt);const lt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Qp(R,lt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ue),R.deleteBuffer(Fe),R.deleteSync(lt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,G=0){S.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const X=Math.pow(2,-G),N=Math.floor(S.image.width*X),ue=Math.floor(S.image.height*X),ve=L!==null?L.x:0,Ae=L!==null?L.y:0;E.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,ve,Ae,N,ue),se.unbindTexture()},this.copyTextureToTexture=function(S,L,G=null,X=null,N=0){S.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1],L=arguments[2],N=arguments[3]||0,G=null);let ue,ve,Ae,Re,Oe,ke;G!==null?(ue=G.max.x-G.min.x,ve=G.max.y-G.min.y,Ae=G.min.x,Re=G.min.y):(ue=S.image.width,ve=S.image.height,Ae=0,Re=0),X!==null?(Oe=X.x,ke=X.y):(Oe=0,ke=0);const Fe=Ge.convert(L.format),rt=Ge.convert(L.type);E.setTexture2D(L,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const lt=R.getParameter(R.UNPACK_ROW_LENGTH),dt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Gt=R.getParameter(R.UNPACK_SKIP_PIXELS),nt=R.getParameter(R.UNPACK_SKIP_ROWS),De=R.getParameter(R.UNPACK_SKIP_IMAGES),Et=S.isCompressedTexture?S.mipmaps[N]:S.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Et.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Et.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Oe,ke,ue,ve,Fe,rt,Et.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Oe,ke,Et.width,Et.height,Fe,Et.data):R.texSubImage2D(R.TEXTURE_2D,N,Oe,ke,ue,ve,Fe,rt,Et),R.pixelStorei(R.UNPACK_ROW_LENGTH,lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gt),R.pixelStorei(R.UNPACK_SKIP_ROWS,nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,De),N===0&&L.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(S,L,G=null,X=null,N=0){S.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,S=arguments[2],L=arguments[3],N=arguments[4]||0);let ue,ve,Ae,Re,Oe,ke,Fe,rt,lt;const dt=S.isCompressedTexture?S.mipmaps[N]:S.image;G!==null?(ue=G.max.x-G.min.x,ve=G.max.y-G.min.y,Ae=G.max.z-G.min.z,Re=G.min.x,Oe=G.min.y,ke=G.min.z):(ue=dt.width,ve=dt.height,Ae=dt.depth,Re=0,Oe=0,ke=0),X!==null?(Fe=X.x,rt=X.y,lt=X.z):(Fe=0,rt=0,lt=0);const Gt=Ge.convert(L.format),nt=Ge.convert(L.type);let De;if(L.isData3DTexture)E.setTexture3D(L,0),De=R.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)E.setTexture2DArray(L,0),De=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const Et=R.getParameter(R.UNPACK_ROW_LENGTH),it=R.getParameter(R.UNPACK_IMAGE_HEIGHT),dn=R.getParameter(R.UNPACK_SKIP_PIXELS),Xi=R.getParameter(R.UNPACK_SKIP_ROWS),Wt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,Oe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ke),S.isDataTexture||S.isData3DTexture?R.texSubImage3D(De,N,Fe,rt,lt,ue,ve,Ae,Gt,nt,dt.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(De,N,Fe,rt,lt,ue,ve,Ae,Gt,dt.data):R.texSubImage3D(De,N,Fe,rt,lt,ue,ve,Ae,Gt,nt,dt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Et),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it),R.pixelStorei(R.UNPACK_SKIP_PIXELS,dn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Wt),N===0&&L.generateMipmaps&&R.generateMipmap(De),se.unbindTexture()},this.initRenderTarget=function(S){Pe.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),se.unbindTexture()},this.resetState=function(){D=0,C=0,M=null,se.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Uc?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===sa?"display-p3":"srgb"}}class kc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new kc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ux extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hf extends Bt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zc extends ei{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new H,f=new H,d=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const b=[],x=m/i;let T=0;m===0&&a===0?T=.5/t:m===i&&c===Math.PI&&(T=-.5/t);for(let D=0;D<=t;D++){const C=D/t;h.x=-e*Math.cos(r+C*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(C+T,1-x),b.push(l++)}u.push(b)}for(let m=0;m<i;m++)for(let b=0;b<t;b++){const x=u[m][b+1],T=u[m][b],D=u[m+1][b],C=u[m+1][b+1];(m!==0||a>0)&&d.push(x,T,C),(m!==i-1||c<Math.PI)&&d.push(T,D,C)}this.setIndex(d),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hx extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ff extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const to=new mt,hu=new H,fu=new H;class fx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(hu),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),to.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(to)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dx extends fx{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class du extends ff{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class px extends ff{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);const df={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Er{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gx=new Bc(-1,1,1,-1,0,1);class _x extends ei{constructor(){super(),this.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new hn([0,2,0,0,2,0],2))}}const vx=new _x;class Vc{constructor(e){this._mesh=new Tt(vx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xx extends Er{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qr.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mu extends Er{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class yx extends Er{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xx(df),this.copyPass.material.blending=jn,this.clock=new mx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}mu!==void 0&&(a instanceof mu?i=!0:a instanceof yx&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bx extends Er{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Sx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class yr extends Er{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new je(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(s,a,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new bn(s,a,{type:Kn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new bn(s,a,{type:Kn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Sx;this.highPassUniforms=qr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $e(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=df;this.copyUniforms=qr.clone(u.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new je,this.oldClearAlpha=1,this.basic=new wi,this.fsQuad=new Vc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new $e(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=yr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=yr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Lt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}yr.BlurDirectionX=new $e(1,0);yr.BlurDirectionY=new $e(0,1);const Tx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Ex extends Er{constructor(){super();const e=Tx;this.uniforms=qr.clone(e.uniforms),this.material=new hx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ih?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Mx={paper:"#0a0c12",staffLine:"#7d8a9c",staffShadow:"rgba(2,3,6,0.85)",ridge:"rgba(150,175,210,",noteFill:"#05070c",noteEdge:"rgba(216,230,250,0.74)",stem:"#98a5b8",barline:"#9ca8bc",text:"#b8c8de",clef:"#cedaeb",fontStack:'"Segoe UI Symbol","Bravura","DejaVu Sans","Noto Music",serif'},Cx={eighth:1,"16th":2,"32nd":3,"64th":4,"128th":5},gu={G:"𝄞",F:"𝄢",C:"𝄡",percussion:"𝄿"},_u=new Map;function Ax(n,e){const t=`${n}|${e}`,i=_u.get(t);if(i!==void 0)return i;let r=!1;try{const s=document.createElement("canvas").getContext("2d");if(s){s.font=e;const a=s.measureText(n).width,o=s.measureText("￾").width;r=a>.5&&Math.abs(a-o)>.5}}catch{r=!1}return _u.set(t,r),r}function Rx(n,e,t){const{pxPerUnit:i}=n.options,r=n.topY,s=n.topY-n.height,a=e.x1-e.x0+2*t/i,o=r-s+2*t/i;return{widthUnits:a,heightUnits:o,x0:e.x0-t/i,topY:r+t/i,pxPerUnit:i,topYSheet:r,bottomYSheet:s}}function pf(n,e,t,i){const{style:r,padding:s}=i,a=Rx(e,t,s),o=a.pxPerUnit,c=Math.max(2,Math.round(a.widthUnits*o)),l=Math.max(2,Math.round(a.heightUnits*o));n.width!==c&&(n.width=c),n.height!==l&&(n.height=l);const u=n.getContext("2d");if(!u)return a;u.clearRect(0,0,c,l),u.fillStyle=r.paper,u.fillRect(0,0,c,l);const h=p=>(p-a.x0)*o,f=p=>(a.topY-p)*o,d=e.options.lineGap*o;for(const p of e.lanes)Px(u,p,{X:h,Y:f,lineGapPx:d,layout:e,sys:t,opts:i});u.fillStyle=r.barline;const g=f(e.lanes[0].y+2*e.options.lineGap),_=f(e.lanes[e.lanes.length-1].y-2*e.options.lineGap);return u.fillRect(h(t.x0)-1,g,1.8,_-g),a}function Px(n,e,t){const{X:i,Y:r,lineGapPx:s,layout:a,sys:o,opts:c}=t,l=c.style,{lineGap:u}=a.options,h=r(e.y+2*u),f=r(e.y-2*u),d=i(o.x0),_=i(o.x1)-d,p=n.createLinearGradient(0,h,0,f);p.addColorStop(0,`${l.ridge}0)`),p.addColorStop(.5,`${l.ridge}0.07)`),p.addColorStop(1,`${l.ridge}0)`),n.fillStyle=p,n.fillRect(d,h,_,f-h);for(let P=0;P<5;P++){const W=h+P*s;n.fillStyle=l.staffShadow,n.fillRect(d,W+1.4,_,1.6),n.fillStyle=l.staffLine,n.fillRect(d,W,_,1.3)}Dx(n,t,h,f),Lx(n,e,t,h);const b=e.notes.filter(P=>P.x>=o.x0-.6&&P.x<=o.x1+.6);if(!b.length){xu(n,e,t,f);return}const x=.62*s,T=.42*s,D=new Map,C=a.barX.filter(P=>P>=o.x0-.6&&P<=o.x1+.6);let M=0;for(const P of b)if(!P.rest){for(;M<C.length&&C[M]<=P.x;)D.clear(),M++;for(let W=0;W<P.pitches.length;W++){const v=P.pitches[W],w=v.dia-(P.clefBottomDia||e.clefBottomDia),A=r(ur(e.y,w,u)),F=i(P.x)-(P.pitches.length-1-W)*x*.9,$=`${v.step}${v.octave}`,B=D.get($);if(v.alter!==0&&B!==v.alter){const I=v.alter>0?"♯":v.alter<0?"♭":"♮";n.font=`${Math.round(1.35*s)}px ${l.fontStack}`,n.textAlign="center",n.textBaseline="middle",n.fillStyle=l.text,n.fillText(I,F-x*2.1,A),D.set($,v.alter)}n.fillStyle=l.staffLine;for(let I=6;I<=w;I+=2)n.fillRect(F-x*1.5,r(ur(e.y,I,u))-.6,x*3,1.2);for(let I=-2;I>=w;I-=2)n.fillRect(F-x*1.5,r(ur(e.y,I,u))-.6,x*3,1.2);n.save(),n.translate(F,A),n.rotate(-.32),n.beginPath(),n.ellipse(0,0,x,T,0,0,Math.PI*2),n.fillStyle=l.noteFill,n.fill(),n.lineWidth=1.1,n.strokeStyle=l.noteEdge,n.stroke(),n.restore(),P.durBeat>=2&&P.pitches.length===1&&!P.grace&&(n.save(),n.translate(F,A),n.rotate(-.32),n.beginPath(),n.ellipse(0,0,x*.52,T*.52,0,0,Math.PI*2),n.fillStyle=l.paper,n.fill(),n.restore())}}if(c.showBeams){const P=Fx(b);n.strokeStyle=l.stem,n.fillStyle=l.stem;for(const W of b)W.rest||W.grace||W.typeName==="whole"||W.typeName==="breve"||ca(W)===0||Ix(n,W,t,x,T);for(const W of P)Ux(n,W,t,x,T)}xu(n,e,t,f)}function ca(n){const e=Cx[n.typeName];return e||(n.durBeat<=.26?2:n.durBeat<=.55?1:0)}function Ix(n,e,t,i,r){const{Y:s,X:a,lineGapPx:o}=t,c=3.4*o,l=e.stemUp,u=a(e.x),h=s(e.y);n.lineWidth=1.5,n.beginPath(),l?(n.moveTo(u+i*.82,h-r*.5),n.lineTo(u+i*.82,h-r*.5-c)):(n.moveTo(u-i*.82,h+r*.5),n.lineTo(u-i*.82,h+r*.5+c)),n.stroke()}function vu(n,e,t,i){const{Y:r,X:s,lineGapPx:a}=n,o=3.4*a,c=s(i.x),l=r(i.y);return{x:i.stemUp?c+e*.82:c-e*.82,y:i.stemUp?l-t*.5-o:l+t*.5+o,flags:ca(i)}}function Fx(n){const e=[];let t=[];for(const i of n){if(!(!i.rest&&!i.grace&&ca(i)>0)){t.length>1&&e.push(t),t=[];continue}if(t.length){const s=t[t.length-1];i.onsetBeat-(s.onsetBeat+s.durBeat)>1e-6&&(t.length>1&&e.push(t),t=[])}t.push(i)}return t.length>1&&e.push(t),e}function Ux(n,e,t,i,r){const s=e[0].stemUp,a=.42*t.lineGapPx,o=(c,l,u)=>{const h=vu(t,i,r,e[c]),f=vu(t,i,r,e[l]),d=s?-u*a:u*a,g=s?a:-a;n.beginPath(),n.moveTo(h.x,h.y+d),n.lineTo(f.x,f.y+d),n.lineTo(f.x,f.y+d+g),n.lineTo(h.x,h.y+d+g),n.closePath(),n.fill()};o(0,e.length-1,0);for(let c=1;c<4;c++){let l=-1;for(let u=0;u<=e.length;u++){const h=u<e.length&&ca(e[u])>c;h&&l<0&&(l=u),!h&&l>=0&&(u-1>l&&o(l,u-1,c),l=-1)}}}function Dx(n,e,t,i){const{X:r,layout:s,sys:a,opts:o}=e;n.fillStyle=o.style.barline;for(const c of s.barX)c<=a.x0+.01||c>a.x1||n.fillRect(r(c)-.8,t,1.7,i-t)}function Lx(n,e,t,i){const{X:r,Y:s,lineGapPx:a,layout:o,sys:c,opts:l}=t;if(c.index!==0)return;const u=l.style,{lineGap:h}=o.options;let f=r(c.x0)+6;const d=gu[e.track.clef.sign]??gu.G,g=`${Math.round(4.6*a)}px ${u.fontStack}`;if(n.textAlign="left",n.textBaseline="alphabetic",Ax(d,g)?(n.font=g,n.fillStyle=u.clef,n.fillText(d,f,s(e.y-.6*h)+a*1.6),f+=4.2*a):(n.font=`${Math.round(3*a)}px Georgia, serif`,n.fillStyle=u.clef,n.fillText(e.track.clef.sign==="F"?"F":e.track.clef.sign==="C"?"C":"G",f,s(e.y)),f+=2.4*a),l.showText){const _=e.keyFifths;_!==0&&(n.font=`${Math.round(1.5*a)}px ${u.fontStack}`,n.fillStyle=u.text,n.textAlign="left",n.fillText(`${Math.abs(_)}${_>0?"♯":"♭"}`,f,s(e.y+1.4*h)),f+=2.1*a);const p=e.timeSig;p&&(n.font=`bold ${Math.round(2.1*a)}px Georgia, serif`,n.textAlign="center",n.fillStyle=u.clef,n.fillText(String(p.beats),f+a,s(e.y+.55*h)),n.fillText(String(p.beatType),f+a,s(e.y-1.35*h)),f+=2.6*a),n.textAlign="left",n.font=`${Math.round(1.15*a)}px system-ui, sans-serif`,n.fillStyle="rgba(157,176,200,0.75)",n.fillText(e.track.partName,r(c.x0)+6,i-a*.7)}}function xu(n,e,t,i){const{X:r,lineGapPx:s,sys:a,opts:o}=t;if(!o.showText)return;const c=o.style;for(let l=0;l<e.marks.length;l++){const u=e.marks[l];if(!(u.x<a.x0-.4||u.x>a.x1)){if(u.dir!==0){const h=e.marks.slice(l+1).find(_=>_.x>u.x),f=Math.min(h?h.x:u.x+5,a.x1),d=i+s*1.15,g=(r(u.x)+r(f))/2;n.strokeStyle="rgba(157,176,200,0.6)",n.lineWidth=1.2,n.beginPath(),u.dir>0?(n.moveTo(r(u.x),d),n.lineTo(g,d-s*.6),n.lineTo(r(f),d)):(n.moveTo(r(u.x),d-s*.6),n.lineTo(g,d),n.lineTo(r(f),d-s*.6)),n.stroke();continue}u.text&&(n.font=`${Math.round(1.25*s)}px Georgia, serif`,n.textAlign="left",n.textBaseline="middle",n.fillStyle=c.text,n.fillText(u.text,r(u.x),i+s*1.1))}}n.textBaseline="alphabetic"}const Nx=8;function yu(n){const e=new hf(n);return e.colorSpace=an,e.minFilter=mi,e.magFilter=ln,e.generateMipmaps=!0,e.anisotropy=8,e}class Bx{group=new gi;slots=[];layout=null;opts;generation=0;constructor(e){this.opts=e;const t=new Wi(1,1);for(let i=0;i<Nx;i++){const r=document.createElement("canvas");r.width=8,r.height=8;const s=yu(r),a=new wi({map:s,toneMapped:!1}),o=new Tt(t,a);o.visible=!1,o.frustumCulled=!1,this.slots.push({mesh:o,canvas:r,texture:s,assigned:-1,gen:-1,metrics:null,centreX:0,gpuW:0,gpuH:0}),this.group.add(o)}}setOptions(e){this.opts=e,this.generation++}setLayout(e){this.layout=e,this.generation++}update(e){const t=this.layout;if(!t||!t.systems.length)return;const i=t.systems;let r=0,s=i.length-1,a=i.length-1;for(;r<=s;){const o=r+s>>1;i[o].x1-e>-22?(a=o,s=o-1):r=o+1}for(let o=0;o<this.slots.length;o++){const c=this.slots[o],l=a+o;if(l<0||l>=i.length){c.mesh.visible=!1,c.assigned=-1;continue}if(c.assigned!==l||c.gen!==this.generation){const u=i[l],h=pf(c.canvas,t,u,this.opts);this.rebindTexture(c),c.metrics=h,c.mesh.scale.set(h.widthUnits,h.heightUnits,1),c.centreX=u.x0+(u.x1-u.x0)/2,c.mesh.position.set(c.centreX,h.topY-h.heightUnits/2,0),c.assigned=l,c.gen=this.generation}c.mesh.position.x=c.centreX-e,c.mesh.visible=!0}}rebindTexture(e){const t=e.canvas.width,i=e.canvas.height;if(e.gpuW===t&&e.gpuH===i){e.texture.needsUpdate=!0;return}const r=yu(e.canvas),s=e.mesh.material,a=e.texture;e.texture=r,s.map=r,s.needsUpdate=!0,a.dispose(),e.gpuW=t,e.gpuH=i}dispose(){for(const e of this.slots)e.texture.dispose(),e.mesh.material.dispose();this.slots[0]?.mesh.geometry.dispose(),this.group.clear()}}function Ox(n,e,t){const i=n.dynamics.filter(o=>o.trackId===e).map(o=>({sec:t(o.beat),value:o.value,kind:"lvl"})),r=n.wedges.filter(o=>o.trackId===e).map(o=>({sec:t(o.beat),dir:o.dir,kind:"wedge"}));if(!i.length&&!r.length)return()=>.62;const s=[...i.map(o=>({sec:o.sec,kind:"lvl",value:o.value})),...r.map(o=>({sec:o.sec,kind:"wedge",value:o.dir}))].sort((o,c)=>o.sec-c.sec),a=6;return o=>{let c=i[0]?.value??.55,l=-1/0,u=0;for(const h of s){if(h.sec>o)break;h.kind==="lvl"?(c=h.value,l=-1/0,u=0):(l=h.sec,u=h.value)}if(u!==0){const h=s.find(g=>g.sec>l),f=h?h.sec:l+a*.5,d=Math.min(1,Math.max(0,(o-l)/Math.max(.4,f-l)));c=Math.min(1,Math.max(.05,.42+d*.5*u))}return c}}const mf=.62,wu=[16732029,3594239,16645631,9305950,16756794,12946687,16770142,6262271];function kx(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(.6,"rgba(255,255,255,0.13)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new hf(n);return i.colorSpace=an,i}let no=null;function gf(){return no||(no=kx()),no}function Ps(n,e){const t=new wi({toneMapped:!1,transparent:!0,depthWrite:!1,blending:zi});return t.color.copy(n).multiplyScalar(e),t}class zx{group=new gi;flashes=[];sparks=[];flashIdx=0;sparkIdx=0;geometry=new Wi(1,1);constructor(e=64,t=140){for(let i=0;i<e;i++){const r=new wi({map:gf(),transparent:!0,depthWrite:!1,blending:zi,toneMapped:!1}),s=new Tt(this.geometry,r);s.visible=!1,this.flashes.push({mesh:s,life:0,maxLife:.7,peak:1}),this.group.add(s)}for(let i=0;i<t;i++){const r=new wi({color:16777215,transparent:!0,depthWrite:!1,blending:zi,toneMapped:!1}),s=new Tt(this.geometry,r);s.visible=!1,this.sparks.push({mesh:s,vx:0,vy:0,life:0,maxLife:.8,peak:1}),this.group.add(s)}}flash(e,t,i,r,s,a=.04){const o=this.flashes[this.flashIdx++%this.flashes.length];o.mesh.visible=!0,o.mesh.position.set(e,t,a),o.mesh.scale.set(r,r,1),o.mesh.material.color.copy(i).multiplyScalar(s),o.life=o.maxLife,o.peak=s}burst(e,t,i,r,s,a){for(let o=0;o<r;o++){const c=this.sparks[this.sparkIdx++%this.sparks.length],l=Math.random()*Math.PI*2,u=s*(.35+Math.random()*.9);c.mesh.visible=!0,c.mesh.position.set(e,t,.05),c.mesh.scale.setScalar(.055+Math.random()*.05),c.mesh.material.color.copy(i).multiplyScalar(a),c.vx=Math.cos(l)*u,c.vy=Math.abs(Math.sin(l))*u*.9+.4,c.life=c.maxLife=.5+Math.random()*.5,c.peak=a}}update(e){const t=Math.min(.05,Math.max(0,e));for(const i of this.flashes){if(i.life<=0)continue;if(i.life-=t,i.life<=0){i.mesh.visible=!1;continue}const r=i.life/i.maxLife;i.mesh.scale.multiplyScalar(1+t*1.5);const s=i.mesh.material;s.opacity=r*r}for(const i of this.sparks){if(i.life<=0)continue;if(i.life-=t,i.life<=0){i.mesh.visible=!1;continue}i.vy-=3.4*t,i.mesh.position.x+=i.vx*t,i.mesh.position.y+=i.vy*t;const r=i.life/i.maxLife;i.mesh.material.opacity=r*r}}dispose(){for(const e of this.flashes)e.mesh.material.dispose();for(const e of this.sparks)e.mesh.material.dispose();this.geometry.dispose(),this.group.clear()}}class Vx{group=new gi;lane;color;look;notes;ts;xs;ys;restFlags;head;halo;pool;trail=[];trailMats=[];lastIndex=-1;sphere=new zc(1,20,14);dyn=()=>mf;constructor(e,t,i,r){this.lane=e,this.color=t,this.look=i,this.dyn=r,this.notes=e.notes.filter(o=>!o.grace);const s=Math.max(1,this.notes.length);this.ts=new Float64Array(s),this.xs=new Float64Array(s),this.ys=new Float64Array(s),this.restFlags=new Uint8Array(s);let a=e.y;for(let o=0;o<this.notes.length;o++){const c=this.notes[o];this.ts[o]=c.onsetSec,this.xs[o]=c.x,this.restFlags[o]=c.rest?1:0,c.rest||(a=c.y),this.ys[o]=c.rest?a:c.y}this.head=new Tt(this.sphere,Ps(t,2.6)),this.halo=new Tt(this.sphere,Ps(t,.5)),this.pool=new Tt(new Wi(1,1),new wi({map:gf(),transparent:!0,depthWrite:!1,blending:zi,toneMapped:!1,opacity:.5})),this.pool.material.color.copy(t),this.group.add(this.halo,this.head,this.pool);for(let o=0;o<i.trailLength;o++){const c=Ps(t,1.4),l=new Tt(this.sphere,c);this.group.add(l),this.trail.push(l),this.trailMats.push(c)}}setLook(e){for(this.look=e;this.trail.length<e.trailLength;){const t=Ps(this.color,1.4),i=new Tt(this.sphere,t);this.group.add(i),this.trail.push(i),this.trailMats.push(t)}for(;this.trail.length>e.trailLength;){const t=this.trail.pop();this.trailMats.pop(),this.group.remove(t)}}setDynamic(e){this.dyn=e}sample(e){const t=this.notes.length;if(!t)return null;if(e<=this.ts[0]){const b=Math.max(0,Math.min(1,(e-(this.ts[0]-2.6))/2.6));return{x:this.xs[0]-(1-b)*4.2,y:this.ys[0],rest:!1,index:-1,sinceOnset:0}}if(e>=this.ts[t-1])return{x:this.xs[t-1],y:this.ys[t-1],rest:!!this.restFlags[t-1],index:t-1,sinceOnset:e-this.ts[t-1]};let i=0,r=t-1;for(;i<r;){const m=i+r+1>>1;this.ts[m]<=e?i=m:r=m-1}const s=i,a=this.ts[s],o=this.ts[s+1],c=Math.max(1e-4,o-a),l=Math.max(0,Math.min(1,(e-a)/c)),u=this.xs[s],h=this.xs[s+1],f=this.ys[s],g=this.ys[s+1]-f,_=(.22+Math.min(.85,Math.abs(g)*.42))*Math.min(1,c/.55),p=f+g*l+_*4*l*(1-l);return{x:u+(h-u)*l,y:p,rest:!1,index:s,sinceOnset:e-a}}update(e,t,i){const r=this.sample(e);if(!r)return;const s=this.dyn(e),a=Math.exp(-r.sinceOnset*11)*2.1,o=(.34+s*.66)*(1+a)*(r.rest?.45:1),c=.16*this.look.orbScale;this.head.position.set(r.x-t,r.y,.02),this.head.scale.setScalar(c*(1+Math.min(.45,a*.18))),this.head.material.color.copy(this.color).multiplyScalar(1.05+o*.85),this.halo.position.copy(this.head.position),this.halo.scale.setScalar(c*(2+o*.8)),this.halo.material.color.copy(this.color).multiplyScalar(.16+o*.2),this.pool.position.set(r.x-t,r.y,.012);const l=(.85+o*.55)*this.look.orbScale;this.pool.scale.set(l,l,1),this.pool.material.opacity=Math.min(.5,.08+o*.16);const u=.05;for(let h=0;h<this.trail.length;h++){const f=this.trail[h],d=this.sample(e-(h+1)*u);if(!d){f.visible=!1;continue}f.visible=!0,f.position.set(d.x-t,d.y,.018);const g=1-(h+1)/(this.trail.length+1);f.scale.setScalar(c*.95*Math.pow(g,1.25)),this.trailMats[h].color.copy(this.color).multiplyScalar(.2+o*.6*g),this.trailMats[h].opacity=Math.max(0,g*1.1)}if(r.index>=0&&r.index!==this.lastIndex){if(this.lastIndex>=0||r.index===0){const h=r.index;i.flash(this.xs[h]-t,this.ys[h],this.color,(.5+o*.7)*this.look.orbScale,.45+o*.55),!this.restFlags[h]&&s>.3&&i.burst(this.xs[h]-t,this.ys[h],this.color,2+Math.round(s*3),.8+s*.7,.45+o*.5)}this.lastIndex=r.index}}reset(){this.lastIndex=-1}dispose(){this.sphere.dispose();for(const e of this.trail)e.material.dispose();this.head.material.dispose(),this.halo.material.dispose(),this.pool.material.dispose(),this.pool.geometry.dispose(),this.group.clear(),this.lane}}const Is={az:-.62,el:.135,dist:1,targetY:0},Hx=.36;class Gx{renderer;scene=new ux;camera;sheet=new gi;composer;bloom;ribbon;effects=new zx;comets=[];layout=null;engrave;look={orbScale:1,trailLength:7,bloom:1};lastT=0;width=1280;height=720;target=new H;orbit={az:0,el:0,zoom:1};constructor(e){this.renderer=new lx({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.toneMapping=Mc,this.renderer.toneMappingExposure=1,this.camera=new on(42,16/9,.1,1200),this.scene.background=new je(329226),this.scene.fog=new kc(329226,.0115),this.sheet.rotation.x=-.3,this.scene.add(this.sheet),this.scene.add(this.effects.group),this.scene.add(new px(3291726,1.15));const t=new du(11058399,1);t.position.set(-14,26,30),this.scene.add(t);const i=new du(5596023,.45);i.position.set(22,8,-18),this.scene.add(i),this.engrave={style:{...Mx},showText:!0,showBeams:!0,padding:14},this.ribbon=new Bx(this.engrave),this.sheet.add(this.ribbon.group),this.composer=new wx(this.renderer),this.composer.addPass(new bx(this.scene,this.camera)),this.bloom=new yr(new $e(1280,720),.5,.5,.62),this.composer.addPass(this.bloom),this.composer.addPass(new Ex),this.resize(e.clientWidth||1280,e.clientHeight||720)}resize(e,t){this.width=Math.max(2,Math.floor(e)),this.height=Math.max(2,Math.floor(t)),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height,!1),this.composer.setSize(this.width,this.height)}resizeForExport(e,t){this.renderer.setPixelRatio(1),this.resize(e,t)}restoreAfterExport(e,t){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.resize(e,t)}setScore(e,t){this.layout=t,this.ribbon.setLayout(t);for(const r of this.comets)this.sheet.remove(r.group),r.dispose();this.comets=[];const i=Tc(e.tempoMap);t.lanes.forEach((r,s)=>{const a=new je(wu[s%wu.length]),o=new Vx(r,a,this.look,Ox(e,r.track.id,i));this.comets.push(o),this.sheet.add(o.group)})}setLook(e){this.look={...this.look,...e},this.bloom.strength=.5*this.look.bloom;for(const t of this.comets)t.setLook(this.look)}setEngrave(e){this.engrave={...this.engrave,...e},this.ribbon.setOptions(this.engrave)}updateCamera(e){const t=this.layout,i=t?Math.max(4,t.height):12,r=Math.max(.2,this.camera.aspect),s=this.camera.fov*Math.PI/180,a=i*1.28+2.5,o=32*ls.clamp(r/1.55,.5,1),c=Math.tan(s/2),l=Math.max(a/2/c,o/2/(c*r))*Is.dist*this.orbit.zoom,u=this.scene.fog;u.density=Hx/Math.max(1,l);const h=.055*Math.sin(e*.13)+.022*Math.sin(e*.31+1.7),f=.018*Math.sin(e*.09+.6),d=Is.az+this.orbit.az+h,g=ls.clamp(Is.el+this.orbit.el+f,-.5,.9),_=t?t.topY-t.height/2:Is.targetY;this.target.set(0,_,0);const p=Math.cos(g);this.camera.position.set(this.target.x+Math.sin(d)*p*l,this.target.y+Math.sin(g)*l,this.target.z+Math.cos(d)*p*l),this.camera.lookAt(this.target)}renderFrame(e){const t=this.layout;let i=e-this.lastT;if(!Number.isFinite(i)||i<0||i>.4){i=0;for(const r of this.comets)r.reset()}if(this.lastT=e,t){const r=t.secToX(e);this.ribbon.update(r);for(const s of this.comets)s.update(e,r,this.effects)}this.effects.update(i),this.updateCamera(e),this.composer.render()}get canvas(){return this.renderer.domElement}get size(){return{w:this.width,h:this.height}}attachControls(e,t){let i=!1,r=0,s=0;e.addEventListener("pointerdown",o=>{t()&&(i=!0,r=o.clientX,s=o.clientY,e.setPointerCapture(o.pointerId))}),e.addEventListener("pointermove",o=>{!i||!t()||(this.orbit.az-=(o.clientX-r)*.004,this.orbit.el=ls.clamp(this.orbit.el+(o.clientY-s)*.003,-.5,.7),r=o.clientX,s=o.clientY)});const a=()=>{i=!1};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),e.addEventListener("wheel",o=>{t()&&(o.preventDefault(),this.orbit.zoom=ls.clamp(this.orbit.zoom*(1+Math.sign(o.deltaY)*.08),.35,3.2))},{passive:!1})}dispose(){this.ribbon.dispose(),this.effects.dispose();for(const e of this.comets)e.dispose();this.composer.dispose(),this.renderer.dispose()}}class Wx{ctx;buffer=null;source=null;startedAtCtx=0;offsetInBuffer=0;windowStart;playing=!1;loop=!0;onEnded=null;constructor(e){this.windowStart=e,this.ctx=new AudioContext}get audioContext(){return this.ctx}get duration(){return this.buffer?.duration??0}get time(){return this.buffer?this.playing?this.windowStart+this.offsetInBuffer+(this.ctx.currentTime-this.startedAtCtx):this.windowStart+this.offsetInBuffer:this.windowStart}setBuffer(e){this.stop(),this.buffer=e,this.offsetInBuffer=0,this.startedAtCtx=this.ctx.currentTime}async play(e){if(!this.buffer)return;this.ctx.state==="suspended"&&await this.ctx.resume(),this.stop();let t=e===void 0?this.offsetInBuffer:e-this.windowStart;t=Math.max(0,Math.min(Math.max(0,this.buffer.duration-.02),t));const i=this.ctx.createBufferSource();i.buffer=this.buffer,i.connect(this.ctx.destination),i.onended=()=>{this.source===i&&(this.source=null,this.playing&&(this.loop?this.play(this.windowStart):(this.playing=!1,this.offsetInBuffer=this.buffer?this.buffer.duration-.02:0,this.onEnded?.())))},i.start(0,t),this.source=i,this.startedAtCtx=this.ctx.currentTime,this.offsetInBuffer=t,this.playing=!0}pause(){this.playing&&(this.offsetInBuffer=this.time-this.windowStart,this.stop())}stop(){if(this.source){const e=this.source;this.source=null,e.onended=null;try{e.stop()}catch{}e.disconnect()}this.playing=!1}seek(e){const t=this.playing;t&&this.pause(),this.offsetInBuffer=Math.max(0,e-this.windowStart),t&&this.play(e)}dispose(){this.stop(),this.ctx.close()}}const Rt=n=>({family:"piano",name:"piano",phases:n.harmonics.map((e,t)=>t%2?.5:0),attack:.02,decay:.25,sustain:.6,release:.3,gain:.5,brightness:.9,noise:0,vibratoCents:0,vibratoHz:0,detuneCents:4,...n}),io={flute:Rt({family:"flute",name:"flute",harmonics:[1,.22,.12,.04],attack:.06,decay:.1,sustain:.82,release:.18,gain:.42,brightness:1.1,noise:.1,vibratoCents:12,vibratoHz:5.2}),oboe:Rt({family:"oboe",name:"oboe",harmonics:[1,.55,.3,.22,.1],attack:.035,decay:.12,sustain:.78,release:.15,gain:.4,brightness:.95,noise:.07,vibratoCents:10,vibratoHz:5}),clarinet:Rt({family:"clarinet",name:"clarinet",harmonics:[1,.03,.62,.04,.28,.02,.12],attack:.04,decay:.12,sustain:.8,release:.16,gain:.4,brightness:.8,noise:.05,vibratoCents:8,vibratoHz:4.6}),bassoon:Rt({family:"bassoon",name:"bassoon",harmonics:[1,.4,.15,.1,.05],attack:.05,decay:.14,sustain:.78,release:.18,gain:.46,brightness:.55,noise:.09,vibratoCents:8,vibratoHz:4.2}),horn:Rt({family:"horn",name:"horn",harmonics:[1,.5,.28,.12,.08,.04],phases:[0,0,0,0,0,0],attack:.07,decay:.16,sustain:.8,release:.2,gain:.44,brightness:.6,noise:.05,vibratoCents:6,vibratoHz:4}),trumpet:Rt({family:"trumpet",name:"trumpet",harmonics:[1,.85,.6,.42,.3,.18,.12],phases:[0,.5,0,.5,0,.5,0],attack:.025,decay:.1,sustain:.82,release:.14,gain:.4,brightness:1.15,noise:.06,vibratoCents:5,vibratoHz:5.6}),timpani:Rt({family:"timpani",name:"timpani",harmonics:[1,.3,.12,.05],attack:.002,decay:.9,sustain:.06,release:.35,gain:.62,brightness:.35,noise:.3}),violin:Rt({family:"violin",name:"violin",harmonics:[1,.62,.42,.3,.2,.14,.1,.06],attack:.055,decay:.14,sustain:.8,release:.22,gain:.4,brightness:1.2,noise:.05,vibratoCents:18,vibratoHz:5.4}),viola:Rt({family:"viola",name:"viola",harmonics:[1,.58,.38,.26,.17,.11,.08],attack:.055,decay:.15,sustain:.8,release:.22,gain:.42,brightness:1,noise:.05,vibratoCents:16,vibratoHz:5}),cello:Rt({family:"cello",name:"cello",harmonics:[1,.5,.3,.18,.12,.07],attack:.06,decay:.16,sustain:.8,release:.24,gain:.46,brightness:.8,noise:.06,vibratoCents:13,vibratoHz:4.6}),bass:Rt({family:"bass",name:"bass",harmonics:[1,.4,.22,.1,.05],attack:.03,decay:.18,sustain:.75,release:.2,gain:.5,brightness:.6,noise:.06,vibratoCents:8,vibratoHz:4}),harp:Rt({family:"harp",name:"harp",harmonics:[1,.4,.22,.12,.06],attack:.002,decay:.55,sustain:.15,release:.3,gain:.42,brightness:.8,noise:.12,vibratoCents:0,vibratoHz:0}),pluck:Rt({family:"pluck",name:"pizzicato",harmonics:[1,.5,.28,.14,.07],attack:.001,decay:.32,sustain:.02,release:.12,gain:.46,brightness:.9,noise:.34,vibratoCents:0,vibratoHz:0}),piano:Rt({family:"piano",name:"piano",harmonics:[1,.42,.2,.12,.07,.04,.02],attack:.004,decay:.6,sustain:.22,release:.35,gain:.5,brightness:1,noise:.08,vibratoCents:0,vibratoHz:0}),organ:Rt({family:"organ",name:"organ",harmonics:[1,.6,.35,.18,.1],phases:[0,.25,0,.25,0],attack:.02,decay:.05,sustain:.95,release:.1,gain:.36,brightness:.9,noise:0,vibratoCents:5,vibratoHz:4.8}),voice:Rt({family:"voice",name:"voice",harmonics:[1,.5,.3,.15,.08,.04],attack:.08,decay:.15,sustain:.75,release:.2,gain:.4,brightness:.95,noise:.08,vibratoCents:20,vibratoHz:5.5})},Xx=[[/timpani|\btimp\b/i,"timpani"],[/harp|celesta|glocken|chime|bell/i,"harp"],[/pizz/i,"pluck"],[/harpsichord|clavichord/i,"pluck"],[/organ/i,"organ"],[/piano|clav|pianoforte/i,"piano"],[/flute|fl\.?\b|travers/i,"flute"],[/oboe/i,"oboe"],[/clarinet/i,"clarinet"],[/bassoon|fagott|bassoon/i,"bassoon"],[/horn|corno|cor\b/i,"horn"],[/trumpet|cornet|tromba|tromp/i,"trumpet"],[/trombone/i,"trumpet"],[/cello|violon|violoncello|vc\b/i,"cello"],[/double bass|contrabass|db\b|basso/i,"bass"],[/viola/i,"viola"],[/violin|violone|vl\b|vn\b/i,"violin"],[/guitar|lute/i,"pluck"],[/voice|choir|soprano|alto|tenor|basso/i,"voice"]],bu={0:"piano",1:"piano",2:"piano",3:"piano",4:"piano",5:"piano",6:"piano",7:"piano",8:"piano",9:"piano",10:"piano",11:"piano",12:"pluck",13:"pluck",15:"organ",16:"organ",17:"organ",18:"organ",19:"organ",20:"organ",21:"pluck",22:"pluck",23:"pluck",24:"pluck",25:"pluck",26:"pluck",27:"violin",32:"bass",33:"bass",34:"bass",35:"bass",36:"bass",37:"bass",40:"violin",41:"viola",42:"cello",43:"bass",44:"violin",45:"pluck",46:"harp",47:"timpani",48:"voice",49:"voice",50:"voice",51:"voice",52:"voice",53:"voice",54:"trumpet",56:"trumpet",57:"trumpet",58:"trumpet",59:"trumpet",60:"bassoon",61:"bassoon",62:"bassoon",63:"bassoon",64:"bassoon",65:"bassoon",66:"bassoon",67:"bassoon",68:"oboe",69:"oboe",70:"clarinet",71:"clarinet",72:"clarinet",73:"flute",74:"flute",75:"flute",76:"flute",77:"flute",78:"flute",79:"flute"};function qx(n){const e=`${n.partName} ${n.voiceNo}`;for(const[t,i]of Xx)if(t.test(e))return{...io[i],name:n.partName};if(n.midiProgram!=null&&bu[n.midiProgram]){const t=bu[n.midiProgram];return{...io[t],name:n.partName}}return{...io.piano,name:n.partName}}const $x=n=>440*Math.pow(2,(n-69)/12),Yx={sampleRate:44100,tempoScale:1,tail:1.6,masterGain:.62},jx=mf,Su=new WeakMap;function Kx(n,e){let t=Su.get(n);t||(t=new Map,Su.set(n,t));const i=e.family,r=t.get(i);if(r)return r;const s=new Float32Array(e.harmonics.length),a=new Float32Array(e.harmonics.length);for(let c=0;c<e.harmonics.length;c++)a[c]=e.harmonics[c]*Math.sin(2*Math.PI*e.phases[c]);const o=n.createPeriodicWave(s,a,{disableNormalization:!1});return t.set(i,o),o}let Fs=null;function Qx(n){if(Fs&&Fs.sampleRate===n.sampleRate)return Fs;const e=Math.floor(n.sampleRate*.6),t=n.createBuffer(1,e,n.sampleRate),i=t.getChannelData(0);let r=49734321;for(let s=0;s<e;s++)r=r*1664525+1013904223>>>0,i[s]=r/4294967295*2-1;return Fs=t,t}const Tu=new Map;function Zx(n,e=1.6){const t=Tu.get(n.sampleRate);if(t)return t;const i=Math.floor(n.sampleRate*e),r=n.createBuffer(2,i,n.sampleRate);let s=2654435769;for(let a=0;a<2;a++){const o=r.getChannelData(a);for(let c=0;c<i;c++){s=s*1664525+1013904223>>>0;const l=s/4294967295*2-1,u=c/i;o[c]=l*Math.pow(1-u,2.6)*(c<200?c/200:1)}}return Tu.set(n.sampleRate,r),r}function Jx(n,e=.012,t=.05){for(let i=0;i<n.numberOfChannels;i++){const r=n.getChannelData(i),s=Math.min(r.length,Math.floor(n.sampleRate*e));for(let o=0;o<s;o++)r[o]*=o/s;const a=Math.min(r.length,Math.floor(n.sampleRate*t));for(let o=0;o<a;o++){const c=r.length-1-o;r[c]*=o/a}}}const Eu=.45,ey=4;async function Mu(n,e,t,i={},r){const s={...Yx,...i},a=s.sampleRate,o=s.tempoScale,c=Math.max(.05,t.endSec-t.startSec),l=Math.ceil((c+s.tail)*a),u=new AudioBuffer({numberOfChannels:2,length:l,sampleRate:a}),h=u.getChannelData(0),f=u.getChannelData(1),d=new Map;n.lanes.forEach((x,T)=>d.set(x.track.id,T));const g=Math.max(1,n.lanes.length),_=[];for(const x of e){const T=qx(x),D=d.get(x.id)??0,C=g<=1?0:D/(g-1)*1.3-.65;for(const M of x.events){if(M.rest||M.grace||!M.pitches.length)continue;const P=(M.onsetSec-t.startSec)/o,W=M.durSec/o;if(!(P+W<-.05||P>c))for(const v of M.pitches){const w=v.midi+x.transpose;if(w<12||w>120)continue;let A=2166136261;for(const F of`${x.id}|${M.onsetSec}|${w}`)A=Math.imul(A^F.charCodeAt(0),16777619);_.push({trackId:x.id,spec:T,pan:C,onset:P,dur:W,midi:w,seed:A>>>0})}}}_.sort((x,T)=>x.onset-T.onset);const p=8,m=Math.max(1,Math.ceil(c/p));let b=0;for(let x=0;x<m;x++){const T=x*p,D=Math.min(c,T+p),C=T-Eu,M=D+s.tail;for(;b<_.length&&_[b].onset<T;)b++;const P=new OfflineAudioContext(2,Math.ceil((M-C)*a),a),W=ny(P,s),v=new Map;for(let B=b;B<_.length;B++){const I=_[B];if(I.onset>=D)break;if(I.onset+I.dur+ey<C)continue;let q=v.get(I.trackId);q||(q=iy(P,I.pan,g,I.spec,C,M,W),v.set(I.trackId,q)),ay(P,q.bus,I.spec,$x(I.midi),I.onset-C,Math.max(.03,I.dur),jx,I.seed,q.vibrato)}const w=await P.startRendering(),A=Math.floor(Eu*a),F=Math.floor(T*a),$=Math.min(w.length-A,l-F);for(let B=0;B<2;B++){const I=w.getChannelData(B),q=B===0?h:f;for(let k=0;k<$;k++)q[F+k]=I[A+k]}r?.(x+1,m),x<m-1&&await new Promise(B=>setTimeout(B,0))}return Jx(u),u}function ty(){const e=new Float32Array(2048),t=1.7,i=Math.tanh(t);for(let r=0;r<2048;r++){const s=r/2047*2-1;e[r]=Math.tanh(t*s)/i}return e}function ny(n,e){const t=n.createGain();t.gain.value=e.masterGain;const i=n.createDynamicsCompressor();i.threshold.value=-16,i.knee.value=22,i.ratio.value=3.2,i.attack.value=.008,i.release.value=.22;const r=n.createGain();r.gain.value=.86;const s=n.createGain();s.gain.value=.2;const a=n.createConvolver();a.buffer=Zx(n),t.connect(r),t.connect(a),a.connect(s),r.connect(i),s.connect(i);const o=n.createWaveShaper();return o.curve=ty(),i.connect(o),o.connect(n.destination),t}function iy(n,e,t,i,r,s,a){const o=n.createStereoPanner();o.pan.value=e;const c=n.createGain();c.gain.value=.9/Math.max(1,Math.sqrt(t)*1.15),c.connect(o),o.connect(a);let l=null;if(i.vibratoHz>0&&i.vibratoCents>0){const u=n.createOscillator();u.frequency.value=i.vibratoHz;const h=n.createGain();h.gain.value=i.vibratoCents,u.connect(h),u.start(Math.max(0,r)),u.stop(s),l=h}return{bus:o,vibrato:l}}function ry(n,e,t){const i=Math.max(.02,n.gain*t*.9),r=Math.max(.001,n.attack),s=Math.max(.01,n.decay),a=Math.max(.02,n.release),o=Math.max(r+s,Math.max(.01,e-r*.5)),c=Math.max(2e-4,i*n.sustain);return{atk:r,hold:o,rel:a,pts:[[0,1e-4],[r,i],[r+s,c],[o,c],[o+a,1e-4]]}}function sy(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){const[i,r]=n[t-1],[s,a]=n[t],o=s===i?0:(e-i)/(s-i);return r+(a-r)*o}return n[n.length-1][1]}function ay(n,e,t,i,r,s,a,o,c){const l=ry(t,s,a),u=Math.max(0,r),h=u-r;if(h>=l.hold+l.rel)return;const f=n.createOscillator();f.setPeriodicWave(Kx(n,t)),f.frequency.value=i,t.detuneCents&&(f.detune.value=(o%2e3/1e3-1)*t.detuneCents),c&&c.connect(f.detune);const d=n.createGain(),g=d.gain;g.setValueAtTime(sy(l.pts,h),u);for(const[m,b]of l.pts)m<=h+1e-6||g.exponentialRampToValueAtTime(Math.max(2e-4,b),u+(m-h));const _=u+(l.hold+l.rel-h),p=n.createBiquadFilter();if(p.type="lowpass",p.frequency.value=Math.min(16e3,i*(2+t.brightness*8)),p.Q.value=.6,f.connect(p),p.connect(d),d.connect(e),f.start(u),f.stop(_+.05),t.noise>0&&h<l.atk*.5+.02){const m=Math.max(.02,Math.min(.22,l.atk+.12)),b=n.createBufferSource();b.buffer=Qx(n);const x=n.createBiquadFilter();x.type="bandpass",x.frequency.value=1400,x.Q.value=.7;const T=n.createGain();T.gain.setValueAtTime(1e-4,u),T.gain.exponentialRampToValueAtTime(Math.max(2e-4,l.pts[1][1]*t.noise*.55),u+Math.max(.002,l.atk*.5)),T.gain.exponentialRampToValueAtTime(1e-4,u+m),b.connect(x),x.connect(T),T.connect(e),b.start(u,o%4e3/1e4),b.stop(u+m+.02)}}function oy(n,e,t,i){const r=n.sampleRate,s=Math.max(0,Math.min(n.length,Math.round((t-e)*r))),a=Math.max(s,Math.min(n.length,Math.round((i-e)*r))),o=Math.max(1,a-s),c=new AudioBuffer({numberOfChannels:n.numberOfChannels,length:o,sampleRate:r});for(let l=0;l<n.numberOfChannels;l++)c.copyToChannel(n.getChannelData(l).subarray(s,a),l,0);return c}function cy(n){const e=n.numberOfChannels,t=n.length,i=44+t*e*2,r=new DataView(new ArrayBuffer(i)),s=(c,l)=>{for(let u=0;u<l.length;u++)r.setUint8(c+u,l.charCodeAt(u))};s(0,"RIFF"),r.setUint32(4,i-8,!0),s(8,"WAVE"),s(12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,e,!0),r.setUint32(24,n.sampleRate,!0),r.setUint32(28,n.sampleRate*e*2,!0),r.setUint16(32,e*2,!0),r.setUint16(34,16,!0),s(36,"data"),r.setUint32(40,t*e*2,!0);const a=[];for(let c=0;c<e;c++)a.push(n.getChannelData(c));let o=44;for(let c=0;c<t;c++)for(let l=0;l<e;l++){const u=Math.max(-1,Math.min(1,a[l][c]));r.setInt16(o,u<0?u*32768:u*32767,!0),o+=2}return new Blob([r],{type:"audio/wav"})}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function V(n){if(!n)throw new Error("Assertion failed.")}const ly=Math.PI/180,pc=180/Math.PI,Zs=n=>{const e=(n%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${n}.`)},_f=[1,0,0,0,1,0,0,0,1],uy=(n,e,t)=>{const[i,r,,s,a]=n,o=Math.abs(i)*e+Math.abs(s)*t,c=Math.abs(r)*e+Math.abs(a)*t;return Js(Js(Cu(-e/2,-t/2),n),Cu(o/2,c/2))},hy=n=>{const[e,t]=n,i=Math.atan2(t,fy(n)?-e:e);return Zs(mc(i*pc,90))},fy=n=>{const[e,t,,i,r]=n;return e*r-t*i<0},vf=n=>{const e=n*ly,t=Math.round(Math.cos(e)),i=Math.round(Math.sin(e));return[t,i,0,-i,t,0,0,0,1]},Cu=(n,e)=>[1,0,0,0,1,0,n,e,1],dy=(n,e)=>[n,0,0,0,e,0,0,0,1],Js=(n,e)=>{const t=new Array(9);for(let i=0;i<3;i++)for(let r=0;r<3;r++)t[3*i+r]=n[3*i]*e[r]+n[3*i+1]*e[3+r]+n[3*i+2]*e[6+r];return t},py=(n,e,t,i)=>({rotation:Zs(n+(e?-t:t)),flip:e!==i}),wn=n=>n&&n[n.length-1],Qn=n=>n>=0&&n<2**32,my=n=>n>=-2147483648&&n<2**31,he=n=>{let e=0;for(;n.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+n.readBits(e)},$n=n=>{const e=he(n);return e&1?e+1>>1:-(e>>1)},gy=(n,e,t,i)=>{for(let r=e;r<t;r++){const s=Math.floor(r/8);let a=n[s];const o=7-(r&7);a&=~(1<<o),a|=(i&1<<t-r-1)>>t-r-1<<o,n[s]=a}},Vt=n=>n.constructor===Uint8Array?n:ArrayBuffer.isView(n)?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):new Uint8Array(n),In=n=>n.constructor===DataView?n:ArrayBuffer.isView(n)?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(n),_y=typeof globalThis.TextEncoder<"u"?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(e=""){const t=new Uint8Array(3*e.length);let i=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s<128)t[i++]=s;else if(s<2048)t[i++]=192|s>>6,t[i++]=128|s&63;else if(s<55296||s>57343)t[i++]=224|s>>12,t[i++]=128|s>>6&63,t[i++]=128|s&63;else{const a=r+1<e.length?e.charCodeAt(r+1):0;s<56320&&a>=56320&&a<=57343?(s=65536+(s-55296<<10)+(a-56320),r++,t[i++]=240|s>>18,t[i++]=128|s>>12&63,t[i++]=128|s>>6&63,t[i++]=128|s&63):(t[i++]=239,t[i++]=191,t[i++]=189)}}return t.slice(0,i)}},Nt=new _y,es={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},ts={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},ns={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},xf=n=>!n||n.primaries==null&&n.transfer==null&&n.matrix==null&&n.fullRange==null,la=n=>n instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&n instanceof SharedArrayBuffer||ArrayBuffer.isView(n);class yf{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const t=new Promise(r=>{let s=!1;e=()=>{s||(r(),this.pending--,s=!0)}}),i=this.currentPromise;return this.currentPromise=t,this.pending++,await i,e}}const Au=(n,e,t)=>{let i=0,r=n.length-1,s=-1;for(;i<=r;){const a=i+(r-i+1)/2|0;t(n[a])<=e?(s=a,i=a+1):r=a-1}return s},Hc=()=>{let n,e;return{promise:new Promise((i,r)=>{n=i,e=r}),resolve:n,reject:e}},ti=n=>{throw new Error(`Unexpected value: ${n}`)},vy=(n,e,t)=>{const i=n.getUint8(e),r=n.getUint8(e+1),s=n.getUint8(e+2);return i<<16|r<<8|s},Gc=(n,e,t,i)=>{t=t>>>0,t=t&16777215,i?(n.setUint8(e,t&255),n.setUint8(e+1,t>>>8&255),n.setUint8(e+2,t>>>16&255)):(n.setUint8(e,t>>>16&255),n.setUint8(e+1,t>>>8&255),n.setUint8(e+2,t&255))},xy=(n,e,t,i)=>{t=Pt(t,-8388608,8388607),t<0&&(t=t+16777216&16777215),Gc(n,e,t,i)},Pt=(n,e,t)=>Math.max(e,Math.min(t,n)),yy=(n,e,t)=>n+(e-n)*t,wf="und",mc=(n,e)=>Math.round(n/e)*e,ea=(n,e)=>Math.round(n*e)/e,Ru=(n,e)=>Math.floor(n*e)/e,wy=n=>{let e=0;for(;n!==0;)n&=n-1,e++;return e},by=/^[a-z]{3}$/,Sy=n=>by.test(n),_i=1e6*(1+Number.EPSILON),Ty=(n,e)=>{const t=n<0?-1:1;n=Math.abs(n);let i=0,r=1,s=1,a=0,o=n;for(;;){const c=Math.floor(o),l=c*s+i,u=c*a+r;if(u>e)return{num:t*s,den:a};if(i=s,r=a,s=l,a=u,o=1/(o-c),!isFinite(o))break}return{num:t*s,den:a}};class bf{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let ro=null;const Ey=()=>ro!==null?ro:ro=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let so=null;const Sf=()=>so!==null?so:so=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let ao=null;const My=()=>ao!==null?ao:ao=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent))),Tf=n=>typeof globalThis.isSecureContext<"u"&&!globalThis.isSecureContext?`${n} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`:`${n} is not available in this environment.`,Cy=n=>n instanceof DOMException&&n.name==="QuotaExceededError"&&/reclaimed/i.test(n.message),Ay=(async()=>{})().constructor,xi=n=>n instanceof Ay||n instanceof Promise?!0:typeof n?.then=="function",Wc=function*(n){for(const e in n){const t=n[e];t!==void 0&&(yield{key:e,value:t})}},Ry=n=>{switch(n.toLowerCase()){case"image/jpeg":case"image/jpg":return".jpg";case"image/png":return".png";case"image/gif":return".gif";case"image/webp":return".webp";case"image/bmp":return".bmp";case"image/svg+xml":return".svg";case"image/tiff":return".tiff";case"image/avif":return".avif";case"image/x-icon":case"image/vnd.microsoft.icon":return".ico";default:return null}},Py=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0},Iy=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Ef=n=>typeof n=="number"&&!Number.isNaN(n),Fy=(n,e)=>{let t=-1,i=1/0;for(let r=0;r<n.length;r++){const s=e(n[r]);s<i&&(i=s,t=r)}return t},Xc=n=>{V(Number.isInteger(n.num)),V(Number.isInteger(n.den)),V(n.den!==0);let e=Math.abs(n.num),t=Math.abs(n.den);for(;t!==0;){const r=e%t;e=t,t=r}const i=e||1;return{num:n.num/i,den:n.den/i}},oo=(n,e)=>{if(typeof n!="object"||!n)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(n.left)||n.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(n.top)||n.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(n.width)||n.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(n.height)||n.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Uy=n=>new Promise(e=>setTimeout(e,n)),Pu=n=>Array.isArray(n)?n:[n];class qc{constructor(){this._listeners=new Map}on(e,t,i){this._listeners.has(e)||this._listeners.set(e,new Set);const r={fn:t,once:i?.once??!1};return this._listeners.get(e).add(r),()=>{this._listeners.get(e)?.delete(r)}}_emit(...e){const[t,i]=e,r=this._listeners.get(t);if(r)for(const s of r){try{s.fn(i)}catch(a){console.error(a)}s.once&&r.delete(s)}}}const Dy=n=>n!==null&&typeof n=="object"&&Object.getPrototypeOf(n)===Object.prototype&&Object.values(n).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Cn;(function(n){n[n.Silent=0]="Silent",n[n.Errors=1]="Errors",n[n.Warnings=2]="Warnings",n[n.Info=3]="Info"})(Cn||(Cn={}));class ht{constructor(){}static get level(){return ht._level}static set level(e){if(e!==Cn.Silent&&e!==Cn.Errors&&e!==Cn.Warnings&&e!==Cn.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ht._level=e}static get _emitter(){return ht._emitterInstance??=new qc}static on(e,t,i){return ht._emitter.on(e,t,i)}static _error(...e){ht._emitter._emit("error",e),ht._level>=Cn.Errors&&console.error(...e)}static _warn(...e){ht._emitter._emit("warn",e),ht._level>=Cn.Warnings&&console.warn(...e)}static _info(...e){ht._emitter._emit("info",e),ht._level>=Cn.Info&&console.info(...e)}}ht._level=Cn.Info;ht._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Mf{constructor(e,t){if(this.data=e,this.mimeType=t,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof t!="string")throw new TypeError("mimeType must be a string.")}}class Cf{constructor(e,t,i,r){if(this.data=e,this.mimeType=t,this.name=i,this.description=r,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(t!==void 0&&typeof t!="string")throw new TypeError("mimeType, when provided, must be a string.");if(i!==void 0&&typeof i!="string")throw new TypeError("name, when provided, must be a string.");if(r!==void 0&&typeof r!="string")throw new TypeError("description, when provided, must be a string.")}}const Ly=n=>{if(!n||typeof n!="object")throw new TypeError("tags must be an object.");if(n.title!==void 0&&typeof n.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(n.description!==void 0&&typeof n.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(n.artist!==void 0&&typeof n.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(n.album!==void 0&&typeof n.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(n.albumArtist!==void 0&&typeof n.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(n.trackNumber!==void 0&&(!Number.isInteger(n.trackNumber)||n.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(n.tracksTotal!==void 0&&(!Number.isInteger(n.tracksTotal)||n.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(n.discNumber!==void 0&&(!Number.isInteger(n.discNumber)||n.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(n.discsTotal!==void 0&&(!Number.isInteger(n.discsTotal)||n.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(n.genre!==void 0&&typeof n.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(n.date!==void 0&&(!(n.date instanceof Date)||Number.isNaN(n.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(n.beatsPerMinute!==void 0&&(!Number.isInteger(n.beatsPerMinute)||n.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(n.lyrics!==void 0&&typeof n.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(n.images!==void 0){if(!Array.isArray(n.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of n.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(n.comment!==void 0&&typeof n.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(n.raw!==void 0){if(!n.raw||typeof n.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(n.raw))if(e!==null&&typeof e!="string"&&!(Array.isArray(e)&&e.every(t=>typeof t=="string"))&&!(e instanceof Uint8Array)&&!(e instanceof Mf)&&!(e instanceof Cf)&&!Dy(e))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Ny=n=>{if(!n||typeof n!="object")throw new TypeError("disposition must be an object.");if(n.default!==void 0&&typeof n.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(n.primary!==void 0&&typeof n.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(n.forced!==void 0&&typeof n.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(n.original!==void 0&&typeof n.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(n.commentary!==void 0&&typeof n.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(n.hearingImpaired!==void 0&&typeof n.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(n.visuallyImpaired!==void 0&&typeof n.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class _t{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),t=this.bytes[e]??0,i=7-(this.pos&7),r=(t&1<<i)>>i;return this.pos++,r}readBits(e){if(e===1)return this.readBit();let t=0;for(let i=0;i<e;i++)t<<=1,t|=this.readBit();return t}writeBits(e,t){const i=this.pos+e;for(let r=this.pos;r<i;r++){const s=Math.floor(r/8);let a=this.bytes[s];const o=7-(r&7);a&=~(1<<o),a|=(t&1<<i-r-1)>>i-r-1<<o,this.bytes[s]=a}this.pos=i}copyBits(e,t){let i=0;for(i;i<e-7;i+=8)this.writeBits(8,t.readBits(8));const r=e-i;r>0&&this.writeBits(r,t.readBits(r))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,t=this.bytes[e]??0;return this.pos+=8,t}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new _t(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const $r=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],ua=[-1,1,2,3,4,5,6,8],By=n=>{if(!n||n.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new _t(n),t=co(e),{frequencyIndex:i,sampleRate:r}=lo(e),s=e.readBits(4);let a=null;s>=1&&s<=7&&(a=ua[s]);let o=t,c=!1,l=r;if(t===5||t===29)c=t===29,l=lo(e).sampleRate,o=co(e),o===22&&e.skipBits(4);else for(;e.getBitsLeft()>15;){const u=e.pos;if(e.readBits(11)!==695){e.pos=u+1;continue}co(e)===5&&e.readBits(1)&&(l=lo(e).sampleRate,e.getBitsLeft()>11&&e.readBits(11)===1352&&(c=!!e.readBits(1)));break}return a!==null&&a>1&&(c=!1),{objectType:t,coreObjectType:o,frequencyIndex:i,channelConfiguration:s,outputSampleRate:l,outputNumberOfChannels:c&&a===1?2:a}},co=n=>{const e=n.readBits(5);return e===31?32+n.readBits(6):e},lo=n=>{const e=n.readBits(4);return e===15?{frequencyIndex:e,sampleRate:n.readBits(24)}:{frequencyIndex:e,sampleRate:e<$r.length?$r[e]:null}},$c=n=>{const e=n.objectType===5||n.objectType===29,t=n.objectType===29,i=e?n.outputSampleRate/2:n.outputSampleRate,r=t?1:n.outputNumberOfChannels,s=ua.indexOf(r);if(s===-1)throw new TypeError(`Unsupported number of channels: ${n.outputNumberOfChannels}`);let a=16;n.objectType>=32&&(a+=6),gc(i)===15&&(a+=24),e&&(a+=9,gc(n.outputSampleRate)===15&&(a+=24));const o=Math.ceil(a/8),c=new Uint8Array(o),l=new _t(c);return Iu(l,n.objectType),Fu(l,i),l.writeBits(4,s),e&&(Fu(l,n.outputSampleRate),Iu(l,2)),l.writeBits(3,0),c},Iu=(n,e)=>{e<32?n.writeBits(5,e):(n.writeBits(5,31),n.writeBits(6,e-32))},Fu=(n,e)=>{const t=gc(e);n.writeBits(4,t),t===15&&n.writeBits(24,e)},gc=n=>{const e=$r.indexOf(n);return e===-1?15:e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Oy=[48e3,44100,32e3],ky=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const zy="1.61.1",Hr=`Mediabunny v${zy}`;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Yn;(function(n){n[n.NON_IDR_SLICE=1]="NON_IDR_SLICE",n[n.SLICE_DPA=2]="SLICE_DPA",n[n.SLICE_DPB=3]="SLICE_DPB",n[n.SLICE_DPC=4]="SLICE_DPC",n[n.IDR=5]="IDR",n[n.SEI=6]="SEI",n[n.SPS=7]="SPS",n[n.PPS=8]="PPS",n[n.AUD=9]="AUD",n[n.SPS_EXT=13]="SPS_EXT"})(Yn||(Yn={}));var rn;(function(n){n[n.RASL_N=8]="RASL_N",n[n.RASL_R=9]="RASL_R",n[n.BLA_W_LP=16]="BLA_W_LP",n[n.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",n[n.VPS_NUT=32]="VPS_NUT",n[n.SPS_NUT=33]="SPS_NUT",n[n.PPS_NUT=34]="PPS_NUT",n[n.AUD_NUT=35]="AUD_NUT",n[n.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",n[n.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(rn||(rn={}));const is=function*(n){let e=0,t=-1;for(;e<n.length-2;){const i=n.indexOf(0,e);if(i===-1||i>=n.length-2)break;e=i;let r=0;if(e+3<n.length&&n[e+1]===0&&n[e+2]===0&&n[e+3]===1?r=4:n[e+1]===0&&n[e+2]===1&&(r=3),r===0){e++;continue}t!==-1&&e>t&&(yield{offset:t,length:e-t}),t=e+r,e=t}t!==-1&&t<n.length&&(yield{offset:t,length:n.length-t})},Af=function*(n,e){let t=0;const i=new DataView(n.buffer,n.byteOffset,n.byteLength);for(;t+e<=n.length;){let r;e===1?r=i.getUint8(t):e===2?r=i.getUint16(t,!1):e===3?r=vy(i,t):(V(e===4),r=i.getUint32(t,!1)),t+=e,yield{offset:t,length:r},t+=r}},Vy=(n,e)=>{if(e.description){const r=(Vt(e.description)[4]&3)+1;return Af(n,r)}else return is(n)},Rf=n=>n&31,ha=n=>{const e=[],t=n.length;for(let i=0;i<t;i++)i+2<t&&n[i]===0&&n[i+1]===0&&n[i+2]===3?(e.push(0,0),i+=2):e.push(n[i]);return new Uint8Array(e)},Hy=(n,e)=>{const t=n.reduce((s,a)=>s+e+a.byteLength,0),i=new Uint8Array(t);let r=0;for(const s of n){const a=new DataView(i.buffer,i.byteOffset,i.byteLength);switch(e){case 1:a.setUint8(r,s.byteLength);break;case 2:a.setUint16(r,s.byteLength,!1);break;case 3:Gc(a,r,s.byteLength,!1);break;case 4:a.setUint32(r,s.byteLength,!1);break}r+=e,i.set(s,r),r+=s.byteLength}return i},Gy=n=>{try{const e=[],t=[],i=[];for(const o of is(n)){const c=n.subarray(o.offset,o.offset+o.length),l=Rf(c[0]);l===Yn.SPS?e.push(c):l===Yn.PPS?t.push(c):l===Yn.SPS_EXT&&i.push(c)}if(e.length===0||t.length===0)return null;const r=e[0],s=Xy(r);V(s!==null);const a=s.profileIdc===100||s.profileIdc===110||s.profileIdc===122||s.profileIdc===144;return{configurationVersion:1,avcProfileIndication:s.profileIdc,profileCompatibility:s.constraintFlags,avcLevelIndication:s.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:t,chromaFormat:a?s.chromaFormatIdc:null,bitDepthLumaMinus8:a?s.bitDepthLumaMinus8:null,bitDepthChromaMinus8:a?s.bitDepthChromaMinus8:null,sequenceParameterSetExt:a?i:null}}catch(e){return ht._error("Error building AVC Decoder Configuration Record:",e),null}},Wy=n=>{const e=[];e.push(n.configurationVersion),e.push(n.avcProfileIndication),e.push(n.profileCompatibility),e.push(n.avcLevelIndication),e.push(252|n.lengthSizeMinusOne&3),e.push(224|n.sequenceParameterSets.length&31);for(const t of n.sequenceParameterSets){const i=t.byteLength;e.push(i>>8),e.push(i&255);for(let r=0;r<i;r++)e.push(t[r])}e.push(n.pictureParameterSets.length);for(const t of n.pictureParameterSets){const i=t.byteLength;e.push(i>>8),e.push(i&255);for(let r=0;r<i;r++)e.push(t[r])}if((n.avcProfileIndication===100||n.avcProfileIndication===110||n.avcProfileIndication===122||n.avcProfileIndication===144)&&n.chromaFormat!==null){V(n.bitDepthLumaMinus8!==null),V(n.bitDepthChromaMinus8!==null),V(n.sequenceParameterSetExt!==null),e.push(252|n.chromaFormat&3),e.push(248|n.bitDepthLumaMinus8&7),e.push(248|n.bitDepthChromaMinus8&7),e.push(n.sequenceParameterSetExt.length);for(const t of n.sequenceParameterSetExt){const i=t.byteLength;e.push(i>>8),e.push(i&255);for(let r=0;r<i;r++)e.push(t[r])}}return new Uint8Array(e)},Pf={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Xy=n=>{try{const e=ha(n),t=new _t(e);if(t.skipBits(1),t.skipBits(2),t.readBits(5)!==7)return null;const r=t.readAlignedByte(),s=t.readAlignedByte(),a=t.readAlignedByte();he(t);let o=1,c=0,l=0,u=0;if((r===100||r===110||r===122||r===244||r===44||r===83||r===86||r===118||r===128)&&(o=he(t),o===3&&(u=t.readBits(1)),c=he(t),l=he(t),t.skipBits(1),t.readBits(1))){for(let I=0;I<(o!==3?8:12);I++)if(t.readBits(1)){const k=I<6?16:64;let ae=8,oe=8;for(let fe=0;fe<k;fe++){if(oe!==0){const Ne=$n(t);oe=(ae+Ne+256)%256}ae=oe===0?ae:oe}}}he(t);const h=he(t);if(h===0)he(t);else if(h===1){t.skipBits(1),$n(t),$n(t);const B=he(t);for(let I=0;I<B;I++)$n(t)}he(t),t.skipBits(1);const f=he(t),d=he(t),g=16*(f+1),_=16*(d+1);let p=g,m=_;const b=t.readBits(1);if(b||t.skipBits(1),t.skipBits(1),t.readBits(1)){const B=he(t),I=he(t),q=he(t),k=he(t);let ae,oe;if((u===0?o:0)===0)ae=1,oe=2-b;else{const Ne=o===3?1:2,de=o===1?2:1;ae=Ne,oe=de*(2-b)}p-=ae*(B+I),m-=oe*(q+k)}let T=2,D=2,C=2,M=0,P={num:1,den:1},W=null,v=null,w=null,A=null;const F=t.pos;if(t.readBits(1)){if(t.readBits(1)){const Ne=t.readBits(8);if(Ne===255)P={num:t.readBits(16),den:t.readBits(16)};else{const de=Pf[Ne];de&&(P=de)}}t.readBits(1)&&t.skipBits(1),t.readBits(1)&&(t.skipBits(3),M=t.readBits(1),t.readBits(1)&&(T=t.readBits(8),D=t.readBits(8),C=t.readBits(8))),t.readBits(1)&&(he(t),he(t)),t.readBits(1)&&(t.skipBits(32),t.skipBits(32),t.skipBits(1));const oe=t.readBits(1);oe&&Uu(t);const fe=t.readBits(1);fe&&Uu(t),(oe||fe)&&t.skipBits(1),t.skipBits(1),w=t.pos,A=t.readBits(1),A&&(t.skipBits(1),he(t),he(t),he(t),he(t),W=he(t),v=he(t))}if(W===null){V(v===null);const B=s&16;if((r===44||r===86||r===100||r===110||r===122||r===244)&&B)W=0,v=0;else{const I=f+1,q=d+1,k=(2-b)*q,ae=ta.find(fe=>fe.level>=a)??wn(ta),oe=Math.min(Math.floor(ae.maxDpbMbs/(I*k)),16);W=oe,v=oe}}return V(v!==null),{emulationUnpreventedBytes:e,profileIdc:r,constraintFlags:s,levelIdc:a,frameMbsOnlyFlag:b,chromaFormatIdc:o,bitDepthLumaMinus8:c,bitDepthChromaMinus8:l,codedWidth:g,codedHeight:_,displayWidth:p,displayHeight:m,pixelAspectRatio:P,colourPrimaries:T,matrixCoefficients:C,transferCharacteristics:D,fullRangeFlag:M,numReorderFrames:W,maxDecFrameBuffering:v,vuiParametersFlagBitOffset:F,bitstreamRestrictionFlagBitOffset:w,bitstreamRestrictionFlag:A}}catch(e){return ht._error("Error parsing AVC SPS:",e),null}},Uu=n=>{const e=he(n);n.skipBits(4),n.skipBits(4);for(let t=0;t<=e;t++)he(n),he(n),n.skipBits(1);n.skipBits(5),n.skipBits(5),n.skipBits(5),n.skipBits(5)},qy=(n,e)=>{if(e.description){const r=(Vt(e.description)[21]&3)+1;return Af(n,r)}else return is(n)},_c=n=>n>>1&63,$y=n=>{try{const e=new _t(ha(n));e.skipBits(16),e.readBits(4);const t=e.readBits(3),i=e.readBits(1),{general_profile_space:r,general_tier_flag:s,general_profile_idc:a,general_profile_compatibility_flags:o,general_constraint_indicator_flags:c,general_level_idc:l}=jy(e,t);he(e);const u=he(e);let h=0;u===3&&(h=e.readBits(1));const f=he(e),d=he(e);let g=f,_=d;if(e.readBits(1)){const A=he(e),F=he(e),$=he(e),B=he(e);let I=1,q=1;const k=h===0?u:0;k===1?(I=2,q=2):k===2&&(I=2,q=1),g-=(A+F)*I,_-=($+B)*q}const p=he(e),m=he(e);he(e);const x=e.readBits(1)?0:t;let T=0;for(let A=x;A<=t;A++)he(e),T=he(e),he(e);he(e),he(e),he(e),he(e),he(e),he(e),e.readBits(1)&&e.readBits(1)&&Ky(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),he(e),he(e),e.skipBits(1));const D=he(e);if(Qy(e,D),e.readBits(1)){const A=he(e);for(let F=0;F<A;F++)he(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let C=2,M=2,P=2,W=0,v=0,w={num:1,den:1};if(e.readBits(1)){const A=Jy(e,t);w=A.pixelAspectRatio,C=A.colourPrimaries,M=A.transferCharacteristics,P=A.matrixCoefficients,W=A.fullRangeFlag,v=A.minSpatialSegmentationIdc}return{displayWidth:g,displayHeight:_,pixelAspectRatio:w,colourPrimaries:C,transferCharacteristics:M,matrixCoefficients:P,fullRangeFlag:W,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:t,spsTemporalIdNestingFlag:i,generalProfileSpace:r,generalTierFlag:s,generalProfileIdc:a,generalProfileCompatibilityFlags:o,generalConstraintIndicatorFlags:c,generalLevelIdc:l,chromaFormatIdc:u,bitDepthLumaMinus8:p,bitDepthChromaMinus8:m,minSpatialSegmentationIdc:v}}catch(e){return ht._error("Error parsing HEVC SPS:",e),null}},Yy=n=>{try{const e=[],t=[],i=[],r=[];for(const l of is(n)){const u=n.subarray(l.offset,l.offset+l.length),h=_c(u[0]);h===rn.VPS_NUT?e.push(u):h===rn.SPS_NUT?t.push(u):h===rn.PPS_NUT?i.push(u):(h===rn.PREFIX_SEI_NUT||h===rn.SUFFIX_SEI_NUT)&&r.push(u)}if(t.length===0||i.length===0)return null;const s=$y(t[0]);if(!s)return null;let a=0;if(i.length>0){const l=i[0],u=new _t(ha(l));u.skipBits(16),he(u),he(u),u.skipBits(1),u.skipBits(1),u.skipBits(3),u.skipBits(1),u.skipBits(1),he(u),he(u),$n(u),u.skipBits(1),u.skipBits(1),u.readBits(1)&&he(u),$n(u),$n(u),u.skipBits(1),u.skipBits(1),u.skipBits(1),u.skipBits(1);const h=u.readBits(1),f=u.readBits(1);!h&&!f?a=0:h&&!f?a=2:!h&&f?a=3:a=0}const o=[...e.length?[{arrayCompleteness:1,nalUnitType:rn.VPS_NUT,nalUnits:e}]:[],...t.length?[{arrayCompleteness:1,nalUnitType:rn.SPS_NUT,nalUnits:t}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:rn.PPS_NUT,nalUnits:i}]:[],...r.length?[{arrayCompleteness:1,nalUnitType:_c(r[0][0]),nalUnits:r}]:[]];return{configurationVersion:1,generalProfileSpace:s.generalProfileSpace,generalTierFlag:s.generalTierFlag,generalProfileIdc:s.generalProfileIdc,generalProfileCompatibilityFlags:s.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:s.generalConstraintIndicatorFlags,generalLevelIdc:s.generalLevelIdc,minSpatialSegmentationIdc:s.minSpatialSegmentationIdc,parallelismType:a,chromaFormatIdc:s.chromaFormatIdc,bitDepthLumaMinus8:s.bitDepthLumaMinus8,bitDepthChromaMinus8:s.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:s.spsMaxSubLayersMinus1+1,temporalIdNested:s.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:o}}catch(e){return ht._error("Error building HEVC Decoder Configuration Record:",e),null}},jy=(n,e)=>{const t=n.readBits(2),i=n.readBits(1),r=n.readBits(5);let s=0;for(let u=0;u<32;u++)s=s<<1|n.readBits(1);const a=new Uint8Array(6);for(let u=0;u<6;u++)a[u]=n.readBits(8);const o=n.readBits(8),c=[],l=[];for(let u=0;u<e;u++)c.push(n.readBits(1)),l.push(n.readBits(1));if(e>0)for(let u=e;u<8;u++)n.skipBits(2);for(let u=0;u<e;u++)c[u]&&n.skipBits(88),l[u]&&n.skipBits(8);return{general_profile_space:t,general_tier_flag:i,general_profile_idc:r,general_profile_compatibility_flags:s,general_constraint_indicator_flags:a,general_level_idc:o}},Ky=n=>{for(let e=0;e<4;e++)for(let t=0;t<(e===3?2:6);t++)if(!n.readBits(1))he(n);else{const r=Math.min(64,1<<4+(e<<1));e>1&&$n(n);for(let s=0;s<r;s++)$n(n)}},Qy=(n,e)=>{const t=[];for(let i=0;i<e;i++)t[i]=Zy(n,i,e,t)},Zy=(n,e,t,i)=>{let r=0,s=0,a=0;if(e!==0&&(s=n.readBits(1)),s){if(e===t){const c=he(n);a=e-(c+1)}else a=e-1;n.readBits(1),he(n);const o=i[a]??0;for(let c=0;c<=o;c++)n.readBits(1)||n.readBits(1);r=i[a]}else{const o=he(n),c=he(n);for(let l=0;l<o;l++)he(n),n.readBits(1);for(let l=0;l<c;l++)he(n),n.readBits(1);r=o+c}return r},Jy=(n,e)=>{let t=2,i=2,r=2,s=0,a=0,o={num:1,den:1};if(n.readBits(1)){const c=n.readBits(8);if(c===255)o={num:n.readBits(16),den:n.readBits(16)};else{const l=Pf[c];l&&(o=l)}}return n.readBits(1)&&n.readBits(1),n.readBits(1)&&(n.readBits(3),s=n.readBits(1),n.readBits(1)&&(t=n.readBits(8),i=n.readBits(8),r=n.readBits(8))),n.readBits(1)&&(he(n),he(n)),n.readBits(1),n.readBits(1),n.readBits(1),n.readBits(1)&&(he(n),he(n),he(n),he(n)),n.readBits(1)&&(n.readBits(32),n.readBits(32),n.readBits(1)&&he(n),n.readBits(1)&&ew(n,!0,e)),n.readBits(1)&&(n.readBits(1),n.readBits(1),n.readBits(1),a=he(n),he(n),he(n),he(n),he(n)),{pixelAspectRatio:o,colourPrimaries:t,transferCharacteristics:i,matrixCoefficients:r,fullRangeFlag:s,minSpatialSegmentationIdc:a}},ew=(n,e,t)=>{let i=!1,r=!1,s=!1;i=n.readBits(1)===1,r=n.readBits(1)===1,(i||r)&&(s=n.readBits(1)===1,s&&(n.readBits(8),n.readBits(5),n.readBits(1),n.readBits(5)),n.readBits(4),n.readBits(4),s&&n.readBits(4),n.readBits(5),n.readBits(5),n.readBits(5));for(let a=0;a<=t;a++){const o=n.readBits(1)===1;let c=!0;o||(c=n.readBits(1)===1);let l=!1;c?he(n):l=n.readBits(1)===1;let u=1;l||(u=he(n)+1),i&&Du(n,u,s),r&&Du(n,u,s)}},Du=(n,e,t)=>{for(let i=0;i<e;i++)he(n),he(n),t&&(he(n),he(n)),n.readBits(1)},tw=n=>{const e=[];e.push(n.configurationVersion),e.push((n.generalProfileSpace&3)<<6|(n.generalTierFlag&1)<<5|n.generalProfileIdc&31),e.push(n.generalProfileCompatibilityFlags>>>24&255),e.push(n.generalProfileCompatibilityFlags>>>16&255),e.push(n.generalProfileCompatibilityFlags>>>8&255),e.push(n.generalProfileCompatibilityFlags&255),e.push(...n.generalConstraintIndicatorFlags),e.push(n.generalLevelIdc&255),e.push(240|n.minSpatialSegmentationIdc>>8&15),e.push(n.minSpatialSegmentationIdc&255),e.push(252|n.parallelismType&3),e.push(252|n.chromaFormatIdc&3),e.push(248|n.bitDepthLumaMinus8&7),e.push(248|n.bitDepthChromaMinus8&7),e.push(n.avgFrameRate>>8&255),e.push(n.avgFrameRate&255),e.push((n.constantFrameRate&3)<<6|(n.numTemporalLayers&7)<<3|(n.temporalIdNested&1)<<2|n.lengthSizeMinusOne&3),e.push(n.arrays.length&255);for(const t of n.arrays){e.push((t.arrayCompleteness&1)<<7|0|t.nalUnitType&63),e.push(t.nalUnits.length>>8&255),e.push(t.nalUnits.length&255);for(const i of t.nalUnits){e.push(i.length>>8&255),e.push(i.length&255);for(let r=0;r<i.length;r++)e.push(i[r])}}return new Uint8Array(e)};var Lu;(function(n){n[n.audAllowed=0]="audAllowed",n[n.beforeFirstVcl=1]="beforeFirstVcl",n[n.afterFirstVcl=2]="afterFirstVcl",n[n.eoBitstreamAllowed=3]="eoBitstreamAllowed",n[n.noMoreDataAllowed=4]="noMoreDataAllowed"})(Lu||(Lu={}));const nw=function*(n){const e=new _t(n),t=()=>{let i=0;for(let r=0;r<8;r++){const s=e.readAlignedByte();if(i+=(s&127)*2**(r*7),!(s&128))break;if(r===7&&s&128)return null}return i>2**32-1?null:i};for(;e.getBitsLeft()>=8;){e.skipBits(1);const i=e.readBits(4),r=e.readBits(1),s=e.readBits(1);e.skipBits(1),r&&e.skipBits(8);let a;if(s){const o=t();if(o===null)return;a=o}else a=Math.floor(e.getBitsLeft()/8);V(e.pos%8===0),yield{type:i,data:n.subarray(e.pos/8,e.pos/8+a)},e.skipBits(a*8)}},If=n=>{const e=In(n),t=e.getUint8(9),i=e.getUint16(10,!0),r=e.getUint32(12,!0),s=e.getInt16(16,!0),a=e.getUint8(18);let o=null;return a&&(o=n.subarray(19,21+t)),{outputChannelCount:t,preSkip:i,inputSampleRate:r,outputGain:s,channelMappingFamily:a,channelMappingTable:o}},iw=(n,e,t)=>{switch(n){case"avc":{for(const i of Vy(t,e)){const r=t[i.offset],s=Rf(r);if(s>=Yn.NON_IDR_SLICE&&s<=Yn.SLICE_DPC)return"delta";if(s===Yn.IDR)return"key";if(s===Yn.SEI&&!My()){const a=t.subarray(i.offset,i.offset+i.length),o=ha(a);let c=1;do{let l=0;for(;;){const f=o[c++];if(f===void 0||(l+=f,f<255))break}let u=0;for(;;){const f=o[c++];if(f===void 0||(u+=f,f<255))break}if(l===6){const f=new _t(o);f.pos=8*c;const d=he(f),g=f.readBits(1);if(d===0&&g===1)return"key"}c+=u}while(c<o.length-1)}}return"delta"}case"hevc":{for(const i of qy(t,e)){const r=_c(t[i.offset]);if(r<rn.BLA_W_LP)return"delta";if(r<=rn.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(t[0]&1)===0?"key":"delta";case"vp9":{const i=new _t(t);if(i.readBits(2)!==2)return null;const r=i.readBits(1);return(i.readBits(1)<<1)+r===3&&i.skipBits(1),i.readBits(1)?null:i.readBits(1)===0?"key":"delta"}case"av1":{let i=!1;for(const{type:r,data:s}of nw(t))if(r===1){const a=new _t(s);a.skipBits(4),i=!!a.readBits(1)}else if(r===3||r===6||r===7){if(i)return"key";const a=new _t(s);return a.readBits(1)?null:a.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:ti(n),V(!1)}};var Nu;(function(n){n[n.STREAMINFO=0]="STREAMINFO",n[n.VORBIS_COMMENT=4]="VORBIS_COMMENT",n[n.PICTURE=6]="PICTURE"})(Nu||(Nu={}));const rw=n=>{if(n.length<7||n[0]!==11||n[1]!==119)return null;const e=new _t(n);e.skipBits(16),e.skipBits(16);const t=e.readBits(2);if(t===3)return null;const i=e.readBits(6),r=e.readBits(5);if(r>8)return null;const s=e.readBits(3),a=e.readBits(3);a&1&&a!==1&&e.skipBits(2),a&4&&e.skipBits(2),a===2&&e.skipBits(2);const o=e.readBits(1),c=Math.floor(i/2);return{fscod:t,bsid:r,bsmod:s,acmod:a,lfeon:o,bitRateCode:c}},sw=[1,2,3,6],aw=n=>{if(n.length<6||n[0]!==11||n[1]!==119)return null;const e=new _t(n);e.skipBits(16);const t=e.readBits(2);if(e.skipBits(3),t!==0&&t!==2)return null;const i=e.readBits(11),r=e.readBits(2);let s=0,a;r===3?(s=e.readBits(2),a=3):a=e.readBits(2);const o=e.readBits(3),c=e.readBits(1),l=e.readBits(5);if(l<11||l>16)return null;const u=sw[a];let h;return r<3?h=Oy[r]/1e3:h=ky[s]/1e3,{dataRate:Math.round((i+1)*h/(u*16)),substreams:[{fscod:r,fscod2:s,bsid:l,bsmod:0,acmod:o,lfeon:c,numDepSub:0,chanLoc:0}]}},ow=1683496997,cw=18,lw=10,Bu=32,uw=20,hw=8,fw=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],dw=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],pw=[16,16,20,20,0,24,24,0],Ou=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],mw=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],gw=8,_w=[32e3,44100,48e3,0],vw=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],xw=[512,1024,2048,4096],yw=n=>{const e=ww(n),t=In(n);let i=e?Math.ceil(e.frameSize/4)*4:0,r=null;for(;i+4<=n.length&&t.getUint32(i)===ow;){const a=bw(n.subarray(i));if(!a)break;r??=a,i+=a.frameSize}if(e)return{frameSize:r?i:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:r!==null};if(!r?.asset)return null;const{asset:s}=r;return{frameSize:i,sampleRate:s.sampleRate,numberOfChannels:s.numberOfChannels,sampleCount:s.sampleCount,channelLayout:s.channelLayout,pcmResolution:s.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},ww=n=>{if(n.length<cw||n[0]!==127||n[1]!==254||n[2]!==128||n[3]!==1)return null;const e=new _t(n);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==Bu-1)return null;const t=e.readBits(1),i=e.readBits(7)+1;if(i%hw!==0)return null;const r=e.readBits(14)+1;if(r<96)return null;const s=e.readBits(6);if(s>=Ou.length)return null;const a=fw[e.readBits(4)];if(a===0)return null;const o=dw[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const c=e.readBits(2);if(c===3)return null;e.skipBits(1),t&&e.skipBits(16),e.skipBits(7);const l=pw[e.readBits(3)];if(l===0)return null;const u=c!==0;return{frameSize:r,sampleRate:a,numberOfChannels:Ou[s]+(u?1:0),sampleCount:i*Bu,channelLayout:mw[s]|(u?gw:0),amode:s,lfePresent:u,bitRate:o,pcmResolution:l}},bw=n=>{if(n.length<lw||n[0]!==100||n[1]!==88||n[2]!==32||n[3]!==37)return null;const e=new _t(n);e.skipBits(32),e.skipBits(8);const t=e.readBits(2),i=e.readBits(1),r=8+4*i,s=16+4*i;e.skipBits(r);const a=e.readBits(s)+1,o={frameSize:a,asset:null};if(!e.readBits(1))return o;const c=_w[e.readBits(2)],l=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const u=e.readBits(3)+1,h=e.readBits(3)+1,f=[];for(let m=0;m<u;m++)f.push(e.readBits(t+1));for(const m of f)e.skipBits(8*wy(m));if(e.readBits(1)){e.skipBits(2);const m=e.readBits(2)+1<<2,b=e.readBits(2)+1;e.skipBits(b*m)}for(let m=0;m<h;m++)e.skipBits(s);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const d=e.readBits(5)+1,g=vw[e.readBits(4)],_=e.readBits(8)+1;let p=0;if(e.readBits(1)&&(_>2&&e.skipBits(1),_>6&&e.skipBits(1),e.readBits(1))){const m=e.readBits(2)+1<<2;p=e.readBits(m)}return c===0||e.getBitsLeft()<0?o:{frameSize:a,asset:{sampleRate:g,numberOfChannels:_,sampleCount:Math.round(l*g/c),channelLayout:p,pcmResolution:d}}},Sw=n=>{const e=new Uint8Array(uw),t=In(e);t.setUint32(0,n.sampleRate),t.setUint32(4,n.bitRate),t.setUint32(8,n.bitRate),e[12]=n.pcmResolution;const i=n.core&&!n.hasExtensions?1:0,r=new _t(e);return r.seekToByte(13),r.writeBits(2,Math.max(xw.indexOf(n.sampleCount),0)),r.writeBits(5,i),r.writeBits(1,n.core?.lfePresent?1:0),r.writeBits(6,n.core?.amode??0),r.writeBits(14,n.core?n.core.frameSize-1:0),r.writeBits(1,0),r.writeBits(3,0),r.writeBits(16,n.channelLayout),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Sn=["avc","hevc","vp9","av1","vp8","prores"],Jt=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],fa=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],bi=[...fa,...Jt],Hi=["webvtt"],ta=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],ku=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],zu=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Vu=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Gr=["ap4x","ap4h","apch","apcn","apcs","apco"],vc=["dtsc","dtsh","dtsl","dtse"],Tw=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Ew=(n,e,t,i,r)=>{if(n==="avc"){const a=Math.ceil(e/16)*Math.ceil(t/16),o=ta.find(f=>a<=f.maxMacroblocks&&i<=f.maxBitrate)??wn(ta),c=o?o.level:0,l="64".padStart(2,"0"),u="00",h=c.toString(16).padStart(2,"0");return`avc1.${l}${u}${h}`}else if(n==="hevc"){const s="",o="6",c=e*t,l=ku.find(h=>c<=h.maxPictureSize&&i<=h.maxBitrate)??wn(ku);return`hev1.${s}1.${o}.${l.tier}${l.level}.B0`}else{if(n==="vp8")return"vp8";if(n==="vp9"){const s="00",a=e*t,o=zu.find(l=>a<=l.maxPictureSize&&i<=l.maxBitrate)??wn(zu);return`vp09.${s}.${o.level.toString().padStart(2,"0")}.08`}else if(n==="av1"){const a=e*t,o=Vu.find(u=>a<=u.maxPictureSize&&i<=u.maxBitrate)??wn(Vu);return`av01.0.${o.level.toString().padStart(2,"0")}${o.tier}.08`}else if(n==="prores"){const a=Math.pow(e*t/2073600,.95),o=Tw.filter(u=>u.alpha===r);let c=o[0].fourCc,l=1/0;for(const{fourCc:u,bitrate:h}of o){const f=Math.abs(h*a-i);f<l&&(l=f,c=u)}return c}else ti(n)}throw new TypeError(`Unhandled codec '${String(n)}'.`)},Mw=n=>{const e=n.split("."),t=Number(e[1]),i=Number(e[2]),r=Number(e[3]),s=e[4]?Number(e[4]):1;return[1,1,t,2,1,i,3,1,r,4,1,s]},Ff=n=>{const e=n.split("."),r=(1<<7)+1,s=Number(e[1]),a=e[2],o=Number(a.slice(0,-1)),c=(s<<5)+o,l=a.slice(-1)==="H"?1:0,u=Number(e[3]),h=u===8?0:1,f=u===12?1:0,d=e[4]?Number(e[4]):0,g=e[5]?Number(e[5][0]):1,_=e[5]?Number(e[5][1]):1,p=e[5]?Number(e[5][2]):0,m=(l<<7)+(h<<6)+(f<<5)+(d<<4)+(g<<3)+(_<<2)+p;return[r,c,m,0]},Cw=(n,e,t)=>{if(n==="aac")return e>=2&&t<=24e3?"mp4a.40.29":t<=24e3?"mp4a.40.5":"mp4a.40.2";if(n==="mp3")return"mp3";if(n==="opus")return"opus";if(n==="vorbis")return"vorbis";if(n==="flac")return"flac";if(n==="ac3")return"ac-3";if(n==="eac3")return"ec-3";if(n==="dts")return"dtsc";if(Jt.includes(n))return n;throw new TypeError(`Unhandled codec '${n}'.`)},Aw=48e3,Uf=/^pcm-([usf])(\d+)(be)?$/,Si=n=>{if(V(Jt.includes(n)),n==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(n==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=Uf.exec(n);V(e);let t;e[1]==="u"?t="unsigned":e[1]==="s"?t="signed":t="float";const i=Number(e[2])/8,r=e[3]!=="be",s=n==="pcm-u8"?2**7:0;return{dataType:t,sampleSize:i,littleEndian:r,silentValue:s}},da=n=>n.startsWith("avc1")||n.startsWith("avc3")?"avc":n.startsWith("hev1")||n.startsWith("hvc1")?"hevc":n==="vp8"?"vp8":n.startsWith("vp09")?"vp9":n.startsWith("av01")?"av1":Gr.includes(n)?"prores":n==="mp3"||n==="mp4a.69"||n==="mp4a.6B"||n==="mp4a.6b"||n==="mp4a.40.34"?"mp3":n.startsWith("mp4a.40.")||n==="mp4a.67"?"aac":n==="opus"||n==="Opus"?"opus":n==="vorbis"?"vorbis":n==="flac"?"flac":n==="ac-3"||n==="ac3"?"ac3":n==="ec-3"||n==="eac3"?"eac3":vc.includes(n)?"dts":n==="ulaw"?"ulaw":n==="alaw"?"alaw":Uf.test(n)?n:n==="webvtt"?"webvtt":null,Rw=n=>n==="avc"?{avc:{format:"avc"}}:n==="hevc"?{hevc:{format:"hevc"}}:{},Pw=n=>n==="aac"?{aac:{format:"aac"}}:n==="opus"?{opus:{format:"opus"}}:{},Iw=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Gr],Fw=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Uw=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,Dw=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,Lw=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Yc=(n,e)=>{if(!n)throw new TypeError("Video chunk metadata must be provided.");if(typeof n!="object")throw new TypeError("Video chunk metadata must be an object.");if(!n.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof n.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof n.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Iw.some(t=>n.decoderConfig.codec.startsWith(t)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(n.decoderConfig.codedWidth)||n.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(n.decoderConfig.codedHeight)||n.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(n.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(n.decoderConfig.displayAspectWidth)||n.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(n.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(n.decoderConfig.displayAspectHeight)||n.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(n.decoderConfig.displayAspectWidth!==void 0!=(n.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(n.decoderConfig.description!==void 0&&!la(n.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(n.decoderConfig.colorSpace!==void 0){const{colorSpace:t}=n.decoderConfig;if(typeof t!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const i=Object.keys(es);if(t.primaries!=null&&!i.includes(t.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${i.join(", ")}.`);const r=Object.keys(ts);if(t.transfer!=null&&!r.includes(t.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${r.join(", ")}.`);const s=Object.keys(ns);if(t.matrix!=null&&!s.includes(t.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${s.join(", ")}.`);if(t.fullRange!=null&&typeof t.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(n.decoderConfig.codec.startsWith("avc1")||n.decoderConfig.codec.startsWith("avc3")){if(!Fw.test(n.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(n.decoderConfig.codec.startsWith("hev1")||n.decoderConfig.codec.startsWith("hvc1")){if(!Uw.test(n.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(n.decoderConfig.codec.startsWith("vp8")){if(n.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(n.decoderConfig.codec.startsWith("vp09")){if(!Dw.test(n.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(n.decoderConfig.codec.startsWith("av01")){if(!Lw.test(n.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Gr.some(t=>n.decoderConfig.codec.startsWith(t))&&!Gr.some(t=>n.decoderConfig.codec===t))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Gr.join(", ")}.`);if(e!==null&&da(n.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${n.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Nw=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],jc=(n,e)=>{if(!n)throw new TypeError("Audio chunk metadata must be provided.");if(typeof n!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!n.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof n.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof n.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Nw.some(t=>n.decoderConfig.codec.startsWith(t)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(n.decoderConfig.sampleRate)||n.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(n.decoderConfig.numberOfChannels)||n.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(n.decoderConfig.description!==void 0&&!la(n.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(n.decoderConfig.codec.startsWith("mp4a")&&n.decoderConfig.codec!=="mp4a.69"&&n.decoderConfig.codec!=="mp4a.6B"&&n.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(n.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(n.decoderConfig.codec.startsWith("mp3")||n.decoderConfig.codec.startsWith("mp4a")){if(n.decoderConfig.codec!=="mp3"&&n.decoderConfig.codec!=="mp4a.69"&&n.decoderConfig.codec!=="mp4a.6B"&&n.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(n.decoderConfig.codec.startsWith("opus")){if(n.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(n.decoderConfig.description&&n.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(n.decoderConfig.codec.startsWith("vorbis")){if(n.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!n.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(n.decoderConfig.codec.startsWith("flac")){if(n.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!n.decoderConfig.description||n.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(n.decoderConfig.codec.startsWith("ac-3")||n.decoderConfig.codec.startsWith("ac3")){if(n.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(n.decoderConfig.codec.startsWith("ec-3")||n.decoderConfig.codec.startsWith("eac3")){if(n.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(n.decoderConfig.codec.startsWith("dts")){if(!vc.includes(n.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${vc.join(", ")}.`)}else if((n.decoderConfig.codec.startsWith("pcm")||n.decoderConfig.codec.startsWith("ulaw")||n.decoderConfig.codec.startsWith("alaw"))&&!Jt.includes(n.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Jt.join(", ")}).`);if(e!==null&&da(n.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${n.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Df=n=>{if(!n)throw new TypeError("Subtitle metadata must be provided.");if(typeof n!="object")throw new TypeError("Subtitle metadata must be an object.");if(!n.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof n.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof n.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Hu=new Uint8Array(0);class Un{constructor(e,t,i,r,s=-1,a,o){if(this.data=e,this.type=t,this.timestamp=i,this.duration=r,this.sequenceNumber=s,e===Hu&&a===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(a===void 0&&(a=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(t!=="key"&&t!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(i))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(r)||r<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(s))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(a)||a<0)throw new TypeError("byteLength must be a non-negative integer.");if(o!==void 0&&(typeof o!="object"||!o))throw new TypeError("sideData, when provided, must be an object.");if(o?.alpha!==void 0&&!(o.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(o?.alphaByteLength!==void 0&&(!Number.isInteger(o.alphaByteLength)||o.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=a,this.sideData=o??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Hu}get microsecondTimestamp(){return Math.trunc(_i*this.timestamp)}get microsecondDuration(){return Math.trunc(_i*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,t){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const i=new Uint8Array(e.byteLength);return e.copyTo(i),new Un(i,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,t)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new Un(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Bw=n=>{let t=(n.hasVideo?"video/":n.hasAudio?"audio/":"application/")+(n.isQuickTime?"quicktime":"mp4");if(n.codecStrings.length>0){const i=[...new Set(n.codecStrings)];t+=`; codecs="${i.join(", ")}"`}return t};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const uo=8,Gu=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Or{constructor(e){this.value=e}}class xc{constructor(e){this.value=e}}class Lf{constructor(e){this.value=e}}class hi{constructor(e){this.value=e}}var K;(function(n){n[n.EBML=440786851]="EBML",n[n.EBMLVersion=17030]="EBMLVersion",n[n.EBMLReadVersion=17143]="EBMLReadVersion",n[n.EBMLMaxIDLength=17138]="EBMLMaxIDLength",n[n.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",n[n.DocType=17026]="DocType",n[n.DocTypeVersion=17031]="DocTypeVersion",n[n.DocTypeReadVersion=17029]="DocTypeReadVersion",n[n.Void=236]="Void",n[n.Segment=408125543]="Segment",n[n.SeekHead=290298740]="SeekHead",n[n.Seek=19899]="Seek",n[n.SeekID=21419]="SeekID",n[n.SeekPosition=21420]="SeekPosition",n[n.Duration=17545]="Duration",n[n.Info=357149030]="Info",n[n.TimestampScale=2807729]="TimestampScale",n[n.MuxingApp=19840]="MuxingApp",n[n.WritingApp=22337]="WritingApp",n[n.Tracks=374648427]="Tracks",n[n.TrackEntry=174]="TrackEntry",n[n.TrackNumber=215]="TrackNumber",n[n.TrackUID=29637]="TrackUID",n[n.TrackType=131]="TrackType",n[n.FlagEnabled=185]="FlagEnabled",n[n.FlagDefault=136]="FlagDefault",n[n.FlagForced=21930]="FlagForced",n[n.FlagOriginal=21934]="FlagOriginal",n[n.FlagHearingImpaired=21931]="FlagHearingImpaired",n[n.FlagVisualImpaired=21932]="FlagVisualImpaired",n[n.FlagCommentary=21935]="FlagCommentary",n[n.FlagLacing=156]="FlagLacing",n[n.Name=21358]="Name",n[n.Language=2274716]="Language",n[n.LanguageBCP47=2274717]="LanguageBCP47",n[n.CodecID=134]="CodecID",n[n.CodecPrivate=25506]="CodecPrivate",n[n.CodecDelay=22186]="CodecDelay",n[n.SeekPreRoll=22203]="SeekPreRoll",n[n.DefaultDuration=2352003]="DefaultDuration",n[n.Video=224]="Video",n[n.PixelWidth=176]="PixelWidth",n[n.PixelHeight=186]="PixelHeight",n[n.DisplayWidth=21680]="DisplayWidth",n[n.DisplayHeight=21690]="DisplayHeight",n[n.DisplayUnit=21682]="DisplayUnit",n[n.AlphaMode=21440]="AlphaMode",n[n.Audio=225]="Audio",n[n.SamplingFrequency=181]="SamplingFrequency",n[n.Channels=159]="Channels",n[n.BitDepth=25188]="BitDepth",n[n.SimpleBlock=163]="SimpleBlock",n[n.BlockGroup=160]="BlockGroup",n[n.Block=161]="Block",n[n.BlockAdditions=30113]="BlockAdditions",n[n.BlockMore=166]="BlockMore",n[n.BlockAdditional=165]="BlockAdditional",n[n.BlockAddID=238]="BlockAddID",n[n.BlockDuration=155]="BlockDuration",n[n.ReferenceBlock=251]="ReferenceBlock",n[n.Cluster=524531317]="Cluster",n[n.Timestamp=231]="Timestamp",n[n.Cues=475249515]="Cues",n[n.CuePoint=187]="CuePoint",n[n.CueTime=179]="CueTime",n[n.CueTrackPositions=183]="CueTrackPositions",n[n.CueTrack=247]="CueTrack",n[n.CueClusterPosition=241]="CueClusterPosition",n[n.Colour=21936]="Colour",n[n.MatrixCoefficients=21937]="MatrixCoefficients",n[n.TransferCharacteristics=21946]="TransferCharacteristics",n[n.Primaries=21947]="Primaries",n[n.Range=21945]="Range",n[n.Projection=30320]="Projection",n[n.ProjectionType=30321]="ProjectionType",n[n.ProjectionPoseYaw=30323]="ProjectionPoseYaw",n[n.ProjectionPosePitch=30324]="ProjectionPosePitch",n[n.ProjectionPoseRoll=30325]="ProjectionPoseRoll",n[n.Attachments=423732329]="Attachments",n[n.AttachedFile=24999]="AttachedFile",n[n.FileDescription=18046]="FileDescription",n[n.FileName=18030]="FileName",n[n.FileMediaType=18016]="FileMediaType",n[n.FileData=18012]="FileData",n[n.FileUID=18094]="FileUID",n[n.Chapters=272869232]="Chapters",n[n.Tags=307544935]="Tags",n[n.Tag=29555]="Tag",n[n.Targets=25536]="Targets",n[n.TargetTypeValue=26826]="TargetTypeValue",n[n.TargetType=25546]="TargetType",n[n.TagTrackUID=25541]="TagTrackUID",n[n.TagEditionUID=25545]="TagEditionUID",n[n.TagChapterUID=25540]="TagChapterUID",n[n.TagAttachmentUID=25542]="TagAttachmentUID",n[n.SimpleTag=26568]="SimpleTag",n[n.TagName=17827]="TagName",n[n.TagLanguage=17530]="TagLanguage",n[n.TagString=17543]="TagString",n[n.TagBinary=17541]="TagBinary",n[n.ContentEncodings=28032]="ContentEncodings",n[n.ContentEncoding=25152]="ContentEncoding",n[n.ContentEncodingOrder=20529]="ContentEncodingOrder",n[n.ContentEncodingScope=20530]="ContentEncodingScope",n[n.ContentCompression=20532]="ContentCompression",n[n.ContentCompAlgo=16980]="ContentCompAlgo",n[n.ContentCompSettings=16981]="ContentCompSettings",n[n.ContentEncryption=20533]="ContentEncryption"})(K||(K={}));K.EBML,K.Segment;K.SeekHead,K.Info,K.Cluster,K.Tracks,K.Cues,K.Attachments,K.Chapters,K.Tags;const Wu=n=>n<256?1:n<65536?2:n<1<<24?3:n<2**32?4:n<2**40?5:6,Xu=n=>n<1n<<8n?1:n<1n<<16n?2:n<1n<<24n?3:n<1n<<32n?4:n<1n<<40n?5:n<1n<<48n?6:n<1n<<56n?7:8,qu=n=>n>=-64&&n<64?1:n>=-8192&&n<8192?2:n>=-1048576&&n<1<<20?3:n>=-134217728&&n<1<<27?4:n>=-17179869184&&n<2**34?5:6,Ow=n=>{if(n<127)return 1;if(n<16383)return 2;if(n<(1<<21)-1)return 3;if(n<(1<<28)-1)return 4;if(n<2**35-1)return 5;if(n<2**42-1)return 6;throw new Error("EBML varint size not supported "+n)};class kw{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap,this.dataOffsets=new WeakMap}writeByte(e){this.helperView.setUint8(0,e),this.writer.write(this.helper.subarray(0,1))}writeFloat32(e){this.helperView.setFloat32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeFloat64(e){this.helperView.setFloat64(0,e,!1),this.writer.write(this.helper)}writeUnsignedInt(e,t=Wu(e)){let i=0;switch(t){case 6:this.helperView.setUint8(i++,e/2**40|0);case 5:this.helperView.setUint8(i++,e/2**32|0);case 4:this.helperView.setUint8(i++,e>>24);case 3:this.helperView.setUint8(i++,e>>16);case 2:this.helperView.setUint8(i++,e>>8);case 1:this.helperView.setUint8(i++,e);break;default:throw new Error("Bad unsigned int size "+t)}this.writer.write(this.helper.subarray(0,i))}writeUnsignedBigInt(e,t=Xu(e)){let i=0;for(let r=t-1;r>=0;r--)this.helperView.setUint8(i++,Number(e>>BigInt(r*8)&0xffn));this.writer.write(this.helper.subarray(0,i))}writeSignedInt(e,t=qu(e)){e<0&&(e+=2**(t*8)),this.writeUnsignedInt(e,t)}writeVarInt(e,t=Ow(e)){let i=0;switch(t){case 1:this.helperView.setUint8(i++,128|e);break;case 2:this.helperView.setUint8(i++,64|e>>8),this.helperView.setUint8(i++,e);break;case 3:this.helperView.setUint8(i++,32|e>>16),this.helperView.setUint8(i++,e>>8),this.helperView.setUint8(i++,e);break;case 4:this.helperView.setUint8(i++,16|e>>24),this.helperView.setUint8(i++,e>>16),this.helperView.setUint8(i++,e>>8),this.helperView.setUint8(i++,e);break;case 5:this.helperView.setUint8(i++,8|e/2**32&7),this.helperView.setUint8(i++,e>>24),this.helperView.setUint8(i++,e>>16),this.helperView.setUint8(i++,e>>8),this.helperView.setUint8(i++,e);break;case 6:this.helperView.setUint8(i++,4|e/2**40&3),this.helperView.setUint8(i++,e/2**32|0),this.helperView.setUint8(i++,e>>24),this.helperView.setUint8(i++,e>>16),this.helperView.setUint8(i++,e>>8),this.helperView.setUint8(i++,e);break;default:throw new Error("Bad EBML varint size "+t)}this.writer.write(this.helper.subarray(0,i))}writeAsciiString(e){this.writer.write(new Uint8Array(e.split("").map(t=>t.charCodeAt(0))))}writeEBML(e){if(e!==null)if(e instanceof Uint8Array)this.writer.write(e);else if(Array.isArray(e))for(const t of e)this.writeEBML(t);else if(this.offsets.set(e,this.writer.getPos()),this.writeUnsignedInt(e.id),Array.isArray(e.data)){const t=this.writer.getPos(),i=e.size===-1?1:e.size??4;e.size===-1?this.writeByte(255):this.writer.seek(this.writer.getPos()+i);const r=this.writer.getPos();if(this.dataOffsets.set(e,r),this.writeEBML(e.data),e.size!==-1){const s=this.writer.getPos()-r,a=this.writer.getPos();this.writer.seek(t),this.writeVarInt(s,i),this.writer.seek(a)}}else if(typeof e.data=="number"){const t=e.size??Wu(e.data);this.writeVarInt(t),this.writeUnsignedInt(e.data,t)}else if(typeof e.data=="bigint"){const t=e.size??Xu(e.data);this.writeVarInt(t),this.writeUnsignedBigInt(e.data,t)}else if(typeof e.data=="string")this.writeVarInt(e.data.length),this.writeAsciiString(e.data);else if(e.data instanceof Uint8Array)this.writeVarInt(e.data.byteLength,e.size),this.writer.write(e.data);else if(e.data instanceof Or)this.writeVarInt(4),this.writeFloat32(e.data.value);else if(e.data instanceof xc)this.writeVarInt(8),this.writeFloat64(e.data.value);else if(e.data instanceof Lf){const t=e.size??qu(e.data.value);this.writeVarInt(t),this.writeSignedInt(e.data.value,t)}else if(e.data instanceof hi){const t=Nt.encode(e.data.value);this.writeVarInt(t.length),this.writer.write(t)}else ti(e.data)}}const zw={avc:"V_MPEG4/ISO/AVC",hevc:"V_MPEGH/ISO/HEVC",vp8:"V_VP8",vp9:"V_VP9",av1:"V_AV1",prores:"V_PRORES",aac:"A_AAC",mp3:"A_MPEG/L3",opus:"A_OPUS",vorbis:"A_VORBIS",flac:"A_FLAC",ac3:"A_AC3",eac3:"A_EAC3",dts:"A_DTS","pcm-u8":"A_PCM/INT/LIT","pcm-s16":"A_PCM/INT/LIT","pcm-s16be":"A_PCM/INT/BIG","pcm-s24":"A_PCM/INT/LIT","pcm-s24be":"A_PCM/INT/BIG","pcm-s32":"A_PCM/INT/LIT","pcm-s32be":"A_PCM/INT/BIG","pcm-f32":"A_PCM/FLOAT/IEEE","pcm-f64":"A_PCM/FLOAT/IEEE",webvtt:"S_TEXT/WEBVTT"};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Vw=n=>{let t=(n.hasVideo?"video/":n.hasAudio?"audio/":"application/")+(n.isWebM?"webm":"x-matroska");if(n.codecStrings.length>0){const i=[...new Set(n.codecStrings.filter(Boolean))];t+=`; codecs="${i.join(", ")}"`}return t};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Nf=7,Bf=9,na=n=>{const e=n.filePos,t=ob(n,9),i=new _t(t);if(i.readBits(12)!==4095||(i.skipBits(1),i.readBits(2)!==0))return null;const a=i.readBits(1),o=i.readBits(2)+1,c=i.readBits(4);if(c===15)return null;i.skipBits(1);const l=i.readBits(3);if(l===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");i.skipBits(1),i.skipBits(1),i.skipBits(1),i.skipBits(1);const u=i.readBits(13);i.skipBits(11);const h=i.readBits(2)+1;if(h!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let f=null;return a===1?n.filePos-=2:f=i.readBits(16),{objectType:o,samplingFrequencyIndex:c,channelConfiguration:l,frameLength:u,numberOfAacFrames:h,crcCheck:f,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Hw=function(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e},Gw=function(n){return function(e){function t(a){e.error=e.hasError?new n(a,e.error,"An error was suppressed during disposal."):a,e.hasError=!0}var i,r=0;function s(){for(;i=e.stack.pop();)try{if(!i.async&&r===1)return r=0,e.stack.push(i),Promise.resolve().then(s);if(i.dispose){var a=i.dispose.call(i.value);if(i.async)return r|=2,Promise.resolve(a).then(s,function(o){return t(o),s()})}else r|=1}catch(o){t(o)}if(r===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}}(typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i});Iy();let $u=-1/0,Yu=-1/0,Yr=null;typeof FinalizationRegistry<"u"&&(Yr=new FinalizationRegistry(n=>{const e=performance.now();n.type==="video"?(e-$u>=1e3&&(ht._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),$u=e),typeof VideoFrame<"u"&&n.data instanceof VideoFrame&&n.data.close()):(e-Yu>=1e3&&(ht._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Yu=e),typeof AudioData<"u"&&n.data instanceof AudioData&&n.data.close())}));class Fi{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const yc=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Ww=new Set(yc);class Yt{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(_i*this.timestamp)}get microsecondDuration(){return Math.trunc(_i*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,t){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!t||typeof t!="object")throw new TypeError("init must be an object.");if(t.format===void 0||!Ww.has(t.format))throw new TypeError("init.format must be one of: "+yc.join(", "));if(!Number.isInteger(t.codedWidth)||t.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(t.codedHeight)||t.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(t.rotation!==void 0&&![0,90,180,270].includes(t.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(t.flip!==void 0&&typeof t.flip!="boolean")throw new TypeError("init.flip, when provided, must be a boolean.");if(!Number.isFinite(t.timestamp))throw new TypeError("init.timestamp must be a number.");if(t.duration!==void 0&&(!Number.isFinite(t.duration)||t.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const s of t.layout){if(!s||typeof s!="object"||Array.isArray(s))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(s.offset)||s.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(s.stride)||s.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.visibleRect!==void 0&&oo(t.visibleRect,"init.visibleRect"),t.displayWidth!==void 0&&(!Number.isInteger(t.displayWidth)||t.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(t.displayHeight!==void 0&&(!Number.isInteger(t.displayHeight)||t.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(t.displayWidth!==void 0!=(t.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=t.format,this.rotation=t.rotation??0,this.flip=t.flip??!1,this.timestamp=t.timestamp,this.duration=t.duration??0;const i=t.layout??$w(t.format,t.codedWidth,t.codedHeight);let r=t.colorSpace??null;r===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?r={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:r={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:t.visibleRect?.left??0,top:t.visibleRect?.top??0,width:t.visibleRect?.width??t.codedWidth,height:t.visibleRect?.height??t.codedHeight},t.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?t.displayWidth:t.displayHeight,this.squarePixelHeight=this.rotation%180===0?t.displayHeight:t.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=t._doNotCopy?Vt(e):Vt(e).slice(),this._layout=i,this.colorSpace=new ho(r)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(t?.rotation!==void 0&&![0,90,180,270].includes(t.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(t?.flip!==void 0&&typeof t.flip!="boolean")throw new TypeError("init.flip, when provided, must be a boolean.");if(t?.timestamp!==void 0&&!Number.isFinite(t?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(t?.duration!==void 0&&(!Number.isFinite(t.duration)||t.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");t?.visibleRect!==void 0&&oo(t.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=t?.rotation??0,this.flip=t?.flip??!1,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=t?.timestamp??e.timestamp/1e6,this.duration=t?.duration??(e.duration??0)/1e6,this.colorSpace=new ho(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!t||typeof t!="object")throw new TypeError("init must be an object.");if(t.rotation!==void 0&&![0,90,180,270].includes(t.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(t.flip!==void 0&&typeof t.flip!="boolean")throw new TypeError("init.flip, when provided, must be a boolean.");if(!Number.isFinite(t.timestamp))throw new TypeError("init.timestamp must be a number.");if(t.duration!==void 0&&(!Number.isFinite(t.duration)||t.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(t.visibleRect!==void 0&&oo(t.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Yt(new VideoFrame(e,{timestamp:Math.trunc(t.timestamp*_i),duration:Math.trunc((t.duration??0)*_i)||void 0,visibleRect:t.visibleRect&&{x:t.visibleRect.left,y:t.visibleRect.top,width:t.visibleRect.width,height:t.visibleRect.height}}),t);let i=0,r=0;if("naturalWidth"in e?(i=e.naturalWidth,r=e.naturalHeight):"videoWidth"in e?(i=e.videoWidth,r=e.videoHeight):"width"in e&&(i=Number(e.width),r=Number(e.height)),!i||!r)throw new TypeError("Could not determine dimensions.");const s=t.visibleRect??{left:0,top:0,width:i,height:r},a=new OffscreenCanvas(s.width,s.height),o=a.getContext("2d",{alpha:Sf(),willReadFrequently:!0});if(!o)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");o.drawImage(e,-s.left,-s.top),this._data=a,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:s.width,height:s.height},this.squarePixelWidth=s.width,this.squarePixelHeight=s.height,this.rotation=t.rotation??0,this.flip=t.flip??!1,this.timestamp=t.timestamp,this.duration=t.duration??0,this.colorSpace=new ho({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Fi){if(!t||typeof t!="object")throw new TypeError("init must be an object.");if(t.rotation!==void 0&&![0,90,180,270].includes(t.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(t.flip!==void 0&&typeof t.flip!="boolean")throw new TypeError("init.flip, when provided, must be a boolean.");if(!Number.isFinite(t.timestamp))throw new TypeError("init.timestamp must be a number.");if(t.duration!==void 0&&(!Number.isFinite(t.duration)||t.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!yc.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=t.rotation??0,this.flip=t.flip??!1,this.timestamp=t.timestamp,this.duration=t.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=t?.encodeOptions??{},this.pixelAspectRatio=Xc({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Yr?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return V(this._data!==null),this._data instanceof Fi?new Yt(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,flip:this.flip,encodeOptions:this.encodeOptions}):Fr(this._data)?new Yt(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,flip:this.flip,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(V(this._layout),new Yt(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,flip:this.flip,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Yt(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,flip:this.flip,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Yr?.unregister(this),this._data instanceof Fi?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Fr(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Zu(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Fr(this._data)?this._data.allocationSize(e):Ju(this,e).allocationSize}async copyTo(e,t={}){if(!la(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Zu(t),this._closed)throw new Error("VideoSample is closed.");if((t.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(V(this._data!==null),Fr(this._data))return this._data.copyTo(e,t);if(t.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(t.format))if(this._data instanceof Fi){const l={stack:[],error:void 0,hasError:!1};try{const u=Hw(l,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,flip:this.flip},t.colorSpace??"srgb"),!1);if(!(u instanceof Yt))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(u.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${u.format}' instead.`);return await u.copyTo(e,t)}catch(u){l.error=u,l.hasError=!0}finally{Gw(l)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const l=this.toVideoFrame(),u=await l.copyTo(e,t);return l.close(),u}const i=Ju(this,t);V(this.format);const r=Vt(e);if(r.byteLength<i.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${i.allocationSize}, Available: ${r.byteLength}`);const s=pa(this.format);let a;if(this._data instanceof Fi){let l=this._data.getDataPlanes();if(xi(l)&&(l=await l),!Array.isArray(l)||l.some(u=>!(u.data instanceof Uint8Array)||!Number.isInteger(u.stride)||u.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');a=l}else if(this._data instanceof Uint8Array)V(this._layout),V(this._layout.length===s.length),a=this._layout.map((l,u)=>{const h=Math.ceil(this.codedHeight/s[u].heightDivisor);return{data:this._data.subarray(l.offset,l.offset+l.stride*h),stride:l.stride}});else{const u=this._data.getContext("2d");V(u);const h=u.getImageData(0,0,this.codedWidth,this.codedHeight);a=[{data:Vt(h.data),stride:4*this.codedWidth}]}const o=[],c=s.length;for(let l=0;l<c;l++){const u=i.computedLayouts[l],h=a[l].stride,f=a[l].data;let d=u.sourceTop*h;d+=u.sourceLeftBytes;let g=u.destinationOffset;const _=u.sourceWidthBytes,p={offset:g,stride:u.destinationStride};for(let m=0;m<u.sourceHeight;m++){if(d+_>f.byteLength)throw new Error("Source buffer OOB read.");if(g+_>r.byteLength)throw new Error("Destination buffer OOB write.");const b=f.subarray(d,d+_);r.set(b,g),d+=h,g+=u.destinationStride}o.push(p)}if(t.format!==void 0){const l=this.format.startsWith("RGB")!==t.format.startsWith("RGB"),u=this.format.includes("X")&&t.format.includes("A");if(l||u)for(let h=0;h<i.allocationSize;h+=4){if(l){const f=r[h],d=r[h+2];r[h]=d,r[h+2]=f}u&&(r[h+3]=255)}}return o}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(V(this._data!==null),this._data instanceof Fi){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(xi(e))throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const t=e.reduce((a,o)=>a+o.data.byteLength,0),i=new Uint8Array(t);let r=0;const s=[];for(const a of e)i.set(a.data,r),s.push(r),r+=a.data.byteLength;return new VideoFrame(i,{format:this.format,layout:e.map((a,o)=>({offset:s[o],stride:a.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Fr(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(V(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,t,i,r,s,a,o,c,l){let u=0,h=0,f=this.displayWidth,d=this.displayHeight,g=0,_=0,p=this.displayWidth,m=this.displayHeight;if(a!==void 0?(u=t,h=i,f=r,d=s,g=a,_=o,c!==void 0?(p=c,m=l):(p=f,m=d)):(g=t,_=i,r!==void 0&&(p=r,m=s)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(u))throw new TypeError("sx must be a number.");if(!Number.isFinite(h))throw new TypeError("sy must be a number.");if(!Number.isFinite(f)||f<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(d)||d<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(g))throw new TypeError("dx must be a number.");if(!Number.isFinite(_))throw new TypeError("dy must be a number.");if(!Number.isFinite(p)||p<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(m)||m<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:u,sy:h,sWidth:f,sHeight:d}=this._unmapSourceRegion(u,h,f,d,this.rotation,this.flip));const b=this.toCanvasImageSource();e.save();const x=g+p/2,T=_+m/2;e.translate(x,T),this.flip&&e.scale(-1,1),e.rotate(this.rotation*Math.PI/180);const D=this.rotation%180===0?1:p/m;e.scale(1/D,D),e.drawImage(b,u,h,f,d,-p/2,-m/2,p,m),e.restore()}drawWithFit(e,t){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(t.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(t.rotation!==void 0&&![0,90,180,270].includes(t.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");if(t.flip!==void 0&&typeof t.flip!="boolean")throw new TypeError("options.flip, when provided, must be a boolean.");t.crop!==void 0&&wc(t.crop,"options.");const i=e.canvas.width,r=e.canvas.height,s=t.rotation??this.rotation,a=t.flip??this.flip,[o,c]=s%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=t.crop;l&&(l=Qu(l,o,c));let u,h,f,d;const{sx:g,sy:_,sWidth:p,sHeight:m}=this._unmapSourceRegion(t.crop?.left??0,t.crop?.top??0,t.crop?.width??o,t.crop?.height??c,s,a);if(t.fit==="fill")u=0,h=0,f=i,d=r;else{const[x,T]=t.crop?[t.crop.width,t.crop.height]:[o,c],D=t.fit==="contain"?Math.min(i/x,r/T):Math.max(i/x,r/T);f=x*D,d=T*D,u=(i-f)/2,h=(r-d)/2}e.save();const b=s%180===0?1:f/d;e.translate(i/2,r/2),a&&e.scale(-1,1),e.rotate(s*Math.PI/180),e.scale(1/b,b),e.translate(-i/2,-r/2),e.drawImage(this.toCanvasImageSource(),g,_,p,m,u,h,f,d),e.restore()}_unmapSourceRegion(e,t,i,r,s,a){return a&&(e=(s%180===0?this.squarePixelWidth:this.squarePixelHeight)-e-i),s===90?[e,t,i,r]=[t,this.squarePixelHeight-e-i,r,i]:s===180?[e,t]=[this.squarePixelWidth-e-i,this.squarePixelHeight-t-r]:s===270&&([e,t,i,r]=[this.squarePixelWidth-t-r,e,r,i]),{sx:e,sy:t,sWidth:i,sHeight:r}}_drawWithFitAndMipmapping(e,t,i){const r=e.width,s=e.height,[a,o]=i.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],c=i.crop?i.crop.width:a,l=i.crop?i.crop.height:o;let u=0;2*r<c&&2*s<l&&(u=Math.floor(Math.log2(Math.min(c/r,l/s))));const h=r*2**u,f=s*2**u,{canvas:d,context:g,isNew:_}=u>0?Ku(h,f):{canvas:e,context:t,isNew:i.targetIsFresh};g.imageSmoothingQuality="high",i.fillBlack?(g.fillStyle="black",g.fillRect(0,0,h,f)):_||g.clearRect(0,0,h,f),this.drawWithFit(g,{fit:i.fit,rotation:i.rotation,flip:i.flip,crop:i.crop}),g.globalCompositeOperation="copy";for(let p=u;p>1;p--){const m=r*2**p,b=s*2**p;g.drawImage(d,0,0,m,b,0,0,m/2,b/2)}g.globalCompositeOperation="source-over",u>0&&(t.imageSmoothingQuality="high",t.globalCompositeOperation="copy",t.drawImage(d,0,0,2*r,2*s,0,0,r,s),t.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(V(this._data!==null),this._data instanceof Fi||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.flip!==void 0&&typeof e.flip!="boolean")throw new TypeError("options.flip, when provided, must be a boolean.");if(e.crop!==void 0&&wc(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const{rotation:t,flip:i}=py(this.rotation,this.flip,e.rotate??0,e.flip??!1),[r,s]=t%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let a=e.crop;a&&(a=Qu(a,r,s));const o=a?a.width:r,c=a?a.height:s,l=o/c;let u,h;e.width!==void 0&&e.height===void 0?(u=e.width,h=u/l):e.width===void 0&&e.height!==void 0?(h=e.height,u=h*l):e.width!==void 0&&e.height!==void 0?(u=e.width,h=e.height):(u=o,h=c),u=mc(u,e.roundDimensionsTo??1),h=mc(h,e.roundDimensionsTo??1);const f={width:u,height:h,fit:e.fit??"fill",rotation:t,flip:i,crop:a??{left:0,top:0,width:r,height:s},alpha:e.alpha??"keep"};for(const p of Xw){let m=p(this,f);if(xi(m)&&(m=await m),m!==null)return m}const{canvas:d,context:g,isNew:_}=Ku(f.width,f.height);return this._drawWithFitAndMipmapping(d,g,{fit:f.fit,rotation:f.rotation,flip:f.flip,crop:f.crop,targetIsFresh:_,fillBlack:f.alpha==="discard"}),new Yt(d,{timestamp:this.timestamp,duration:this.duration,rotation:0,flip:!1})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setFlip(e){if(typeof e!="boolean")throw new TypeError("newFlip must be a boolean.");this.flip=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const Xw=[],qw=3,Ir=[];let ju=0;const Ku=(n,e)=>{for(const r of Ir)if(r.canvas.width===n&&r.canvas.height===e)return r.age=ju++,{canvas:r.canvas,context:r.context,isNew:!1};let t;if(typeof OffscreenCanvas<"u")t=new OffscreenCanvas(n,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");t=document.createElement("canvas"),t.width=n,t.height=e}const i=t.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!i)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Ir.length>=qw&&Ir.splice(Fy(Ir,r=>r.age),1),Ir.push({canvas:t,context:i,age:ju++}),{canvas:t,context:i,isNew:!0}};class ho{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const t=Object.keys(es);if(e.primaries!=null&&!t.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${t.join(", ")}.`);const i=Object.keys(ts);if(e.transfer!=null&&!i.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${i.join(", ")}.`);const r=Object.keys(ns);if(e.matrix!=null&&!r.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${r.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Fr=n=>typeof VideoFrame<"u"&&n instanceof VideoFrame,Qu=(n,e,t)=>{const i=Math.min(n.left,e),r=Math.min(n.top,t),s=Math.min(n.width,e-i),a=Math.min(n.height,t-r);return V(s>=0),V(a>=0),{left:i,top:r,width:s,height:a}},wc=(n,e)=>{if(!n||typeof n!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(n.left)||n.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(n.top)||n.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(n.width)||n.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(n.height)||n.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Zu=n=>{if(!n||typeof n!="object")throw new TypeError("options must be an object.");if(n.colorSpace!==void 0&&!["display-p3","srgb"].includes(n.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(n.format!==void 0&&typeof n.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(n.layout!==void 0){if(!Array.isArray(n.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of n.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(n.rect!==void 0){if(!n.rect||typeof n.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(n.rect.x!==void 0&&(!Number.isInteger(n.rect.x)||n.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(n.rect.y!==void 0&&(!Number.isInteger(n.rect.y)||n.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(n.rect.width!==void 0&&(!Number.isInteger(n.rect.width)||n.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(n.rect.height!==void 0&&(!Number.isInteger(n.rect.height)||n.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},$w=(n,e,t)=>{const i=pa(n),r=[];let s=0;for(const a of i){const o=Math.ceil(e/a.widthDivisor),c=Math.ceil(t/a.heightDivisor),l=o*a.sampleBytes,u=l*c;r.push({offset:s,stride:l}),s+=u}return r},pa=n=>{const e=(t,i,r,s,a)=>{const o=[{sampleBytes:t,widthDivisor:1,heightDivisor:1},{sampleBytes:i,widthDivisor:r,heightDivisor:s},{sampleBytes:i,widthDivisor:r,heightDivisor:s}];return a&&o.push({sampleBytes:t,widthDivisor:1,heightDivisor:1}),o};switch(n){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:ti(n),V(!1)}},Ju=(n,e)=>{const t={left:0,top:0,width:n.codedWidth,height:n.codedHeight},i=e.rect,r=Yw(t,i,n.codedWidth,n.codedHeight,n.format),s=e.layout;let a;if(!e.format||e.format===n.format)a=n.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))a=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return Kw(r,a,s)},Yw=(n,e,t,i,r)=>{const s={...n};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>t)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>i)throw new TypeError("visibleRect exceeds codedHeight.");s.x=e.x||0,s.y=e.y||0,s.width=e.width||0,s.height=e.height||0}if(!jw(r,s))throw new TypeError("visibleRect alignment is invalid for the format.");return s},jw=(n,e)=>{if(n===null)return!0;const t=pa(n);for(let i=0;i<t.length;i++){const r=t[i],s=r.widthDivisor,a=r.heightDivisor;if((e.x||0)%s!==0||(e.y||0)%a!==0)return!1}return!0},Kw=(n,e,t)=>{const i=pa(e),r=i.length;if(t!==void 0&&t.length!==r)throw new TypeError(`Layout must have ${r} planes.`);let s=0;const a=[],o=[];for(let c=0;c<r;c++){const l=i[c],u=l.sampleBytes,h=l.widthDivisor,f=l.heightDivisor,d={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(d.sourceTop=Math.ceil(Math.trunc(n.y||0)/f),d.sourceHeight=Math.ceil(Math.trunc(n.height||0)/f),d.sourceLeftBytes=Math.floor(Math.trunc(n.x||0)/h)*u,d.sourceWidthBytes=Math.floor(Math.trunc(n.width||0)/h)*u,t!==void 0){const p=t[c];if(p.stride<d.sourceWidthBytes)throw new TypeError(`Stride for plane ${c} is too small.`);d.destinationOffset=p.offset,d.destinationStride=p.stride}else d.destinationOffset=s,d.destinationStride=d.sourceWidthBytes;const _=d.destinationStride*d.sourceHeight+d.destinationOffset;if(_>4294967295)throw new TypeError("Allocation size exceeds limit.");o.push(_),s=Math.max(s,_);for(let p=0;p<c;p++){const m=a[p];if(!(o[c]<=m.destinationOffset||o[p]<=d.destinationOffset))throw new TypeError("Planes overlap.")}a.push(d)}return{allocationSize:s,computedLayouts:a}},Us=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class Ur{constructor(){this._referenceCount=0}}class jt{get microsecondTimestamp(){return Math.trunc(_i*this.timestamp)}get microsecondDuration(){return Math.trunc(_i*this.duration)}constructor(e){if(this._closed=!1,Dr(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof Ur){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!Us.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!Us.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const t=e.data.byteLength/(fi(e.format)*e.numberOfChannels);if(!Number.isInteger(t))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=t,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=t/e.sampleRate;let i;if(e.data instanceof ArrayBuffer)i=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))i=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const r=this.numberOfFrames*this.numberOfChannels*fi(this.format);if(i.byteLength<r)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=i}Yr?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!Us.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const t=e.format??this.format,i=e.frameOffset??0;if(i>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const r=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-i;if(r>this.numberOfFrames-i)throw new RangeError("frameCount out of range");const s=fi(t),a=Bi(t);if(a&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!a&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(a?r:r*this.numberOfChannels)*s}copyTo(e,t){if(!la(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(t.planeIndex)||t.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(t.format!==void 0&&!Us.has(t.format))throw new TypeError("Invalid format.");if(t.frameOffset!==void 0&&(!Number.isInteger(t.frameOffset)||t.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(t.frameCount!==void 0&&(!Number.isInteger(t.frameCount)||t.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:i,frameCount:r,frameOffset:s}=t;let{planeIndex:a}=t,o=this.format;const c=i??this.format;if(!c)throw new Error("Destination format not determined");const l=this.numberOfFrames,u=this.numberOfChannels,h=s??0;if(h>=l)throw new RangeError("frameOffset out of range");const f=r!==void 0?r:l-h;if(f>l-h)throw new RangeError("frameCount out of range");const d=fi(c),g=Bi(c);if(g&&a>=u)throw new RangeError("planeIndex out of range");if(!g&&a!==0)throw new RangeError("planeIndex out of range");const p=(g?f:f*u)*d;if(e.byteLength<p)throw new RangeError("Destination buffer is too small");const m=In(e),b=kf(c);if(Dr(this._data))if(Ey()&&u>2&&c!==o){Zw(this._data,m,o,c,u,a,h,f);return}else try{this._data.copyTo(e,{planeIndex:a,frameOffset:h,frameCount:f,format:c});return}catch(P){if(c==="f32-planar")throw P;o="f32-planar"}const x=Of(o),T=fi(o),D=Bi(o);let C;if(this._data instanceof Ur){const P=W=>{const v=this._data.getDataPlane(W);if(!(v instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const w=l*T*(D?1:u);if(v.byteLength!==w)throw new TypeError(`Data plane ${W} has invalid size. Expected exactly ${w} bytes, got ${v.byteLength} bytes.`);return v};if(D)if(g)C=P(a),a=0;else{C=new Uint8Array(l*T*u);for(let W=0;W<u;W++){const v=P(W);C.set(v,W*l*T)}}else C=P(0)}else if(this._data instanceof Uint8Array)C=this._data;else if(V(o==="f32-planar"),g)C=new Uint8Array(this._data.allocationSize({format:"f32-planar",planeIndex:a})),this._data.copyTo(C,{format:"f32-planar",planeIndex:a}),a=0;else{C=new Uint8Array(this._data.allocationSize({format:"f32-planar",planeIndex:0})*u);for(let P=0;P<u;P++)this._data.copyTo(C.subarray(P*l*T,(P+1)*l*T),{format:"f32-planar",planeIndex:P})}const M=In(C);for(let P=0;P<f;P++)if(g){const W=P*d;let v;D?v=(a*l+(P+h))*T:v=((P+h)*u+a)*T;const w=x(M,v);b(m,W,w)}else for(let W=0;W<u;W++){const w=(P*u+W)*d;let A;D?A=(W*l+(P+h))*T:A=((P+h)*u+W)*T;const F=x(M,A);b(m,w,F)}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof Ur){const e=new jt(this._data);return e.setTimestamp(this.timestamp),e}else if(Dr(this._data)){const e=new jt(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new jt({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,t=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startFrame must be a non-negative integer.");if(!Number.isInteger(t)||t<0)throw new TypeError("endFrame must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startFrame out of range.");if(t>this.numberOfFrames)throw new RangeError("endFrame out of range.");if(t<e)throw new RangeError("endFrame must not be less than startFrame.");if(this._closed)throw new Error("AudioSample is closed.");const i=t-e,r=fi(this.format);let s;if(Bi(this.format)){const a=i*r;if(s=new Uint8Array(a*this.numberOfChannels),i>0)for(let o=0;o<this.numberOfChannels;o++)this.copyTo(s.subarray(o*a,(o+1)*a),{planeIndex:o,format:this.format,frameOffset:e,frameCount:i})}else s=new Uint8Array(i*this.numberOfChannels*r),i>0&&this.copyTo(s,{planeIndex:0,format:this.format,frameOffset:e,frameCount:i});return new jt({data:s,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(Yr?.unregister(this),this._data instanceof Ur?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Dr(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof Ur?this._createAudioDataFromData():Dr(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Bi(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),t=new ArrayBuffer(e*this.numberOfChannels);for(let i=0;i<this.numberOfChannels;i++)this.copyTo(new Uint8Array(t,i*e,e),{planeIndex:i,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:t})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),t=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let i=0;i<this.numberOfChannels;i++)this.copyTo(t,{planeIndex:i,format:"f32-planar"}),e.copyToChannel(t,i);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,t){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=48e3*5,r=e.numberOfChannels,s=e.sampleRate,a=e.length,o=Math.floor(i/r);let c=0,l=a;for(;l>0;){const u=Math.min(o,l),h=new Float32Array(r*u);for(let f=0;f<r;f++)e.copyFromChannel(h.subarray(f*u,(f+1)*u),f,c);yield new jt({format:"f32-planar",sampleRate:s,numberOfFrames:u,numberOfChannels:r,timestamp:t+c/s,data:h}),c+=u,l-=u}}static fromAudioBuffer(e,t){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=48e3*5,r=e.numberOfChannels,s=e.sampleRate,a=e.length,o=Math.floor(i/r);let c=0,l=a;const u=[];for(;l>0;){const h=Math.min(o,l),f=new Float32Array(r*h);for(let g=0;g<r;g++)e.copyFromChannel(f.subarray(g*h,(g+1)*h),g,c);const d=new jt({format:"f32-planar",sampleRate:s,numberOfFrames:h,numberOfChannels:r,timestamp:t+c/s,data:f});u.push(d),c+=h,l-=h}return u}}const fi=n=>{switch(n){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Bi=n=>{switch(n){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},Of=n=>{switch(n){case"u8":case"u8-planar":return(e,t)=>(e.getUint8(t)-128)/128;case"s16":case"s16-planar":return(e,t)=>e.getInt16(t,!0)/32768;case"s32":case"s32-planar":return(e,t)=>e.getInt32(t,!0)/2147483648;case"f32":case"f32-planar":return(e,t)=>e.getFloat32(t,!0)}},kf=n=>{switch(n){case"u8":case"u8-planar":return(e,t,i)=>e.setUint8(t,Pt(Math.round(i*128)+128,0,255));case"s16":case"s16-planar":return(e,t,i)=>e.setInt16(t,Pt(Math.round(i*32768),-32768,32767),!0);case"s32":case"s32-planar":return(e,t,i)=>e.setInt32(t,Pt(Math.round(i*2147483648),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,t,i)=>e.setFloat32(t,i,!0)}},Dr=n=>typeof AudioData<"u"&&n instanceof AudioData,Qw=n=>{switch(n){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return n}},Zw=(n,e,t,i,r,s,a,o)=>{const c=Of(t),l=kf(i),u=fi(t),h=fi(i),f=Bi(t);if(Bi(i))if(f){const g=new ArrayBuffer(o*u),_=In(g);n.copyTo(g,{planeIndex:s,frameOffset:a,frameCount:o,format:t});for(let p=0;p<o;p++){const m=p*u,b=p*h,x=c(_,m);l(e,b,x)}}else{const g=new ArrayBuffer(o*r*u),_=In(g);n.copyTo(g,{planeIndex:0,frameOffset:a,frameCount:o,format:t});for(let p=0;p<o;p++){const m=(p*r+s)*u,b=p*h,x=c(_,m);l(e,b,x)}}else if(f){const g=o*u,_=new ArrayBuffer(g),p=In(_);for(let m=0;m<r;m++){n.copyTo(_,{planeIndex:m,frameOffset:a,frameCount:o,format:t});for(let b=0;b<o;b++){const x=b*u,T=(b*r+m)*h,D=c(p,x);l(e,T,D)}}}else{const g=new ArrayBuffer(o*r*u),_=In(g);n.copyTo(g,{planeIndex:0,frameOffset:a,frameCount:o,format:t});for(let p=0;p<o;p++)for(let m=0;m<r;m++){const b=p*r+m,x=b*u,T=b*h,D=c(_,x);l(e,T,D)}}},Jw=(n,e)=>{const t=n.allocationSize({format:e,planeIndex:0}),i=new ArrayBuffer(t);return n.copyTo(i,{format:e,planeIndex:0}),new jt({data:i,format:e,numberOfChannels:n.numberOfChannels,sampleRate:n.sampleRate,timestamp:n.timestamp,duration:n.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const eh=new Map,th=new Map,eb=n=>{if(!n||typeof n!="object")throw new TypeError("Encoding config must be an object.");if(!Sn.includes(n.codec))throw new TypeError(`Invalid video codec '${n.codec}'. Must be one of: ${Sn.join(", ")}.`);const e=n.bitrate;if(n.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(n.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(n.quality!==void 0&&!(n.quality instanceof Zt))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof Zt)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(n.keyFrameInterval!==void 0&&(!Number.isFinite(n.keyFrameInterval)||n.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(n.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(n.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(n.transform!==void 0){if(typeof n.transform!="object"||!n.transform)throw new TypeError("config.transform, when provided, must be an object.");if(n.transform.width!==void 0&&(!Number.isInteger(n.transform.width)||n.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(n.transform.height!==void 0&&(!Number.isInteger(n.transform.height)||n.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(n.transform.fit!==void 0&&!["fill","contain","cover"].includes(n.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(n.transform.width!==void 0&&n.transform.height!==void 0&&n.transform.fit===void 0&&!["fill","contain","cover"].includes(n.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(n.transform.fit!==void 0&&["fill","contain","cover"].includes(n.sizeChangeBehavior)&&n.transform.fit!==n.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(n.transform.rotate!==void 0&&![0,90,180,270].includes(n.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(n.transform.flip!==void 0&&typeof n.transform.flip!="boolean")throw new TypeError("config.transform.flip, when provided, must be a boolean.");if(n.transform.crop!==void 0&&wc(n.transform.crop,"config.transform."),n.transform.process!==void 0&&typeof n.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(n.transform.frameRate!==void 0&&(!Number.isFinite(n.transform.frameRate)||n.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(n.transform.force!==void 0&&typeof n.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(n.onEncodedPacket!==void 0&&typeof n.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(n.onEncoderConfig!==void 0&&typeof n.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(n.onEncodedSample!==void 0&&typeof n.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");zf(n.codec,n)},zf=(n,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const t=e.bitrateMode;if(t!==void 0&&!["constant","variable"].includes(t))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&da(e.fullCodecString)!==n)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${n}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},Vf=n=>{const e=n.bitrateMode,t=n.quality._toVideoRateControl(n.codec,n.width,n.height,e),i=(s,a,o)=>({codec:n.fullCodecString??Ew(n.codec,n.width,n.height,o,n.alpha==="keep"),width:n.width,height:n.height,displayWidth:n.squarePixelWidth,displayHeight:n.squarePixelHeight,bitrate:s,bitrateMode:a,alpha:n.alpha??"discard",framerate:n.framerate,latencyMode:n.latencyMode,hardwareAcceleration:n.hardwareAcceleration,scalabilityMode:n.scalabilityMode,contentHint:n.contentHint,...Rw(n.codec)}),r=[];return t.quantizer!==null&&r.push({config:i(void 0,"quantizer",t.bitrate),quantizer:t.quantizer}),t.bitrateMode!=="quantizer"&&r.push({config:i(t.bitrate,t.bitrateMode,t.bitrate),quantizer:null}),V(r.length>0),r},tb=n=>{if(!n||typeof n!="object")throw new TypeError("Encoding config must be an object.");if(!bi.includes(n.codec))throw new TypeError(`Invalid audio codec '${n.codec}'. Must be one of: ${bi.join(", ")}.`);const e=n.bitrate;if(n.quality===void 0&&e===void 0&&!(Jt.includes(n.codec)||n.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(n.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(n.quality!==void 0&&!(n.quality instanceof Zt))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof Zt)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(n.transform!==void 0){if(typeof n.transform!="object"||!n.transform)throw new TypeError("config.transform, when provided, must be an object.");if(n.transform.numberOfChannels!==void 0&&(!Number.isInteger(n.transform.numberOfChannels)||n.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(n.transform.sampleRate!==void 0&&(!Number.isInteger(n.transform.sampleRate)||n.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(n.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(n.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(n.transform.process!==void 0&&typeof n.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(n.onEncodedPacket!==void 0&&typeof n.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(n.onEncoderConfig!==void 0&&typeof n.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(n.onEncodedSample!==void 0&&typeof n.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Hf(n.codec,n)},Hf=(n,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const t=e.bitrateMode;if(t!==void 0&&!["constant","variable"].includes(t))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&da(e.fullCodecString)!==n)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${n}).`)},Gf=n=>{const e=n.bitrateMode;return{codec:n.fullCodecString??Cw(n.codec,n.numberOfChannels,n.sampleRate),numberOfChannels:n.numberOfChannels,sampleRate:n.sampleRate,bitrate:n.quality?._toAudioBitrate(n.codec),bitrateMode:n.quality?._bitrateMode??e,...Pw(n.codec)}};class Zt{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in nh):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?nh[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,t,i,r){const s=nb[e];let a=null,o=this._bitrateMode??r??"variable";if(this._quantizer!==void 0){if(s)if(this._quantizer<s.min||this._quantizer>s.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${s.min} and ${s.max}.`)}else a=this._quantizer,this._bitrate===void 0&&(o="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&s&&!this._preferBitrate&&(V(this._quality!==void 0),a=Pt(Math.round(yy(s.worst,s.best,this._quality)),s.min,s.max));let c;if(this._bitrate!==void 0)c=this._bitrate;else{let l=this._quality;l===void 0&&(V(a!==null&&s),l=Pt((a-s.worst)/(s.best-s.worst),0,1)),c=ih(e,t,i,fo(l))}return{quantizer:a,bitrate:c,bitrateMode:o}}_toVideoBitrate(e,t,i){return this._bitrate!==void 0?this._bitrate:(V(this._quality!==void 0),ih(e,t,i,fo(this._quality)))}_toAudioBitrate(e){if(Jt.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const t=fo(this._quality),r={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!r)throw new Error(`Unhandled codec: ${e}`);let s=r*t;return e==="aac"?s=[96e3,128e3,16e4,192e3].reduce((o,c)=>Math.abs(c-s)<Math.abs(o-s)?c:o):e==="opus"||e==="vorbis"?s=Math.max(6e3,s):e==="mp3"&&(s=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((o,c)=>Math.abs(c-s)<Math.abs(o-s)?c:o)),Math.round(s/1e3)*1e3}}const nh={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},nb={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},fo=n=>.3*Math.exp(2.5538*n),ih=(n,e,t,i)=>{const r=e*t,s=1920*1080,a=3e6,o=Math.pow(r/s,.95),c=a*o,l={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/a},h=c*l[n]*i;return Math.ceil(h/1e3)*1e3},Wf=(n,e)=>{if(n==="avc")return{avc:{quantizer:e}};if(n==="hevc")return{hevc:{quantizer:e}};if(n==="vp9")return{vp9:{quantizer:e}};if(n==="av1")return{av1:{quantizer:e}};V(!1)},ib=new Zt("high"),rh=async(n,e={})=>{const{width:t=1280,height:i=720,quality:r,bitrate:s,frameRate:a,...o}=e;if(!Sn.includes(n))return!1;if(!Number.isInteger(t)||t<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(i)||i<=0)throw new TypeError("height must be a positive integer.");if(r!==void 0&&!(r instanceof Zt))throw new TypeError("quality, when provided, must be a Quality.");if(r!==void 0&&s!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(s!==void 0&&!(s instanceof Zt)&&(!Number.isInteger(s)||s<=0))throw new TypeError("bitrate must be a positive integer or a quality.");if(a!==void 0&&(!Number.isFinite(a)||a<=0))throw new TypeError("frameRate, when provided, must be a finite positive number.");zf(n,o);const c=ma(r,s)??new Zt("medium");let l;try{l=Vf({codec:n,width:t,height:i,quality:c,framerate:a,...o,alpha:"discard"})}catch{return!1}const u=JSON.stringify(l),h=eh.get(u);if(h)return h;const f=(async()=>{for(const{config:g}of l)if(Xf.some(_=>_.supports(n,g)))return!0;if(typeof VideoEncoder>"u"||(t%2===1||i%2===1)&&(n==="avc"||n==="hevc"))return!1;for(const{config:g,quantizer:_}of l){try{if(!(await VideoEncoder.isConfigSupported(g)).supported)continue}catch{continue}if(!Sf()||await new Promise(async m=>{try{const b=new VideoEncoder({output:()=>{},error:()=>m(!1)});b.configure(g);const x=new Uint8Array(t*i*4),T=new VideoFrame(x,{format:"RGBA",codedWidth:t,codedHeight:i,timestamp:0});b.encode(T,_!==null?Wf(n,_):void 0),T.close(),await b.flush(),m(!0)}catch{m(!1)}}))return!0}return!1})();return eh.set(u,f),f},sh=async(n,e={})=>{const{numberOfChannels:t=2,sampleRate:i=48e3,quality:r,bitrate:s,...a}=e;if(!bi.includes(n))return!1;if(!Number.isInteger(t)||t<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(i)||i<=0)throw new TypeError("sampleRate must be a positive integer.");if(r!==void 0&&!(r instanceof Zt))throw new TypeError("quality, when provided, must be a Quality.");if(r!==void 0&&s!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(s!==void 0&&!(s instanceof Zt)&&(!Number.isInteger(s)||s<=0))throw new TypeError("bitrate must be a positive integer.");Hf(n,a);const o=ma(r,s)??new Zt("medium"),c=Gf({codec:n,numberOfChannels:t,sampleRate:i,quality:o,...a}),l=JSON.stringify(c),u=th.get(l);if(u)return u;const h=(async()=>{if(qf.some(f=>f.supports(n,c))||Jt.includes(n))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(c)).supported===!0}catch{return!1}})();return th.set(l,h),h},ma=(n,e)=>{if(n!==void 0)return n;if(e!==void 0)return e instanceof Zt?e:new Zt({bitrate:e})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Xf=[],qf=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const rb=n=>{let i=n>>2,r=4096,s=0,a=12,o=0;for(i<0&&(i=-i,s=128),i+=33,i>8191&&(i=8191);(i&r)!==r&&a>=5;)r>>=1,a--;return o=i>>a-4&15,~(s|a-5<<4|o)&255},sb=n=>{let t=2048,i=0,r=11,s=0,a=n>>3;for(a<0?a=-a-1:i=128,a>4095&&(a=4095);(a&t)!==t&&r>=5;)t>>=1,r--;return s=a>>(r===4?1:r-4)&15,(i|r-4<<4|s)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Gi{constructor(e,t,i,r,s){this.bytes=e,this.view=t,this.offset=i,this.start=r,this.end=s,this.bufferPos=r-i}static tempFromBytes(e){return new Gi(e,In(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,t=this.end-e){if(e<this.start||e+t>this.end)throw new RangeError("Slicing outside of original slice.");return new Gi(this.bytes,this.view,this.offset,e,e+t)}}const ab=(n,e)=>{if(n.filePos<n.start||n.filePos+e>n.end)throw new RangeError(`Tried reading [${n.filePos}, ${n.filePos+e}), but slice is [${n.start}, ${n.end}). This is likely an internal error, please report it alongside the file that caused it.`)},ob=(n,e)=>{ab(n,e);const t=n.bytes.subarray(n.bufferPos,n.bufferPos+e);return n.bufferPos+=e,t};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class $f{constructor(e){this.mutex=new yf,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,t,i){let r=this.trackTimestampInfo.get(e);if(r){if(i&&(r.maxTimestampBeforeLastKeyPacket=r.maxTimestamp),r.maxTimestampBeforeLastKeyPacket!==null&&t<r.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${t}s, but largest timestamp is ${r.maxTimestampBeforeLastKeyPacket}s.`);r.maxTimestamp=Math.max(r.maxTimestamp,t)}else{if(!i)throw new Error("First packet must be a key packet.");r={maxTimestamp:t,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,r)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ia=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,cb=/(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,lb=n=>{const e=cb.exec(n);if(!e)throw new Error("Expected match.");return 60*60*1e3*Number(e[1]||"0")+60*1e3*Number(e[2])+1e3*Number(e[3])+Number(e[4])},Yf=n=>{const e=Math.floor(n/36e5),t=Math.floor(n%(60*60*1e3)/(60*1e3)),i=Math.floor(n%(60*1e3)/1e3),r=n%1e3;return e.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+"."+r.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ds{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let t=0;t<e.length;t++)this.helperView.setUint8(t%8,e.charCodeAt(t)),t%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const t=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const s of e.children)s&&this.writeBox(s);const i=this.writer.getPos(),r=e.size??i-t;this.writer.seek(t),this.writeBoxHeader(e,r),this.writer.seek(i)}}writeBoxHeader(e,t){this.writeU32(e.largeSize?1:t),this.writeAscii(e.type),e.largeSize&&this.writeU64(t)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const t=this.offsets.get(e);V(t!==void 0);const i=this.writer.getPos();this.writer.seek(t),this.writeBox(e),this.writer.seek(i)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let t=this.measureBoxHeader(e);if(e.contents&&(t+=e.contents.byteLength),e.children)for(const i of e.children)i&&(t+=this.measureBox(i));return t}}}const We=new Uint8Array(8),fn=new DataView(We.buffer),ft=n=>[(n%256+256)%256],Ue=n=>(fn.setUint16(0,n,!1),[We[0],We[1]]),Kc=n=>(fn.setInt16(0,n,!1),[We[0],We[1]]),jf=n=>(fn.setUint32(0,n,!1),[We[1],We[2],We[3]]),te=n=>(fn.setUint32(0,n,!1),[We[0],We[1],We[2],We[3]]),Pn=n=>(fn.setInt32(0,n,!1),[We[0],We[1],We[2],We[3]]),Tn=n=>(fn.setUint32(0,Math.floor(n/2**32),!1),fn.setUint32(4,n,!1),[We[0],We[1],We[2],We[3],We[4],We[5],We[6],We[7]]),ah=n=>(fn.setInt32(0,Math.floor(n/2**32),!1),fn.setUint32(4,n,!1),[We[0],We[1],We[2],We[3],We[4],We[5],We[6],We[7]]),Kf=n=>(fn.setInt16(0,2**8*n,!1),[We[0],We[1]]),cn=n=>(fn.setInt32(0,2**16*n,!1),[We[0],We[1],We[2],We[3]]),po=n=>(fn.setInt32(0,2**30*n,!1),[We[0],We[1],We[2],We[3]]),mo=(n,e)=>{const t=[];let i=n;do{let r=i&127;i>>=7,t.length>0&&(r|=128),t.push(r)}while(i>0||e);return t.reverse()},st=(n,e=!1)=>{const t=Array(n.length).fill(null).map((i,r)=>n.charCodeAt(r));return e&&t.push(0),t},Qf=n=>[cn(n[0]),cn(n[1]),po(n[2]),cn(n[3]),cn(n[4]),po(n[5]),cn(n[6]),cn(n[7]),po(n[8])],Me=(n,e,t)=>({type:n,contents:e&&new Uint8Array(e.flat(10)),children:t}),Ke=(n,e,t,i,r)=>Me(n,[ft(e),jf(t),i??[]],r),ub=n=>n.isQuickTime?Me("ftyp",[st("qt  "),te(512),st("qt  ")]):n.fragmented?n.cmaf?Me("ftyp",[st("iso5"),te(512),st("iso5"),st("iso6"),st("mp41"),st("cmfc"),st("dash")]):Me("ftyp",[st("iso5"),te(512),st("iso5"),st("iso6"),st("mp41")]):Me("ftyp",[st("isom"),te(512),st("isom"),n.holdsAvc?st("avc1"):[],st("mp41")]),oh=()=>Me("styp",[st("iso5"),te(0),st("iso5"),st("iso6"),st("mp41"),st("cmfc"),st("dash")]),ch=(n,e)=>{const t=Math.max(0,n.minWrittenTimestamp);let i=Math.max(0,n.maxWrittenEndTimestamp-t);return Number.isFinite(i)||(i=0),Ke("sidx",1,0,[te(1),te(Qt),Tn(at(t,Qt)),Tn(0),Ue(0),Ue(1),te(e&2147483647),te(at(i,Qt)),te(0)])},Ls=n=>({type:"mdat",largeSize:n}),hb=n=>({type:"free",size:n}),Lr=n=>Me("moov",void 0,[fb(n.creationTime,n.trackDatas),...n.trackDatas.map(e=>db(e,n.creationTime)),n.isFragmented?Jb(n.trackDatas):null,fS(n)]),fb=(n,e)=>{const t=Math.max(0,...e.map(a=>Math.max(0,at(wr(a),Qt)+at(a.startTimestampOffset??0,Qt)))),i=Math.max(0,...e.map(a=>a.track.id))+1,r=!Qn(n)||!Qn(t),s=r?Tn:te;return Ke("mvhd",+r,0,[s(n),s(n),te(Qt),s(t),cn(1),Kf(1),Array(10).fill(0),Qf(_f),Array(24).fill(0),te(i)])},db=(n,e)=>{const t=SS(n),i=n.startTimestampOffset!==null&&n.startTimestampOffset!==0;return Me("trak",void 0,[pb(n,e),i?mb(n):null,gb(n,e),t.name!==void 0?Me("udta",void 0,[Me("name",[...Nt.encode(t.name)])]):null])},pb=(n,e)=>{const t=Math.max(0,at(wr(n),Qt)+at(n.startTimestampOffset??0,Qt)),i=!Qn(e)||!Qn(t),r=i?Tn:te;let s;if(n.type==="video"&&n.track.metadata.transformationMatrix)s=n.track.metadata.transformationMatrix;else if(n.type==="video"){const{rotation:c,flip:l}=n.track.metadata,u=Js(vf(c??0),dy(l?-1:1,1));s=uy(u,n.info.width,n.info.height)}else s=_f;let a=2;n.track.metadata.disposition?.default!==!1&&(a|=1);const o=n.type==="video"?0:n.type==="audio"?1:n.type==="subtitle"?2:ti(n);return Ke("tkhd",+i,a,[r(e),r(e),te(n.track.id),te(0),r(t),Array(8).fill(0),Ue(0),Ue(o),Kf(n.type==="audio"?1:0),Ue(0),Qf(s),cn(n.type==="video"?n.info.width:0),cn(n.type==="video"?n.info.height:0)])},mb=n=>{const e=n.startTimestampOffset;if(V(e!==null),e>0){const t=at(e,Qt),i=at(wr(n),Qt),r=!Qn(t)||!Qn(i),s=r?Tn:te,a=r?ah:Pn;return Me("edts",void 0,[Ke("elst",r?1:0,0,[te(2),s(t),a(-1),cn(1),s(i),a(0),cn(1)])])}else{const t=at(-e,n.timescale),i=Math.max(0,at(wr(n),Qt)+at(e,Qt)),r=!my(t)||!Qn(i),s=r?Tn:te,a=r?ah:Pn;return Me("edts",void 0,[Ke("elst",r?1:0,0,[te(1),s(i),a(t),cn(1)])])}},gb=(n,e)=>Me("mdia",void 0,[_b(n,e),Qc(!0,vb[n.type],xb[n.type]),yb(n)]),_b=(n,e)=>{const t=at(wr(n),n.timescale),i=!Qn(e)||!Qn(t),r=i?Tn:te;return Ke("mdhd",+i,0,[r(e),r(e),te(n.timescale),r(t),Ue(td(n.track.metadata.languageCode??wf)),Ue(0)])},vb={video:"vide",audio:"soun",subtitle:"text"},xb={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Qc=(n,e,t,i="\0\0\0\0")=>Ke("hdlr",0,0,[n?st("mhlr"):te(0),st(e),st(i),te(0),te(0),st(t,!0)]),yb=n=>Me("minf",void 0,[Tb[n.type](),Eb(),Ab(n)]),wb=()=>Ke("vmhd",0,1,[Ue(0),Ue(0),Ue(0),Ue(0)]),bb=()=>Ke("smhd",0,0,[Ue(0),Ue(0)]),Sb=()=>Ke("nmhd",0,0),Tb={video:wb,audio:bb,subtitle:Sb},Eb=()=>Me("dinf",void 0,[Mb()]),Mb=()=>Ke("dref",0,0,[te(1)],[Cb()]),Cb=()=>Ke("url ",0,1),Ab=n=>{const e=n.compositionTimeOffsetTable.length>1||n.compositionTimeOffsetTable.some(t=>t.sampleCompositionTimeOffset!==0);return Me("stbl",void 0,[Rb(n),qb(n),e?Qb(n):null,e?Zb(n):null,Yb(n),jb(n),Kb(n),$b(n)])},Rb=n=>{let e;if(n.type==="video")e=Pb(gS(n.track.source._codec,n.info.decoderConfig.codec),n);else if(n.type==="audio"){const t=ed(n.track.source._codec,n.info.decoderConfig.codec,n.muxer.isQuickTime);V(t),e=Nb(t,n)}else n.type==="subtitle"&&(e=Wb(xS[n.track.source._codec],n));return V(e),Ke("stsd",0,0,[te(1)],[e])},Pb=(n,e)=>Me(n,[Array(6).fill(0),Ue(1),Ue(0),Ue(0),Array(12).fill(0),Ue(e.info.width),Ue(e.info.height),te(4718592),te(4718592),te(0),Ue(1),ft(Hr.length),st(Hr),Array(31-Hr.length).fill(0),Ue(e.info.hasAlphaChannel?32:24),Kc(65535)],[_S[e.track.source._codec]?.(e)??null,Ib(e),xf(e.info.decoderConfig.colorSpace)?null:Fb(e),Zc(e)]),Zc=n=>n.avgBitrate===0&&n.maxBitrate===0?null:Me("btrt",[te(0),te(n.maxBitrate),te(n.avgBitrate)]),Ib=n=>n.info.pixelAspectRatio.num===n.info.pixelAspectRatio.den?null:Me("pasp",[te(n.info.pixelAspectRatio.num),te(n.info.pixelAspectRatio.den)]),Fb=n=>{const e=n.info.decoderConfig.colorSpace;return Me("colr",[st(n.muxer.isQuickTime?"nclc":"nclx"),Ue(e?.primaries!=null?es[e.primaries]:2),Ue(e?.transfer!=null?ts[e.transfer]:2),Ue(e?.matrix!=null?ns[e.matrix]:2),n.muxer.isQuickTime?[]:ft((e?.fullRange?1:0)<<7)])},Ub=n=>n.info.decoderConfig&&Me("avcC",[...Vt(n.info.decoderConfig.description)]),Db=n=>n.info.decoderConfig&&Me("hvcC",[...Vt(n.info.decoderConfig.description)]),lh=n=>{if(!n.info.decoderConfig)return null;const e=n.info.decoderConfig,t=e.codec.split("."),i=Number(t[1]),r=Number(t[2]),s=Number(t[3]),a=t[4]?Number(t[4]):1,o=t[8]?Number(t[8]):Number(e.colorSpace?.fullRange??0),c=(s<<4)+(a<<1)+o,l=t[5]?Number(t[5]):e.colorSpace?.primaries?es[e.colorSpace.primaries]:1,u=t[6]?Number(t[6]):e.colorSpace?.transfer?ts[e.colorSpace.transfer]:1,h=t[7]?Number(t[7]):e.colorSpace?.matrix?ns[e.colorSpace.matrix]:1;return Ke("vpcC",1,0,[ft(i),ft(r),ft(c),ft(l),ft(u),ft(h),Ue(0)])},Lb=n=>Me("av1C",Ff(n.info.decoderConfig.codec)),Nb=(n,e)=>{let t=0,i,r=16;const s=Jt.includes(e.track.source._codec);if(s){const a=e.track.source._codec,{sampleSize:o}=Si(a);r=8*o,r>16&&(t=1)}if(e.muxer.isQuickTime&&(t=1),t===0)i=[Array(6).fill(0),Ue(1),Ue(t),Ue(0),te(0),Ue(e.info.numberOfChannels),Ue(r),Ue(0),Ue(0),Ue(e.info.sampleRate<2**16?e.info.sampleRate:0),Ue(0)];else{const a=s?0:-2;i=[Array(6).fill(0),Ue(1),Ue(t),Ue(0),te(0),Ue(e.info.numberOfChannels),Ue(Math.min(r,16)),Kc(a),Ue(0),Ue(e.info.sampleRate<2**16?e.info.sampleRate:0),Ue(0),s?[te(1),te(r/8),te(e.info.numberOfChannels*r/8)]:[te(0),te(0),te(0)],te(2)]}return Me(n,i,[vS(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null,Zc(e)])},go=n=>{let e;switch(n.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${n.track.source._codec}`)}let t=[...ft(e),...ft(21),...jf(0),...te(n.maxBitrate),...te(n.avgBitrate)];if(n.info.decoderConfig.description){const i=Vt(n.info.decoderConfig.description);t=[...t,...ft(5),...mo(i.byteLength),...i]}return t=[...Ue(1),...ft(0),...ft(4),...mo(t.length),...t,...ft(6),...ft(1),...ft(2)],t=[...ft(3),...mo(t.length),...t],Ke("esds",0,0,t)},ui=n=>Me("wave",void 0,[Bb(n),Ob(n),Me("\0\0\0\0")]),Bb=n=>Me("frma",[st(ed(n.track.source._codec,n.info.decoderConfig.codec,n.muxer.isQuickTime))]),Ob=n=>{const{littleEndian:e}=Si(n.track.source._codec);return Me("enda",[Ue(+e)])},kb=n=>{let e=n.info.numberOfChannels,t=3840,i=n.info.sampleRate,r=0,s=0,a=new Uint8Array(0);const o=n.info.decoderConfig?.description;if(o){V(o.byteLength>=18);const c=Vt(o),l=If(c);e=l.outputChannelCount,t=l.preSkip,i=l.inputSampleRate,r=l.outputGain,s=l.channelMappingFamily,l.channelMappingTable&&(a=l.channelMappingTable)}return Me("dOps",[ft(0),ft(e),Ue(t),te(i),Kc(r),ft(s),...a])},zb=n=>{const e=n.info.decoderConfig?.description;V(e);const t=Vt(e);return Ke("dfLa",0,0,[...t.subarray(4)])},En=n=>{const{littleEndian:e,sampleSize:t}=Si(n.track.source._codec),i=+e;return Ke("pcmC",0,0,[ft(i),ft(8*t)])},Vb=n=>{V(n.info.primingPacket);const e=rw(n.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const t=new Uint8Array(3),i=new _t(t);return i.writeBits(2,e.fscod),i.writeBits(5,e.bsid),i.writeBits(3,e.bsmod),i.writeBits(3,e.acmod),i.writeBits(1,e.lfeon),i.writeBits(5,e.bitRateCode),i.writeBits(5,0),Me("dac3",[...t])},Hb=n=>{V(n.info.primingPacket);const e=aw(n.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let t=16;for(const a of e.substreams)t+=23,a.numDepSub>0?t+=9:t+=1;const i=Math.ceil(t/8),r=new Uint8Array(i),s=new _t(r);s.writeBits(13,e.dataRate),s.writeBits(3,e.substreams.length-1);for(const a of e.substreams)s.writeBits(2,a.fscod),s.writeBits(5,a.bsid),s.writeBits(1,0),s.writeBits(1,0),s.writeBits(3,a.bsmod),s.writeBits(3,a.acmod),s.writeBits(1,a.lfeon),s.writeBits(3,0),s.writeBits(4,a.numDepSub),a.numDepSub>0?s.writeBits(9,a.chanLoc):s.writeBits(1,0);return Me("dec3",[...r])},Gb=n=>{V(n.info.primingPacket);const e=yw(n.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return Me("ddts",[...Sw(e)])},Wb=(n,e)=>Me(n,[Array(6).fill(0),Ue(1)],[yS[e.track.source._codec](e),Zc(e)]),Xb=n=>Me("vttC",[...Nt.encode(n.info.config.description)]),qb=n=>Ke("stts",0,0,[te(n.timeToSampleTable.length),n.timeToSampleTable.map(e=>[te(e.sampleCount),te(e.sampleDelta)])]),$b=n=>{if(n.samples.every(t=>t.type==="key"))return null;const e=[...n.samples.entries()].filter(([,t])=>t.type==="key");return Ke("stss",0,0,[te(e.length),e.map(([t])=>te(t+1))])},Yb=n=>Ke("stsc",0,0,[te(n.compactlyCodedChunkTable.length),n.compactlyCodedChunkTable.map(e=>[te(e.firstChunk),te(e.samplesPerChunk),te(1)])]),jb=n=>{if(n.type==="audio"&&n.info.requiresPcmTransformation){const{sampleSize:e}=Si(n.track.source._codec);return Ke("stsz",0,0,[te(e*n.info.numberOfChannels),te(n.samples.reduce((t,i)=>t+at(i.duration,n.timescale),0))])}return Ke("stsz",0,0,[te(0),te(n.samples.length),n.samples.map(e=>te(e.size))])},Kb=n=>n.finalizedChunks.length>0&&wn(n.finalizedChunks).offset>=2**32?Ke("co64",0,0,[te(n.finalizedChunks.length),n.finalizedChunks.map(e=>Tn(e.offset))]):Ke("stco",0,0,[te(n.finalizedChunks.length),n.finalizedChunks.map(e=>te(e.offset))]),Qb=n=>Ke("ctts",1,0,[te(n.compositionTimeOffsetTable.length),n.compositionTimeOffsetTable.map(e=>[te(e.sampleCount),Pn(e.sampleCompositionTimeOffset)])]),Zb=n=>{let e=1/0,t=-1/0,i=1/0,r=-1/0;V(n.compositionTimeOffsetTable.length>0),V(n.samples.length>0);for(let a=0;a<n.compositionTimeOffsetTable.length;a++){const o=n.compositionTimeOffsetTable[a];e=Math.min(e,o.sampleCompositionTimeOffset),t=Math.max(t,o.sampleCompositionTimeOffset)}for(let a=0;a<n.samples.length;a++){const o=n.samples[a];i=Math.min(i,at(o.timestamp,n.timescale)),r=Math.max(r,at(o.timestamp+o.duration,n.timescale))}const s=Math.max(-e,0);return r>=2**31?null:Ke("cslg",0,0,[Pn(s),Pn(e),Pn(t),Pn(i),Pn(r)])},Jb=n=>Me("mvex",void 0,n.map(eS)),eS=n=>Ke("trex",0,0,[te(n.track.id),te(1),te(0),te(0),te(0)]),uh=(n,e)=>Me("moof",void 0,[tS(n),...e.map(nS)]),tS=n=>Ke("mfhd",0,0,[te(n)]),Zf=n=>{let e=0,t=0;const i=0,r=0,s=n.type==="delta";return t|=+s,s?e|=1:e|=2,e<<24|t<<16|i<<8|r},nS=n=>Me("traf",void 0,[iS(n),rS(n),sS(n)]),iS=n=>{V(n.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const t=n.currentChunk.samples[1]??n.currentChunk.samples[0],i={duration:t.timescaleUnitsToNextSample,size:t.size,flags:Zf(t)};return Ke("tfhd",0,e,[te(n.track.id),te(i.duration),te(i.size),te(i.flags)])},rS=n=>(V(n.currentChunk),Ke("tfdt",1,0,[Tn(at(n.currentChunk.startTimestamp,n.timescale))])),sS=n=>{V(n.currentChunk);const e=n.currentChunk.samples.map(_=>_.timescaleUnitsToNextSample),t=n.currentChunk.samples.map(_=>_.size),i=n.currentChunk.samples.map(Zf),r=n.currentChunk.samples.map(_=>at(_.timestamp-_.decodeTimestamp,n.timescale)),s=new Set(e),a=new Set(t),o=new Set(i),c=new Set(r),l=o.size===2&&i[0]!==i[1],u=s.size>1,h=a.size>1,f=!l&&o.size>1,d=c.size>1||[...c].some(_=>_!==0);let g=0;return g|=1,g|=4*+l,g|=256*+u,g|=512*+h,g|=1024*+f,g|=2048*+d,Ke("trun",1,g,[te(n.currentChunk.samples.length),te(n.currentChunk.offset-n.currentChunk.moofOffset||0),l?te(i[0]):[],n.currentChunk.samples.map((_,p)=>[u?te(e[p]):[],h?te(t[p]):[],f?te(i[p]):[],d?Pn(r[p]):[]])])},aS=n=>Me("mfra",void 0,[...n.map(oS),cS()]),oS=n=>Ke("tfra",1,0,[te(n.track.id),te(63),te(n.finalizedChunks.length),n.finalizedChunks.map(t=>[Tn(at(t.samples[0].timestamp,n.timescale)),Tn(t.moofOffset),te(t.trafIndex+1),te(1),te(1)])]),cS=()=>Ke("mfro",0,0,[te(0)]),lS=()=>Me("vtte"),uS=(n,e,t,i,r)=>Me("vttc",void 0,[r!==null?Me("vsid",[Pn(r)]):null,t!==null?Me("iden",[...Nt.encode(t)]):null,e!==null?Me("ctim",[...Nt.encode(Yf(e))]):null,i!==null?Me("sttg",[...Nt.encode(i)]):null,Me("payl",[...Nt.encode(n)])]),hS=n=>Me("vtta",[...Nt.encode(n)]),fS=n=>{const e=[],t=n.format._options.metadataFormat??"auto",i=n.output._metadataTags;if(t==="mdir"||t==="auto"&&!n.isQuickTime){const r=pS(i);r&&e.push(r)}else if(t==="mdta"){const r=mS(i);r&&e.push(r)}else(t==="udta"||t==="auto"&&n.isQuickTime)&&dS(e,n.output._metadataTags);return e.length===0?null:Me("udta",void 0,e)},dS=(n,e)=>{for(const{key:t,value:i}of Wc(e))switch(t){case"title":n.push(Mn("©nam",i));break;case"description":n.push(Mn("©des",i));break;case"artist":n.push(Mn("©ART",i));break;case"album":n.push(Mn("©alb",i));break;case"albumArtist":n.push(Mn("albr",i));break;case"genre":n.push(Mn("©gen",i));break;case"date":n.push(Mn("©day",i.toISOString().slice(0,10)));break;case"comment":n.push(Mn("©cmt",i));break;case"lyrics":n.push(Mn("©lyr",i));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:ti(t)}if(e.raw)for(const t in e.raw){const i=e.raw[t];i==null||t.length!==4||n.some(r=>r.type===t)||(typeof i=="string"?n.push(Mn(t,i)):i instanceof Uint8Array&&n.push(Me(t,Array.from(i))))}},Mn=(n,e)=>{const t=Nt.encode(e);return Me(n,[Ue(t.length),Ue(td("und")),Array.from(t)])},hh={"image/jpeg":13,"image/png":14,"image/bmp":27},Jf=(n,e)=>{const t=[];for(const{key:i,value:r}of Wc(n))switch(i){case"title":t.push({key:e?"title":"©nam",value:vn(r)});break;case"description":t.push({key:e?"description":"©des",value:vn(r)});break;case"artist":t.push({key:e?"artist":"©ART",value:vn(r)});break;case"album":t.push({key:e?"album":"©alb",value:vn(r)});break;case"albumArtist":t.push({key:e?"album_artist":"aART",value:vn(r)});break;case"comment":t.push({key:e?"comment":"©cmt",value:vn(r)});break;case"genre":t.push({key:e?"genre":"©gen",value:vn(r)});break;case"beatsPerMinute":e||t.push({key:"tmpo",value:Me("data",[te(21),te(0),Ue(r)])});break;case"lyrics":t.push({key:e?"lyrics":"©lyr",value:vn(r)});break;case"date":t.push({key:e?"date":"©day",value:vn(r.toISOString().slice(0,10))});break;case"images":for(const s of r)s.kind==="coverFront"&&t.push({key:"covr",value:Me("data",[te(hh[s.mimeType]??0),te(0),Array.from(s.data)])});break;case"trackNumber":if(e){const s=n.tracksTotal!==void 0?`${r}/${n.tracksTotal}`:r.toString();t.push({key:"track",value:vn(s)})}else t.push({key:"trkn",value:Me("data",[te(0),te(0),Ue(0),Ue(r),Ue(n.tracksTotal??0),Ue(0)])});break;case"discNumber":e||t.push({key:"disc",value:Me("data",[te(0),te(0),Ue(0),Ue(r),Ue(n.discsTotal??0),Ue(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:ti(i)}if(n.raw)for(const i in n.raw){const r=n.raw[i];r==null||!e&&i.length!==4||t.some(s=>s.key===i)||(typeof r=="string"?t.push({key:i,value:vn(r)}):r instanceof Uint8Array?t.push({key:i,value:Me("data",[te(0),te(0),Array.from(r)])}):r instanceof Mf&&t.push({key:i,value:Me("data",[te(hh[r.mimeType]??0),te(0),Array.from(r.data)])}))}return t},pS=n=>{const e=Jf(n,!1);return e.length===0?null:Ke("meta",0,0,void 0,[Qc(!1,"mdir","","appl"),Me("ilst",void 0,e.map(t=>Me(t.key,void 0,[t.value])))])},mS=n=>{const e=Jf(n,!0);return e.length===0?null:Me("meta",void 0,[Qc(!1,"mdta",""),Ke("keys",0,0,[te(e.length)],e.map(t=>Me("mdta",[...Nt.encode(t.key)]))),Me("ilst",void 0,e.map((t,i)=>{const r=String.fromCharCode(...te(i+1));return Me(r,void 0,[t.value])}))])},vn=n=>Me("data",[te(1),te(0),...Nt.encode(n)]),gS=(n,e)=>{switch(n){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},_S={avc:Ub,hevc:Db,vp8:lh,vp9:lh,av1:Lb,prores:null},ed=(n,e,t)=>{switch(n){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(t)switch(n){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(n){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},vS=(n,e)=>{switch(n){case"aac":return go;case"mp3":return go;case"opus":return kb;case"vorbis":return go;case"flac":return zb;case"ac3":return Vb;case"eac3":return Hb;case"dts":return Gb}if(e)switch(n){case"pcm-s24":return ui;case"pcm-s24be":return ui;case"pcm-s32":return ui;case"pcm-s32be":return ui;case"pcm-f32":return ui;case"pcm-f32be":return ui;case"pcm-f64":return ui;case"pcm-f64be":return ui}else switch(n){case"pcm-s16":return En;case"pcm-s16be":return En;case"pcm-s24":return En;case"pcm-s24be":return En;case"pcm-s32":return En;case"pcm-s32be":return En;case"pcm-f32":return En;case"pcm-f32be":return En;case"pcm-f64":return En;case"pcm-f64be":return En}return null},xS={webvtt:"wvtt"},yS={webvtt:Xb},td=n=>{V(n.length===3);let e=0;for(let t=0;t<3;t++)e<<=5,e+=n.charCodeAt(t)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class bc{constructor(e,t){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(t),e._writerAcquired=!0}start(){V(!this.started),this.target._start(),this.started=!0}write(e){V(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return V(this.started&&!this.finalized),this.target._flush()}async finalize(){V(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let t=this.getPos();if(t<this.trackedStart){if(t+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-t),t=0}const i=t+e.byteLength-this.trackedStart;let r=this.trackedWrites.byteLength;for(;r<i;)r*=2;if(r!==this.trackedWrites.byteLength){const s=new Uint8Array(r);s.set(this.trackedWrites,0),this.trackedWrites=s}this.trackedWrites.set(e,t-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,t+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const t={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,t}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Vn extends qc{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,t){this.onwrite?.(e,t),this._emit("write",{start:e,end:t})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new wS(this,e)}}const _o=2**16,vo=2**32;class Gs extends Vn{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(_o,{maxByteLength:vo})}catch{this._buffer=new ArrayBuffer(_o),this._supportsResize=!1}else this._buffer=new ArrayBuffer(_o);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let t=this._buffer.byteLength;for(;t<e;)t*=2;if(t!==this._buffer.byteLength){if(t>vo)throw new Error(`ArrayBuffer exceeded maximum size of ${vo} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(t);else{const i=new ArrayBuffer(t),r=new Uint8Array(i);r.set(this._bytes,0),this._buffer=i,this._bytes=r}}}_start(){}_write(e,t){this._ensureSize(t+e.byteLength),this._bytes.set(e,t),this._maxPos=Math.max(this._maxPos,t+e.byteLength),this._dispatchWrite(t,t+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,t){return this._bytes.slice(e,t)}}class wS extends Vn{constructor(e,t){super(),this._baseTarget=e,this._offset=t}_start(){}_write(e,t){this._baseTarget._write(e,this._offset+t),this._dispatchWrite(t,t+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class xo{constructor(e,t){if(this.rootPath=e,this.getTarget=t,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof t!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Qt=57600,bS=2082844800,SS=n=>{const e={},t=n.track;return t.metadata.name!==void 0&&(e.name=t.metadata.name),e},at=(n,e,t=!0)=>{const i=n*e;return t?Math.round(i):i},wr=n=>{if(n.samples.length===0)return 0;let e=1/0,t=-1/0;for(let i=0;i<n.samples.length;i++){const r=n.samples[i];r.timestamp<e&&(e=r.timestamp),r.timestamp+r.duration>t&&(t=r.timestamp+r.duration)}return e===1/0?0:t-e};class TS extends $f{constructor(e,t){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new Gs,this.auxWriter=new bc(this.auxTarget,!1),this.auxBoxWriter=new Ds(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Hc(),this.creationTime=Math.floor(Date.now()/1e3)+bS,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=t,this.formatOptions={...t._options},this.isQuickTime=t instanceof sd,this.isCmaf=t instanceof mh,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(t instanceof mh?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(i=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":i instanceof Gs),this.boxWriter=new Ds(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof Gs?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const i=await this.output._getInitTarget(),r=new bc(i,!0);r.start(),this.initWriter=r,this.initBoxWriter=new Ds(r)}const t=this.output.tracks.some(i=>i.isVideoTrack()&&i.source._codec==="avc");{const i=this.initBoxWriter??this.boxWriter;if(V(i),this.formatOptions.onFtyp&&i.writer.startTrackingWrites(),i.writeBox(ub({isQuickTime:this.isQuickTime,holdsAvc:t,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:r,start:s}=i.writer.stopTrackingWrites();this.formatOptions.onFtyp(r,s)}this.ftypSize=i.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const i of this.output.tracks)if(i.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(V(this.writer),V(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Ls(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const i of this.output.tracks)i.isVideoTrack()&&i.metadata.decoderConfig?this.getVideoTrackData(i,i.metadata.primingPacket??null,{decoderConfig:i.metadata.decoderConfig}):i.isAudioTrack()&&i.metadata.decoderConfig&&this.getAudioTrackData(i,i.metadata.primingPacket??null,{decoderConfig:i.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(t=>t.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(t=>t.type==="video"||t.type==="audio"?t.info.decoderConfig.codec:{webvtt:"wvtt"}[t.track.source._codec]);return Bw({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(t=>t.type==="video"),hasAudio:this.trackDatas.some(t=>t.type==="audio"),codecStrings:e})}getVideoTrackData(e,t,i){const r=this.trackDatas.find(d=>d.track===e);if(r)return r;Yc(i,e.source._codec),V(i),V(i.decoderConfig);const s={...i.decoderConfig};V(s.codedWidth!==void 0),V(s.codedHeight!==void 0);let a=!1;if(e.source._codec==="avc"&&!s.description){if(!t)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const d=Gy(t.data);if(!d)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");s.description=Wy(d),a=!0}else if(e.source._codec==="hevc"&&!s.description){if(!t)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const d=Yy(t.data);if(!d)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");s.description=tw(d),a=!0}const o=Ty(1/(e.metadata.frameRate??Qt),1e6).den,c=s.displayAspectWidth,l=s.displayAspectHeight,u=c===void 0||l===void 0?{num:1,den:1}:Xc({num:c*s.codedHeight,den:l*s.codedWidth}),h=s.codec==="ap4h"||s.codec==="ap4x",f={muxer:this,track:e,type:"video",info:{width:s.codedWidth,height:s.codedHeight,pixelAspectRatio:u,decoderConfig:s,requiresAnnexBTransformation:a,hasAlphaChannel:h},timescale:o,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:e.source._nominalBitrate??e.metadata.averageBitrate??0,maxBitrate:e.source._nominalBitrate??e.metadata.bitrate??0};return this.trackDatas.push(f),this.trackDatas.sort((d,g)=>d.track.id-g.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),f}getAudioTrackData(e,t,i){const r=this.trackDatas.find(c=>c.track===e);if(r)return r;jc(i,e.source._codec),V(i),V(i.decoderConfig);const s={...i.decoderConfig};let a=!1;if(e.source._codec==="aac"&&!s.description){if(!t)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const c=na(Gi.tempFromBytes(t.data));if(!c)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const l=$r[c.samplingFrequencyIndex],u=ua[c.channelConfiguration];if(l===void 0||u===void 0)throw new Error("Invalid ADTS frame header.");s.description=$c({objectType:c.objectType,outputSampleRate:l,outputNumberOfChannels:u}),a=!0}if(!t){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const o={muxer:this,track:e,type:"audio",info:{numberOfChannels:i.decoderConfig.numberOfChannels,sampleRate:i.decoderConfig.sampleRate,decoderConfig:s,requiresPcmTransformation:!this.isFragmented&&Jt.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:a,primingPacket:t},timescale:s.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:e.source._nominalBitrate??e.metadata.averageBitrate??0,maxBitrate:e.source._nominalBitrate??e.metadata.bitrate??0};return this.trackDatas.push(o),this.trackDatas.sort((c,l)=>c.track.id-l.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}getSubtitleTrackData(e,t){const i=this.trackDatas.find(s=>s.track===e);if(i)return i;Df(t),V(t),V(t.config);const r={muxer:this,track:e,type:"subtitle",info:{config:t.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:e.source._nominalBitrate??e.metadata.averageBitrate??0,maxBitrate:e.source._nominalBitrate??e.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(r),this.trackDatas.sort((s,a)=>s.track.id-a.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}async addEncodedVideoPacket(e,t,i){const r=await this.mutex.acquire();try{const s=this.getVideoTrackData(e,t,i);let a=t.data;if(s.info.requiresAnnexBTransformation){const c=[...is(a)].map(l=>a.subarray(l.offset,l.offset+l.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");a=Hy(c,4)}this.validateTimestamp(s.track,t.timestamp,t.type==="key");const o=this.createSampleForTrack(s,a,t.timestamp,t.duration,t.type);await this.registerSample(s,o)}finally{r()}}async addEncodedAudioPacket(e,t,i){const r=await this.mutex.acquire();try{const s=this.getAudioTrackData(e,t,i);let a=t.data;if(s.info.requiresAdtsStripping){const u=na(Gi.tempFromBytes(a));if(!u)throw new Error("Expected ADTS frame, didn't get one.");const h=u.crcCheck===null?Nf:Bf;a=a.subarray(h)}this.validateTimestamp(s.track,t.timestamp,t.type==="key");let o=t.timestamp,c=t.duration;if(s.info.requiresPcmTransformation){const h=Si(s.info.decoderConfig.codec).sampleSize*s.info.numberOfChannels;if(c=a.byteLength/h/s.info.sampleRate,s.info.expectedNextPcmPacketTimestamp!==null){const f=o-s.info.expectedNextPcmPacketTimestamp;if(f<.01)o=s.info.expectedNextPcmPacketTimestamp;else{const d=await this.padWithSilence(s,s.info.expectedNextPcmPacketTimestamp,f);o=s.info.expectedNextPcmPacketTimestamp+d}}s.info.expectedNextPcmPacketTimestamp=o+c}const l=this.createSampleForTrack(s,a,o,c,t.type);await this.registerSample(s,l)}finally{r()}}async padWithSilence(e,t,i){const r=at(i,e.timescale);if(i=r/e.timescale,r>0){const{sampleSize:s,silentValue:a}=Si(e.info.decoderConfig.codec),o=r*e.info.numberOfChannels,c=new Uint8Array(s*o).fill(a),l=this.createSampleForTrack(e,new Uint8Array(c.buffer),t,i,"key");await this.registerSample(e,l)}return i}async addSubtitleCue(e,t,i){const r=await this.mutex.acquire();try{const s=this.getSubtitleTrackData(e,i);this.validateTimestamp(s.track,t.timestamp,!0),e.source._codec==="webvtt"&&(s.cueQueue.push(t),await this.processWebVTTCues(s,t.timestamp))}finally{r()}}async processWebVTTCues(e,t){for(;e.cueQueue.length>0;){e.lastCueEndTimestamp??=Math.min(0,e.cueQueue[0].timestamp);const i=new Set([]);for(const l of e.cueQueue)V(l.timestamp<=t),V(e.lastCueEndTimestamp<=l.timestamp+l.duration),i.add(Math.max(l.timestamp,e.lastCueEndTimestamp)),i.add(l.timestamp+l.duration);const r=[...i].sort((l,u)=>l-u),s=r[0],a=r[1]??s;if(t<a)break;if(e.lastCueEndTimestamp<s){this.auxWriter.seek(0);const l=lS();this.auxBoxWriter.writeBox(l);const u=this.auxTarget._getSlice(0,this.auxWriter.getPos()),h=this.createSampleForTrack(e,u,e.lastCueEndTimestamp,s-e.lastCueEndTimestamp,"key");await this.registerSample(e,h),e.lastCueEndTimestamp=s}this.auxWriter.seek(0);for(let l=0;l<e.cueQueue.length;l++){const u=e.cueQueue[l];if(u.timestamp>=a)break;ia.lastIndex=0;const h=ia.test(u.text),f=u.timestamp+u.duration;let d=e.cueToSourceId.get(u);if(d===void 0&&a<f&&(d=e.nextSourceId++,e.cueToSourceId.set(u,d)),u.notes){const _=hS(u.notes);this.auxBoxWriter.writeBox(_)}const g=uS(u.text,h?s:null,u.identifier??null,u.settings??null,d??null);this.auxBoxWriter.writeBox(g),f===a&&e.cueQueue.splice(l--,1)}const o=this.auxTarget._getSlice(0,this.auxWriter.getPos()),c=this.createSampleForTrack(e,o,s,a-s,"key");await this.registerSample(e,c),e.lastCueEndTimestamp=a}}createSampleForTrack(e,t,i,r,s){return{timestamp:i,decodeTimestamp:i,duration:r,data:t,size:t.byteLength,type:s,timescaleUnitsToNextSample:at(r,e.timescale)}}processTimestamps(e,t){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){V(!this.isFragmented),e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp;let r=0;for(let s=0;s<e.timestampProcessingQueue.length;s++){const a=e.timestampProcessingQueue[s],o=at(a.duration,e.timescale);r+=o}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:r,sampleDelta:1});else{const s=wn(e.timeToSampleTable);s.sampleCount+=r}e.timestampProcessingQueue.length=0;return}const i=e.timestampProcessingQueue.map(r=>r.timestamp).sort((r,s)=>r-s);this.isFragmented?e.startTimestampOffset??=Math.min(i[0],0):e.startTimestampOffset??=i[0];for(let r=0;r<e.timestampProcessingQueue.length;r++){const s=e.timestampProcessingQueue[r];s.decodeTimestamp=i[r];const a=at(s.timestamp-s.decodeTimestamp,e.timescale),o=at(s.duration,e.timescale);if(e.lastTimescaleUnits!==null){V(e.lastSample);const c=at(s.decodeTimestamp,e.timescale,!1),l=Math.round(c-e.lastTimescaleUnits);if(V(l>=0),e.lastTimescaleUnits+=l,e.lastSample.timescaleUnitsToNextSample=l,!this.isFragmented){let u=wn(e.timeToSampleTable);if(V(u),u.sampleCount===1){u.sampleDelta=l;const f=e.timeToSampleTable[e.timeToSampleTable.length-2];f&&f.sampleDelta===l&&(f.sampleCount++,e.timeToSampleTable.pop(),u=f)}else u.sampleDelta!==l&&(u.sampleCount--,e.timeToSampleTable.push(u={sampleCount:1,sampleDelta:l}));u.sampleDelta===o?u.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:o});const h=wn(e.compositionTimeOffsetTable);V(h),h.sampleCompositionTimeOffset===a?h.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:a})}}else e.lastTimescaleUnits=at(s.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:o}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:a}));e.lastSample=s}if(e.timestampProcessingQueue.length=0,V(e.lastSample),V(e.lastTimescaleUnits!==null),t!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){V(t.type==="key");const r=at(t.timestamp,e.timescale,!1),s=Math.round(r-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=s}}async registerSample(e,t){t.type==="key"&&this.processTimestamps(e,t),e.timestampProcessingQueue.push(t),this.isFragmented?(e.sampleQueue.push(t),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,t):await this.addSampleToTrack(e,t)}async addSampleToTrack(e,t){if(!this.isFragmented&&(e.samples.push(t),this.fastStart==="reserve")){const r=e.track.metadata.maximumPacketCount;if(V(r!==void 0),e.samples.length>r)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${r}). Either add less packets or increase the maximum packet count.`)}let i=!1;if(!e.currentChunk)i=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,t.timestamp);const r=t.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const s=this.trackDatas.every(a=>{if(e===a)return t.type==="key";const o=a.sampleQueue[0];return o?o.type==="key":a.closed});r>=this.minimumFragmentDuration&&s&&t.timestamp>this.maxWrittenTimestamp&&(i=!0,await this.finalizeFragment())}else i=r>=.5}i&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:t.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),V(e.currentChunk),e.currentChunk.samples.push(t),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,t.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,t.timestamp+t.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,t.timestamp))}async finalizeCurrentChunk(e){if(V(!this.isFragmented),V(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let t=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(t=e.currentChunk.samples.reduce((i,r)=>i+at(r.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||wn(e.compactlyCodedChunkTable).samplesPerChunk!==t)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:t}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const i of e.currentChunk.samples)V(i.data),this.writer.write(i.data),i.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(V(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let t=null,i=1/0;for(const s of this.trackDatas){if(!e&&s.sampleQueue.length===0&&!s.closed)break e;s.sampleQueue.length>0&&s.sampleQueue[0].timestamp<i&&(t=s,i=s.sampleQueue[0].timestamp)}if(!t)break;const r=t.sampleQueue.shift();await this.addSampleToTrack(t,r)}}async finalizeFragment(e=!this.isCmaf){if(V(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const d=this.initBoxWriter??this.boxWriter;V(d),this.formatOptions.onMoov&&d.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const g=Lr(this);if(d.writeBox(g),this.formatOptions.onMoov){const{data:_,start:p}=d.writer.stopTrackingWrites();this.formatOptions.onMoov(_,p)}if(this.isCmaf){V(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new Ds(this.writer);const _=this.boxWriter.measureBox(oh()),p=this.boxWriter.measureBox(ch(this,0));this.segmentHeaderSize=_+p,this.writer.seek(this.segmentHeaderSize)}}V(this.writer),V(this.boxWriter);const t=this.trackDatas.filter(d=>d.currentChunk);if(t.length===0){e&&await this.writer.flush();return}const i=this.nextFragmentNumber++,r=uh(i,t),s=this.writer.getPos(),a=s+this.boxWriter.measureBox(r);let o=a+uo,c=1/0;for(let d=0;d<t.length;d++){const g=t[d];V(g.currentChunk),V(g.startTimestampOffset!==null),g.currentChunk.offset=o,g.currentChunk.moofOffset=s,g.currentChunk.trafIndex=d,g.currentChunk.startTimestamp-=g.startTimestampOffset;for(const _ of g.currentChunk.samples)o+=_.size,_.timestamp-=g.startTimestampOffset,_.decodeTimestamp-=g.startTimestampOffset;c=Math.min(c,g.currentChunk.startTimestamp)}const l=o-a,u=l>=2**32;if(u)for(const d of t)d.currentChunk.offset+=Gu-uo;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const h=uh(i,t);if(this.boxWriter.writeBox(h),this.formatOptions.onMoof){const{data:d,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(d,g,c)}V(this.writer.getPos()===a),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const f=Ls(u);f.size=l,this.boxWriter.writeBox(f),this.writer.seek(a+(u?Gu:uo));for(const d of t)for(const g of d.currentChunk.samples)this.writer.write(g.data),g.data=null;if(this.formatOptions.onMdat){const{data:d,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(d,g)}for(const d of t)d.finalizedChunks.push(d.currentChunk),this.finalizedChunks.push(d.currentChunk),d.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,t){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,t)):e.sampleQueue.push(t)}async createFastStartReserveMdat(){V(this.writer),V(this.boxWriter),this.ensureOneEnabledTrack();const e=Lr(this),i=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;V(this.ftypSize!==null),this.writer.seek(this.ftypSize+i),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Ls(!0),this.boxWriter.writeBox(this.mdat);for(const r of this.trackDatas){for(const s of r.sampleQueue)await this.addSampleToTrack(r,s);r.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){V(this.fastStart==="reserve");let e=0;for(const t of this.trackDatas){const i=t.track.metadata.maximumPacketCount;V(i!==void 0),e+=8*Math.ceil(2/3*i),e+=4*i,e+=8*Math.ceil(2/3*i),e+=12*Math.ceil(2/3*i),e+=4*i,e+=8*i}return e}async onTrackClose(e){const t=await this.mutex.acquire(),i=this.trackDatas.find(r=>r.track===e);i&&(i.closed=!0,i.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),t()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const t=this.trackDatas.filter(r=>r.type===e);if(t.length===0)continue;if(!t.some(r=>r.track.metadata.disposition?.default!==!1)){const r=t[0];r.track.metadata.disposition={...r.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){V(this.isFragmented);const e=await this.mutex.acquire();try{for(const t of this.trackDatas)t.type==="subtitle"&&t.track.source._codec==="webvtt"&&await this.processWebVTTCues(t,1/0),this.processTimestamps(t);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const t of this.trackDatas)t.closed=!0,t.type==="subtitle"&&t.track.source._codec==="webvtt"&&await this.processWebVTTCues(t,1/0),this.processTimestamps(t);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const t of this.trackDatas){await this.finalizeCurrentChunk(t);const i=wr(t);if(i>0){let o=0;for(const c of t.samples)o+=c.size;t.avgBitrate=Math.round(8*o/i)}else t.avgBitrate=0;let r=0,s=0,a=0;for(let o=0;o<t.samples.length;o++){const c=t.samples[o];for(s+=c.size;c.decodeTimestamp-t.samples[r].decodeTimestamp>=1;)s-=t.samples[r].size,r++;a=Math.max(a,s)}if(t.maxBitrate=8*a,t.startTimestampOffset!==null)for(let o=0;o<t.samples.length;o++){const c=t.samples[o];c.timestamp-=t.startTimestampOffset,c.decodeTimestamp-=t.startTimestampOffset}}if(V(this.writer),V(this.boxWriter),this.fastStart==="in-memory"){this.mdat=Ls(!1);let t;for(let r=0;r<2;r++){const s=Lr(this),a=this.boxWriter.measureBox(s);t=this.boxWriter.measureBox(this.mdat);let o=this.writer.getPos()+a+t;for(const c of this.finalizedChunks){c.offset=o;for(const{data:l}of c.samples)V(l),o+=l.byteLength,t+=l.byteLength}if(o<2**32)break;t>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const i=Lr(this);if(this.boxWriter.writeBox(i),this.formatOptions.onMoov){const{data:r,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(r,s)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=t,this.boxWriter.writeBox(this.mdat);for(const r of this.finalizedChunks)for(const s of r.samples)V(s.data),this.writer.write(s.data),s.data=null;if(this.formatOptions.onMdat){const{data:r,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(r,s)}}else if(this.isFragmented)if(this.isCmaf){const t=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(oh()),this.boxWriter.writeBox(ch(this,t))}else{const t=this.writer.getPos(),i=aS(this.trackDatas);this.boxWriter.writeBox(i);const r=this.writer.getPos()-t;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(r)}else{V(this.mdat);const t=this.boxWriter.offsets.get(this.mdat);V(t!==void 0);const i=this.writer.getPos()-t;if(this.mdat.size=i,this.mdat.largeSize=i>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:s,start:a}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(s,a)}const r=Lr(this);if(this.fastStart==="reserve"){V(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(r);const s=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(hb(s))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(r);if(this.formatOptions.onMoov){const{data:s,start:a}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(s,a)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ES=-32768,MS=2**15-1,fh=6,dh=5,CS={video:1,audio:2,subtitle:17};class AS extends $f{constructor(e,t){super(e),this.trackDatas=[],this.allTracksKnown=Hc(),this.segment=null,this.segmentInfo=null,this.seekHead=null,this.tracksElement=null,this.tagsElement=null,this.attachmentsElement=null,this.segmentDuration=null,this.cues=null,this.currentCluster=null,this.currentClusterStartMsTimestamp=null,this.currentClusterMaxMsTimestamp=null,this.trackDatasInCurrentCluster=new Map,this.startTimestamp=1/0,this.endTimestamp=-1/0,this.warnedAboutTooNegativeTimestamp=!1,this.format=t}async start(){const e=await this.mutex.acquire();this.writer=await this.output._getRootWriter(!!this.format._options.appendOnly),this.ebmlWriter=new kw(this.writer),this.writeEBMLHeader(),this.createSegmentInfo(),this.createCues(),await this.writer.flush();for(const t of this.output.tracks)t.isVideoTrack()&&t.metadata.decoderConfig?this.getVideoTrackData(t,t.metadata.primingPacket??null,{decoderConfig:t.metadata.decoderConfig}):t.isAudioTrack()&&t.metadata.decoderConfig&&this.getAudioTrackData(t,t.metadata.primingPacket??null,{decoderConfig:t.metadata.decoderConfig});e()}writeEBMLHeader(){this.format._options.onEbmlHeader&&this.writer.startTrackingWrites();const e={id:K.EBML,data:[{id:K.EBMLVersion,data:1},{id:K.EBMLReadVersion,data:1},{id:K.EBMLMaxIDLength,data:4},{id:K.EBMLMaxSizeLength,data:8},{id:K.DocType,data:this.format instanceof Ws?"webm":"matroska"},{id:K.DocTypeVersion,data:4},{id:K.DocTypeReadVersion,data:2}]};if(this.ebmlWriter.writeEBML(e),this.format._options.onEbmlHeader){const{data:t,start:i}=this.writer.stopTrackingWrites();this.format._options.onEbmlHeader(t,i)}}maybeCreateSeekHead(e){if(this.format._options.appendOnly)return;const t=new Uint8Array([28,83,187,107]),i=new Uint8Array([21,73,169,102]),r=new Uint8Array([22,84,174,107]),s=new Uint8Array([25,65,164,105]),a=new Uint8Array([18,84,195,103]),o={id:K.SeekHead,data:[{id:K.Seek,data:[{id:K.SeekID,data:i},{id:K.SeekPosition,size:5,data:e?this.ebmlWriter.offsets.get(this.segmentInfo)-this.segmentDataOffset:0}]},{id:K.Seek,data:[{id:K.SeekID,data:r},{id:K.SeekPosition,size:5,data:e?this.ebmlWriter.offsets.get(this.tracksElement)-this.segmentDataOffset:0}]},this.attachmentsElement?{id:K.Seek,data:[{id:K.SeekID,data:s},{id:K.SeekPosition,size:5,data:e?this.ebmlWriter.offsets.get(this.attachmentsElement)-this.segmentDataOffset:0}]}:null,this.tagsElement?{id:K.Seek,data:[{id:K.SeekID,data:a},{id:K.SeekPosition,size:5,data:e?this.ebmlWriter.offsets.get(this.tagsElement)-this.segmentDataOffset:0}]}:null,{id:K.Seek,data:[{id:K.SeekID,data:t},{id:K.SeekPosition,size:5,data:e?this.ebmlWriter.offsets.get(this.cues)-this.segmentDataOffset:0}]}]};this.seekHead=o}createSegmentInfo(){const e={id:K.Duration,data:new xc(0)};this.segmentDuration=e;const t={id:K.Info,data:[{id:K.TimestampScale,data:1e6},{id:K.MuxingApp,data:Hr},{id:K.WritingApp,data:Hr},this.format._options.appendOnly?null:e]};this.segmentInfo=t}createTracks(){const e={id:K.Tracks,data:[]};this.tracksElement=e;for(const t of this.trackDatas){let i=zw[t.track.source._codec];V(i),t.type==="audio"&&t.track.source._codec==="dts"&&(t.info.decoderConfig.codec==="dtse"?i="A_DTS/EXPRESS":t.info.decoderConfig.codec==="dtsl"&&(i="A_DTS/LOSSLESS"));let r=0;if(t.type==="audio"&&t.track.source._codec==="opus"){r=1e6*80;const s=t.info.decoderConfig.description;if(s){const a=Vt(s),o=If(a);r=Math.round(1e9*(o.preSkip/Aw))}}e.data.push({id:K.TrackEntry,data:[{id:K.TrackNumber,data:t.track.id},{id:K.TrackUID,data:t.track.id},{id:K.TrackType,data:CS[t.type]},t.track.metadata.disposition?.default===!1?{id:K.FlagDefault,data:0}:null,t.track.metadata.disposition?.forced?{id:K.FlagForced,data:1}:null,t.track.metadata.disposition?.hearingImpaired?{id:K.FlagHearingImpaired,data:1}:null,t.track.metadata.disposition?.visuallyImpaired?{id:K.FlagVisualImpaired,data:1}:null,t.track.metadata.disposition?.original?{id:K.FlagOriginal,data:1}:null,t.track.metadata.disposition?.commentary?{id:K.FlagCommentary,data:1}:null,{id:K.FlagLacing,data:0},{id:K.Language,data:t.track.metadata.languageCode??wf},{id:K.CodecID,data:i},t.codecPrivate?{id:K.CodecPrivate,data:Vt(t.codecPrivate)}:null,r>0?{id:K.SeekPreRoll,data:r}:null,t.track.metadata.name!==void 0?{id:K.Name,data:new hi(t.track.metadata.name)}:null,t.type==="video"?this.videoSpecificTrackInfo(t):null,t.type==="audio"?this.audioSpecificTrackInfo(t):null,t.type==="subtitle"?this.subtitleSpecificTrackInfo(t):null]})}}videoSpecificTrackInfo(e){const{frameRate:t,transformationMatrix:i}=e.track.metadata,r=[t?{id:K.DefaultDuration,data:1e9/t}:null];let s,a,o;if(i){s=hy(i);const g=Js(vf(-s),i);a=Math.sign(g[0]),o=Math.sign(g[4]),o===-1&&(o=1,a=-a,s=Zs(s+180))}else s=e.track.metadata.rotation??0,a=e.track.metadata.flip?-1:1,o=1;const c=s?Zs(a===-1?s:-s):0,l=Math.round(Math.acos(a)*pc),u=Math.round(Math.acos(o)*pc),h=!!e.info.aspectRatio&&e.info.aspectRatio.num*e.info.height!==e.info.aspectRatio.den*e.info.width,f=e.info.decoderConfig.colorSpace,d={id:K.Video,data:[{id:K.PixelWidth,data:e.info.width},{id:K.PixelHeight,data:e.info.height},h?{id:K.DisplayWidth,data:e.info.aspectRatio.num}:null,h?{id:K.DisplayHeight,data:e.info.aspectRatio.den}:null,h?{id:K.DisplayUnit,data:3}:null,e.info.alphaMode?{id:K.AlphaMode,data:1}:null,xf(f)?null:{id:K.Colour,data:[{id:K.MatrixCoefficients,data:f?.matrix!=null?ns[f.matrix]:2},{id:K.TransferCharacteristics,data:f?.transfer!=null?ts[f.transfer]:2},{id:K.Primaries,data:f?.primaries!=null?es[f.primaries]:2},{id:K.Range,data:f?.fullRange!=null?f.fullRange?2:1:0}]},c||l||u?{id:K.Projection,data:[{id:K.ProjectionType,data:0},l?{id:K.ProjectionPoseYaw,data:new Or(l)}:null,u?{id:K.ProjectionPosePitch,data:new Or(u)}:null,c?{id:K.ProjectionPoseRoll,data:new Or((c+180)%360-180)}:null]}:null]};return r.push(d),r}audioSpecificTrackInfo(e){const t=Jt.includes(e.track.source._codec)?Si(e.track.source._codec):null;return[{id:K.Audio,data:[{id:K.SamplingFrequency,data:new Or(e.info.sampleRate)},{id:K.Channels,data:e.info.numberOfChannels},t?{id:K.BitDepth,data:8*t.sampleSize}:null]}]}subtitleSpecificTrackInfo(e){return[]}maybeCreateTags(){const e=[],t=(s,a)=>{e.push({id:K.SimpleTag,data:[{id:K.TagName,data:new hi(s)},typeof a=="string"?{id:K.TagString,data:new hi(a)}:{id:K.TagBinary,data:a}]})},i=this.output._metadataTags,r=new Set;for(const{key:s,value:a}of Wc(i))switch(s){case"title":t("TITLE",a),r.add("TITLE");break;case"description":t("DESCRIPTION",a),r.add("DESCRIPTION");break;case"artist":t("ARTIST",a),r.add("ARTIST");break;case"album":t("ALBUM",a),r.add("ALBUM");break;case"albumArtist":t("ALBUM_ARTIST",a),r.add("ALBUM_ARTIST");break;case"genre":t("GENRE",a),r.add("GENRE");break;case"beatsPerMinute":t("BPM",a.toString()),r.add("BPM");break;case"comment":t("COMMENT",a),r.add("COMMENT");break;case"lyrics":t("LYRICS",a),r.add("LYRICS");break;case"date":t("DATE",a.toISOString().slice(0,10)),r.add("DATE");break;case"trackNumber":{const o=i.tracksTotal!==void 0?`${a}/${i.tracksTotal}`:a.toString();t("PART_NUMBER",o),r.add("PART_NUMBER")}break;case"discNumber":{const o=i.discsTotal!==void 0?`${a}/${i.discsTotal}`:a.toString();t("DISC",o),r.add("DISC")}break;case"tracksTotal":case"discsTotal":break;case"images":case"raw":break;default:ti(s)}if(i.raw)for(const s in i.raw){const a=i.raw[s];a==null||r.has(s)||(typeof a=="string"||a instanceof Uint8Array)&&t(s,a)}e.length!==0&&(this.tagsElement={id:K.Tags,data:[{id:K.Tag,data:[{id:K.Targets,data:[{id:K.TargetTypeValue,data:50},{id:K.TargetType,data:"MOVIE"}]},...e]}]})}maybeCreateAttachments(){const e=this.output._metadataTags,t=[],i=new Set,r=e.images??[];for(const s of r){let a=s.name;a===void 0&&(a=(s.kind==="coverFront"?"cover":s.kind==="coverBack"?"back":"image")+(Ry(s.mimeType)??""));let o;for(;;){o=0n;for(let c=0;c<8;c++)o<<=8n,o|=BigInt(Math.floor(Math.random()*256));if(o!==0n&&!i.has(o))break}i.add(o),t.push({id:K.AttachedFile,data:[s.description!==void 0?{id:K.FileDescription,data:new hi(s.description)}:null,{id:K.FileName,data:new hi(a)},{id:K.FileMediaType,data:s.mimeType},{id:K.FileData,data:s.data},{id:K.FileUID,data:o}]})}for(const[s,a]of Object.entries(e.raw??{}))!(a instanceof Cf)||!/^\d+$/.test(s)||r.find(c=>c.mimeType===a.mimeType&&Py(c.data,a.data))||t.push({id:K.AttachedFile,data:[a.description!==void 0?{id:K.FileDescription,data:new hi(a.description)}:null,{id:K.FileName,data:new hi(a.name??"")},{id:K.FileMediaType,data:a.mimeType??""},{id:K.FileData,data:a.data},{id:K.FileUID,data:BigInt(s)}]});t.length!==0&&(this.attachmentsElement={id:K.Attachments,data:t})}createSegment(){this.createTracks(),this.maybeCreateTags(),this.maybeCreateAttachments(),this.maybeCreateSeekHead(!1);const e={id:K.Segment,size:this.format._options.appendOnly?-1:fh,data:[this.seekHead,this.segmentInfo,this.tracksElement,this.attachmentsElement,this.tagsElement]};if(this.segment=e,this.format._options.onSegmentHeader&&this.writer.startTrackingWrites(),this.ebmlWriter.writeEBML(e),this.format._options.onSegmentHeader){const{data:t,start:i}=this.writer.stopTrackingWrites();this.format._options.onSegmentHeader(t,i)}}createCues(){this.cues={id:K.Cues,data:[]}}get segmentDataOffset(){return V(this.segment),this.ebmlWriter.dataOffsets.get(this.segment)}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(t=>t.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(t=>t.type==="video"||t.type==="audio"?t.info.decoderConfig.codec:{webvtt:"wvtt"}[t.track.source._codec]);return Vw({isWebM:this.format instanceof Ws,hasVideo:this.trackDatas.some(t=>t.type==="video"),hasAudio:this.trackDatas.some(t=>t.type==="audio"),codecStrings:e})}getVideoTrackData(e,t,i){const r=this.trackDatas.find(l=>l.track===e);if(r)return r;Yc(i,e.source._codec),V(i),V(i.decoderConfig),V(i.decoderConfig.codedWidth!==void 0),V(i.decoderConfig.codedHeight!==void 0);const s=i.decoderConfig.displayAspectWidth,a=i.decoderConfig.displayAspectHeight,o=s===void 0||a===void 0?null:Xc({num:s,den:a}),c={track:e,type:"video",info:{width:i.decoderConfig.codedWidth,height:i.decoderConfig.codedHeight,aspectRatio:o,decoderConfig:i.decoderConfig,alphaMode:e.metadata.canBeTransparent||(t?!!t.sideData.alpha:null)},chunkQueue:[],lastWrittenMsTimestamp:null,codecPrivate:i.decoderConfig.description??null,closed:!1};return e.source._codec==="vp9"?c.codecPrivate=new Uint8Array(Mw(c.info.decoderConfig.codec)):e.source._codec==="av1"?c.codecPrivate=new Uint8Array(Ff(c.info.decoderConfig.codec)):e.source._codec==="prores"&&(c.codecPrivate=Nt.encode(i.decoderConfig.codec)),this.trackDatas.push(c),this.trackDatas.sort((l,u)=>l.track.id-u.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),c}getAudioTrackData(e,t,i){const r=this.trackDatas.find(c=>c.track===e);if(r)return r;jc(i,e.source._codec),V(i),V(i.decoderConfig);const s={...i.decoderConfig};let a=!1;if(e.source._codec==="aac"&&!s.description){if(!t)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const c=na(Gi.tempFromBytes(t.data));if(!c)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const l=$r[c.samplingFrequencyIndex],u=ua[c.channelConfiguration];if(l===void 0||u===void 0)throw new Error("Invalid ADTS frame header.");s.description=$c({objectType:c.objectType,outputSampleRate:l,outputNumberOfChannels:u}),a=!0}const o={track:e,type:"audio",info:{numberOfChannels:i.decoderConfig.numberOfChannels,sampleRate:i.decoderConfig.sampleRate,decoderConfig:s,requiresAdtsStripping:a},chunkQueue:[],lastWrittenMsTimestamp:null,codecPrivate:s.description??null,closed:!1};return this.trackDatas.push(o),this.trackDatas.sort((c,l)=>c.track.id-l.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}getSubtitleTrackData(e,t){const i=this.trackDatas.find(s=>s.track===e);if(i)return i;Df(t),V(t),V(t.config);const r={track:e,type:"subtitle",info:{config:t.config},chunkQueue:[],lastWrittenMsTimestamp:null,codecPrivate:Nt.encode(t.config.description),closed:!1};return this.trackDatas.push(r),this.trackDatas.sort((s,a)=>s.track.id-a.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}async addEncodedVideoPacket(e,t,i){const r=await this.mutex.acquire();try{const s=this.getVideoTrackData(e,t,i);s.info.alphaMode??=!!t.sideData.alpha;let a=t.data;if(e.source._codec==="prores"){if(a.byteLength<8)throw new Error("ProRes packet too small, expected at least 8 bytes.");a=a.subarray(8)}const o=t.type==="key";this.validateTimestamp(s.track,t.timestamp,o);let c=t.timestamp,l=t.duration;e.metadata.frameRate!==void 0&&(c=ea(c,e.metadata.frameRate),l=ea(l,e.metadata.frameRate));const u=s.info.alphaMode?t.sideData.alpha??null:null,h=this.createInternalChunk(a,c,l,t.type,u);e.source._codec==="vp9"&&this.fixVP9ColorSpace(s,h),s.chunkQueue.push(h),await this.interleaveChunks()}finally{r()}}async addEncodedAudioPacket(e,t,i){const r=await this.mutex.acquire();try{const s=this.getAudioTrackData(e,t,i);let a=t.data;if(s.info.requiresAdtsStripping){const l=na(Gi.tempFromBytes(a));if(!l)throw new Error("Expected ADTS frame, didn't get one.");const u=l.crcCheck===null?Nf:Bf;a=a.subarray(u)}const o=t.type==="key";this.validateTimestamp(s.track,t.timestamp,o);const c=this.createInternalChunk(a,t.timestamp,t.duration,t.type);s.chunkQueue.push(c),await this.interleaveChunks()}finally{r()}}async addSubtitleCue(e,t,i){const r=await this.mutex.acquire();try{const s=this.getSubtitleTrackData(e,i);this.validateTimestamp(s.track,t.timestamp,!0);let a=t.text;const o=Math.round(t.timestamp*1e3);ia.lastIndex=0,a=a.replace(ia,h=>{const d=lb(h.slice(1,-1))-o;return`<${Yf(d)}>`});const c=Nt.encode(a),l=`${t.settings??""}
${t.identifier??""}
${t.notes??""}`,u=this.createInternalChunk(c,t.timestamp,t.duration,"key",l.trim()?Nt.encode(l):null);s.chunkQueue.push(u),await this.interleaveChunks()}finally{r()}}async interleaveChunks(e=!1){if(!(!e&&!this.allTracksAreKnown())){e:for(;;){let t=null,i=1/0;for(const s of this.trackDatas){if(!e&&s.chunkQueue.length===0&&!s.closed)break e;s.chunkQueue.length>0&&s.chunkQueue[0].timestamp<i&&(t=s,i=s.chunkQueue[0].timestamp)}if(!t)break;const r=t.chunkQueue.shift();this.writeBlock(t,r)}e||await this.writer.flush()}}fixVP9ColorSpace(e,t){if(t.type!=="key"||!e.info.decoderConfig.colorSpace||!e.info.decoderConfig.colorSpace.matrix)return;const i=new _t(t.data);i.skipBits(2);const r=i.readBits(1),a=(i.readBits(1)<<1)+r;if(a===3&&i.skipBits(1),i.readBits(1)||i.readBits(1)!==0||(i.skipBits(2),i.readBits(24)!==4817730))return;a>=2&&i.skipBits(1);const u={rgb:7,bt709:2,bt470bg:1,smpte170m:3}[e.info.decoderConfig.colorSpace.matrix];gy(t.data,i.pos,i.pos+3,u)}createInternalChunk(e,t,i,r,s=null){return{data:e,type:r,timestamp:t,duration:i,additions:s}}writeBlock(e,t){this.segment||this.createSegment();const i=Math.round(1e3*t.timestamp),r=this.trackDatas.every(h=>{if(e===h)return t.type==="key";const f=h.chunkQueue[0];return f?f.type==="key":h.closed});let s=!1;if(!this.currentCluster)s=!0;else{V(this.currentClusterStartMsTimestamp!==null),V(this.currentClusterMaxMsTimestamp!==null);const h=i-this.currentClusterStartMsTimestamp;s=r&&i>this.currentClusterMaxMsTimestamp&&h>=1e3*(this.format._options.minimumClusterDuration??1)||h>MS}s&&this.createNewCluster(i);const a=i-this.currentClusterStartMsTimestamp;if(a<ES){if(!this.warnedAboutTooNegativeTimestamp){const h=this.format instanceof Ws?"WebM":"Matroska";ht._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${h}.`),this.warnedAboutTooNegativeTimestamp=!0}return}const o=new Uint8Array(4),c=new DataView(o.buffer);c.setUint8(0,128|e.track.id),c.setInt16(1,a,!1);const l=Math.round(1e3*t.duration);if(!!t.additions||e.type==="subtitle"){const h={id:K.BlockGroup,data:[{id:K.Block,data:[o,t.data]},t.type==="delta"?{id:K.ReferenceBlock,data:new Lf(e.lastWrittenMsTimestamp-i)}:null,t.additions?{id:K.BlockAdditions,data:[{id:K.BlockMore,data:[{id:K.BlockAddID,data:1},{id:K.BlockAdditional,data:t.additions}]}]}:null,l>0?{id:K.BlockDuration,data:l}:null]};this.ebmlWriter.writeEBML(h)}else{c.setUint8(3,+(t.type==="key")<<7);const h={id:K.SimpleBlock,data:[o,t.data]};this.ebmlWriter.writeEBML(h)}this.startTimestamp=Math.min(this.startTimestamp,i),this.endTimestamp=Math.max(this.endTimestamp,i+l),e.lastWrittenMsTimestamp=i,this.trackDatasInCurrentCluster.has(e)||this.trackDatasInCurrentCluster.set(e,{firstMsTimestamp:i}),this.currentClusterMaxMsTimestamp=Math.max(this.currentClusterMaxMsTimestamp,i)}createNewCluster(e){e=Math.max(0,e),this.currentCluster&&this.finalizeCurrentCluster(),this.format._options.onCluster&&this.writer.startTrackingWrites(),this.currentCluster={id:K.Cluster,size:this.format._options.appendOnly?-1:dh,data:[{id:K.Timestamp,data:e}]},this.ebmlWriter.writeEBML(this.currentCluster),this.currentClusterStartMsTimestamp=e,this.currentClusterMaxMsTimestamp=e,this.trackDatasInCurrentCluster.clear()}finalizeCurrentCluster(){if(V(this.currentCluster),!this.format._options.appendOnly){const r=this.writer.getPos()-this.ebmlWriter.dataOffsets.get(this.currentCluster),s=this.writer.getPos();this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster)+4),this.ebmlWriter.writeVarInt(r,dh),this.writer.seek(s)}if(this.format._options.onCluster){V(this.currentClusterStartMsTimestamp!==null);const{data:r,start:s}=this.writer.stopTrackingWrites();this.format._options.onCluster(r,s,this.currentClusterStartMsTimestamp/1e3)}const e=this.ebmlWriter.offsets.get(this.currentCluster)-this.segmentDataOffset,t=new Map;for(const[r,{firstMsTimestamp:s}]of this.trackDatasInCurrentCluster)t.has(s)||t.set(s,[]),t.get(s).push(r);const i=[...t.entries()].sort((r,s)=>r[0]-s[0]);for(const[r,s]of i)V(this.cues),this.cues.data.push({id:K.CuePoint,data:[{id:K.CueTime,data:Math.max(0,r)},...s.map(a=>({id:K.CueTrackPositions,data:[{id:K.CueTrack,data:a.track.id},{id:K.CueClusterPosition,data:e}]}))]})}async onTrackClose(e){const t=await this.mutex.acquire(),i=this.trackDatas.find(r=>r.track===e);i&&(i.closed=!0),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),await this.interleaveChunks(),t()}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve();for(const t of this.trackDatas)t.closed=!0;if(this.segment||this.createSegment(),await this.interleaveChunks(!0),this.currentCluster&&this.finalizeCurrentCluster(),V(this.cues),this.ebmlWriter.writeEBML(this.cues),!this.format._options.appendOnly){const t=this.writer.getPos()-this.segmentDataOffset;this.writer.seek(this.ebmlWriter.offsets.get(this.segment)+4),this.ebmlWriter.writeVarInt(t,fh);const i=this.startTimestamp===1/0?0:this.endTimestamp;this.segmentDuration.data=new xc(i),this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)),this.ebmlWriter.writeEBML(this.segmentDuration),V(this.seekHead),this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)),this.maybeCreateSeekHead(!0),this.ebmlWriter.writeEBML(this.seekHead)}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class RS{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels}doChannelMixerSetup(){V(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,t=this.targetNumberOfChannels;e===1&&t===2?this.channelMixer=(i,r)=>i[r*e]:e===1&&t===4?this.channelMixer=(i,r,s)=>i[r*e]*+(s<2):e===1&&t===6?this.channelMixer=(i,r,s)=>i[r*e]*+(s===2):e===2&&t===1?this.channelMixer=(i,r)=>{const s=r*e;return .5*(i[s]+i[s+1])}:e===2&&t===4?this.channelMixer=(i,r,s)=>s<2?i[r*e+s]:0:e===2&&t===6?this.channelMixer=(i,r,s)=>s<2?i[r*e+s]:0:e===4&&t===1?this.channelMixer=(i,r)=>{const s=r*e;return .25*(i[s]+i[s+1]+i[s+2]+i[s+3])}:e===4&&t===2?this.channelMixer=(i,r,s)=>{const a=r*e;return .5*(i[a+s]+i[a+s+2])}:e===4&&t===6?this.channelMixer=(i,r,s)=>{const a=r*e;return s<2?i[a+s]:s===2||s===3?0:i[a+s-2]}:e===6&&t===1?this.channelMixer=(i,r)=>{const s=r*e;return Math.SQRT1_2*(i[s]+i[s+1])+i[s+2]+.5*(i[s+4]+i[s+5])}:e===6&&t===2?this.channelMixer=(i,r,s)=>{const a=r*e;return i[a+s]+Math.SQRT1_2*(i[a+2]+i[a+s+4])}:e===6&&t===4?this.channelMixer=(i,r,s)=>{const a=r*e;return s<2?i[a+s]+Math.SQRT1_2*i[a+2]:i[a+s+2]}:this.channelMixer=(i,r,s)=>s<e?i[r*e+s]:0}ensureTempBufferSize(e){let t=this.tempSourceBuffer.length;for(;t<e;)t*=2;if(t!==this.tempSourceBuffer.length){const i=new Float32Array(t);i.set(this.tempSourceBuffer),this.tempSourceBuffer=i}}async add(e){if(this.sourceSampleRate===null){this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp;const l=Math.ceil(this.targetSampleRate/this.sourceSampleRate);this.bufferCapacityInFrames=this.bufferSizeInFrames+l,this.outputBuffer=new Float32Array(this.bufferCapacityInFrames*this.targetNumberOfChannels),this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()}V(this.startTime!==null);const t=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(t);const i=e.allocationSize({planeIndex:0,format:"f32"}),r=new Float32Array(this.tempSourceBuffer.buffer,0,i/4);e.copyTo(r,{planeIndex:0,format:"f32"});const s=e.timestamp-this.startTime,a=s+e.duration,o=Math.floor((s-1/this.sourceSampleRate)*this.targetSampleRate)+1,c=Math.ceil(a*this.targetSampleRate);for(let l=o;l<c;l++){if(l<this.bufferStartFrame)continue;for(;l>=this.bufferStartFrame+this.bufferCapacityInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const u=l-this.bufferStartFrame;V(u<this.bufferCapacityInFrames);const d=(l/this.targetSampleRate-s)*this.sourceSampleRate,g=Math.floor(d),_=Math.ceil(d),p=d-g;for(let m=0;m<this.targetNumberOfChannels;m++){let b=0,x=0;g>=0&&g<e.numberOfFrames&&(b=this.channelMixer(r,g,m)),_>=0&&_<e.numberOfFrames&&(x=this.channelMixer(r,_,m));const T=b+p*(x-b),D=u*this.targetNumberOfChannels+m;this.outputBuffer[D]+=T}this.maxWrittenFrame===null?this.maxWrittenFrame=u:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,u)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;V(this.startTime!==null);const e=Math.min(this.maxWrittenFrame+1,this.bufferSizeInFrames)*this.targetNumberOfChannels,t=new Float32Array(e);t.set(this.outputBuffer.subarray(0,e));const i=new jt({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:t});await this.onSample(i),this.outputBuffer.copyWithin(0,this.bufferSizeInSamples),this.outputBuffer.fill(0,this.outputBuffer.length-this.bufferSizeInSamples),this.maxWrittenFrame=this.maxWrittenFrame>=this.bufferSizeInFrames?this.maxWrittenFrame-this.bufferSizeInFrames:null}async finalize(){for(;this.maxWrittenFrame!==null;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var PS=function(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e},IS=function(n){return function(e){function t(a){e.error=e.hasError?new n(a,e.error,"An error was suppressed during disposal."):a,e.hasError=!0}var i,r=0;function s(){for(;i=e.stack.pop();)try{if(!i.async&&r===1)return r=0,e.stack.push(i),Promise.resolve().then(s);if(i.dispose){var a=i.dispose.call(i.value);if(i.async)return r|=2,Promise.resolve(a).then(s,function(o){return t(o),s()})}else r|=1}catch(o){t(o)}if(r===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}}(typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i});class Jc{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class nd extends Jc{constructor(e){if(super(),!Sn.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${Sn.join(", ")}.`);this._codec=e}}const ph=(n,e)=>{if(n.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class FS{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,t){this.source=e,this.encodingConfig=t,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.encoderConfig=null,this.encodersReclaimed=!1,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new bf,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,t,i){const r=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const s=this.encodingConfig,a=s.sizeChangeBehavior??"deny";let o=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(o=!0,a==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(s.transform?.width!==void 0||s.transform?.height!==void 0||s.transform?.rotate!==void 0||s.transform?.flip!==void 0||s.transform?.crop!==void 0||s.transform?.force===!0||o&&a!=="passThrough"){let h=s.transform?.width,f=s.transform?.height,d=s.transform?.fit??"fill";o&&a!=="passThrough"&&(V(this.outputWidth),V(this.outputHeight),V(a!=="deny"),h=this.outputWidth,f=this.outputHeight,d=a);const g=await e.transform({width:h,height:f,roundDimensionsTo:2,crop:s.transform?.crop,rotate:s.transform?.rotate,flip:s.transform?.flip,fit:d,alpha:s.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=g.displayWidth,this.outputHeight=g.displayHeight),t&&e.close(),e=g,t=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const u=s.transform?.frameRate;if(u!==void 0){const h=e.timestamp+e.duration,f=Ru(e.timestamp,u);if(this.frameRateLastSample!==null)if(f<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=h;return}else await this.padFrameRate(f,i);e===r&&(e=e.clone(),t=!0),e.setTimestamp(f),e.setDuration(1/u),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=f,this.frameRateLastEndTimestamp=h}await this.processAndEncode(e,i)}finally{t&&e.close()}}async processAndEncode(e,t){const i=this.encodingConfig;let r;if(i.transform?.process){let s=i.transform.process(e);if(xi(s)&&(s=await s),s===null)return;Array.isArray(s)||(s=[s]);const a=[];try{for(const o of s)o instanceof Yt?a.push(o):typeof VideoFrame<"u"&&o instanceof VideoFrame?a.push(new Yt(o)):a.push(new Yt(o,{timestamp:e.timestamp,duration:e.duration}))}catch(o){for(const c of a)c!==e&&c.close();for(const c of s)(c instanceof Yt&&c!==e||typeof VideoFrame<"u"&&c instanceof VideoFrame)&&c.close();throw o}r=a}else r=[e];try{for(const s of r){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(s),this.encoderInitialized||await this.ensureEncoderPromise),V(this.encoderInitialized),this.closed)break;this.encodersReclaimed&&this.recreateWebCodecsEncoders();const a=this.encodingConfig.keyFrameInterval??2,o=Math.floor(s.timestamp/a),c={...this.defaultEncodeOptions,...s.encodeOptions,...t},l={...c,keyFrame:c.keyFrame!==void 0?c.keyFrame:a===0||o!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=o,this.encodingConfig.onEncodedSample?.(s),this.customEncoder){this.customEncoderQueueSize++;const u=s.clone(),h=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(u,l)).catch(f=>this.setError(f)).finally(()=>{this.customEncoderQueueSize--,u.close()});this.customEncoderQueueSize>=4&&await h}else{V(this.encoder);const u=s.toVideoFrame(),h=Au(this.preciseTimings,u.timestamp,d=>d.microsecondTimestamp),f=h!==-1?this.preciseTimings[h]:null;if(f&&f.microsecondTimestamp===u.timestamp?(f.timestamp!==s.timestamp&&(f.timestampIsValid=!1),f.duration!==s.duration&&(f.durationIsValid=!1)):(this.preciseTimings.splice(h+1,0,{microsecondTimestamp:u.timestamp,timestamp:s.timestamp,duration:s.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!u.format&&!u.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(u,l)}finally{u.close()}}else{this.splitter||(this.splitter=new US);const{colorFrame:g,alphaFrame:_}=await this.splitter.split(u);this.alphaFrameQueue.push(_);try{this.encoder.encode(g,l)}finally{g.close()}}else try{this.encoder.encode(u,l)}finally{u.close()}this.encoder.encodeQueueSize>=4&&await new Promise(d=>this.encoder.addEventListener("dequeue",d,{once:!0}))}await this.lastMuxerPromise}}finally{for(const s of r)s!==e&&s.close()}}async padFrameRate(e,t){const i=this.encodingConfig.transform.frameRate;V(this.frameRateLastSample);const r=Math.round((e-this.frameRateLastTimestamp)*i);for(let s=1;s<r;s++){const a={stack:[],error:void 0,hasError:!1};try{const o=PS(a,this.frameRateLastSample.clone(),!1);o.setTimestamp(this.frameRateLastTimestamp+s/i),o.setDuration(1/i),await this.processAndEncode(o,t)}catch(o){a.error=o,a.hasError=!0}finally{IS(a)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const t=ma(this.encodingConfig.quality,this.encodingConfig.bitrate);V(t!==void 0);const i=Vf({...this.encodingConfig,quality:t,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let r=null,s;for(const o of i){const c=o.config;if(this.encodingConfig.onEncoderConfig?.(c),s=Xf.find(u=>u.supports(this.encodingConfig.codec,c)),s){r=o;break}if(typeof VideoEncoder>"u")continue;if(c.alpha="discard",this.encodingConfig.alpha==="keep"&&(c.latencyMode="quality"),(c.width%2===1||c.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${c.width}x${c.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(c)).supported){r=o;break}}catch{}}if(!r){if(typeof VideoEncoder>"u")throw new Error(Tf("VideoEncoder"));const o=i[0].config,c=i.map(({config:l,quantizer:u})=>u!==null?`quantizer ${u}`:`${l.bitrate} bps`);throw new Error(`This specific encoder configuration (${o.codec}, ${c.join(" / ")}, ${o.width}x${o.height}, hardware acceleration: ${o.hardwareAcceleration??"no-preference"}) is not supported in this environment. Consider using another codec or changing your video parameters.`)}const a=r.config;r.quantizer!==null?this.defaultEncodeOptions=Wf(this.encodingConfig.codec,r.quantizer):this.source._nominalBitrate=a.bitrate??null,s?(this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=a,this.customEncoder.onPacket=(o,c)=>{if(!(o instanceof Un))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");ph(this.source._connectedTrack,o),this.encodingConfig.onEncodedPacket?.(o,c),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,o,c).catch(l=>{this.setError(l)})},this.customEncoder.onError=o=>{this.setError(o)},await this.customEncoder.init()):(this.encoderConfig=a,this.createWebCodecsEncoders()),V(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}createWebCodecsEncoders(){const e=this.encoderConfig;V(e);const t=[],i=[];let r=0,s=0;const a=(c,l)=>{if(Cy(c)){this.encodersReclaimed=!0;return}c.stack=l,this.setError(c)},o=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(c,l)=>{if(!this.alphaEncoder){this.addPacket(c,null,l);return}const u=this.alphaFrameQueue.shift();V(u!==void 0),u?(this.alphaEncoder.encode(u,{...this.defaultEncodeOptions,keyFrame:c.type==="key"}),s++,u.close(),t.push({chunk:c,meta:l})):s===0?this.addPacket(c,null,l):(i.push(r+s),t.push({chunk:c,meta:l}))},error:c=>a(c,o)}),this.encoder.configure(e),this.encodingConfig.alpha==="keep"){const c=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(l,u)=>{s--;const h=t.shift();for(V(h!==void 0),this.addPacket(h.chunk,l,h.meta),r++;i.length>0&&i[0]===r;){i.shift();const f=t.shift();V(f!==void 0),this.addPacket(f.chunk,null,f.meta)}},error:l=>a(l,c)}),this.alphaEncoder.configure(e)}}addPacket(e,t,i){const r={};if(t){const l=new Uint8Array(t.byteLength);t.copyTo(l),r.alpha=l}let s=Un.fromEncodedChunk(e,r);const a=Au(this.preciseTimings,e.timestamp,l=>l.microsecondTimestamp),o=a!==-1?this.preciseTimings[a]:null;let c=null;this.emittedEncoderPackets===0&&s.type==="delta"&&i?.decoderConfig&&(c=iw(this.encodingConfig.codec,i.decoderConfig,s.data)),(o&&o.microsecondTimestamp===e.timestamp||c!==null)&&(s=s.clone({timestamp:o?.timestampIsValid?o.timestamp:void 0,duration:o?.durationIsValid?o.duration:void 0,type:c??void 0})),ph(this.source._connectedTrack,s),this.encodingConfig.onEncodedPacket?.(s,i),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,s,i).catch(l=>{this.setError(l)}),this.emittedEncoderPackets++}recreateWebCodecsEncoders(){V(this.encoder),this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(e=>e?.close()),this.alphaFrameQueue.length=0,this.encodersReclaimed=!1,this.lastMultipleOfKeyFrameInterval=-1,this.createWebCodecsEncoders()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const t=this.encodingConfig.transform.frameRate,i=Ru(this.frameRateLastEndTimestamp,t);await this.padFrameRate(i)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&!this.encodersReclaimed&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Uy(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(t=>this.setError(t)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(t=>t?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let yo=null;class US{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!yo){const r=new Blob([`(${DS.toString()})()`],{type:"application/javascript"});yo=URL.createObjectURL(r)}this.worker=new Worker(yo),this.worker.addEventListener("message",r=>{const s=r.data,a=this.pendingRequests.get(s.id);a&&(this.pendingRequests.delete(s.id),"error"in s?a.reject(new Error(s.error)):a.resolve({colorFrame:s.colorFrame,alphaFrame:s.alphaFrame}))}),this.worker.addEventListener("error",r=>{const s=new Error(r.message||"Color/alpha splitter worker error.");for(const a of this.pendingRequests.values())a.reject(s);this.pendingRequests.clear()})}const t=this.nextRequestId++,i=Hc();return this.pendingRequests.set(t,i),this.worker.postMessage({id:t,sourceFrame:e},{transfer:[e]}),i.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const t of this.pendingRequests.values())t.reject(e);this.pendingRequests.clear()}}const DS=()=>{let n=null,e=Promise.resolve();self.addEventListener("message",s=>{const{id:a,sourceFrame:o}=s.data;e=e.then(async()=>{try{const{colorFrame:c,alphaFrame:l}=await t(o);self.postMessage({id:a,colorFrame:c,alphaFrame:l},{transfer:[c,l]})}catch(c){self.postMessage({id:a,error:c.message})}finally{o.close()}})});const t=async s=>{const a=s.format;if(!a)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const o=s.allocationSize();if((!n||n.byteLength!==o)&&(n=new Uint8Array(o)),await s.copyTo(n),a==="RGBA"||a==="BGRA")return i(n,a,s);if(a==="I420A"||a==="I420AP10"||a==="I420AP12"||a==="I422A"||a==="I422AP10"||a==="I422AP12"||a==="I444A"||a==="I444AP10"||a==="I444AP12")return r(n,a,s);throw new Error(`CPU color/alpha splitting does not support format '${a}'.`)},i=(s,a,o)=>{const c=o.visibleRect?.width??o.codedWidth,l=o.visibleRect?.height??o.codedHeight,u=c*l,h=Math.ceil(c/2),f=Math.ceil(l/2),d=u+h*f*2,g=new Uint8Array(d);for(let b=0,x=3;b<u;b++,x+=4)g[b]=s[x];g.fill(128,u);const _=new VideoFrame(s,{format:a==="RGBA"?"RGBX":"BGRX",codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0}),p={format:"I420",codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0,colorSpace:{fullRange:!0,matrix:"bt709",primaries:"bt709",transfer:"bt709"},transfer:[g.buffer]},m=new VideoFrame(g,p);return{colorFrame:_,alphaFrame:m}},r=(s,a,o)=>{const c=o.visibleRect?.width??o.codedWidth,l=o.visibleRect?.height??o.codedHeight,u=a.includes("P10"),h=a.includes("P12"),f=u||h?2:1;let d,g;a.startsWith("I420")?(d=Math.ceil(c/2),g=Math.ceil(l/2)):a.startsWith("I422")?(d=Math.ceil(c/2),g=l):(d=c,g=l);const _=c*l,p=d*g,m=_*f,b=p*f,x=_*f,T=m+b*2,D=a.replace("A",""),C=Math.ceil(c/2),M=Math.ceil(l/2),P=C*M,W=P*f,v=x+2*W,w=new Uint8Array(v),A=T;w.set(s.subarray(A,A+x),0);const F=x,$=u?512:h?2048:128;f===1?w.fill($,F):new Uint16Array(w.buffer,F,2*P).fill($);const B=u?"I420P10":h?"I420P12":"I420",I=new VideoFrame(s.subarray(0,T),{format:D,codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0}),q={format:B,codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0,colorSpace:{fullRange:!0,matrix:"bt709",primaries:"bt709",transfer:"bt709"},transfer:[w.buffer]},k=new VideoFrame(w,q);return{colorFrame:I,alphaFrame:k}}};class LS extends nd{constructor(e,t){if(!(typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement)&&!(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas))throw new TypeError("canvas must be an HTMLCanvasElement or OffscreenCanvas.");eb(t),super(t.codec),this._encoder=new FS(this,t),this._canvas=e}add(e,t=0,i){if(!Number.isFinite(e))throw new TypeError("timestamp must be a finite number.");if(!Number.isFinite(t)||t<0)throw new TypeError("duration must be a non-negative number.");const r=new Yt(this._canvas,{timestamp:e,duration:t});return this._encoder.add(r,!0,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class id extends Jc{constructor(e){if(super(),!bi.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${bi.join(", ")}.`);this._codec=e}}class NS{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,t){this.source=e,this.encodingConfig=t,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new bf,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,t){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const i=this.encodingConfig;i.transform?.numberOfChannels!==void 0||i.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new RS({targetNumberOfChannels:i.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:i.transform.sampleRate??e.sampleRate,onSample:async s=>{await this.processAndEncode(s,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,t)}finally{t&&e.close()}}async processAndEncode(e,t){const i=this.encodingConfig;if(i.transform?.sampleFormat!==void 0&&Qw(e.format)!==i.transform.sampleFormat){const r=Jw(e,i.transform.sampleFormat);t&&e.close(),e=r,t=!0}if(i.transform?.process)try{let r=i.transform.process(e);if(xi(r)&&(r=await r),r===null)return;Array.isArray(r)||(r=[r]);try{for(const s of r)if(!(s instanceof jt))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const s of r)await this.encodeSample(s,!0)}finally{for(const s of r)s instanceof jt&&s.close()}}finally{t&&e.close()}else await this.encodeSample(e,t)}async encodeSample(e,t){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),V(this.encoderInitialized),this.closed)return;{const i=Math.round(e.timestamp*e.sampleRate),r=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=r;else{const s=i-this.lastEndSampleIndex;if(s>=64){const a=new jt({data:new Float32Array(s*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:s,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(a,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const i=e.clone(),r=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(i)).catch(s=>this.setError(s)).finally(()=>{this.customEncoderQueueSize--,i.close()});this.customEncoderQueueSize>=4&&await r,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,t);else{V(this.encoder);const i=e.toAudioData();this.encoder.encode(i),i.close(),t&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(r=>this.encoder.addEventListener("dequeue",r,{once:!0})),await this.lastMuxerPromise}}finally{t&&e.close()}}async doPcmEncoding(e,t){V(this.outputSampleSize),V(this.writeOutputValue);const{numberOfChannels:i,numberOfFrames:r,sampleRate:s,timestamp:a}=e,o=2048,c=[];for(let _=0;_<r;_+=o){const p=Math.min(o,e.numberOfFrames-_),m=p*i*this.outputSampleSize,b=new ArrayBuffer(m),x=new DataView(b);c.push({frameCount:p,view:x})}const l=e.format==="s32"||e.format==="s32-planar",u=l?"s32-planar":"f32-planar",h=l?1/2147483648:1,f=e.allocationSize({planeIndex:0,format:u}),d=l?new Int32Array(f/4):new Float32Array(f/4);for(let _=0;_<i;_++){e.copyTo(d,{planeIndex:_,format:u});for(let p=0;p<c.length;p++){const{frameCount:m,view:b}=c[p];for(let x=0;x<m;x++)this.writeOutputValue(b,(x*i+_)*this.outputSampleSize,d[p*o+x]*h)}}t&&e.close();const g={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:i,sampleRate:s}};for(let _=0;_<c.length;_++){const{frameCount:p,view:m}=c[_],b=m.buffer,x=_*o,T=new Un(new Uint8Array(b),"key",a+x/s,p/s);this.encodingConfig.onEncodedPacket?.(T,g),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,T,g)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:t,sampleRate:i}=e,r=ma(this.encodingConfig.quality,this.encodingConfig.bitrate),s=Gf({numberOfChannels:t,sampleRate:i,...this.encodingConfig,quality:r});this.encodingConfig.onEncoderConfig?.(s),this.source._nominalBitrate=s.bitrate??null;const a=qf.find(o=>o.supports(this.encodingConfig.codec,s));if(a)this.customEncoder=new a,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(o,c)=>{if(!(o instanceof Un))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(o,c),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,o,c).catch(l=>{this.setError(l)})},this.customEncoder.onError=o=>{this.setError(o)},await this.customEncoder.init();else if(Jt.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error(Tf("AudioEncoder"));let o;try{o=(await AudioEncoder.isConfigSupported(s)).supported??!1}catch{o=!1}if(!o)throw new Error(`This specific encoder configuration (${s.codec}, ${s.bitrate} bps, ${s.numberOfChannels} channels, ${s.sampleRate} Hz) is not supported in this environment. Consider using another codec or changing your audio parameters.`);const c=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(l,u)=>{if(this.encodingConfig.codec==="aac"&&u?.decoderConfig){let f=!1;if(!u.decoderConfig.description||u.decoderConfig.description.byteLength<2?f=!0:f=By(Vt(u.decoderConfig.description)).objectType===0,f){const d=Number(wn(s.codec.split(".")));u.decoderConfig.description=$c({objectType:d,outputNumberOfChannels:u.decoderConfig.numberOfChannels,outputSampleRate:u.decoderConfig.sampleRate})}}let h=Un.fromEncodedChunk(l);h=h.clone({timestamp:ea(h.timestamp,s.sampleRate),duration:l.duration!=null?ea(h.duration,s.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(h,u),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,h,u).catch(f=>{this.setError(f)})},error:l=>{l.stack=c,this.setError(l)}}),this.encoder.configure(s)}V(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:t,sampleSize:i,littleEndian:r}=Si(e);switch(this.outputSampleSize=i,i){case 1:t==="unsigned"?this.writeOutputValue=(s,a,o)=>s.setUint8(a,Pt(Math.round(o*128)+128,0,255)):t==="signed"?this.writeOutputValue=(s,a,o)=>{s.setInt8(a,Pt(Math.round(o*128),-128,127))}:t==="ulaw"?this.writeOutputValue=(s,a,o)=>{const c=Pt(Math.round(o*32768),-32768,32767);s.setUint8(a,rb(c))}:t==="alaw"?this.writeOutputValue=(s,a,o)=>{const c=Pt(Math.round(o*32768),-32768,32767);s.setUint8(a,sb(c))}:V(!1);break;case 2:t==="unsigned"?this.writeOutputValue=(s,a,o)=>s.setUint16(a,Pt(Math.round(o*32768)+32768,0,65535),r):t==="signed"?this.writeOutputValue=(s,a,o)=>s.setInt16(a,Pt(Math.round(o*32768),-32768,32767),r):V(!1);break;case 3:t==="unsigned"?this.writeOutputValue=(s,a,o)=>Gc(s,a,Pt(Math.round(o*8388608)+8388608,0,16777215),r):t==="signed"?this.writeOutputValue=(s,a,o)=>xy(s,a,Pt(Math.round(o*8388608),-8388608,8388607),r):V(!1);break;case 4:t==="unsigned"?this.writeOutputValue=(s,a,o)=>s.setUint32(a,Pt(Math.round(o*2147483648)+2147483648,0,4294967295),r):t==="signed"?this.writeOutputValue=(s,a,o)=>s.setInt32(a,Pt(Math.round(o*2147483648),-2147483648,2147483647),r):t==="float"?this.writeOutputValue=(s,a,o)=>s.setFloat32(a,o,r):V(!1);break;case 8:t==="float"?this.writeOutputValue=(s,a,o)=>s.setFloat64(a,o,r):V(!1);break;default:ti(i),V(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(t=>this.setError(t)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class BS extends id{constructor(e,t={}){if(tb(e),typeof t!="object"||!t)throw new TypeError("options must be an object.");if(t.startTimestamp!==void 0&&!Number.isFinite(t.startTimestamp))throw new TypeError("options.startTimestamp, when provided, must be a finite number.");super(e.codec),this._encoder=new NS(this,e),this._accumulatedTime=t.startTimestamp??0}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const t=jt._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const i of t)await this._encoder.add(i,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class OS extends Jc{constructor(e){if(super(),!Hi.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Hi.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class el{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>Sn.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>bi.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Hi.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class tl extends el{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Ef(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(e){return new TS(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class rd extends tl{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Sn,...fa,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Hi]}_codecUnsupportedHint(e){return new sd().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class mh extends tl{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Sn,...fa,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Hi]}}class sd extends tl{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...Sn,...bi]}_codecUnsupportedHint(e){return new rd().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}class gh extends el{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.appendOnly!==void 0&&typeof e.appendOnly!="boolean")throw new TypeError("options.appendOnly, when provided, must be a boolean.");if(e.minimumClusterDuration!==void 0&&(!Ef(e.minimumClusterDuration)||e.minimumClusterDuration<0))throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");if(e.onEbmlHeader!==void 0&&typeof e.onEbmlHeader!="function")throw new TypeError("options.onEbmlHeader, when provided, must be a function.");if(e.onSegmentHeader!==void 0&&typeof e.onSegmentHeader!="function")throw new TypeError("options.onHeader, when provided, must be a function.");if(e.onCluster!==void 0&&typeof e.onCluster!="function")throw new TypeError("options.onCluster, when provided, must be a function.");super(),this._options=e}_createMuxer(e){return new AS(e,this)}get _name(){return"Matroska"}getSupportedTrackCounts(){return{video:{min:0,max:127},audio:{min:0,max:127},subtitle:{min:0,max:127},total:{min:0,max:127}}}get fileExtension(){return".mkv"}get mimeType(){return"video/x-matroska"}getSupportedCodecs(){return[...Sn,...fa,...Jt.filter(e=>!["pcm-s8","pcm-f32be","pcm-f64be","ulaw","alaw"].includes(e)),...Hi]}get supportsVideoTransformationMetadata(){return!1}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"prefer-non-negative"}}class Ws extends gh{constructor(e){super(e)}getSupportedCodecs(){return[...Sn.filter(e=>["vp8","vp9","av1"].includes(e)),...bi.filter(e=>["opus","vorbis"].includes(e)),...Hi]}get _name(){return"WebM"}get fileExtension(){return".webm"}get mimeType(){return"video/webm"}_codecUnsupportedHint(e){return new gh().getSupportedCodecs().includes(e)?" Switching to MKV will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const _h=["video","audio","subtitle"];class rs{constructor(e,t,i,r,s){this.id=e,this.output=t,this.type=i,this.source=r,this.metadata=s}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof rs))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const t=Pu(this.metadata.group),i=Pu(e.metadata.group);for(const r of t)if(this.type!==e.type&&i.some(o=>r===o)||i.some(o=>r._pairedGroups.has(o)))return!0;return!1}}class kS extends rs{constructor(e,t,i,r){super(e,t,"video",i,r)}}class zS extends rs{constructor(e,t,i,r){super(e,t,"audio",i,r)}}class VS extends rs{constructor(e,t,i,r){super(e,t,"subtitle",i,r)}}class jr{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof jr))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const wo=n=>{if(!n||typeof n!="object")throw new TypeError("metadata must be an object.");if(n.languageCode!==void 0&&!Sy(n.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(n.name!==void 0&&typeof n.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(n.disposition!==void 0&&Ny(n.disposition),n.maximumPacketCount!==void 0&&(!Number.isInteger(n.maximumPacketCount)||n.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(n.bitrate!==void 0&&(!Number.isFinite(n.bitrate)||n.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(n.averageBitrate!==void 0&&(!Number.isFinite(n.averageBitrate)||n.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(n.group!==void 0&&!(n.group instanceof jr)&&(!Array.isArray(n.group)||n.group.some(e=>!(e instanceof jr))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class HS extends qc{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const t=this._getRootTarget();if(xi(t))throw new TypeError(e);return t}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new jr,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new yf,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof el))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof Vn||e.target instanceof xo))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof Vn&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof Vn)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof Vn&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){V(this._target instanceof xo);const t=this._target.getTarget(e),i=r=>{if(!(r instanceof Vn))throw new TypeError("getTarget must return a Target.");return r};return xi(t)?t.then(i):i(t)}async _getTarget(e){V(this._target instanceof xo);const t=await this._getTargetValidated(e);return this._emit("target",{target:t,request:e,isRoot:e.isRoot}),this.state==="canceled"?await t._close():this._rememberTarget(t),t}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(V(this._initTarget!==null),this._initTarget instanceof Vn)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof Vn)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},t=this._getTargetValidated(e),i=r=>(this.state==="canceled"?r._close():this._rememberTarget(r),this._emit("target",{target:r,request:e,isRoot:!0}),this._rootTarget=r,r);return xi(t)?this._rootTargetPromise=t.then(i):i(t)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const t=await this._getRootTarget(),i=new bc(t,typeof e=="boolean"?e:e(t));return i.start(),i})()}addVideoTrack(e,t={}){if(!(e instanceof nd))throw new TypeError("source must be a VideoSource.");if(wo(t),t.rotation!==void 0&&![0,90,180,270].includes(t.rotation))throw new TypeError(`Invalid video rotation: ${t.rotation}. Has to be 0, 90, 180 or 270.`);if(t.flip!==void 0&&typeof t.flip!="boolean")throw new TypeError("metadata.flip, when provided, must be a boolean.");if(t.transformationMatrix!==void 0&&(!Array.isArray(t.transformationMatrix)||t.transformationMatrix.length!==9||!t.transformationMatrix.every(r=>Number.isFinite(r))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(t.frameRate!==void 0&&(!Number.isFinite(t.frameRate)||t.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${t.frameRate}. Must be a positive number.`);if(t.hasOnlyKeyPackets!==void 0&&typeof t.hasOnlyKeyPackets!="boolean")throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(t.canBeTransparent!==void 0&&typeof t.canBeTransparent!="boolean")throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(t.decoderConfig!==void 0&&Yc({decoderConfig:t.decoderConfig},e._codec),t.primingPacket!==void 0){if(!(t.primingPacket instanceof Un))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(t.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const i={...t};return i.group??=this.defaultTrackGroup,this._addTrack(new kS(this.tracks.length+1,this,e,i))}addAudioTrack(e,t={}){if(!(e instanceof id))throw new TypeError("source must be an AudioSource.");if(wo(t),t.decoderConfig!==void 0&&jc({decoderConfig:t.decoderConfig},e._codec),t.primingPacket!==void 0){if(!(t.primingPacket instanceof Un))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(t.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const i={...t};return i.group??=this.defaultTrackGroup,this._addTrack(new zS(this.tracks.length+1,this,e,i))}addSubtitleTrack(e,t={}){if(!(e instanceof OS))throw new TypeError("source must be a SubtitleSource.");wo(t);const i={...t};return i.group??=this.defaultTrackGroup,this._addTrack(new VS(this.tracks.length+1,this,e,i))}setMetadataTags(e){if(Ly(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const t=this.format.getSupportedTrackCounts(),i=this.tracks.reduce((a,o)=>a+(o.type===e.type?1:0),0),r=t[e.type].max;if(i===r)throw new Error(r===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${r} ${e.type} track${r===1?"":"s"}.`);const s=t.total.max;if(this.tracks.length===s)throw new Error(`${this.format._name} does not support more than ${s} tracks${s===1?"":"s"} in total.`);if(e.isVideoTrack()){const a=this.format.getSupportedVideoCodecs();if(a.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!a.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${a.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const a=this.format.getSupportedAudioCodecs();if(a.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!a.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${a.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const a=this.format.getSupportedSubtitleCodecs();if(a.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!a.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${a.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const i of _h){const r=this.tracks.reduce((a,o)=>a+(o.type===i?1:0),0),s=e[i].min;if(r<s)return!1}const t=e.total.min;return!(this.tracks.length<t)}async start(){const e=this.format.getSupportedTrackCounts();for(const i of _h){const r=this.tracks.reduce((a,o)=>a+(o.type===i?1:0),0),s=e[i].min;if(r<s)throw new Error(s===e[i].max?`${this.format._name} requires exactly ${s} ${i} track${s===1?"":"s"}.`:`${this.format._name} requires at least ${s} ${i} track${s===1?"":"s"}.`)}const t=e.total.min;if(this.tracks.length<t)throw new Error(t===e.total.max?`${this.format._name} requires exactly ${t} track${t===1?"":"s"}.`:`${this.format._name} requires at least ${t} track${t===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ht._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const i=this._mutex.acquire();try{await this._muxer.start();const r=this.tracks.map(s=>s.source._start());await Promise.all(r)}finally{(await i)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this.state==="canceled")return this._cancelPromise??void 0;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ht._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const t=this.tracks.map(i=>i.source._flushOrWaitForOngoingClose(!0));await Promise.all(t),await Promise.all([...this._unfinalizedTargets].map(i=>i._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ht._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const t=this.tracks.map(i=>i.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(t),await this._muxer.finalize(),this._rootWriterPromise){const i=await this._rootWriterPromise;i.finalized||(await i.flush(),await i.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(t){throw this.state="canceled",t}finally{await Promise.all([...this._unfinalizedTargets].map(t=>t._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}class Xs extends Error{}async function GS(n){const{world:e,startSec:t,endSec:i,width:r,height:s,fps:a}=n,o=n.quality??ib,c=await rh("avc",{width:r,height:s})&&await sh("aac"),l=await rh("vp9",{width:r,height:s})&&await sh("opus");if(!c&&!l)throw new Xs("This browser cannot encode video (WebCodecs with H.264/VP9 is unavailable). Try the latest Chrome or Edge.");const u=c,h=u?"avc":"vp9",f=u?"aac":"opus",d=e.size,g={...e.orbit},_=Math.max(1,Math.round((i-t)*a)),p=performance.now();try{e.orbit.az=0,e.orbit.el=0,e.resizeForExport(r,s);const m=new Gs,b=new HS({format:u?new rd({fastStart:"in-memory"}):new Ws,target:m}),x=new LS(e.canvas,{codec:h,quality:o,keyFrameInterval:2});b.addVideoTrack(x,{frameRate:a});let T=null;n.audio&&(T=new BS({codec:f,quality:o}),b.addAudioTrack(T)),await b.start(),T&&n.audio&&await T.add(n.audio);for(let C=0;C<_;C++){if(n.shouldCancel?.())throw new Xs("Export cancelled.");const M=t+C/a;e.renderFrame(M),await x.add(C/a,1/a),n.onProgress?.(C+1,_),C&7||await new Promise(P=>setTimeout(P,0))}if(await b.finalize(),!m.buffer)throw new Xs("The encoder produced no output.");return{blob:new Blob([m.buffer],{type:u?"video/mp4":"video/webm"}),filename:`bouncingmusic.${u?"mp4":"webm"}`,container:u?"mp4":"webm",frames:_,elapsedMs:performance.now()-p}}finally{e.restoreAfterExport(d.w,d.h),e.orbit.az=g.az,e.orbit.el=g.el}}function vh(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),4e3)}const zt="https://musetrainer.github.io/library/scores/",WS=[{title:"Canon in D",subtitle:"Pachelbel · melody over a walking bass",url:zt+"Canon_in_D.mxl"},{title:"Bach · Air on the G String",subtitle:"arr. for piano",url:zt+"J._S._Bach_-_Air_on_the_G_String_Piano_arrangement.mxl"},{title:"Für Elise",subtitle:"Beethoven · beginner edition",url:zt+"Fur_Elise_-_Beethoven_-_for_beginner_piano.mxl"},{title:"Greensleeves",subtitle:"easy + beautiful arrangement",url:zt+"Greensleeves_for_Piano_easy_and_beautiful.mxl"},{title:"Hungarian Dance No. 5",subtitle:"Brahms · in G minor",url:zt+"Hungarian_Dance_No_5_in_G_Minor.mxl"}],XS=[{title:"Happy Birthday To You",subtitle:"arr. for piano · the one everybody knows",url:zt+"Happy_Birthday_To_You_Piano.mxl"},{title:"Mariage d'Amoure",subtitle:"Senneville · a waltz in three",url:zt+"Mariage_dAmour.mxl"},{title:"Ode to Joy",subtitle:"Beethoven · easy variation",url:zt+"Ode_to_Joy_Easy_variation.mxl"},{title:"Passacaglia",subtitle:"one long walking bass line",url:zt+"Passacaglia.mxl"},{title:"Swan Lake",subtitle:"Tchaikovsky · from the ballet",url:zt+"Swan_Lake.mxl"},{title:"The Entertainer",subtitle:"Scott Joplin · ragtime",url:zt+"The_Entertainer_-_Scott_Joplin.mxl"},{title:"Arabesque No. 1",subtitle:"Debussy",url:zt+"Arabesque_L._66_No._1_in_E_Major.mxl"},{title:"Minuet in G",subtitle:"BWV Anh. 114",url:zt+"Bach_Minuet_in_G_Major_BWV_Anh._114.mxl"},{title:"Marche Turque",subtitle:"Mozart · Turkish March",url:zt+"WA_Mozart_Marche_Turque_Turkish_March_fingered.mxl"}],Le=n=>{const e=document.getElementById(n);if(!e)throw new Error(`Missing element #${n}`);return e},qS=5*60,bo=4,$S=60;function Nr(n){const e=Math.max(0,Math.round(n));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}class YS{world;model=null;layout=null;player=null;buffer=null;bufferWindow=null;visible=new Set;excerpt={start:0,end:0};tempoScale=1;idleTime=0;busy=!1;exporting=!1;cancelExport=!1;raf=0;audioToken=0;layoutOpts={};constructor(){const e=Le("view");this.world=new Gx(e),this.world.attachControls(e,()=>!this.exporting),window.addEventListener("resize",()=>{this.exporting||this.fitStage()}),this.fitStage(),this.buildSamples(),this.wireSource(),this.wireTransport(),this.wireLook(),this.wireExport(),this.loop()}fitStage(){const e=Le("stage");this.world.resize(e.clientWidth||1280,e.clientHeight||720)}buildSamples(){const e=Le("samples"),t=[...WS,...XS];for(const i of t){const r=document.createElement("button");r.className="chip",r.innerHTML=`<b>${i.title}</b><span>${i.subtitle}</span>`,r.addEventListener("click",()=>void this.loadUrl(i.url,i.title)),e.appendChild(r)}}wireSource(){Le("btn-load-url").addEventListener("click",()=>{this.loadUrl(Le("url").value)}),Le("url").addEventListener("keydown",s=>{s.key==="Enter"&&this.loadUrl(Le("url").value)});const e=Le("file");Le("dropzone").addEventListener("click",s=>{s.target.tagName!=="INPUT"&&e.click()}),e.addEventListener("change",()=>{const s=e.files?.[0];s&&this.loadFile(s),e.value=""});let i=0;const r=s=>{s.preventDefault(),s.stopPropagation()};document.addEventListener("dragenter",s=>{r(s),i++,document.body.classList.add("dragging")}),document.addEventListener("dragover",r),document.addEventListener("dragleave",s=>{r(s),--i<=0&&document.body.classList.remove("dragging")}),document.addEventListener("drop",s=>{r(s),i=0,document.body.classList.remove("dragging");const a=s.dataTransfer?.files?.[0];a&&this.loadFile(a)})}progress(e,t=!0){Le("progress-overlay").hidden=!t,Le("progress-text").textContent=e}async loadUrl(e,t){const i=e.trim();if(i){this.progress(t?`Fetching ${t}…`:"Fetching score…");try{const{name:r,xml:s}=await Id(i);this.ingest(r,s)}catch(r){this.fail(r)}}}async loadFile(e){this.progress(`Reading ${e.name}…`);try{const{name:t,xml:i}=await Fd(e);this.ingest(t,i)}catch(t){this.fail(t)}}fail(e){this.busy=!1,this.progress("",!1);const t=e instanceof ki||e instanceof Error?e.message:String(e);Le("np-title").textContent="Could not load that score",Le("np-sub").textContent=t,console.error(e)}ingest(e,t){try{const i=Mh(t),r=Vd(i,e);if(!r.tracks.length)throw new Error("No playable voices were found in this file.");this.model=r,this.chooseInitialTracks(),this.setupExcerptDefaults(),this.player?.stop(),this.buffer=null,this.bufferWindow=null,this.idleTime=this.excerpt.start,this.rebuildLayout(),this.renderReport(),this.renderTrackPicker();for(const s of["card-report","card-tracks","card-excerpt","card-export","card-look"])Le(s).hidden=!1;Le("card-tracks").open=!0,Le("card-source").open=!1,this.syncExcerptUI(),this.busy=!0,this.refreshAudio()}catch(i){this.fail(i)}}chooseInitialTracks(){const e=this.model;if(this.visible.clear(),e.tracks.length<=bo){for(const i of e.tracks)this.visible.add(i.id);return}const t=[...e.tracks].map(i=>({t:i,n:i.events.filter(r=>!r.rest).length})).sort((i,r)=>r.n-i.n).slice(0,bo);for(const{t:i}of t)this.visible.add(i.id)}setupExcerptDefaults(){const e=this.model;this.excerpt={start:0,end:e.durationSec<qS?e.durationSec:Math.min(e.durationSec,$S)};const t=e.tempoMap[0]?.secPerBeat??.5,i=Math.round(60/t),r=Le("ex-tempo");r.value=String(i),this.tempoScale=1}activeTracks(){const e=this.model;return e?e.tracks.filter(t=>this.visible.has(t.id)):[]}rebuildLayout(){const e=this.model;e&&(this.layout=Kd(e,this.layoutOpts,this.visible),this.world.setScore(e,this.layout))}renderReport(){const e=this.model;if(!e)return;const t=Le("card-report");t.hidden=!1;const i=Le("report"),r=this.layout?.lanes??[];let s=0;for(const o of r)for(const c of o.notes)!c.rest&&c.pitches.length&&(s+=c.pitches.length);const a=[["Title",e.title],["Composer",e.composer||"—"],["File",e.sourceName],["Voices found",`${e.tracks.length}`],["Notes on the sheet",`${s.toLocaleString()}`],["Measures",`${e.measureBeats.length}`],["Length",`${Nr(e.durationSec)}  (${e.tempoMap[0]?Math.round(60/e.tempoMap[0].secPerBeat):"?"} bpm)`],["Time signature",e.timeSigs[0]?`${e.timeSigs[0].beats}/${e.timeSigs[0].beatType}`:"—"],["Key",QS(e.keyFifths)],["Systems engraved",`${this.layout?.systems.length??0}`],["Visible ribbons",`${r.length}`]];i.innerHTML=a.map(([o,c])=>`<div class="row-kv"><span>${o}</span><b>${So(c)}</b></div>`).join("")+(e.warnings.length?`<div class="warn">${e.warnings.map(So).join("<br>")}</div>`:""),Le("np-title").textContent=e.title,Le("np-sub").textContent=[e.composer,e.sourceName].filter(Boolean).join(" · ")}renderTrackPicker(){const e=this.model;if(!e)return;const t=Le("card-tracks"),i=Le("tracks-hint"),r=Le("tracks");t.hidden=!1,r.innerHTML="";const s=e.tracks.length>bo;i.textContent=s?`${e.tracks.length} voices — showing ${this.visible.size}. Pick the ones you want.`:`${e.tracks.length} voice${e.tracks.length===1?"":"s"}`,t.classList.toggle("attention",s);for(const a of e.tracks){const o=document.createElement("label");o.className="track";const c=a.events.flatMap(h=>h.pitches.map(f=>f.midi)),l=c.length?fl(Math.min(...c)):"—",u=c.length?fl(Math.max(...c)):"—";o.innerHTML=`<input type="checkbox" ${this.visible.has(a.id)?"checked":""} />
        <span class="swatch"></span>
        <span class="tname">${So(a.partName)}</span>
        <span class="trange">${l}–${u}</span>`,o.querySelector("input").addEventListener("change",h=>{h.target.checked?this.visible.add(a.id):this.visible.delete(a.id),this.onTracksChanged()}),r.appendChild(o)}}onTracksChanged(){this.model&&(this.visible.size||(this.visible=new Set([this.model.tracks[0].id]),this.renderTrackPicker()),this.rebuildLayout(),this.renderReport(),this.renderTrackPicker(),this.busy=!0,this.refreshAudio())}async refreshAudio(){if(!this.model)return;const t=++this.audioToken;this.progress("Rendering audio…"),this.updatePlayButton();const i=this.activeTracks(),r=this.excerpt.start,s=this.excerpt.end;try{const a=await Mu(this.layout,i,{startSec:r,endSec:s},{tempoScale:this.tempoScale},(o,c)=>this.progress(`Rendering audio… ${o} / ${c}`));if(t!==this.audioToken)return;this.buffer=a,this.bufferWindow={start:r,end:s},this.player||(this.player=new Wx(r)),this.player.loop=Le("chk-loop").checked,this.player.setBuffer(a),this.idleTime=r,this.busy=!1,this.progress("",!1),Le("scrubwrap").hidden=!1,Le("transport").hidden=!1,this.syncExcerptUI(),this.updatePlayButton()}catch(a){this.fail(a)}}syncExcerptUI(){const e=this.model;if(!e)return;const t=Le("ex-start"),i=Le("ex-len");t.max=String(Math.max(1,Math.round(e.durationSec))),t.value=String(Math.round(this.excerpt.start)),i.value=String(Math.max(5,Math.round(this.excerpt.end-this.excerpt.start))),Le("ex-start-o").textContent=Nr(this.excerpt.start),Le("ex-len-o").textContent=Nr(this.excerpt.end-this.excerpt.start);const r=Math.round((e.tempoMap[0]?60/e.tempoMap[0].secPerBeat:100)*this.tempoScale);Le("ex-tempo-o").textContent=`${r} bpm`,Le("t-end").textContent=Nr(this.excerpt.end)}wireTransport(){Le("btn-play").addEventListener("click",()=>this.toggle()),Le("btn-stop").addEventListener("click",()=>{this.player?.pause(),this.idleTime=this.excerpt.start,this.updatePlayButton()}),Le("chk-loop").addEventListener("change",e=>{this.player&&(this.player.loop=e.target.checked)}),Le("scrub").addEventListener("input",e=>{const t=Number(e.target.value)/1e3,i=this.excerpt.start+t*(this.excerpt.end-this.excerpt.start);this.player&&this.buffer?this.player.seek(i):this.idleTime=i}),Le("ex-start").addEventListener("change",e=>{this.excerpt.start=Number(e.target.value),this.excerpt.end=Math.max(this.excerpt.start+5,Math.min(this.excerpt.end,this.model?.durationSec??this.excerpt.end)),this.syncExcerptUI(),this.busy=!0,this.refreshAudio()}),Le("ex-len").addEventListener("change",e=>{this.excerpt.end=Math.min(this.model?.durationSec??1/0,this.excerpt.start+Number(e.target.value)),this.syncExcerptUI(),this.busy=!0,this.refreshAudio()}),Le("ex-tempo").addEventListener("change",e=>{const t=Number(e.target.value),i=this.model?.tempoMap[0]?60/this.model.tempoMap[0].secPerBeat:100;this.tempoScale=t/i,this.syncExcerptUI(),this.busy=!0,this.refreshAudio()}),window.addEventListener("keydown",e=>{e.target?.tagName!=="INPUT"&&e.code==="Space"&&(e.preventDefault(),this.toggle())})}toggle(){if(!(!this.player||!this.buffer)){if(this.player.playing)this.player.pause();else{const e=this.player.time;this.player.play(e>=this.excerpt.end-.05?this.excerpt.start:e)}this.updatePlayButton()}}updatePlayButton(){const e=Le("btn-play"),t=!!this.player?.playing;e.textContent=t?"❙❙ Pause":"▶ Play",e.disabled=this.busy||!this.buffer}wireLook(){const e=(t,i,r)=>{const s=Le(t),a=Le(`${t}-o`),o=()=>{const c=Number(s.value);i(c),a.textContent=r(c)};s.addEventListener("input",o),o()};e("lk-bloom",t=>this.world.setLook({bloom:t/100}),t=>`${t}%`),e("lk-orb",t=>this.world.setLook({orbScale:t/100}),t=>`${t}%`),e("lk-trail",t=>this.world.setLook({trailLength:t}),t=>`${t} orbs`),e("lk-lanes",t=>{this.layoutOpts={...this.layoutOpts,laneGap:.95*(t/100)},this.model&&(this.rebuildLayout(),this.renderReport())},t=>`${t}%`),e("lk-cam",t=>{this.world.orbit.az=(t-45)*.012},t=>`${t}`)}wireExport(){Le("btn-export").addEventListener("click",()=>void this.runExport()),Le("btn-wav").addEventListener("click",()=>{this.buffer&&vh(cy(this.buffer),"bouncingmusic.wav")})}async runExport(){if(this.exporting||!this.model||!this.layout)return;const e=Le("btn-export"),t=Le("ex-bar"),i=Le("ex-fill"),r=Le("ex-text"),[s,a]=Le("ex-res").value.split("x").map(Number),o=Number(Le("ex-fps").value),c=Le("ex-range").value==="full",l=c?0:this.excerpt.start,u=c?this.model.durationSec:this.excerpt.end;this.exporting=!0,this.cancelExport=!1,e.disabled=!0,e.textContent="Exporting…",t.hidden=!1,this.player?.pause(),this.updatePlayButton();try{let h=this.buffer,f=this.bufferWindow?.start??0;this.bufferWindow&&this.bufferWindow.start<=l+.01&&this.bufferWindow.end>=u-.01||(i.style.width="2%",r.textContent="Rendering audio…",h=await Mu(this.layout,this.activeTracks(),{startSec:l,endSec:u},{tempoScale:this.tempoScale}),f=l);const g=h?oy(h,f,l,u):null,_=await GS({world:this.world,startSec:l,endSec:u,width:s,height:a,fps:o,audio:g,shouldCancel:()=>this.cancelExport,onProgress:(p,m)=>{const b=2+p/m*98;i.style.width=`${b}%`,r.textContent=`${p} / ${m} frames · ${Math.round(b)}%`}});vh(_.blob,_.filename),r.textContent=`Done — ${_.frames} frames in ${(_.elapsedMs/1e3).toFixed(1)}s`}catch(h){r.textContent=h instanceof Xs||h instanceof Error?h.message:String(h),console.error(h)}finally{this.exporting=!1,e.disabled=!1,e.textContent="Export MP4"}}loop(){const e=()=>{if(!this.exporting){const t=this.player&&this.buffer?this.player.time:this.idleTime;this.world.renderFrame(t);const i=Math.max(.001,this.excerpt.end-this.excerpt.start),r=Math.max(0,Math.min(1,(t-this.excerpt.start)/i)),s=Le("scrub");document.activeElement!==s&&(s.value=String(Math.round(r*1e3))),Le("t-now").textContent=Nr(t)}this.raf=requestAnimationFrame(e)};this.raf=requestAnimationFrame(e)}dispose(){cancelAnimationFrame(this.raf),this.player?.dispose(),this.world.dispose()}}function So(n){return n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}const jS=["C","G","D","A","E","B","F#","C#"],KS=["C","F","Bb","Eb","Ab","Db","Gb","Cb"];function QS(n){return n?n>0?`${jS[Math.min(7,n)]} major (${n} sharp${n>1?"s":""})`:`${KS[Math.min(7,-n)]} major (${-n} flat${n<-1?"s":""})`:"C major / a minor"}const xh=async()=>{window.__drawSystem=pf,window.app=new YS,await Promise.resolve()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>void xh()):xh();
