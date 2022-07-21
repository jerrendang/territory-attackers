import Enemy from "./enemy";

export default class Enemy_Controller{
    constructor(GAME_WIDTH, GAME_HEIGHT){
        this.enemies = [];

        this.GAME_HEIGHT = GAME_HEIGHT;
        this.GAME_WIDTH = GAME_WIDTH;

        this.default_delay = 90;
        this.spawn_delay = 90;
    }

    draw(context, enemy, player){
        if (enemy.position.y >= this.GAME_HEIGHT){
            let index = this.enemies.indexOf(enemy);
            this.enemies.splice(index, 1);
            player.lives -= 1;
        }
        else{
            switch(enemy.health){
                case 4:
                    context.fillStyle = "green";
                    break;
                case 3:
                    context.fillStyle = "yellow";
                    break;
                case 2:
                    context.fillStyle = "orange";
                    break;
                case 1:
                    context.fillStyle = "red";
            }
            context.fillRect(enemy.position.x, enemy.position.y, enemy.width, enemy.height);
        }   


    }

    update(dt, enemy){
        if (!dt) return;

        enemy.position.y += enemy.speedY;
    }

    spawn(){
        if (this.spawn_delay == 0){
            this.enemies.push(new Enemy(this.GAME_WIDTH));
            this.spawn_delay = this.default_delay;
        }
        this.spawn_delay -= 1;
    }
}