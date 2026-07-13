export default class World{

constructor(){

this.width=4000;
this.height=4000;

}


draw(ctx,camera){

for(let y=0;y<this.terrain.rows;y++){

for(let x=0;x<this.terrain.cols;x++){

let tile=this.terrain.tiles[y][x];

let px=x*this.terrain.tileSize-camera.x;

let py=y*this.terrain.tileSize-camera.y;

switch(tile.variation){

case 0:

ctx.fillStyle="#5ea84e";
break;

case 1:

ctx.fillStyle="#63b251";
break;

case 2:

ctx.fillStyle="#5b9e4d";
break;

case 3:

ctx.fillStyle="#67b759";
break;

}

ctx.fillRect(

px,
py,

32,
32

);

if(tile.decoration=="flower"){

ctx.fillStyle="#ffd84f";

ctx.beginPath();

ctx.arc(

px+16,
py+16,

2,

0,

Math.PI*2

);

ctx.fill();

}

if(tile.decoration=="rock"){

ctx.fillStyle="#888";

ctx.beginPath();

ctx.arc(

px+18,
py+15,

4,

0,

Math.PI*2

);

ctx.fill();

}


}
  
// draw(ctx,camera){

// ctx.fillStyle="#3d7c42";

// ctx.fillRect(
// -camera.x,
// -camera.y,
// this.width,
// this.height
// );

// // simple paths

// ctx.fillStyle="#c49b5d";

// ctx.fillRect(
// 700-camera.x,
// 0-camera.y,
// 120,
// 4000
// );

// ctx.fillRect(
// 0-camera.x,
// 900-camera.y,
// 4000,
// 120
// );

// }
  
}
