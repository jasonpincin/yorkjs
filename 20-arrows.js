/*
   _                        ___             _   _
  /_\  _ _ _ _ _____ __ __ | __|  _ _ _  __| |_(_)___ _ _  ___
 / _ \| '_| '_/ _ \ V  V / | _| || | ' \/ _|  _| / _ \ ' \(_-<
/_/ \_\_| |_| \___/\_/\_/  |_| \_,_|_||_\__|\__|_\___/_||_/__/
*/

// 1. Arrows with no args
var id = 0
var getNextId = () => id++

// 2. Returning object literals
var createError = msg => { error: msg } // BAD
var createError = msg => ({ error: msg }) // GOOD

// 3. The call and apply methods cannot change context of an arrow function
