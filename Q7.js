var entrada = require('readline-sync');

var num = 0;
var qntImpar = 0;
var qntPar = 0;

for( var i = 0; i<10; i++){
    var numero = parseInt(entrada.question('Digite um numero: '));
    if(numero%2 ==0){
    qntPar++
    }else{
        qntImpar++
    }
    console.log(`A quantidade de numero impar é: {qntImpar} e a quantidade de numero par é: {qntPar}`);
}
