window.addEventListener('DOMContentLoaded', ()=>{
  const gal = qs('#galeria');
  gal.innerHTML = PETS.map(p=>`<article class="card"><a class="media" href="${p.foto}" target="_blank"><img src="${p.foto}" alt="${p.nome}"></a><div class="body"><h3>${p.nome}</h3></div></article>`).join('');
});
