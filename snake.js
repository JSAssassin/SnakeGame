function createSnake() {
    return {
        x: 0,
        y: 0,
        xSpeed: scale * 1,
        ySpeed: 0,
        totalFruitEaten : 0,
        tail:[],

        draw: function () {
            ctx.fillStyle = "#FFFFFF";
            for(let i = 0; i < this.tail.length; i++) {
                ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
            }
            ctx.fillRect(this.x, this.y, scale, scale)
        },

        update: function () {
            for(let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i+1];
            }

            this.tail[this.totalFruitEaten -1] = {x : this.x, y : this.y}
            let newX = this.x + this.xSpeed;

            if (newX > canvas.width) {
                newX = 0;
            }

            if(newX < 0) {
                newX = canvas.width;
            }

            let newY = this.y + this.ySpeed;
            if (newY > canvas.height) {
                newY = 0;
            }

            if(newY < 0) {
                newY = canvas.height;
            }

            this.x = newX;
            this.y = newY;
        },

        changeDirection: function (direction) {
            switch (direction) {
                case 'ArrowUp':
                    this.xSpeed = 0;
                    this.ySpeed = scale * -1;
                    break;
                case 'ArrowDown':
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                    break;
                case 'ArrowRight':
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                    break;
                case 'ArrowLeft':
                    this.xSpeed = scale * -1;
                    this.ySpeed = 0;
                    break;
            }
        },

        checkFruit: function(fruit) {
            if(this.x === fruit.x && this.y === fruit.y) {
                this.totalFruitEaten++;
                fruit.randomFruit();
            }
        }

    }
}
