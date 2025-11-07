const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
//degini o tamanho do canvas
canvas.width = 500;
canvas.height = 500;
canvas.style.border = "1px solid black";


let retangulo = {
    x: 20,
    y: 40,
    dx: 2,
    dy: 2, //coloquei aqui pq no incio entendei q era pra mover vertical e horizontal ai dps li e vi que é só horizontal
    width: 80,
    height: 50,
    color: "green"
};


function desenharRetangulo() {
    ctx.beginPath();
    // desenha usando x,y como posição e width/height como dimensões
    ctx.rect(retangulo.x, retangulo.y, retangulo.width, retangulo.height);
    ctx.fillStyle = retangulo.color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}

function atualizaPosicaoRetangulo(){
    retangulo.x += retangulo.dx; 
   // retangulo.y += retangulo.dy;    
    if(retangulo.x + retangulo.width > canvas.width || retangulo.x < 0){
        retangulo.dx = -retangulo.dx;
      
    }
    //deixei comentado pq no enunciado só fala de mover horizontalmente
   // if(retangulo.y + retangulo.height > canvas.height || retangulo.y < 0){
    //    retangulo.dy = -retangulo.dy;
   // }
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    atualizaPosicaoRetangulo();
    desenharRetangulo();
    requestAnimationFrame(animate); 
} 

animate();

