export default class Tile{

    constructor(type){

        this.type = type;

        this.variation = Math.floor(Math.random()*4);

        this.decoration = null;

        // 3% flowers

        if(type=="grass" && Math.random()<0.03){

            this.decoration="flower";

        }

        // 2% rocks

        if(type=="grass" && Math.random()<0.02){

            this.decoration="rock";

        }

    }

}
