import Terrain from "./terrain.js";

export default class World {

    constructor() {

        this.width = 4000;
        this.height = 4000;

        this.terrain = new Terrain(this.width, this.height);

    }


    draw(ctx, camera) {

        const tileSize = this.terrain.tileSize;

        // Calculate visible tile range (camera culling)

        const startCol = Math.max(0, Math.floor(camera.x / tileSize));
        const endCol = Math.min(
            this.terrain.cols,
            startCol + Math.ceil(ctx.canvas.width / tileSize) + 2
        );

        const startRow = Math.max(0, Math.floor(camera.y / tileSize));
        const endRow = Math.min(
            this.terrain.rows,
            startRow + Math.ceil(ctx.canvas.height / tileSize) + 2
        );


        // Draw only visible tiles

        for (let row = startRow; row < endRow; row++) {

            for (let col = startCol; col < endCol; col++) {

                const tile = this.terrain.tiles[row][col];

                const x = col * tileSize - camera.x;
                const y = row * tileSize - camera.y;


                // ---------- Grass ----------

                const colors=[

"#5ea84e",
"#63b251",
"#5b9e4d",
"#67b759"

];

for(let py=0;py<8;py++){

    for(let px=0;px<8;px++){

        ctx.fillStyle=
            colors[
                tile.noise[py][px]
            ];

        ctx.fillRect(

            x+px*4,
            y+py*4,

            4,
            4

        );

    }

}
                // switch (tile.variation) {

                //     case 0:
                //         ctx.fillStyle = "#5ea84e";
                //         break;

                //     case 1:
                //         ctx.fillStyle = "#63b251";
                //         break;

                //     case 2:
                //         ctx.fillStyle = "#5b9e4d";
                //         break;

                //     case 3:
                //         ctx.fillStyle = "#67b759";
                //         break;

                // }

                // ctx.fillRect(x, y, tileSize, tileSize);


                // ---------- Flowers ----------

                if (tile.decoration === "flower") {

                    ctx.fillStyle = "#ffd84f";

                    ctx.beginPath();

                    ctx.arc(
                        x + 16,
                        y + 16,
                        2,
                        0,
                        Math.PI * 2
                    );

                    ctx.fill();

                }


                // ---------- Rocks ----------

                if (tile.decoration === "rock") {

                    ctx.fillStyle = "#777";

                    ctx.beginPath();

                    ctx.arc(
                        x + 16,
                        y + 16,
                        4,
                        0,
                        Math.PI * 2
                    );

                    ctx.fill();

                }

            }

        }


        // ---------- Dirt Roads ----------

        ctx.fillStyle = "#c49b5d";

        // Vertical road

        ctx.fillRect(
            700 - camera.x,
            -camera.y,
            120,
            this.height
        );

        // Horizontal road

        ctx.fillRect(
            -camera.x,
            900 - camera.y,
            this.width,
            120
        );

    }

}
