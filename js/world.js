export default class World{

constructor(){

this.width=4000;
this.height=4000;

}

draw(ctx,camera){

ctx.fillStyle="#3d7c42";

ctx.fillRect(
-camera.x,
-camera.y,
this.width,
this.height
);

// simple paths

ctx.fillStyle="#c49b5d";

ctx.fillRect(
700-camera.x,
0-camera.y,
120,
4000
);

ctx.fillRect(
0-camera.x,
900-camera.y,
4000,
120
);

}
}
