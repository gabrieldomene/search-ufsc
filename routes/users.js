var express = require('express');
var fs = require('fs');
var router = express.Router();
var rawdata = fs.readFileSync('last_file.json');
var jsonBD = JSON.parse(rawdata);




router.post('/getNomeDisciplina', function(req, res, next) {
  
  res.write('OPÇÃO NÃO DISPONÍVEL');
  res.end();
});

router.post('/getIdDisciplina', function(req, res, next){
  var idDisc = req.body.IdDisciplina;
  idDisc = idDisc.toUpperCase();
  var arrayRes = [];
  for (let i = 0; i < jsonBD.relacao.length; i++)
  {
    if(jsonBD.relacao[i].disciplina == idDisc){
      if(arrayRes.indexOf(jsonBD.relacao[i].sala) === -1); //this should have done the 'MAGIC'
      {
        arrayRes.push(jsonBD.relacao[i].sala);
      }
    }
  }
  let new_array = Array.from(new Set(arrayRes));

  if(arrayRes.length > 0)
  {
    var condicao = 1;
    var condicao2 = 0;
    var resultado = new_array;
  }
  else{
    condicao2 = 1;
  }
  res.render('index', {condicao: condicao, condicao2 : condicao2, resultado : resultado, disciplina : idDisc});
});


module.exports = router;
