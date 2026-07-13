export default class World {

    constructor() {

        this.width = 4000;
        this.height = 4000;

        this.background = new Image();
        this.background.src = "assets/backgrounds/grass.png";

    }


    draw(ctx, camera) {

        if (!this.background.complete) {

            // fallback while image loads

            ctx.fillStyle = "#5ba94f";
            ctx.fillRect(
                -camera.x,
                -camera.y,
                this.width,
                this.height
            );

            return;

        }


        const tile = 256;

        // start one tile offscreen so seams never appear

        const startX =
            Math.floor(camera.x / tile) * tile - tile;

        const startY =
            Math.floor(camera.y / tile) * tile - tile;

        const endX =
            camera.x + ctx.canvas.width + tile;

        const endY =
            camera.y + ctx.canvas.height + tile;



        for (let y = startY; y < endY; y += tile) {

            for (let x = startX; x < endX; x += tile) {

                ctx.drawImage(

                    this.background,

                    x - camera.x,

                    y - camera.y,

                    tile,

                    tile

                );

            }

        }


        // Temporary dirt roads

        ctx.fillStyle = "#c49b5d";

        ctx.fillRect(
            700 - camera.x,
            -camera.y,
            120,
            this.height
        );

        ctx.fillRect(
            -camera.x,
            900 - camera.y,
            this.width,
            120
        );

    }

}
