export default class Camera{


constructor(){

this.x=0;
this.y=0;

}



update(player){


let targetX =
player.x-innerWidth/2;


let targetY =
player.y-innerHeight/2;



this.x +=
(targetX-this.x)*0.08;


this.y +=
(targetY-this.y)*0.08;


}


}
