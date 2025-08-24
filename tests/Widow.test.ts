import { test, expect } from "bun:test";
import { Draw } from "../src/core/Draw";
import { Coordinates } from "../src/core/Coordinates";
import { Widow } from "../src/core/Widow";

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
class TestWidow extends Widow<TestDraw> {

    override createImage(arg: any): TestDraw {
        return new TestDraw(this.widthPx, this.heightPx);
    }

}
test("Create image return draw.", () => {
    expect(new TestWidow(10,10).createImage("ok.png") instanceof TestDraw).toBeTrue()
})
