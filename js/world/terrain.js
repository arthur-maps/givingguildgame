import Tile from "./tile.js";

export default class Terrain{

    constructor(width,height){

        this.tileSize=32;

        this.cols=Math.ceil(width/this.tileSize);

        this.rows=Math.ceil(height/this.tileSize);

        this.tiles=[];

        for(let y=0;y<this.rows;y++){

            this.tiles[y]=[];

            for(let x=0;x<this.cols;x++){

                this.tiles[y][x]=new Tile("grass");

            }

        }

    }

}
