const d=require('./mm_data.js'),fs=require('fs');
const tpl=`<title>Cancel Flow Mind Map</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap">
<style>
:root{--bg:#EEEBE3;--surface:#fff;--surface2:#F4F1EA;--fg:#1B2220;--muted:#5E6A65;--ln:#BDB8AA;--ink:#fff;
 --c0:#1F2A27;--c1:#0B7E6B;--c2:#C2263D;--c3:#B26A00;--c4:#5B3FD0;--c5:#2B6CB0;--c6:#7A5A3A;--c7:#4D5B56;
 --tnew:#5B3FD0;--tnewbg:#ECE7FF;--tlive:#0A6B5B;--tlivebg:#DDF3EE;--tchk:#9A4A00;--tchkbg:#FFE9D6;--cap:#8A5E00;--capbg:#FFF1CC}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--bg:#0F1412;--surface:#18201E;--surface2:#212B28;--fg:#EAF0EC;--muted:#9CABA4;--ln:#3A4742;--ink:#0B100E;
 --c0:#EAF0EC;--c1:#3DD1B3;--c2:#FF7A8A;--c3:#F0B654;--c4:#A894FF;--c5:#6CB2F2;--c6:#D1A97C;--c7:#9CABA4;
 --tnew:#B9A8FF;--tnewbg:#2A2250;--tlive:#6EE0C4;--tlivebg:#12332B;--tchk:#FFB878;--tchkbg:#3A2412;--cap:#F0B654;--capbg:#3A2F14;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#0F1412;--surface:#18201E;--surface2:#212B28;--fg:#EAF0EC;--muted:#9CABA4;--ln:#3A4742;--ink:#0B100E;
 --c0:#EAF0EC;--c1:#3DD1B3;--c2:#FF7A8A;--c3:#F0B654;--c4:#A894FF;--c5:#6CB2F2;--c6:#D1A97C;--c7:#9CABA4;
 --tnew:#B9A8FF;--tnewbg:#2A2250;--tlive:#6EE0C4;--tlivebg:#12332B;--tchk:#FFB878;--tchkbg:#3A2412;--cap:#F0B654;--capbg:#3A2F14;color-scheme:dark}
*{box-sizing:border-box}
body{background:var(--bg);color:var(--fg);font-family:Inter,system-ui,sans-serif;font-size:14px;line-height:1.45;margin:0;
 padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));padding-block:22px}
.top{max-width:1400px;margin:0 auto 14px;display:flex;flex-direction:column;gap:10px}
h1{font-family:Poppins,Inter,sans-serif;font-size:24px;margin:0;text-wrap:balance}
.sub{color:var(--muted);margin:0;max-width:760px}
.bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.bar button{border:1px solid var(--ln);background:var(--surface);color:var(--fg);border-radius:8px;padding:6px 11px;font:inherit;font-size:12.5px;cursor:pointer}
.bar button[aria-pressed="true"]{background:var(--fg);color:var(--bg);border-color:var(--fg)}
.bar .sp{flex:1}
.stats{display:flex;flex-wrap:wrap;gap:8px 18px;color:var(--muted);font-size:12.5px}
.stats b{color:var(--fg)}
.tag{display:inline-block;font-size:9.5px;font-weight:700;letter-spacing:.04em;border-radius:4px;padding:1px 6px;margin-right:6px;vertical-align:1px}
.tag.new{background:var(--tnewbg);color:var(--tnew)}.tag.live{background:var(--tlivebg);color:var(--tlive)}.tag.chk{background:var(--tchkbg);color:var(--tchk)}
.cap{display:inline-block;font-size:9.5px;font-weight:700;border-radius:4px;padding:1px 6px;background:var(--capbg);color:var(--cap);margin-left:6px}
.scroller{max-width:1400px;margin:0 auto;overflow-x:auto;background:var(--surface);border:1px solid var(--ln);border-radius:14px;padding:18px}
.tree{display:inline-block;min-width:100%}
.tn{display:flex;align-items:center}
.kids{display:flex;flex-direction:column;margin-left:26px;position:relative}
.kids::before{content:'';position:absolute;left:-26px;top:50%;width:26px;border-top:2px solid var(--ln)}
.kids>.tn{position:relative;padding:4px 0 4px 26px}
.kids>.tn::before{content:'';position:absolute;left:0;top:50%;width:26px;border-top:2px solid var(--ln)}
.kids>.tn::after{content:'';position:absolute;left:0;top:0;bottom:0;border-left:2px solid var(--ln)}
.kids>.tn:first-child::after{top:50%}.kids>.tn:last-child::after{bottom:50%}.kids>.tn:only-child::after{display:none}
.kids>.tn:only-child::before{width:26px}
.n{border-radius:10px;padding:8px 11px;max-width:270px;min-width:120px;font-size:13px;flex:none}
.n.root{background:var(--c0);color:var(--bg);font-family:Poppins,Inter,sans-serif;font-weight:700;font-size:16px;padding:14px 16px}
.n.reason{background:var(--c);color:var(--ink);font-weight:600;cursor:pointer;max-width:250px}
.n.reason small{display:block;font-weight:400;opacity:.9;font-size:11.5px;margin-top:2px}
.n.exit,.n.rule{background:var(--c);color:var(--ink);font-weight:600;cursor:pointer;max-width:250px}
.n.sub{border:2px solid var(--c);background:var(--surface);font-weight:600;cursor:pointer}
.n.sub small{display:block;font-weight:400;color:var(--muted);font-size:11.5px;margin-top:2px}
.n.sol{background:var(--surface2);border:1px solid var(--ln);max-width:300px;transition:opacity .15s}
.n.sol small{display:block;color:var(--muted);font-size:11.5px;margin-top:3px}
.n.note{border:1px dashed var(--ln);color:var(--muted);font-size:12px;max-width:300px;background:transparent}
.n.dim{opacity:.18}
.cnt{display:inline-block;font-size:10px;font-weight:700;background:rgba(255,255,255,.28);border-radius:8px;padding:0 6px;margin-left:5px}
.n.sub .cnt{background:var(--surface2);color:var(--muted)}
.collapsed>.kids{display:none}
.legend{max-width:1400px;margin:14px auto 0;color:var(--muted);font-size:12.5px}
</style>
<div class="top">
 <h1>Cancel flow mind map</h1>
 <p class="sub">Every reason, sub-reason and solution in the prototype. Click a reason or sub-reason to fold it. Tags show what already exists and what would need building.</p>
 <div class="stats" id="stats"></div>
 <div class="bar" id="bar"></div>
</div>
<div class="scroller"><div class="tree" id="tree"></div></div>
<p class="legend"><span class="tag live">LIVE</span> already on Shvasa &nbsp; <span class="tag new">NEW</span> would need building &nbsp; <span class="tag chk">TO CHECK</span> I could not confirm it exists &nbsp; <span class="cap">Cap 25%</span> discount or compensation cap (25% ceiling is yours; the split is my proposal). Refund rules are yours: 7 days, 10% third-party fee. Prototype: the cancel flow page.</p>
<script>
const DATA=__DATA__;
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const TAG={live:'LIVE',new:'NEW',chk:'TO CHECK'};
function count(n){let c=0;(n.kids||[]).forEach(k=>{if(k.k==='sol')c++;c+=count(k)});return c}
function node(n,ci){
 const kids=n.kids||[];
 let inner='';
 if(n.k==='sol')inner=\`<div class="n sol" data-tag="\${n.tag}" data-cap="\${n.cap?1:0}"><span class="tag \${n.tag}">\${TAG[n.tag]}</span>\${esc(n.t)}\${n.cap?\`<span class="cap">Cap \${n.cap}%</span>\`:''}\${n.note?\`<small>\${esc(n.note)}</small>\`:''}</div>\`;
 else if(n.k==='note')inner=\`<div class="n note">\${esc(n.t)}</div>\`;
 else {const c=count(n);inner=\`<div class="n \${n.k}" data-fold="1">\${esc(n.t)}\${c?\`<span class="cnt">\${c}</span>\`:''}\${n.hero?\`<small>\${esc(n.hero)}</small>\`:''}\${n.cond?\`<small>\${esc(n.cond)}</small>\`:''}</div>\`}
 return \`<div class="tn" style="--c:var(--c\${ci})">\${inner}\${kids.length?\`<div class="kids">\${kids.map(k=>node(k,ci)).join('')}</div>\`:''}</div>\`}
const root=\`<div class="tn"><div class="n root">\${esc(DATA.root)}</div><div class="kids">\${DATA.kids.map((k,i)=>node(k,i+1)).join('')}</div></div>\`;
document.getElementById('tree').innerHTML=root;
let reasons=DATA.kids.filter(k=>k.k==='reason').length,subs=0,sols=0,nw=0,lv=0,ck=0,cp=0;
(function w(n){(n.kids||[]).forEach(k=>{if(k.k==='sub')subs++;if(k.k==='sol'){sols++;if(k.tag==='new')nw++;if(k.tag==='live')lv++;if(k.tag==='chk')ck++;if(k.cap)cp++}w(k)})})(DATA);
document.getElementById('stats').innerHTML=\`<span><b>\${reasons}</b> reasons</span><span><b>\${subs}</b> sub-reasons</span><span><b>\${sols}</b> solution slots</span><span><b>\${nw}</b> new</span><span><b>\${lv}</b> live</span><span><b>\${ck}</b> to check</span><span><b>\${cp}</b> with a cap</span>\`;
let filt='all';
function apply(){document.querySelectorAll('.n.sol').forEach(e=>{const t=e.dataset.tag,cap=e.dataset.cap==='1';const ok=filt==='all'||filt===t||(filt==='cap'&&cap);e.classList.toggle('dim',!ok)})}
const F=[['all','All'],['new','Only NEW'],['live','Only LIVE'],['chk','Only TO CHECK'],['cap','With a cap']];
function bar(){document.getElementById('bar').innerHTML=F.map(f=>\`<button data-f="\${f[0]}" aria-pressed="\${filt===f[0]}">\${f[1]}</button>\`).join('')+'<span class="sp"></span><button data-x="collapse">Fold all</button><button data-x="expand">Unfold all</button>'}
bar();
document.addEventListener('click',e=>{
 const f=e.target.closest('[data-f]');if(f){filt=f.dataset.f;bar();apply();return}
 const x=e.target.closest('[data-x]');if(x){document.querySelectorAll('.tn').forEach(t=>{if(t.querySelector(':scope>.kids')&&t.querySelector(':scope>.n[data-fold]'))t.classList.toggle('collapsed',x.dataset.x==='collapse')});return}
 const n=e.target.closest('[data-fold]');if(n){n.parentElement.classList.toggle('collapsed')}
});
</script>`;
fs.writeFileSync('mindmap.html',tpl.replace('__DATA__',JSON.stringify(d)));
// markdown
let md='# Shvasa cancel flow: reasons, sub-reasons and solutions\n\nTags: LIVE = already on Shvasa, NEW = would need building, TO CHECK = not confirmed to exist. Cap = discount or compensation cap (25% ceiling is set by Pinks; the split is a proposal). Refund rules: within 7 days of renewal, 10% third-party fee. Prototype pricing from app.shvasa.com/pricing, read 22 Oct 2026.\n\n';
function m(n,dep){const pad='  '.repeat(dep);let line;
 if(n.k==='sol')line=`${pad}- [${n.tag==='chk'?'TO CHECK':n.tag.toUpperCase()}] ${n.t}${n.cap?` (cap ${n.cap}%)`:''}${n.note?`: ${n.note}`:''}`;
 else if(n.k==='note')line=`${pad}- _${n.t}_`;
 else line=`${pad}- **${n.t}**${n.hero?` (${n.hero})`:''}${n.cond?` [${n.cond}]`:''}`;
 md+=line+'\n';(n.kids||[]).forEach(k=>m(k,dep+1))}
d.kids.forEach(k=>{if(k.k==='reason'||k.k==='exit'||k.k==='rule')m(k,0)});
fs.writeFileSync('mindmap.md',md);
