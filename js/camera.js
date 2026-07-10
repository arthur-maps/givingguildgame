export default class Camera{

constructor(){

this.x=0;
this.y=0;

}

update(player){

this.x=player.x-window.innerWidth/2;
this.y=player.y-window.innerHeight/2;

}

}
