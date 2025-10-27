function getParam(name){ return new URLSearchParams(location.search).get(name); }
function populate(){
  const sel = qs('#petSelecionado');
  sel.innerHTML = '<option value="">Selecione um pet</option>' + PETS.map(p=>`<option value="${p.id}">${p.nome} — ${p.especie}</option>`).join('');
  const fromQuery = getParam('pet'); if(fromQuery) sel.value = fromQuery;
}
function maskTel(v){ return v.replace(/\D/g,'').replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d{4}).*/,'$1-$2'); }
window.addEventListener('DOMContentLoaded', ()=>{
  populate();
  const f = qs('#adocaoForm');
  const tel = qs('#telefone'); tel.addEventListener('input', ()=> tel.value = maskTel(tel.value));
  f.addEventListener('submit', (e)=>{
    e.preventDefault();
    const dados = { petId:f.petSelecionado.value, nome:f.nome.value.trim(), email:f.email.value.trim(), telefone:f.telefone.value.trim(), mensagem:f.mensagem.value.trim() };
    if(Object.values(dados).some(v=>!v)){ alert('Preencha todos os campos.'); return; }
    console.log('Candidatura', dados);
    alert('Candidatura enviada! Em breve retornaremos.');
    f.reset();
  });
});
