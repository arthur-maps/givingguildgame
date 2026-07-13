export default class Tile {

    constructor(type){

        this.type = type;

        this.variation = Math.floor(Math.random()*4);

        this.decoration = null;

        if(type=="grass" && Math.random()<0.03)
            this.decoration="flower";

        if(type=="grass" && Math.random()<0.02)
            this.decoration="rock";

        // NEW

        this.noise=[];

        for(let y=0;y<8;y++){

            this.noise[y]=[];

            for(let x=0;x<8;x++){

                this.noise[y][x]=Math.floor(Math.random()*4);

            }

        }

    }

}
