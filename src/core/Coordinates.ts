export class Coordinates<E> {
    private _x: number;
    private _y: number;

    private _content: E;


    constructor(content: E, ...coordinates: number[]) {
        this._x = coordinates[0] || 0;
        this._y = coordinates[1] || 0;
        this._content = content
    }

    public get content(): E {
        return this._content;
    }
    public set content(value: E) {
        this._content = value;
    }
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }

}