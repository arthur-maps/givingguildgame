export default class Lighting{


constructor(){

this.time=0;

}



update(){

this.time++;

}



draw(ctx,width,height){


let darkness =
(
Math.sin(this.time*.001)+1
)/2;


ctx.fillStyle=
`rgba(10,10,40,${darkness*.45})`;


ctx.fillRect(

0,
0,
width,
height

);


}


}
