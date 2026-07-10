export default class ParticleSystem{


constructor(){

this.particles=[];

}



spawn(x,y){

this.particles.push({

x,
y,

life:100,

speed:
Math.random()*1+.5

});


}



update(){


this.particles.forEach(p=>{

p.y-=p.speed;

p.life--;

});


this.particles =
this.particles.filter(
p=>p.life>0
);


}



draw(ctx,camera){


for(let p of this.particles){


ctx.globalAlpha=
p.life/100;


ctx.fillStyle="#ffe7a0";


ctx.fillRect(

p.x-camera.x,

p.y-camera.y,

3,
3

);


}


ctx.globalAlpha=1;


}

}
