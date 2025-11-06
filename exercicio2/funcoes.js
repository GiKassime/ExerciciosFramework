const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
//degini o tamanho do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let retangulo = {
    x: 20,
    y: 40,
    dx: 2,
    dy: 2,
    color: "green"
};


function desenharRetangulo() {
    ctx.beginPath();
    ctx.rect(retangulo.dx, retangulo.dy, retangulo.x, retangulo.y);
    ctx.fillStyle = retangulo.color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}

function atualizaPosicaoRetangulo(){
    retangulo.x += retangulo.dx; 
    retangulo.y += retangulo.dy;    
    
    if(retangulo.x > canvas.width || retangulo.x  < 0){
        retangulo.dx = -retangulo.dx;
    }
    
    if(retangulo.y  > canvas.height || retangulo.y  < 0){
        retangulo.dy = -retangulo.dy;
    }
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    atualizaPosicaoRetangulo();
    desenharRetangulo();
    requestAnimationFrame(animate); 
} 

animate();

