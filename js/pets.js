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