const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rect = canvas.getBoundingClientRect();
let desenhando = false;

canvas.addEventListener('mousedown', (event) => {
    //usei essa função pq minha linha n tava ficando em cima do mouse então peguei a posição relativa ao canvas, pq ele tava pegando a de janela
    desenhando = true;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    desenharRetangulo(mouseX, mouseY);
    desenharLinha(mouseX, mouseY);
});
// esse aqui limpa
canvas.addEventListener('mouseup', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenhando = false;
});

canvas.addEventListener('mousemove', (event) => {
    if (desenhando) {
        const rect = canvas.getBoundingClientRect();

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        desenharRetangulo(mouseX, mouseY);
        desenharLinha(mouseX, mouseY);
    }
});
canvas.addEventListener('mouseout', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenhando = false;
}   ); // coloquei esse pq o mouse saia docanvas e ai a forma ficava desenhada

function desenharRetangulo(x, y) {
    ctx.beginPath();
    //aqui fiz sem variavel mas fui testando msm para achar o tamanho correto
    ctx.rect(canvas.width / 2, canvas.height / 2, (-canvas.width / 2) + x, (-canvas.height / 2) + y);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
function desenharLinha(x, y) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

