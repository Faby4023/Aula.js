var entrada = require('readline-sync');

for( var i = 0; i<=10; i++){
var numero = parseInt(entrada.question('Digite um numero: '));
if(i%2 ==0){
    console.log(`O numero é par ${i}`);
}else{
    console.log(`O numero é ímpar ${i}`);
}
}