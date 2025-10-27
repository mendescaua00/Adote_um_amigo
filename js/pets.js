const lista = qs('#listaPets');
const vazio = qs('#vazio');
const filtros = qs('#filtros');
const ordem = qs('#ordem');
const pageInfo = qs('#pageInfo');
const prev = qs('#prev');
const next = qs('#next');
let page = 1; const PER_PAGE = 8;

function renderPets(data){
  const start = (page-1)*PER_PAGE; const slice = data.slice(start, start+PER_PAGE);
  lista.innerHTML = slice.map(p => `
    <article class="card" aria-label="${p.nome}, ${p.especie} ${p.idade}">
      <a class="media" href="pet.html?id=${p.id}"><img src="${p.foto}" alt="${p.especie} ${p.nome}"></a>
      <div class="body">
        <h3><a href="pet.html?id=${p.id}">${p.nome}</a></h3>
        <div class="badges">
          <span class="badge">${p.especie}</span>
          <span class="badge">${p.idade}</span>
          <span class="badge">${p.porte}</span>
        </div>
        <p>${p.descricao}</p>
      </div>
      <div class="actions">
        <button class="btn-ghost" data-id="${p.id}" data-action="detalhes">Detalhes</button>
        <button class="btn-primary" data-id="${p.id}" data-action="adotar">Adotar</button>
        <button class="btn-ghost" data-id="${p.id}" data-action="fav">${isFav(p.id)?'★':'☆'} Favoritar</button>
      </div>
    </article>
  `).join('');
  vazio.hidden = data.length > 0;
  const totalPages = Math.max(1, Math.ceil(data.length / PER_PAGE));
  page = Math.min(page, totalPages);
  pageInfo.textContent = `Página ${page} de ${totalPages}`;
  prev.disabled = page<=1; next.disabled = page>=totalPages;
}

function applyFilters(){
  const term = qs('#busca').value.trim().toLowerCase();
  const especie = qs('#especie').value; const idade = qs('#idade').value; const porte = qs('#porte').value;
  let filtered = PETS.filter(p => {
    const matchTerm = !term || `${p.nome} ${p.descricao}`.toLowerCase().includes(term);
    const matchEspecie = !especie || p.especie === especie;
    const matchIdade = !idade || p.idade === idade;
    const matchPorte = !porte || p.porte === porte;
    return matchTerm && matchEspecie && matchIdade && matchPorte;
  });
  filtered = [...filtered].sort(ordem.value==='idade'?byIdade:byNome);
  renderPets(filtered);
  return filtered;
}

function renderDetalhes(p){
  const html = `
    <div class="media"><img src="${p.foto}" alt="${p.especie} ${p.nome}"></div>
    <div class="body">
      <h2 id="modalTitle">${p.nome}</h2>
      <div class="badges">
        <span class="badge">${p.especie}</span>
        <span class="badge">${p.idade}</span>
        <span class="badge">${p.porte}</span>
        <span class="badge">${p.sexo}</span>
      </div>
      <p>${p.descricao}</p>
      <div class="actions">
        <a class="btn-primary" href="adocao.html?pet=${p.id}">Quero adotar</a>
        <button class="btn-ghost" data-close>Fechar</button>
      </div>
    </div>`;
  openModal(html);
}

let current = [];
window.addEventListener('DOMContentLoaded', ()=>{
  current = applyFilters();
  filtros.addEventListener('input', ()=>{ page=1; current=applyFilters(); });
  filtros.addEventListener('reset', ()=> setTimeout(()=>{ page=1; current=applyFilters(); },0));
  ordem.addEventListener('change', ()=>{ page=1; current=applyFilters(); });

  prev.addEventListener('click', ()=>{ if(page>1){ page--; renderPets(current); } });
  next.addEventListener('click', ()=>{ const total=Math.ceil(current.length/PER_PAGE); if(page<total){ page++; renderPets(current);} });

  lista.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-action]'); if(!btn) return; const id=+btn.dataset.id; const pet=PETS.find(p=>p.id===id);
    if(btn.dataset.action==='detalhes'){ renderDetalhes(pet); }
    else if(btn.dataset.action==='adotar'){ location.href = `adocao.html?pet=${id}`; }
    else if(btn.dataset.action==='fav'){ const on = toggleFav(id); btn.textContent = (on?'★':'☆') + ' Favoritar'; }
  });
});
