import Player from "/game/player";

const canvas = document.getElementById("game-screen");
const context = canvas.getContext("2d");


const GAME_WIDTH = 450; //add 415 for coordinates
const GAME_HEIGHT = 720;

context.clearRect(0,0,450,720);

context.fillStyle = "black";
context.fillRect(0,0,100,100);

//let player = new Player(GAME_WIDTH, GAME_HEIGHT);

//player.draw(context);