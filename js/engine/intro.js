export default class Intro {

    constructor(){

        this.active = true;
        this.timer = 0;

        this.duration = 9000;

    }


    update(){

        this.timer += 16;

        if(this.timer > this.duration){
            this.active=false;
        }

    }


    draw(ctx,width,height){

        if(!this.active) return;


        let progress=this.timer/this.duration;


        ctx.fillStyle="rgba(0,0,0,"+(1-progress)+")";

        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        ctx.fillStyle="white";

        ctx.textAlign="center";


        ctx.font="48px monospace";


        ctx.fillText(

            "Giving Guild",

            width/2,
            height/2

        );


        ctx.font="20px monospace";


        ctx.fillText(

            "Where generosity becomes adventure",

            width/2,
            height/2+50

        );

    }

}
