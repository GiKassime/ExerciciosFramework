const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
//degini o tamanho do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//Retangulo
desenhaRetangulo();
//linha
desenhaLinha();
//circuloo
desenhaCirculo();

function desenhaCirculo() {
    ctx.beginPath();
    ctx.arc(400, 100, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}

function desenhaRetangulo() {
    ctx.beginPath();
    ctx.rect(150, 50, 200, 100);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}

function desenhaLinha() {
    ctx.beginPath();
    ctx.moveTo(500, 100);
    ctx.lineTo(800, 100);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();

}


