function getParam(name){ return new URLSearchParams(location.search).get(name); }
function render(p){
  const view = qs('#petView');
  if(!p){ view.innerHTML = '<div class="empty">Pet não encontrado.</div>'; return; }
  view.innerHTML = `
    <div class="media"><img src="${p.foto}" alt="${p.especie} ${p.nome}"></div>
    <div class="body">
      <h2>${p.nome}</h2>
      <div class="badges"><span class="badge">${p.especie}</span><span class="badge">${p.idade}</span><span class="badge">${p.porte}</span><span class="badge">${p.sexo}</span></div>
      <p>${p.descricao}</p>
      <div class="actions">
        <a class="btn-primary" href="adocao.html?pet=${p.id}">Quero adotar</a>
        <button class="btn-ghost" id="favBtn">${isFav(p.id)?'★':'☆'} Favoritar</button>
      </div>
    </div>`;
  qs('#favBtn').addEventListener('click', ()=>{
    const on = toggleFav(p.id); qs('#favBtn').textContent=(on?'★':'☆')+' Favoritar';
  });
}
window.addEventListener('DOMContentLoaded', ()=>{
  const id = +getParam('id');
  render(PETS.find(p=>p.id===id));
});
