import Projectile from "./projectile";

export default class Projectile_Controller{
    projectiles = [];
    timerTillNextProjectile = 0;

    constructor(player){
        this.player = player;
    }

    draw(context, projectile){
        if (projectile.position.y <= 0){
            let index = this.projectiles.indexOf(projectile);
            this.projectiles.splice(index, 1);
        }
        else{
            context.fillStyle = "black";
            context.fillRect(projectile.position.x - projectile.width / 2, projectile.position.y, projectile.width, projectile.height);
        }
    }

    update(dt, projectile){
        if (!dt) return;

        projectile.position.y -= projectile.maxspeed;
    }

    shoot(){
        if (this.timerTillNextProjectile <= 0){
            this.projectiles.push(new Projectile(this.player));
        };
    }
    

}