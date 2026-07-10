import {keys} from "./input.js";

export default class Player{

constructor(){

this.x=600;
this.y=400;

this.speed=3;

this.size=32;

}

update(){

if(keys["w"]||keys["ArrowUp"]) this.y-=this.speed;
if(keys["s"]||keys["ArrowDown"]) this.y+=this.speed;
if(keys["a"]||keys["ArrowLeft"]) this.x-=this.speed;
if(keys["d"]||keys["ArrowRight"]) this.x+=this.speed;

}

draw(ctx,camera){

ctx.fillStyle="#FFD94A";

ctx.fillRect(

this.x-camera.x,

this.y-camera.y,

this.size,

this.size

);

}

}
