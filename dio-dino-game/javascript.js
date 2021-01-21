const dino = document.querySelector('.dino');
const background  = document.querySelector('.bg1');
let isJump = false;
let position = 80;

function keypressed(event){
    if (event.keyCode === 32){
        console.log('espaço precionado');
        if (!isJump){
            jump();
        }
    }
}

function jump(){
    
    isJump = true; // verifica se o pulo aconteceu

    let upInterval = setInterval(()=>{
        //codigo roda em loop a cada 20ms
        if(position >=230){
            clearInterval(upInterval); // limpa elemento ao atingir o position passado no if
            // decendo
            let downInterval = setInterval(()=>{
                if(position <= 80){
                    clearInterval(downInterval);
                    isJump = false;
                }else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 35);   

        }else{  
            //subindo
            position += 20; 
            dino.style.bottom = position + 'px';
        }
    }, 45);
}

// função cactus generated ------------------------------------------------------

function genCactus(){
    
    const cactus = document.createElement('div'); // cria um elemento do tipo div
    let cactusPosition = 1000; 
    let radomTime = Math.random()*6000; // gera um valor de 0 a 1 e mult/valor

    cactus.classList.add('cactus'); // adciona a classe html cactus
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus); // torna elemento passado no parametro filho da div bg1

    //------cod.block para cactus se mover pra esquerda------------------------------------------------------

    let leftInterval = setInterval(()=> { //arroweded , abstração do function

        if(cactusPosition <= -150){
            clearInterval(leftInterval); // limpa o elemento leftInterval
            background.removeChild(cactus); //cactus fora da tela?, remove filho cactus da div bg1, + desempenho no processamento.
       
        }else if(cactusPosition > 0 && cactusPosition < 230 && position < 90){
            //game over
            clearInterval(leftInterval); //limpa a tela
            document.body.innerHTML = '<h1 class = "game-over">FIM DE JOGO</h1>';

        }else { // caso n saia da tela, continue se movimentando cactus.
            cactusPosition -= 10; 
            cactus.style.left = cactusPosition + 'px'; // mude a posição da div cactus de acordo com valor de cactusPsition
        }
    },20);
    setTimeout(genCactus, radomTime); // usa valor da var randomTime e gera um genCactus, execulta função depois de certo tempo
}

genCactus();
// precionou uma tecla ---------------------------------------------
document.addEventListener('keyup', keypressed);
 