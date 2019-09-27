
function createFruit(img) {
    return {
        x: Math.floor((Math.random() * rows - 1) + 1) * scale,
        y: Math.floor((Math.random() * columns - 1) + 1) * scale,
        draw: function () {
            console.log(`${this.x}, ${this.y}`);
            ctx.fillStyle = "#4ecc4c"
            // ctx.fillRect(this.x, this.y, scale, scale)
            ctx.drawImage(img,this.x,this.y,scale,scale);

        },

        randomFruit: function () {
            this.x = Math.floor((Math.random() * rows - 1) + 1) * scale;
            this.y = Math.floor((Math.random() * columns - 1) + 1) * scale;
        }
    };
}

