import type { Coordinates } from "./Coordinates";

export abstract class Draw<C> {
    constructor(protected xMax:number, protected yMax:number){}
   
    abstract drawComplete(coordinates: Array<Coordinates<any>>): this
    abstract draw(x: number, y: number, content:C): this
    abstract erase(x: number, y: number): this

}