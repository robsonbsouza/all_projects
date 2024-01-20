alert('******BEM VINDO AO SHOW DO MILHÃO******');

var iniciarJogo = confirm('Clique em OK para iniciar o jogo ou CANCELAR para encerrar.');

if (iniciarJogo == false) {
    alert('Jogo encerrado');
};

var resposta = prompt('Pergunta numero 1 \n\n Qual a cor do carro do Robson? \n\n 1-Azul \n 2-Vermelho \n 3-Prata \n 4-Verde ');
var correta = 3;

if (resposta == 3){
    alert('parabens');
    }else {
        alert('errado');
    };




