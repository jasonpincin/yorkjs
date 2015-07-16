/*
   _                               _
  /_\  _ _ __ _ _  _ _ __  ___ _ _| |_ ___
 / _ \| '_/ _` | || | '  \/ -_) ' \  _(_-<
/_/ \_\_| \__, |\_,_|_|_|_\___|_||_\__/__/
          |___/
*/

// rest
function add() {
    let args = Array.prototype.slice.call(arguments, 0)
    return args.reduce((a, b) => a + b)
}

var result = add(5, 10, 15, 20)

console.log( result )
