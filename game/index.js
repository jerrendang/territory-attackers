import Player from "./player";
import InputHandler from "./input";
import Projectile_Controller from "./projectile_controller";
import Enemy_Controller from "./enemy_controller";
import Collision_Controller from "./collision_controller";

const canvas = document.getElementById("game_screen");
const context = canvas.getContext("2d");

const start_button = document.getElementById("button");
const start_button_label = document.getElementById("b_label");

const side_screen = document.getElementById("side_screen");
const side_context = side_screen.getContext("2d");

const controls = document.getElementById("control_pics");
const control_context = controls.getContext("2d");

const SIDE_WIDTH = 400;
const SIDE_HEIGHT = 150;

// images
const projectile_img = new Image();
projectile_img.src = "game/assets/images/projectile.png";

const player_img = new Image();
player_img.src = "game/assets/images/person.png";

const background_image = new Image();
background_image.src = "game/assets/images/tileset.png";

const lose_message = new Image();
lose_message.src = "game/assets/images/lose_message.png";

const control_pics = new Image();
control_pics.src = "game/assets/images/controls.png";

const enemies_pics = new Image();
enemies_pics.src = "game/assets/images/enemies.png";
// images

const GAME_WIDTH = 450; //add 415 for coordinates
const GAME_HEIGHT = 720;

let player = new Player(GAME_WIDTH, GAME_HEIGHT);

let projectile_controller = new Projectile_Controller(player);

let enemy_controller = new Enemy_Controller(GAME_WIDTH, GAME_HEIGHT);

let collision_controller = new Collision_Controller(projectile_controller, enemy_controller);

//player.draw(context, player_img);

let last_time = 0;

function game_loop(time_stamp){
    let delta_time = time_stamp - last_time;
    last_time = time_stamp;

    if (player.lives == 0){
        side_context.clearRect(0,0,SIDE_WIDTH,SIDE_HEIGHT);
        side_context.fillText("Score:", 0, SIDE_HEIGHT / 2);
        side_context.fillText(player.score, 0, SIDE_HEIGHT / 2 + 30);
        context.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT);
        context.drawImage(lose_message,
                            490, //image position x
                            580, //image position y
                            1295, // image width
                            195, // image height
                            0,
                            GAME_HEIGHT / 2 - 100,
                            431,
                            65);
        start_button_label.style = "display: block; margin-top: 10vh; margin-left: 4vw;";
        start_button_label.innerHTML = 
        "<img src='game/assets/images/again_image.png' alt='no pic' id='image' style='height: 161px; width: 182px;'>";
        
        return;
    }

    control_context.drawImage(control_pics, //draws controls
        150,
        230,
        1415,
        580,
        0,
        0,
        353,
        145);

    context.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    side_context.clearRect(0, 0, SIDE_WIDTH, SIDE_HEIGHT);

    side_context.fillStyle = "white";

    side_context.font = "20px Arial";
    side_context.fillText("Lives", 0, 20, 100);

    side_context.font = "30px Arial";
    side_context.fillText(player.score, 0, 150, 100);

    player.update(delta_time);
    player.draw(context, player_img);
    player.draw_lives(side_context, player_img);

    enemy_controller.spawn();
    enemy_controller.enemies.forEach(enemy => {
        enemy_controller.draw(context, enemy, player, enemies_pics);
        enemy_controller.update(delta_time, enemy);
    });

    

    projectile_controller.projectiles.forEach(projectile => {
        projectile_controller.draw(context, projectile, projectile_img);
        projectile_controller.update(delta_time, projectile)
    });

    collision_controller.enemy_projectile_collision(player);

    requestAnimationFrame(game_loop);
    
}

new InputHandler(player, projectile_controller, start_button);


start_button.addEventListener("click", (e) => {
    start_button_label.style = "display: none";
    player.reset();
    enemy_controller.reset();
    projectile_controller.reset();
    player.draw(context, player_img);
    game_loop();
});