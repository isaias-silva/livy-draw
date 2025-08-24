import { test, expect } from "bun:test";
import { Draw } from "../src/core/Draw";
import { Coordinates } from "../src/core/Coordinates";

class TestDraw extends Draw<string> {
    override async drawComplete(coordinates: Array<Coordinates<any>>): Promise<void> {
        return;
    }
    override draw(x: number, y: number, content: string): this {
        return this;
    }
    override erase(x: number, y: number): this {
        return this;
    }

}

test("Draw return context.", () => {
    expect(new TestDraw(1, 1).draw(1, 1, "x") instanceof TestDraw).toBeTrue()
})
test("Erase return context.", () => {

    expect(new TestDraw(1, 1).erase(1, 1) instanceof TestDraw).toBeTrue()
})
test("Draw complete return void", async () => {
    const coords = [new Coordinates<string>("aaa", 1, 1)]
    const completeDraw = await new TestDraw(1, 1).drawComplete(coords);
    expect(completeDraw == null).toBeTrue()
})