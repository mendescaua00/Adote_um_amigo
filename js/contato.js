window.addEventListener('DOMContentLoaded', ()=>{
  const form = qs('#contatoForm');
  const bar = qs('#snackbar');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const dados = { nome:form.nome.value.trim(), email:form.email.value.trim(), assunto:form.assunto.value.trim(), mensagem:form.mensagem.value.trim() };
    if(Object.values(dados).some(v=>!v) || !dados.email.includes('@')){ alert('Confira os campos.'); return; }
    console.log('Contato', dados);
    bar.textContent = 'Mensagem enviada!'; bar.classList.add('show');
    setTimeout(()=> bar.classList.remove('show'), 2500);
    form.reset();
  });
});
