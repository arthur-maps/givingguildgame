import Player from "./player.js";
import Camera from "./camera.js";

import World from "./world/world.js";
import Sky from "./world/sky.js";

import Intro from "./engine/intro.js";
import Particles from "./engine/particles.js";
import Lighting from "./engine/lighting.js";


const canvas =
document.getElementById("game");


const ctx =
canvas.getContext("2d");


function resize(){

canvas.width=innerWidth;
canvas.height=innerHeight;

}

resize();

window.onresize=resize;



const player =
new Player();


const camera =
new Camera();


const world =
new World();


const sky =
new Sky();


const intro =
new Intro();


const particles =
new Particles();


const lighting =
new Lighting();



let time=0;



function loop(){


requestAnimationFrame(loop);


time++;



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



sky.draw(
ctx,
canvas.width,
canvas.height,
time
);



player.update();


camera.update(player);



world.draw(
ctx,
camera
);



particles.update();

particles.draw(
ctx,
camera
);



lighting.update();


lighting.draw(
ctx,
canvas.width,
canvas.height
);



intro.update();


intro.draw(
ctx,
canvas.width,
canvas.height
);


}



loop();
