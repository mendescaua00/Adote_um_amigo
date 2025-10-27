function renderFavs(){
  const cont = qs('#listaFavs');
  const favIds = getFavs();
  if(!favIds.length){ qs('#emptyFavs').hidden=false; cont.innerHTML=''; return; }
  qs('#emptyFavs').hidden=true;
  const list = PETS.filter(p=> favIds.includes(p.id));
  cont.innerHTML = list.map(p=>`
    <article class="card">
      <a class="media" href="pet.html?id=${p.id}"><img src="${p.foto}" alt="${p.nome}"></a>
      <div class="body">
        <h3><a href="pet.html?id=${p.id}">${p.nome}</a></h3>
        <div class="badges"><span class="badge">${p.especie}</span><span class="badge">${p.idade}</span></div>
        <div class="actions">
          <a class="btn-primary" href="adocao.html?pet=${p.id}">Adotar</a>
          <button class="btn-ghost" data-id="${p.id}" data-action="rm">Remover</button>
        </div>
      </div>
    </article>`).join('');
}
window.addEventListener('DOMContentLoaded', ()=>{
  renderFavs();
  qs('#listaFavs').addEventListener('click', (e)=>{
    const btn=e.target.closest('button[data-action="rm"]'); if(!btn) return; const id=+btn.dataset.id; toggleFav(id); renderFavs();
  });
});
