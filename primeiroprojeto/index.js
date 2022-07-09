const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const pergunta = require('./database/Pergunta');

connection
  .authenticate()
  .then(() => {
    console.log('conexão feita com o bando de dados!')
  })
  .catch((msgErro) => {
    console.log(msgErro);
  })

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  pergunta.findAll({raw: true, order: [
    ['id', 'DESC']
  ]}).then(perguntas => {
    res.render('index', {
      perguntas: perguntas,
      
    });
  });
  
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect('/');
  })
});

app.get('/pergunta/:id', (req, res) => {
  let id = req.params.id;
  pergunta.findOne({
    where: {id: id}
  }).then((pergunta) => {
    if (pergunta !== undefined) {
      res.render('pergunta', {
        pergunta: pergunta
      });
    }else {
      res.redirect('/');
    }
  })
})

app.listen(8080, () => {console.log('App rodando.');});