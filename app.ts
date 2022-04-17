const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
//? type narrowing : https://youtu.be/iZjfnoF784k (애플코딩)

let x = canvas.width / 2;
let y = canvas.height - 30;
let ballRadius = 10;
let dx = 2;
let dy = -2;

function drawBall(x: number, y: number, ballRadius: number) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(x, y, ballRadius);
  x += dx;
  y += dy;
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx = -dx;
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) dy = -dy;
}

setInterval(draw, 10);
