export default class Player {

constructor(){

this.x=600;
this.y=400;

this.speed=2.5;

this.width=32;
this.height=32;


this.direction="down";

this.frame=0;

this.frameTimer=0;


this.sprite=new Image();

this.sprite.src=
"assets/sprites/player.png";

}



update(keys){


let moving=false;



if(keys["w"] || keys["ArrowUp"]){

this.y-=this.speed;

this.direction="up";

moving=true;

}



if(keys["s"] || keys["ArrowDown"]){

this.y+=this.speed;

this.direction="down";

moving=true;

}



if(keys["a"] || keys["ArrowLeft"]){

this.x-=this.speed;

this.direction="left";

moving=true;

}



if(keys["d"] || keys["ArrowRight"]){

this.x+=this.speed;

this.direction="right";

moving=true;

}



if(moving){

this.frameTimer++;


if(this.frameTimer>10){

this.frame++;

this.frameTimer=0;

}


}

else{

this.frame=0;

}



}




draw(ctx,camera){


let row;


switch(this.direction){

case "down":
row=0;
break;

case "left":
row=1;
break;

case "right":
row=2;
break;

case "up":
row=3;
break;

}



ctx.drawImage(

this.sprite,


this.frame*32,
row*32,

32,
32,


this.x-camera.x,
this.y-camera.y,

32,
32

);


}



}
