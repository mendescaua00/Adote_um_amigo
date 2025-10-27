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