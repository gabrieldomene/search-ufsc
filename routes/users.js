var express = require('express');
var router = express.Router();

router.post('/getNomeDisciplina', function(req, res, next) {
  let nomeDisc = req.body.nomeDisciplina;
  console.log(nomeDisc);
  res.write('SALA BUSCADA PELO NOME');
  res.end();
});

router.post('/getIdDisciplina', function(req, res, next){
  let idDisc = req.body.IdDisciplina;
  console.log(idDisc);
  res.write('SALA BUSCADA PELO ID');
  res.end();
});

module.exports = router;
