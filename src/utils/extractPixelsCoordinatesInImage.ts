import { Jimp } from "jimp";
import { Coordinates } from "../core/Coordinates";

type HexColor = `#${string}`;

export default async function (path: string, ...hexIgnore: HexColor[]) {

    const image = await Jimp.read(path)
    const { width, height } = image.bitmap

    const coordinates: Coordinates<string>[] = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const hex = image.getPixelColor(x, y);
            const hexColor: HexColor = `#${hex.toString(16).padStart(8, "0").slice(0, 6)}`;
            if (!hexIgnore.includes(hexColor))
                coordinates.push(new Coordinates<string>(hexColor, x, y));
        }
    }
    return coordinates;

}