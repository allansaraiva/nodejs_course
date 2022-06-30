const express = require('express');  // importando o express
const app = express();  // iniciando o express

app.listen(4000, function(erro) {
  if(erro){
    console.log('Ocorreu algum erro!');
  }else{
    console.log('Servidor iniciado!')
  }
})
