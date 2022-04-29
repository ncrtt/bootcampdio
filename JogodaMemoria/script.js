let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde 1 = vermelho 2 = amarelo 3 = azul
//seleciona classes css
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
// cria ordem aleatória
let shuffleOrder = () => {
    let ColorOrder = Math.floor(Math.random() * 4); //atribui a randomização das cores 
    order[order.length] = ColorOrder; //índice do array com a cor
    clickedOrder = [];

    for(let i in order){
        let ElementColor = createColorElement(order[i]); //indice do array da variavel
        lightColor(ElementColor, Number(i) + 1);

    }
}
//cria função lightcolor que acende a cor com os tempos que ficarao acesos

let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    },number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');

    });
}
// verifica se o que foi clicado é igual o que acendeu
let checkOrder = () =>{
    for (let i in clickedOrder){
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        } 
       }
       if (clickedOrder.length == order.length){
           alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
           nextLevel();
       }
}

//função para o click do usuario
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('Selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('Selected');
        checkOrder();
    },250);
    

}

//criar a função que retorna a color
let createColorElement = (color) =>{
    if(color == 0){
        return green;        
    }
    else if (color == 1){
        return red;
        
    }else if (color == 2){
        return yellow;

    }else if (color == 3){
        return blue;
    }

}
//função para proximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função caso tenha perdido o jogo
let gameOver = () => {
    alert (`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para reiniciar`);
    order = [];
    clickedOrder = [];
    playGame();

}
let playGame = () => {
    alert('Bem vindo ao Genesis, iniciando novo jogo!');
    score = 0;
    nextLevel();
}

//ativa cliques
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
//eventodeclique
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//rodar pela primeira vez
playGame();

