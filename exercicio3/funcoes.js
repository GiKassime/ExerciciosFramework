const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//config bola
canvas.width = 500;
canvas.height = 500;
let square = {
    x: 200,
    y: 200,
    radius: 50,
    color: "blue",
    speed: 5
};

// função parar desenhar  bola 

function drawSquare(){
    ctx.beginPath();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = square.color;
    ctx.clearRect(square.x,square.y, square.size, square.size);
    ctx.closePath();

}
function moveSquare(event){
    const key = event.key;
    
    if(key === "ArrowUp" && square.y > 0){
        square.y -= square.speed;
    }else if(key === "ArrowDown" && square.y + square.size < canvas.height){
        square.y += square.speed;
    }else if(key === "ArrowLeft" && square.x > 0){
        square.x -= square.speed;
    }else if(key === "ArrowRight" && square.x +square.size < canvas.height){
        square.x += square.speed;
    }
    
    drawSquare();
}

window.addEventListener('keydown', moveSquare);
drawSquare();

