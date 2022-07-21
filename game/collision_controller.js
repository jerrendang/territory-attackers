export default class Collision_Controller{
    constructor(projectile_controller, enemy_controller){
        this.projectile_controller = projectile_controller;
        this.enemy_controller = enemy_controller;
    }

    enemy_projectile_collision(player){
        this.projectile_controller.projectiles.forEach(projectile => {
            this.enemy_controller.enemies.forEach(enemy => {
                if (projectile.position.y <= enemy.position.y + enemy.height && projectile.position.x + projectile.width >= enemy.position.x 
                    && projectile.position.x <= enemy.position.x + enemy.width){
                    
                    let projectile_index = this.projectile_controller.projectiles.indexOf(projectile);
                    let enemy_index = this.enemy_controller.enemies.indexOf(enemy);
                    
                    if (enemy.health == 1){
                        player.score += 100;

                        this.projectile_controller.projectiles.splice(projectile_index, 1);
                        this.enemy_controller.enemies.splice(enemy_index, 1);
                    }
                    else{
                        enemy.health -= 1;
                        this.projectile_controller.projectiles.splice(projectile_index, 1);
                    }
                }
            })
        })
    }
}