"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reactangle = void 0;
const shape_1 = require("./shape");
class Reactangle extends shape_1.Shape {
    constructor(x, y, _width, _height) {
        super(x, y);
        this._width = _width;
        this._height = _height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    area() {
        return this._width * this._height;
    }
}
exports.Reactangle = Reactangle;
//# sourceMappingURL=reactangle.js.map