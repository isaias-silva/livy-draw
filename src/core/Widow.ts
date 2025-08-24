import type { Draw } from "./Draw";


export abstract class Widow<D extends Draw<any>> {

    constructor(protected widthPx: number, protected heightPx: number) { }
    
    abstract createImage(arg:any):D
   
}