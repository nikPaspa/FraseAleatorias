var frase = document.getElementById('frase');
var fraseAl = ['Surf é uma inveção do governo para vender caderno!', 
                    'Quem não conhece a sí mesmo não conhece a sí próprio!', 
                    'Minha irmã tá grávida! Mal posso esperar para saber se vou ser tio ou tia!', 
                    'Há batalhas que só se ganham ganhando!', 
                    'Feliz é aquele que não é triste!'];

function gerarFrase() {
  var i = Math.floor((Math.random() * fraseAl.length));
           frase.innerText = fraseAl[i];
}

gerarFrase();