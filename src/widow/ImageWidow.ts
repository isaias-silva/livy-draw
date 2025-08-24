

import { Widow } from "../core/Widow";
import { write } from "bun";
import { ImageDraw } from "../draw/ImageDraw";

export class ImageWindow extends Widow<ImageDraw> {

    override createImage(path: string): ImageDraw {

        this.generateFile(path)

        return new ImageDraw(path, this.widthPx, this.heightPx);
    }

    private async generateFile(path: string) {
        await write(path, Buffer.alloc(0));

    }

}