import { Jimp } from "jimp";

export default async function (path: string, w: number, h: number) {

    try {
        const image = await Jimp.read(path);

        image.resize({ w, h })

        const paths = path.split("/")


        const [name, type] = paths[paths.length - 1].split(".");
        
        paths.splice(paths.length - 1)

        await image.write(`${paths.join("/")}/${name}.${type}`);

    } catch (e: any) {

        throw new Error(`Error in resize image ${e}`)
    }
}