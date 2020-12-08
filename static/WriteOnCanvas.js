var image, imgData;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const LINE_WIDTH = 25;
const LINE_COLOR = '#000000';
const FILL_COLOR = '#ffffff';

ctx.lineWidth = LINE_WIDTH;
ctx.lineCap = 'round';
ctx.strokeStyle = LINE_COLOR;
ctx.fillStyle = FILL_COLOR;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.stroke();

let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishPosition() {
    painting = false;
    ctx.beginPath();

    // Getting Image Data
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function draw(e) {
    if (!painting) return;

    var currX = e.clientX - canvas.offsetParent.offsetLeft - canvas.offsetLeft;
    var currY = e.clientY - canvas.offsetParent.offsetTop - canvas.offsetTop;

    ctx.lineTo(currX, currY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(currX, currY);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishPosition);
canvas.addEventListener('mousemove', draw);
