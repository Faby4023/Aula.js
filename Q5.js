var entrada = require('readline-sync');
var idade;
var somaIdades = 0;
var qntIdades = parseInt(entrada.question(`Digite a quantidade de idades que se pede:`));

for (var i=0; i<qntIdades;i++){
    idade = parseInt(entrada.question(`Digite a idade ${i+1}: `));
    somaIdades = somaIdades + idade;
}

var mediaIdades = (somaIdades/qntIdades).toFixed(0);
console.log(`A media das ${qntIdades} idades digitadas é: ${mediaIdades}`);
