var entrada = require('readline-sync');
var escolha;
var num = 6

while(escolha !=num){
    escolha = entrada.question('Advinhe o numero: ');
    if(escolha==num){
        console.log(`Você acertou: `);
    }else{
        console.log('Você não acertou, tente novamente:')
    }
}