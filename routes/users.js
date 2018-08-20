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
  /* let myReadStream = fs.createReadStream('lista-arquivo.txt', 'utf8'); */

  console.log(jsonBD);
  /* let vetor = [];
  myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    for(let i = 0; i < chunk.length; i++){
      if(chunk[i] == '\\' || chunk[i] == 'n' || chunk[i] == 'r'){
        continue
      }else{
        vetor.push(chunk[i]);
      }
    }
  }); */


  /* fs.open('lista-arquivo.txt', 'r', function(err, fd){
    if (err) throw err;
    else{
      fs.readFile('lista-arquivo.txt', 'utf8', function(err, data){
        if (err) throw err;
        else{
          let aux = []
          aux.push(data)
          console.log(aux);
        }
      });
      fs.close(fd, (err) =>{
        if (err) throw err;
      });
    }
  }); */
  res.render('index');
});

module.exports = router;
