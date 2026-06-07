/* ============================================================
   UZBEKISTAN Gateway — shared chrome, theme, i18n
   ============================================================ */
(function(){
const isAdmin = location.pathname.includes('/admin/');
const P = isAdmin ? '../' : '';          // prefix to reach root from current page
const A = isAdmin ? '' : 'admin/';        // prefix to reach admin

/* ---------- i18n dictionary (chrome + common) ---------- */
const T = {
  en:{
    discover:'Discover', airports:'Airports', destinations:'Destinations', plan:'Plan & Travel', news:'News',
    cities:'Cities', attractions:'Attractions', heritage:'UNESCO Heritage', about:'About Uzbekistan',
    transport:'Transportation', guides:'Travel Guides', offers:'Travel Offers', contact:'Contact',
    searchPh:'Search destinations, airports, guides…', searchBtn:'Search', plantrip:'Plan a trip',
    light:'Light', dark:'Dark', system:'System', language:'Language',
    footTagline:'The national gateway to Uzbekistan — aviation, destinations, heritage and travel intelligence in one trusted place.',
    explore:'Explore', services:'Services', aviation:'Aviation', company:'Platform',
    f_discover:'Discover Uzbekistan', f_cities:'Cities & Regions', f_attractions:'Attractions', f_heritage:'UNESCO Heritage', f_maps:'Interactive Maps',
    f_airports:'Airports Directory', f_tashkent:'Tashkent Airport', f_flights:'Flight Information', f_transport:'Transportation', f_visa:'Visa & eVisa',
    f_guides:'Travel Guides', f_offers:'Flights & Hotels', f_insurance:'Travel Insurance', f_esim:'eSIM & Connectivity', f_partners:'Become a Partner',
    f_about:'About the Platform', f_contact:'Contact', f_newsroom:'Newsroom', f_terms:'Terms', f_privacy:'Privacy',
    rights:'Official national aviation & travel gateway.', back:'Back to gateway',
    readmore:'Read more', viewall:'View all', sponsored:'Sponsored', featured:'Featured', partner:'Partner offer'
  },
  uz:{
    discover:'Kashf eting', airports:'Aeroportlar', destinations:'Yo‘nalishlar', plan:'Reja & Sayohat', news:'Yangiliklar',
    cities:'Shaharlar', attractions:'Diqqatga sazovor joylar', heritage:'YUNESKO merosi', about:'O‘zbekiston haqida',
    transport:'Transport', guides:'Sayohat qo‘llanmalari', offers:'Sayohat takliflari', contact:'Aloqa',
    searchPh:'Yo‘nalish, aeroport, qo‘llanma qidiring…', searchBtn:'Qidirish', plantrip:'Sayohat rejalashtirish',
    light:'Yorug‘', dark:'Tungi', system:'Tizim', language:'Til',
    footTagline:'O‘zbekistonga milliy darvoza — aviatsiya, yo‘nalishlar, meros va sayohat ma’lumotlari yagona ishonchli joyda.',
    explore:'Kashfiyot', services:'Xizmatlar', aviation:'Aviatsiya', company:'Platforma',
    f_discover:'O‘zbekistonni kashf eting', f_cities:'Shaharlar va viloyatlar', f_attractions:'Diqqatga sazovor joylar', f_heritage:'YUNESKO merosi', f_maps:'Interaktiv xaritalar',
    f_airports:'Aeroportlar katalogi', f_tashkent:'Toshkent aeroporti', f_flights:'Parvozlar ma’lumoti', f_transport:'Transport', f_visa:'Viza & eViza',
    f_guides:'Sayohat qo‘llanmalari', f_offers:'Parvoz va mehmonxonalar', f_insurance:'Sayohat sug‘urtasi', f_esim:'eSIM & Aloqa', f_partners:'Hamkor bo‘lish',
    f_about:'Platforma haqida', f_contact:'Aloqa', f_newsroom:'Matbuot markazi', f_terms:'Shartlar', f_privacy:'Maxfiylik',
    rights:'Rasmiy milliy aviatsiya va sayohat darvozasi.', back:'Darvozaga qaytish',
    readmore:'Batafsil', viewall:'Hammasini ko‘rish', sponsored:'Homiylik', featured:'Tavsiya etilgan', partner:'Hamkor taklifi'
  },
  ru:{
    discover:'Откройте', airports:'Аэропорты', destinations:'Направления', plan:'Планирование', news:'Новости',
    cities:'Города', attractions:'Достопримечательности', heritage:'Наследие ЮНЕСКО', about:'Об Узбекистане',
    transport:'Транспорт', guides:'Путеводители', offers:'Предложения', contact:'Контакты',
    searchPh:'Поиск направлений, аэропортов, гидов…', searchBtn:'Найти', plantrip:'Спланировать поездку',
    light:'Светлая', dark:'Тёмная', system:'Система', language:'Язык',
    footTagline:'Национальный портал Узбекистана — авиация, направления, наследие и путешествия в одном надёжном месте.',
    explore:'Обзор', services:'Сервисы', aviation:'Авиация', company:'Платформа',
    f_discover:'Откройте Узбекистан', f_cities:'Города и регионы', f_attractions:'Достопримечательности', f_heritage:'Наследие ЮНЕСКО', f_maps:'Интерактивные карты',
    f_airports:'Каталог аэропортов', f_tashkent:'Аэропорт Ташкента', f_flights:'Информация о рейсах', f_transport:'Транспорт', f_visa:'Виза и eVisa',
    f_guides:'Путеводители', f_offers:'Авиабилеты и отели', f_insurance:'Страхование', f_esim:'eSIM и связь', f_partners:'Стать партнёром',
    f_about:'О платформе', f_contact:'Контакты', f_newsroom:'Пресс-центр', f_terms:'Условия', f_privacy:'Конфиденциальность',
    rights:'Официальный национальный портал авиации и путешествий.', back:'На главную',
    readmore:'Подробнее', viewall:'Показать все', sponsored:'Реклама', featured:'Рекомендуем', partner:'Предложение партнёра'
  }
};
window.UZ = window.UZ || {};
window.UZ.T = T;

/* ---------- state ---------- */
let lang = localStorage.getItem('uz_lang') || 'en';
let theme = localStorage.getItem('uz_theme') || 'system';
const langMeta = {en:{name:'English',native:'English',code:'EN'},uz:{name:'Uzbek',native:'O‘zbekcha',code:'UZ'},ru:{name:'Russian',native:'Русский',code:'RU'}};

/* ---------- icons ---------- */
const I = {
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  auto:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>',
  chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  plane:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.8 16 14l3-3.2c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L12.5 11 6.7 9.2c-.5-.2-1 0-1.3.4l-.6.7 4.6 3-2.3 2.4-2.2-.4-.7.8 3 1.6 1.6 3 .8-.7-.4-2.2 2.4-2.3 3 4.6.7-.6c.4-.3.6-.8.4-1.3Z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.5 5.3 5.5.8-4 4 1 5.6-5-2.7-5 2.7 1-5.6-4-4 5.5-.8Z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>',
  train:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14M9 16l-2 4M15 16l2 4M9 7h6"/></svg>',
  car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16 6.5 9.5A2 2 0 0 1 8.4 8h7.2a2 2 0 0 1 1.9 1.5L19 16M5 16h14M5 16v2M19 16v2"/><circle cx="8" cy="16" r="1.2"/><circle cx="16" cy="16" r="1.2"/></svg>',
  wifi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0M12 19h.01"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v6c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3ZM9 12l2 2 4-4"/></svg>',
  bldg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M15 9h2a2 2 0 0 1 2 2v10M8 7h2M8 11h2M8 15h2"/></svg>',
  ext:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>',
  filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18M7 12h10M10 19h4"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5"/></svg>'
};
window.UZ.I = I;

const logo = `<svg class="brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <rect x="6.5" y="6.5" width="19" height="19" rx="3.5" fill="var(--primary)"/>
  <rect x="6.5" y="6.5" width="19" height="19" rx="3.5" fill="var(--gold)" transform="rotate(45 16 16)" opacity="0.92"/>
  <circle cx="16" cy="16" r="4.6" fill="var(--bg)"/>
  <circle cx="16" cy="16" r="2.1" fill="var(--primary)"/>
</svg>`;
window.UZ.logo = logo;

function t(k){return (T[lang]&&T[lang][k])||T.en[k]||k;}

/* ---------- nav model ---------- */
const navModel = [
  {k:'discover', href:P+'discover.html'},
  {k:'airports', href:P+'airports.html'},
  {k:'destinations', drop:[
    {k:'cities', href:P+'cities.html', d:'City & region directory'},
    {k:'attractions', href:P+'attractions.html', d:'Monuments & sights'},
    {k:'heritage', href:P+'unesco.html', d:'7 World Heritage sites'},
    {k:'about', href:P+'about.html', d:'Country overview'}
  ]},
  {k:'plan', drop:[
    {k:'transport', href:P+'transportation.html', d:'Rail, road & metro'},
    {k:'guides', href:P+'guides.html', d:'Curated itineraries'},
    {k:'offers', href:P+'offers.html', d:'Flights, hotels, insurance'},
    {k:'contact', href:P+'contact.html', d:'Help & information'}
  ]},
  {k:'news', href:P+'news.html'}
];

/* ---------- build header ---------- */
function buildHeader(active){
  const navHtml = navModel.map(n=>{
    if(n.drop){
      const items = n.drop.map(d=>`<a href="${d.href}" data-nav="${d.k}"><span>${t(d.k)}</span><small>${d.d}</small></a>`).join('');
      return `<div class="nav-drop"><button class="nav-droptrigger" data-nav="${n.k}">${t(n.k)} ${I.chevron}</button><div class="nav-mega">${items}</div></div>`;
    }
    return `<a href="${n.href}" data-nav="${n.k}" class="${active===n.k?'active':''}">${t(n.k)}</a>`;
  }).join('');

  return `
  <header class="site-header" id="siteHeader">
    <div class="wrap hdr-inner">
      <a class="brand" href="${P}index.html" aria-label="Uzbekistan gateway home">
        ${logo}
        <span class="brand-name"><b>UZBEKISTAN</b><span>Aviation · Travel · Discovery</span></span>
      </a>
      <nav class="nav" aria-label="Primary">${navHtml}</nav>
      <div class="nav-spacer"></div>
      <div class="hdr-tools">
        <button class="icon-btn" id="searchToggle" aria-label="${t('searchBtn')}" title="${t('searchBtn')}">${I.search}</button>
        <div class="lang-pick">
          <button class="lang-btn" id="langBtn">${I.globe}<span id="langCode">${langMeta[lang].code}</span> ${I.chevron}</button>
          <div class="lang-menu" id="langMenu">
            ${Object.keys(langMeta).map(l=>`<button data-lang="${l}" class="${l===lang?'on':''}">${langMeta[l].native}<small>${langMeta[l].code}</small></button>`).join('')}
          </div>
        </div>
        <div class="seg" id="themeSeg" role="group" aria-label="${t('language')}">
          <button data-theme="light" title="${t('light')}">${I.sun}</button>
          <button data-theme="system" title="${t('system')}">${I.auto}</button>
          <button data-theme="dark" title="${t('dark')}">${I.moon}</button>
        </div>
        <a class="btn btn-primary btn-sm hide-sm" href="${P}offers.html">${t('plantrip')}</a>
        <button class="icon-btn burger" id="burger" aria-label="Menu">${I.menu}</button>
      </div>
    </div>
    <div class="search-bar" id="searchBar">
      <div class="wrap"><form class="search-form" action="${P}search.html">
        ${I.search}<input class="search-input" name="q" placeholder="${t('searchPh')}" autocomplete="off"/>
        <button class="btn btn-primary btn-sm" type="submit">${t('searchBtn')}</button>
      </form>
      <div class="wrap search-sugg"><span class="muted">Popular:</span>
        <a href="${P}city-samarkand.html" class="chip">Samarkand</a>
        <a href="${P}airport-tashkent.html" class="chip">Tashkent Airport</a>
        <a href="${P}attraction-registan.html" class="chip">Registan</a>
        <a href="${P}transportation.html" class="chip">Afrosiyob train</a>
        <a href="${P}offers.html" class="chip">eVisa</a>
      </div></div>
    </div>
  </header>`;
}

/* ---------- mobile drawer ---------- */
function buildDrawer(){
  const links = [];
  navModel.forEach(n=>{
    if(n.drop){ n.drop.forEach(d=>links.push(`<a href="${d.href}">${t(d.k)}</a>`)); }
    else links.push(`<a href="${n.href}">${t(n.k)}</a>`);
  });
  return `<div class="drawer-scrim" id="drawerScrim"></div>
  <aside class="drawer" id="drawer">
    <div class="between" style="margin-bottom:1rem">
      <div class="brand">${logo}<span class="brand-name"><b>UZBEKISTAN</b></span></div>
      <button class="icon-btn" id="drawerClose">${I.close}</button>
    </div>
    ${links.join('')}
    <a class="btn btn-primary btn-block" href="${P}offers.html" style="margin-top:1rem">${t('plantrip')}</a>
  </aside>`;
}

/* ---------- footer ---------- */
function buildFooter(){
  const col=(title,links)=>`<div class="foot-col"><h5>${title}</h5>${links.map(([h,l])=>`<a href="${h}">${l}</a>`).join('')}</div>`;
  return `
  <footer class="site-footer">
    <div class="tile-strip"></div>
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-col">
          <div class="brand" style="margin-bottom:1rem">${logo}<span class="brand-name"><b>UZBEKISTAN</b><span>Aviation · Travel · Discovery</span></span></div>
          <p class="muted" style="font-size:.9rem;max-width:34ch">${t('footTagline')}</p>
          <div class="row gap-s" style="margin-top:1.2rem">
            <span class="badge badge-teal">EN · UZ · RU</span>
            <span class="badge badge-gold">SEO · GEO READY</span>
          </div>
        </div>
        ${col(t('explore'),[[P+'discover.html',t('f_discover')],[P+'cities.html',t('f_cities')],[P+'attractions.html',t('f_attractions')],[P+'unesco.html',t('f_heritage')],[P+'discover.html',t('f_maps')]])}
        ${col(t('aviation'),[[P+'airports.html',t('f_airports')],[P+'airport-tashkent.html',t('f_tashkent')],[P+'airport-tashkent.html',t('f_flights')],[P+'transportation.html',t('f_transport')],[P+'offers.html',t('f_visa')]])}
        ${col(t('services'),[[P+'guides.html',t('f_guides')],[P+'offers.html',t('f_offers')],[P+'offers.html',t('f_insurance')],[P+'offers.html',t('f_esim')],[A+'index.html',t('f_partners')]])}
        ${col(t('company'),[[P+'about.html',t('f_about')],[P+'contact.html',t('f_contact')],[P+'news.html',t('f_newsroom')],[A+'index.html','Admin / CMS'],[P+'contact.html',t('f_privacy')]])}
      </div>
      <div class="foot-bottom">
        <small>© 2026 UZBEKISTAN Gateway · ${t('rights')}</small>
        <div class="row gap-s">
          <span class="badge badge-cobalt">Schema.org</span>
          <span class="badge badge-teal">AI-Search optimized</span>
          <small class="mono">v2.4 · concept</small>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ---------- apply theme ---------- */
function applyTheme(){
  document.documentElement.setAttribute('data-theme',theme);
  document.querySelectorAll('#themeSeg button').forEach(b=>b.classList.toggle('on',b.dataset.theme===theme));
}
window.UZ.setTheme=function(v){theme=v;localStorage.setItem('uz_theme',v);applyTheme();};

/* ---------- apply language ---------- */
function applyLang(){
  document.documentElement.lang=lang;
  const code=document.getElementById('langCode'); if(code)code.textContent=langMeta[lang].code;
  document.querySelectorAll('#langMenu button').forEach(b=>b.classList.toggle('on',b.dataset.lang===lang));
  // chrome strings
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    const dict = (window.PAGE_I18N&&window.PAGE_I18N[lang]&&window.PAGE_I18N[lang][k]!=null)?window.PAGE_I18N[lang][k]
               : (T[lang]&&T[lang][k]!=null)?T[lang][k]:null;
    if(dict!=null) el.innerHTML=dict;
  });
}
window.UZ.setLang=function(v){lang=v;localStorage.setItem('uz_lang',v);location.reload();};
window.UZ.lang=()=>lang;
window.UZ.t=t;

/* ---------- mount ---------- */
window.UZ.mount=function(active){
  applyTheme(); // set asap to avoid flash
  const h=document.getElementById('site-header'); if(h)h.outerHTML=buildHeader(active);
  const f=document.getElementById('site-footer'); if(f)f.outerHTML=buildFooter();
  document.body.insertAdjacentHTML('beforeend',buildDrawer());
  wire();
  applyLang();
  revealInit();
};

function wire(){
  const header=document.getElementById('siteHeader');
  // scroll state
  const onScroll=()=>{ if(header){ if(window.scrollY>16)header.classList.add('scrolled'); else header.classList.remove('scrolled'); } };
  if(document.body.dataset.hero==='1' && header){header.classList.add('over-hero');}
  if(header && header.dataset.solid==='1'){header.classList.add('solid');} else {onScroll();window.addEventListener('scroll',onScroll,{passive:true});}
  // theme
  document.querySelectorAll('#themeSeg button').forEach(b=>b.onclick=()=>window.UZ.setTheme(b.dataset.theme));
  // lang menu
  const lb=document.getElementById('langBtn'),lm=document.getElementById('langMenu');
  if(lb){lb.onclick=e=>{e.stopPropagation();lm.classList.toggle('open');};
    document.addEventListener('click',()=>lm.classList.remove('open'));
    lm.querySelectorAll('button').forEach(b=>b.onclick=()=>window.UZ.setLang(b.dataset.lang));}
  // search
  const st=document.getElementById('searchToggle'),sb=document.getElementById('searchBar');
  if(st){st.onclick=()=>{sb.classList.toggle('open'); const i=sb.querySelector('input'); if(sb.classList.contains('open'))setTimeout(()=>i.focus(),60);};}
  // drawer
  const burger=document.getElementById('burger'),dr=document.getElementById('drawer'),ds=document.getElementById('drawerScrim'),dc=document.getElementById('drawerClose');
  const openDr=()=>{dr.classList.add('open');ds.classList.add('open');};
  const closeDr=()=>{dr.classList.remove('open');ds.classList.remove('open');};
  if(burger){burger.onclick=openDr;dc.onclick=closeDr;ds.onclick=closeDr;}
}

/* ---------- reveal on scroll ---------- */
function revealInit(){
  const els=document.querySelectorAll('.reveal');
  if(!els.length)return;
  const show=e=>e.classList.add('in');
  // If IO unsupported or reduced motion, leave content fully visible (never arm the hidden state)
  if(!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion:reduce)').matches){return;}
  document.documentElement.classList.add('reveal-on');
  const inView=e=>{const r=e.getBoundingClientRect();return r.top<(window.innerHeight*0.96) && r.bottom>0;};
  const io=new IntersectionObserver((ents)=>{ents.forEach(en=>{if(en.isIntersecting){show(en.target);io.unobserve(en.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.06});
  els.forEach((e,i)=>{e.style.transitionDelay=Math.min(i%6*60,300)+'ms';if(inView(e))show(e);else io.observe(e);});
  // safety nets: ensure everything becomes visible even if IO callbacks never fire
  window.addEventListener('load',()=>setTimeout(()=>els.forEach(show),200));
  setTimeout(()=>els.forEach(show),1600);
}

/* expose path helpers */
window.UZ.P=P; window.UZ.A=A;
})();
