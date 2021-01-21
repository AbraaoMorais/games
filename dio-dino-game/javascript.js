const dino = document.querySelector('.dino');
function keypressed(event){
    if (event.keyCode === 32){
        console.log('espaço precionado');
        jump();
    }
}

function jump(){
    let position = 80;
    let upInterval = setInterval(()=>{
        //codigo roda em loop a cada 20ms
        position += 20; 
        if(position >=180){
            clearInterval(upInterval);
            // decendo
            let downInterval = setInterval(()=>{
                if(position <= 80){
                    clearInterval(downInterval);
                }
                position -= 20;
                dino.style.bottom = position + 'px';
            }, 20);   

        }else{  
            //subindo
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener('keyup', keypressed);
 