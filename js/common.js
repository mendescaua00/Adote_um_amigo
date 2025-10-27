// Utilidades comuns + menu + dark mode + modal
const qs = (s, el=document) => el.querySelector(s);
const qsa = (s, el=document) => [...el.querySelectorAll(s)];

// Menu mobile
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
if(btnMenu){
  btnMenu.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    btnMenu.setAttribute('aria-expanded', String(open));
  });
}

// Dark mode toggle (persistido)
const root = document.documentElement;
const darkToggle = document.getElementById('darkToggle');
function applyTheme(){
  const pref = localStorage.getItem('theme') || 'light';
  root.classList.toggle('dark', pref==='dark');
  if(darkToggle) darkToggle.textContent = pref==='dark' ? '☀️' : '🌙';
}
applyTheme();
if(darkToggle){
  darkToggle.addEventListener('click', ()=>{
    const pref = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', pref);
    applyTheme();
  });
}

// Ano corrente
const ano = document.getElementById('ano');
if(ano) ano.textContent = new Date().getFullYear();

// Modal
const modal = qs('#modal');
const modalBody = qs('#modalBody');
function openModal(html){ modalBody.innerHTML = html; modal.setAttribute('aria-hidden','false'); }
function closeModal(){ modal.setAttribute('aria-hidden','true'); modalBody.innerHTML=''; }
if(modal){
  modal.addEventListener('click', (e)=>{ if(e.target.matches('[data-close], .modal-backdrop')) closeModal(); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });
}

// Favoritos em localStorage
const FAV_KEY = 'adote-favs';
function getFavs(){ try{ return JSON.parse(localStorage.getItem(FAV_KEY))||[] }catch{ return [] } }
function setFavs(list){ localStorage.setItem(FAV_KEY, JSON.stringify(list)); updateFavCount(); }
function toggleFav(id){ const list=getFavs(); const i=list.indexOf(id); i>-1?list.splice(i,1):list.push(id); setFavs(list); return list.includes(id); }
function isFav(id){ return getFavs().includes(id); }
function updateFavCount(){ const el = document.getElementById('favCount'); if(el) el.textContent = String(getFavs().length); }
updateFavCount();

// Util
function idadeRank(v){ return {Filhote:0, Adulto:1, Idoso:2}[v] ?? 99; }
function byNome(a,b){ return a.nome.localeCompare(b.nome,'pt'); }
function byIdade(a,b){ return idadeRank(a.idade)-idadeRank(b.idade) || byNome(a,b); }

// Link suave
qsa('a[href^="#"]').forEach(a=> a.addEventListener('click', e=>{ const id=a.getAttribute('href').slice(1); const t=qs('#'+id); if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'});} }));
