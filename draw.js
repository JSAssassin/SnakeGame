const canvas = document.querySelector(".canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;

var image = new Image();
image.src = './apple.png';

(function setup() {
    snake = createSnake();
    snake.draw();
    fruit = createFruit(image);
    fruit.draw();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.checkFruit(fruit);
        fruit.draw();
        snake.draw();
    }, 250);
}());

window.addEventListener('keydown', ((evt) => {
    console.log(evt);
    const direction = evt.key;
    console.log(direction);
    snake.changeDirection(direction);
}));


