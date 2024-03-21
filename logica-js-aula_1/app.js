alert('Boas vindas ao jogo do número secreto');
let x = 10;
let numeroSecreto = parseInt(Math.random() * x + 1);
console.log('Número secreto');
let chute;
let tentativas = 1;


while (chute != numeroSecreto){
     chute = prompt('Escolha um número entre 1 e ' + x);
    
    if (chute == numeroSecreto) {
        break;
    }
    else {
        
    if (chute > numeroSecreto){
        alert('O número secreto é menor: ' + chute);
    }
    
        else {
           alert('O número secreto é maior: ' + chute);
        }
        tentativas++;
    }
    
}

let paravraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

alert('Isso ai! Você descobriu o número secreto! ' + numeroSecreto + ' com ' + tentativas + ' ' + paravraTentativas);

/* if(tentativas > 1){
alert('Isso ai! Você descobriu o número secreto! ' + numeroSecreto + ' com ' + tentativas + ' tentativas');

} else {
alert('Isso ai! Você descobriu o número secreto! ' + numeroSecreto + ' com ' + tentativas + ' tentativa');
}*/