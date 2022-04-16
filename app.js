"use strict";
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//? type narrowing : https://youtu.be/iZjfnoF784k (애플코딩)
let x = canvas.width / 2;
let y = canvas.width - 30;
const dx = 2;
const dy = -2;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 추가된 코드
    // clearRect() : 좌표로 표시된 사각형 내부에 그려진 모든 것을 지운다.
    drawBall();
    x += dx;
    y += dy;
}
setInterval(draw, 10);
