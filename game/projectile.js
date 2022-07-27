export default class Projectile{
    constructor(player){
        this.maxspeed = 5;
        this.speedY = 5;

        this.width = 15;
        this.height = 15;

        this.player = player;

        this.position = {
            x: this.player.position.x + player.width / 2,
            y: this.player.position.y
        };
    }
}