export default class InputHandler{
    constructor(player, projectile_controller, start_button){
        document.addEventListener("keydown", event => { //keydown for player movement
            switch(event.keyCode){
                case 37:
                    player.moveLeft();
                    break;

                case 38:
                    player.moveUp();
                    break;

                case 39:
                    player.moveRight();
                    break;

                case 40:
                    player.moveDown();
                    break;

                case 65:
                    player.moveLeft();
                    break;

                case 87:
                    player.moveUp();
                    break;

                case 68:
                    player.moveRight();
                    break;

                case 83:
                    player.moveDown();
                    break;
            }
        });

        document.addEventListener("keydown", event => {
            switch(event.keyCode){
                case 80:
                    projectile_controller.shoot();
                    break;
                case 32:
                    projectile_controller.shoot();
                    break;
            }
        })

        document.addEventListener("keyup", event => { //keyup for player movement
            switch(event.keyCode){
                case 37:
                    if (player.Xspeed < 0){
                        player.stopX();
                    }
                    break;

                case 38:
                    if (player.Yspeed < 0){
                        player.stopY();
                    }
                    break;

                case 39:
                    if (player.Xspeed > 0){
                        player.stopX();
                    }
                    break;

                case 40:
                    if (player.Yspeed > 0){
                        player.stopY();
                    }
                    break;

                case 65:
                    if (player.Xspeed < 0){
                        player.stopX();
                    }
                    break;

                case 87:
                    if (player.Yspeed < 0){
                        player.stopY();
                    }
                    break;

                case 68:
                    if (player.Xspeed > 0){
                        player.stopX();
                    }
                    break;

                case 83:
                    if (player.Yspeed > 0){
                        player.stopY();
                    }
                    break;
            }
        });
    }
}