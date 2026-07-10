import Player from "./player.js";
import Camera from "./camera.js";
import World from "./world.js";

const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const player=new Player();

const camera=new Camera();

const world=new World();

document.body.addEventListener("click",()=>{

document.getElementById("music").play();

},{once:true});

function animate(){

requestAnimationFrame(animate);

player.update();

camera.update(player);

ctx.clearRect(0,0,canvas.width,canvas.height);

world.draw(ctx,camera);

player.draw(ctx,camera);

}

animate();
