import Player from "./player";
import InputHandler from "./input";
import Projectile_Controller from "./projectile_controller";
import Enemy_Controller from "./enemy_controller";
import Collision_Controller from "./collision_controller";

const canvas = document.getElementById("game-screen");
const context = canvas.getContext("2d");

const side_screen = document.getElementById("side_screen");
const side_context = side_screen.getContext("2d");

const SIDE_WIDTH = 400;
const SIDE_HEIGHT = 100;

const GAME_WIDTH = 450; //add 415 for coordinates
const GAME_HEIGHT = 720;

let player = new Player(GAME_WIDTH, GAME_HEIGHT);

let projectile_controller = new Projectile_Controller(player);

let enemy_controller = new Enemy_Controller(GAME_WIDTH, GAME_HEIGHT);

let collision_controller = new Collision_Controller(projectile_controller, enemy_controller);

player.draw(context);

let last_time = 0;

function game_loop(time_stamp){
    let delta_time = time_stamp - last_time;
    last_time = time_stamp;

    if (player.lives == 0){
        return;
    }

    context.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    side_context.clearRect(0, 0, 100, 400);
    side_context.fillText(player.score, 0, 300);

    player.update(delta_time);
    player.draw(context);
    player.draw_lives(side_context);

    enemy_controller.spawn();
    enemy_controller.enemies.forEach(enemy => {
        enemy_controller.draw(context, enemy, player);
        enemy_controller.update(delta_time, enemy);
    });

    projectile_controller.projectiles.forEach(projectile => {
        projectile_controller.draw(context, projectile);
        projectile_controller.update(delta_time, projectile)
    });

    collision_controller.enemy_projectile_collision(player);

    requestAnimationFrame(game_loop);
    
}

new InputHandler(player, projectile_controller);

game_loop();

