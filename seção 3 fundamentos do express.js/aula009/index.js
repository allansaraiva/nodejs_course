const express = require('express');  // importando o express
const app = express();  // iniciando o express

app.get('/', function(req, res) {
  res.send('<h1>Bem-vindo ao meu site!</h1>');
});

app.get('/blog/:artigo?', function(req, res) {
  let artigo = req.params.artigo;

  if(artigo) {
    res.send(`<h2>Artigo: ${artigo}</h2>`);
  }else{
    res.send('<h3>Bem-vindo ao meu blog!</h3>');
  }
});

app.get('/canal/youtube', function(req, res) {
  res.send('<h1>Bem-vindo ao meu canal!</h1>');
});

app.get('/ola/:nome/:empresa', function(req, res) {
  let nome = req.params.nome;
  let empresa = req.params.empresa;
  res.send(`<h1>Olá, ${nome} da empresa ${empresa}</h1>`);
});

app.listen(4000, function(erro) {
  if(erro){
    console.log('Ocorreu algum erro!');
  }else{
    console.log('Servidor iniciado!')
  }
})
