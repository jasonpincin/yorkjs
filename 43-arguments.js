/*
   _                               _
  /_\  _ _ __ _ _  _ _ __  ___ _ _| |_ ___
 / _ \| '_/ _` | || | '  \/ -_) ' \  _(_-<
/_/ \_\_| \__, |\_,_|_|_|_\___|_||_\__/__/
          |___/
*/

// spread
function add3(a, b, c) {
    return a + b + c
}

var numbers = [10, 20, 30]
var result = add3.apply(undefined, numbers)

console.log( result )
