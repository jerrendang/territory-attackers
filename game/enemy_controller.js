import Enemy from "./enemy";

export default class Enemy_Controller{
    constructor(GAME_WIDTH, GAME_HEIGHT){
        this.enemies = [];

        this.GAME_HEIGHT = GAME_HEIGHT;
        this.GAME_WIDTH = GAME_WIDTH;

        this.default_delay = 150;
        this.spawn_delay = 150;
    }

    draw(context, enemy, player, enemy_image){
        if (enemy.position.y >= this.GAME_HEIGHT){
            let index = this.enemies.indexOf(enemy);
            this.enemies.splice(index, 1);
            player.lives -= 1;
        }
        else{
            switch(enemy.health){
                case 3:
                    context.drawImage(
                        enemy_image,
                        130,
                        120,
                        670,
                        632,
                        enemy.position.x,
                        enemy.position.y,
                        enemy.width,
                        enemy.height
                    );
                    break;
                case 2:
                    context.drawImage(
                        enemy_image,
                        860,
                        120,
                        670,
                        632,
                        enemy.position.x,
                        enemy.position.y,
                        enemy.width,
                        enemy.height
                    );
                    break;
                case 1:
                    context.drawImage(
                        enemy_image,
                        1588,
                        120,
                        692,
                        632,
                        enemy.position.x,
                        enemy.position.y,
                        enemy.width,
                        enemy.height
                    );
            };
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
            if (this.default_delay != 50){
                this.default_delay -= 3;
            }
        }
        this.spawn_delay -= 1;
    }

    reset(){
        this.enemies = [];
        this.default_delay = 150;
        this.spawn_delay =150;
    }
}