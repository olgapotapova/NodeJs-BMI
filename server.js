const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    console.log(request.body);
    let kaal =Number(request.body.kaal);
    let pikkus =Number(request.body.pikkus);
    let result = Math.round(kaal /(pikkus * pikkus));
    let message;
    let mes;
   
    if ((kaal <= 35) || (kaal >= 500) || (pikkus <= 0.48) || (pikkus >= 12.0)) {
        mes = "Kas te olete kindel, et andmed on realsed?";
    } else {
        mes = ""
    };
    if (result < 19) {
        message = "Alakaal!";
    } else if (result >= 19 && result <= 24.9) {
        message = "Normaalkaal!";
    } else if (result >= 25 && result <= 29.9) {
        message = "Ulekaal!";
    } else if (result > 30) {
        message = "Rasvumine!"
    } else {
        message = "Viga!"
    };
    
    console.log(`${kaal} / (${pikkus}*${pikkus}) = ${result}` + `<br \/>` + `${message}` + `<br \/>`+ `${mes}`);
    response.send(`${kaal} / (${pikkus}*${pikkus}) = ${result}` + `<br \/>` + `${message}` + `<br \/>` + `${mes}`);
   
  
})

app.listen(3000,function (){
    console.log('Server is running on Port 3000');
});