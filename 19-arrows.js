/*
   _                        ___             _   _
  /_\  _ _ _ _ _____ __ __ | __|  _ _ _  __| |_(_)___ _ _  ___
 / _ \| '_| '_/ _ \ V  V / | _| || | ' \/ _|  _| / _ \ ' \(_-<
/_/ \_\_| |_| \___/\_/\_/  |_| \_,_|_||_\__|\__|_\___/_||_/__/
*/

class Calculator {
    add (a, b) {
        return a + b
    }
    addMany (numbers) {
        return numbers.reduce((a, b) => {
            return this.add(a, b)
        })
    }
}

var calc = new Calculator
var result = calc.addMany([10, 20, 30, 40, 50])

console.log('The result is: ' + result)
