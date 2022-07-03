const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
  let nome = req.params.nome;
  let lang = req.params.lang;
  let exibirMensagem = false;
  res.render('index', {
    nome: nome,
    lang: lang,
    empresa: 'Guia do programador',
    inscritos: 8000,
    mensagem: exibirMensagem
  });
});

app.listen(8080, () => {
  console.log('App rodando.');
});