export default class Projectile{
    constructor(player){
        this.maxspeed = 5;
        this.speedY = 5;

        this.width = 5;
        this.height = 5;

        this.player = player;

        this.position = {
            x: this.player.position.x + this.player.width / 2,
            y: this.player.position.y
        };
    }
}