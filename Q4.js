var entrada = require('readline-sync');
var escolha;

while(escolha!='N'){
    escolha = entrada.question('Escolha uma opcao (S/N): ').toUpperCase();
    if(escolha=='S'){
        console.log('Você decidiu continuar!');
    } else if(escolha=='N'){
        console.log('Você saiu!');
    } else{
        console.log('Você digitou uma escolha inválida, digite uma valida (S/N')
    }
}