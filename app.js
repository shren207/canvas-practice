"use strict";
//? [잘못된 방식 1]
// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
//* 여기서 왜 에러가 나나면 ctx가 union 타입이기 때문이다. (HTMLElement | null)
//* tsconfig.json에서 strict 옵션은 strictNullChecks라는 옵션을 포함하고 있는데,
//* 이 값이 true면 모든 type에서 null과 undefined가 제거된다.
//* getElement, querySelector는 해당 엘리먼트가 없는 경우 null을 반환하기 때문에.
//* ctx는 HTMLElement일 수도 있고, null일 수도 있다.
//* 즉, null일 가능성이 있기 때문에 에러가 발생한다.
//? [잘못된 방식 2]
// const canvas = document.getElementById("myCanvas") as HTMLCanvasElement
// let ctx;
// if (canvas !== null) {
//   ctx = canvas.getContext("2d");
// }
//* getContext는 HTMLCanvasElement여야만 사용 가능.
//* getElement 또는 querySelector는 HTMLElement 또는 null만 리턴.
//* 따라서 HTMLCanvasElement라고 명시해줄 필요가 있음.
//todo [옳은 방식]
const canvas = document.getElementById("myCanvas");
// const canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
// 위의 2개의 코드는 전부 타입사기 치는것.
const ctx = canvas.getContext("2d");
//* 캔버스 위에 그리는 특정 요소 1개는 전부 beginPath()로 시작해서 closePath()로 끝나야 한다.
ctx.beginPath();
ctx.rect(20, 40, 50, 50); // 사각형은 rect()
ctx.fillStyle = "#FF0000"; // 칠할 색깔
ctx.fill(); // 칠하기
ctx.closePath();
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false); // 원은 arc()
ctx.fillStyle = "green"; // 칠할 색깔
ctx.fill(); // 칠하기
ctx.closePath();
