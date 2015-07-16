/*
  ___ _
 / __| |__ _ ______ ___ ___
| (__| / _` (_-<_-</ -_|_-<
 \___|_\__,_/__/__/\___/__/
*/

class Shape {
    constructor (x, y) {
        this.x = x ? x : 0
        this.y = y ? y : 0
        this.name = 'Shape'
    }
    move (x, y) {
        this.x += x
        this.y += y
    }
    toString () {
        return this.name + ' located at ' + this.x + ', ' + this.y
    }
}

class Square extends Shape {
    constructor (x, y) {
        super(x, y)
        this.name = 'Square'
    }
}

// Cannot do new detection upon instantiation
var shape = new Shape()
shape.move(10, 20)
console.log(shape.toString())

var square = new Square(10, 0)
square.move(5, 35)
console.log(square.toString())
