export default class Sky {


constructor(){

this.stars=[];


for(let i=0;i<150;i++){

this.stars.push({

x:Math.random(),

y:Math.random(),

size:
Math.random()*2+1,

phase:
Math.random()*Math.PI*2

});

}

}



draw(ctx,width,height,time){


let gradient =
ctx.createLinearGradient(
0,
0,
0,
height
);


gradient.addColorStop(
0,
"#05051c"
);


gradient.addColorStop(
1,
"#182c45"
);


ctx.fillStyle=gradient;

ctx.fillRect(
0,
0,
width,
height
);



for(let star of this.stars){


let glow =
Math.sin(
time*.003+
star.phase
);


ctx.globalAlpha =
0.5+glow*.5;


ctx.fillStyle="white";


ctx.fillRect(

star.x*width,

star.y*height,

star.size,

star.size

);


}


ctx.globalAlpha=1;


}


}
