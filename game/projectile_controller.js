import Projectile from "./projectile";

export default class Projectile_Controller{
    projectiles = [];
    timerTillNextProjectile = 100;
    isShooting = false;


    constructor(player){
        this.player = player;
        setInterval(() => {
            this.shoot();
            if (this.timerTillNextProjectile <= 0) {
                this.timerTillNextProjectile = 100
            } else {
                this.timerTillNextProjectile -= 10;
            }
        }, 20);
    }

    draw(context, projectile, projectile_image){
        if (projectile.position.y <= 0){
            let index = this.projectiles.indexOf(projectile);
            this.projectiles.splice(index, 1);
        }
        else{
            //context.fillStyle = "white";
            //context.fillRect(projectile.position.x - projectile.width / 2, projectile.position.y, projectile.width, projectile.height);
            let image_width = 550;
            let image_height = 570;

            context.drawImage(
                projectile_image,
                0,
                0,
                image_width,
                image_height,
                projectile.position.x - projectile.width / 2,
                projectile.position.y,
                projectile.width, 
                projectile.height
                );
        }
    }

    update = (dt, projectile) => {
        if (!dt) return;

        projectile.position.y -= projectile.maxspeed;
    }

    toggleShootingOn = () => {
        this.isShooting = true;
    }

    toggleShootingOff = () => {
        this.isShooting = false;
    }

    shoot = () => {
        if (this.isShooting && this.timerTillNextProjectile <= 0){
            this.projectiles.push(new Projectile(this.player));
        }
    }
    
    reset = () => {
        this.projectiles = [];
        this.timerTillNextProjectile = 0;
    }
}