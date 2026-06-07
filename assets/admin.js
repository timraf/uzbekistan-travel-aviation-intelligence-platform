/* ============================================================
   UZBEKISTAN Gateway — Admin shell
   ============================================================ */
(function(){
const AI={
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  plane:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.8 16 14l3-3.2c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L12.5 11 6.7 9.2c-.5-.2-1 0-1.3.4l-.6.7 4.6 3-2.3 2.4-2.2-.4-.7.8 3 1.6 1.6 3 .8-.7-.4-2.2 2.4-2.3 3 4.6.7-.6c.4-.3.6-.8.4-1.3Z"/></svg>',
  city:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l5-3v17M19 21V11l-5-4M9 9v.01M9 12v.01M9 15v.01"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.5 5.3 5.5.8-4 4 1 5.6-5-2.7-5 2.7 1-5.6-4-4 5.5-.8Z"/></svg>',
  compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>',
  news:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h13a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5ZM19 8h1a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2M8 9h7M8 13h7M8 17h4"/></svg>',
  image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m4 18 5-5 4 3 3-2 4 4"/></svg>',
  cash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9v6M18 9v6"/></svg>',
  handshake:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1.5 1.5 0 0 0 2-2M13 19l-2-2M8 13l-2 2a1.5 1.5 0 0 0 2 2l1-1M3 11l4-4 4 2 3-3 7 4M21 11l-3 3"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M7 14l3-3 3 2 4-5"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5M16 5.2A3 3 0 0 1 16 11M21 20c0-2.5-1.4-4-3.5-4.6"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v6c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z"/></svg>',
  menu2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h10M4 12h16M4 19h7M18 5l3 3-3 3"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 13a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 2.6 14H2a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 2.6V2a2 2 0 1 1 4 0v.1A1.6 1.6 0 0 0 17 4.6l.1-.1a2 2 0 1 1 2.8 2.8"/></svg>',
  log:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 12h6M9 16h4"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-8 9 8M5 10v10h14V10"/></svg>',
  seo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M8 11h6M11 8v6"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M10.3 21a1.9 1.9 0 0 0 3.4 0"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/></svg>',
  dots:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
  filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18M7 12h10M10 19h4"/></svg>',
  ext:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>'
};
window.AI=AI;

const logo=`<svg class="brand-mark" viewBox="0 0 32 32" fill="none"><rect x="6.5" y="6.5" width="19" height="19" rx="3.5" fill="var(--primary)"/><rect x="6.5" y="6.5" width="19" height="19" rx="3.5" fill="var(--gold)" transform="rotate(45 16 16)" opacity="0.92"/><circle cx="16" cy="16" r="4.6" fill="var(--surface)"/><circle cx="16" cy="16" r="2.1" fill="var(--primary)"/></svg>`;

const NAV=[
  {h:'Overview',items:[['dashboard','Dashboard',AI.grid,'index.html','']]},
  {h:'Content',items:[
    ['homepage','Homepage',AI.home,'homepage.html',''],
    ['airports','Airports',AI.plane,'airports.html','11'],
    ['cities','Cities',AI.city,'cities.html','60'],
    ['attractions','Attractions',AI.star,'attractions.html','214'],
    ['guides','Travel Guides',AI.compass,'guides.html','42'],
    ['news','News',AI.news,'news.html','128'],
    ['media','Media Library',AI.image,'media.html','']
  ]},
  {h:'Growth & Monetization',items:[
    ['affiliates','Affiliates',AI.cash,'affiliates.html',''],
    ['partners','Partners',AI.handshake,'partners.html',''],
    ['seo','SEO',AI.seo,'seo.html',''],
    ['analytics','Analytics',AI.chart,'analytics.html','']
  ]},
  {h:'System',items:[
    ['translations','Translations',AI.globe,'translations.html',''],
    ['users','Users',AI.users,'users.html',''],
    ['roles','Roles',AI.shield,'roles.html',''],
    ['navigation','Navigation',AI.menu2,'navigation.html',''],
    ['search','Search',AI.search,'search.html',''],
    ['settings','Settings',AI.gear,'settings.html',''],
    ['audit','Audit Logs',AI.log,'audit.html','']
  ]}
];

let theme=localStorage.getItem('uz_theme')||'system';
let clang=localStorage.getItem('uz_clang')||'en';
function applyTheme(){document.documentElement.setAttribute('data-theme',theme);const b=document.getElementById('aThemeIcon');if(b)b.innerHTML=theme==='dark'?AI.sun:AI.moon;}

function sidebar(active){
  const groups=NAV.map(g=>`<div class="nav-group"><h6>${g.h}</h6>${g.items.map(it=>`<a class="anav ${it[0]===active?'active':''}" href="${it[3]}">${it[2]}<span class="lbl">${it[1]}</span>${it[4]?`<span class="count">${it[4]}</span>`:''}</a>`).join('')}</div>`).join('');
  return `<nav class="aside-nav" id="asideNav">
    <a class="aside-brand" href="index.html">${logo}<div><b>UZBEKISTAN</b><span>Admin · CMS</span></div></a>
    ${groups}
    <div class="aside-foot"><a class="anav" href="../index.html" target="_blank">${AI.ext}<span class="lbl">View live site</span></a></div>
  </nav>`;
}

function topbar(title,crumb){
  return `<div class="atop">
    <button class="iconbtn burger-admin" id="aBurger" aria-label="Menu">${AI.menu2}</button>
    <div style="min-width:0"><div class="crumb"><a href="../index.html">Gateway</a> › Admin</div><h1>${title}</h1></div>
    <div style="flex:1"></div>
    <div class="atop-search"><span>${AI.search}</span><input placeholder="Search admin…"/></div>
    <div class="clang" id="aClang" title="Content language">
      <button data-l="en" class="${clang==='en'?'on':''}">EN</button>
      <button data-l="uz" class="${clang==='uz'?'on':''}">UZ</button>
      <button data-l="ru" class="${clang==='ru'?'on':''}">RU</button>
    </div>
    <button class="iconbtn" id="aTheme" aria-label="Theme"><span id="aThemeIcon"></span></button>
    <button class="iconbtn" aria-label="Notifications">${AI.bell}</button>
    <div class="avatar" title="Admin user">AK</div>
  </div>`;
}

window.ADMIN={
  mount(active){
    applyTheme();
    const s=document.getElementById('admin-side'); if(s)s.outerHTML=sidebar(active);
    const t=document.getElementById('admin-top');
    if(t){const title=t.dataset.title||'';const crumb=t.dataset.crumb||'';t.outerHTML=topbar(title,crumb);}
    // scrim
    document.body.insertAdjacentHTML('beforeend','<div class="admin-scrim" id="aScrim"></div>');
    // wire
    const theme_btn=document.getElementById('aTheme');
    if(theme_btn)theme_btn.onclick=()=>{theme=theme==='dark'?'light':'dark';localStorage.setItem('uz_theme',theme);applyTheme();};
    document.querySelectorAll('#aClang button').forEach(b=>b.onclick=()=>{clang=b.dataset.l;localStorage.setItem('uz_clang',clang);document.querySelectorAll('#aClang button').forEach(x=>x.classList.toggle('on',x.dataset.l===clang));document.querySelectorAll('[data-clang]').forEach(el=>{el.style.display=el.dataset.clang===clang?'':'none';});});
    const nav=document.getElementById('asideNav'),scrim=document.getElementById('aScrim'),burger=document.getElementById('aBurger');
    const open=()=>{nav.classList.add('open');scrim.classList.add('open');};
    const close=()=>{nav.classList.remove('open');scrim.classList.remove('open');};
    if(burger){burger.onclick=open;scrim.onclick=close;}
    // switches
    document.querySelectorAll('.switch').forEach(sw=>sw.onclick=()=>sw.classList.toggle('on'));
    // tabs
    document.querySelectorAll('.atabs').forEach(group=>{group.querySelectorAll('button').forEach(b=>b.onclick=()=>{group.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');const tgt=b.dataset.tab;if(tgt){document.querySelectorAll('[data-tabpane]').forEach(p=>{if(p.dataset.tabpane.split(' ').includes(tgt)||p.dataset.group!==group.dataset.group)return;});document.querySelectorAll(`[data-group="${group.dataset.group}"][data-tabpane]`).forEach(p=>p.style.display=p.dataset.tabpane===tgt?'':'none');}});});
  }
};
})();
