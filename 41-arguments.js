/*
   _                               _
  /_\  _ _ __ _ _  _ _ __  ___ _ _| |_ ___
 / _ \| '_/ _` | || | '  \/ -_) ' \  _(_-<
/_/ \_\_| \__, |\_,_|_|_|_\___|_||_\__/__/
          |___/
*/

// rest
function add(...numbers) {
    return numbers.reduce((a, b) => a + b)
}

var result = add(5, 10, 15, 20)

console.log( result )
