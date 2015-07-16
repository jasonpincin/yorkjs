/*
  ___ _
 / __| |__ _ ______ ___ ___
| (__| / _` (_-<_-</ -_|_-<
 \___|_\__,_/__/__/\___/__/
*/

function Shape (x, y) {
    this.x = x ? x : 0
    this.y = y ? y : 0
    this.name = "Shape"
}
Shape.prototype.move = function (x, y) {
    this.x += x
    this.y += y
}
Shape.prototype.toString = function () {
    return this.name + ' located at ' + this.x + ', ' + this.y
}

function Square (x, y) {
    Shape.call(this, x, y)
    this.name = "Square"
}
Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square
