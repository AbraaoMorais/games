
// aula-curso-dio : Recriado o jogo do dino do chrome
//tutor: Celso
//Implementação: Abraão Morais 

const dino = document.querySelector('.dino');
const background  = document.querySelector('.bg1');
let isJump = false;
let position = 80;
let dinoVivo = true;  // dino ta vivo?
var audio = new Audio('aud/inGame.mp3');
var audioJump = new Audio('aud/jump.mp3');

//document.getElementById('inGameAudio').autoplay = true;
//document.getElementById('inGameAudio').muted = true;
//document.getElementById('inGameAudio').play();

window.onload = function(){    
        audio.play()
}

function startPlay(){  // recarrega pagina ao aperta play
    window.location.reload();
    
}

function stopJumpAudio(){ //função zerar audio
    audioJump.pause();
    audioJump.currentTime = 0;
}
//-------------------------------------------------------------   AUDIO DO PULO AINDA REPRODUZ DEPOIS DE MORTO

function keypressed(event){
    if (event.keyCode === 32){
    
        
        console.log('espaço precionado');
        if (!isJump){
            jump();    
        }
    }
}

function jump(){
    audioJump.play();

    isJump = true; // verifica se o pulo aconteceu
    divoVivo = true;
    let upInterval = setInterval(()=>{
        //codigo roda em loop a cada 20ms
        if(position >=230){
            clearInterval(upInterval); // limpa elemento ao atingir o position passado no if
          
            // decendo
            let downInterval = setInterval(()=>{
                if(position <= 80){
                    clearInterval(downInterval);
                    isJump = false;
                    stopJumpAudio();// chama essa função pra zerar o audio
                }else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 25);   

        }else{  
            //subindo
            position += 20; 
            dino.style.bottom = position + 'px';
        }
    }, 35);
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

    let leftInterval = setInterval(()=> {

        if(cactusPosition <= -150){
            clearInterval(leftInterval); 
            background.removeChild(cactus); //cactus fora da tela?, remove filho cactus da div bg1, + desempenho no processamento.
        }else if(cactusPosition > 0 && cactusPosition < 180 && position < 100){
            //GAME OVER  ----------------------------------------------------------------------------------------
            clearInterval(leftInterval); //limpa a tela
            document.body.innerHTML = '<h1 id="gameOver" class = "game-over">FIM DE JOGO</h1>    <button type = "button"  id="start" class = "botaoPlay" onclick="startPlay();">PLAY</button>   <button type = "button" class = "botaoCredit" onclick="startPlay">CREDITS</button>';
        
            dinoVivo = false; // dinoVivo morreu.
            console.log(dinoVivo);
            audio.pause();

        }else { // caso n saia da tela, continue se movimentando cactus.
            cactusPosition -= 15; 
            cactus.style.left = cactusPosition + 'px'; // mude a posição da div cactus de acordo com valor de cactusPsition
        }
    },20);
    setTimeout(genCactus, radomTime);
}

genCactus();
// precionou uma tecla ---------------------------------------------
document.addEventListener('keydown', keypressed);

 
//------------ invocar audio -----------

