

import { cssColorToHex, Jimp, type JimpInstance } from "jimp";
import type { Coordinates } from "../core/Coordinates";
import { Draw } from "../core/Draw";

export class ImageDraw extends Draw<string> {
    private image: JimpInstance

    constructor(private path: string, xMax: number, yMax: number) {
        super(xMax, yMax);
        this.image = new Jimp({ width: xMax, height: yMax, color: 0x00000000 });

    }

    override async drawComplete(coordinates: Array<Coordinates<string>>) {

        for (const coord of coordinates) {
            const { x, y, content } = coord;
            const { width, height } = this.image.bitmap;
            if (x < width && y < height) this.draw(x, y, content);
        }
        await this.save();
    }
    override draw(x: number, y: number, content: string): this {

        this.image.setPixelColor(this.parseColor(content), x, y);
        return this
    }
    override erase(x: number, y: number): this {
        this.image.setPixelColor(0x00,x,y)
        return this
    }

    async save() {
        const [name, type] = this.path.split(".");

        this.image.write(`${name}.${type}`);
    }
    private parseColor(content: string): number {
        return cssColorToHex(content);
    }

}