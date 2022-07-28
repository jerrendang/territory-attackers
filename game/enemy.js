export default class Enemy{
    constructor(GAME_WIDTH){
        this.health = 3;


        this.tempx = Math.floor(Math.random() * GAME_WIDTH);
        if (this.tempx > GAME_WIDTH - this.width){
            tempx = GAME_WIDTH - this.width;
        };

        this.position = {
            x: this.tempx,
            y: 0,
        }

        this.height = 30;
        this.width = 30;

        this.speedY = 2;
    }


}