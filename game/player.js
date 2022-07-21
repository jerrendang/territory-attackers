export default class Player{
    constructor(gameWidth, gameHeight) {
        this.width = 30;
        this.height = 30;
        
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }

        this.maxSpeed = 5;
        this.Xspeed = 0;
        this.Yspeed = 0;

        this.lives = 3;

        this.score = 0;
    }

    draw_lives(side_context){
        for (let x = 0; x < this.lives; x += 1){
            side_context.fillRect(0, 100 * x, 50, 50);
        };
    }

    draw(context) {
        //context.fillStyle = "black";
        //context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.beginPath();
        context.moveTo(this.position.x + (this.width / 2), this.position.y);
        context.lineTo(this.position.x + this.width, this.position.y + this.height);
        context.lineTo(this.position.x, this.position.y + this.height);
        context.stroke();

        context.fillStyle = "black";
        context.fill();
    }

    update(dt){
        if (!dt) {
            return
        };

        this.position.x += this.Xspeed;
        this.position.y += this.Yspeed;

        if (this.position.x <= 0){
            this.position.x = 0;
        }
        if (this.position.x >= this.gameWidth - this.width){
            this.position.x = this.gameWidth - this.width;
        }
        if (this.position.y <= 0){
            this.position.y = 0;
        }
        if (this.position.y >= this.gameHeight - this.height){
            this.position.y = this.gameHeight - this.height;
        }

    }

    moveLeft(){
        this.Xspeed = -this.maxSpeed;
    }

    moveUp(){
        this.Yspeed = -this.maxSpeed;
    }

    moveRight(){
        this.Xspeed = this.maxSpeed;
    }

    moveDown(){
        this.Yspeed = this.maxSpeed;
    }

    stopX(){
        this.Xspeed = 0;
    }

    stopY(){
        this.Yspeed = 0;
    }
}