const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

// círculo 
let circle = {
    x: 200,
    y: 200,
    radius: 25,
    color: "blue",
    speed: 5
};

function desenhaCirculo(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = circle.color;
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}

function moveCircle(event){
    const key = event.key;

    if(key === "ArrowUp" && circle.y - circle.radius > 0){
        circle.y -= circle.speed;
    } else if(key === "ArrowDown" && circle.y + circle.radius < canvas.height){
        circle.y += circle.speed;
    } else if(key === "ArrowLeft" && circle.x - circle.radius > 0){
        circle.x -= circle.speed;
    } else if(key === "ArrowRight" && circle.x + circle.radius < canvas.width){
        circle.x += circle.speed;
    }

    desenhaCirculo();
}

window.addEventListener('keydown', moveCircle);
desenhaCirculo();

