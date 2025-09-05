import { Jimp } from "jimp";
import { Coordinates } from "../core/Coordinates";

type HexColor = `#${string}`;

export default async function (path: string, ...hexIgnore: HexColor[]) {

    try{
    const image = await Jimp.read(path)
    const { width, height } = image.bitmap

    const coordinates: Coordinates<string>[] = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const hex = image.getPixelColor(x, y);

            const r = (hex >> 24) & 255;
            const g = (hex >> 16) & 255;
            const b = (hex >> 8) & 255;
            const a = hex & 255;
            const toHex = (n: number) => n.toString(16).padStart(2,'0');

            const hexColor: HexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`;
            
            if (!hexIgnore.includes(hexColor))
                coordinates.push(new Coordinates<string>(hexColor, x, y));
        }
    }
    return coordinates;
    } catch (e: any) {

        throw new Error("Error in extract pixels of image.", e)
    }
}