/*
 _____               _      _         ___ _       _
|_   _|__ _ __  _ __| |__ _| |_ ___  / __| |_ _ _(_)_ _  __ _ ___
  | |/ -_) '  \| '_ \ / _` |  _/ -_) \__ \  _| '_| | ' \/ _` (_-<
  |_|\___|_|_|_| .__/_\__,_|\__\___| |___/\__|_| |_|_||_\__, /__/
               |_|                                      |___/
*/

let escape = (strings) => strings.map(string => string.replace(/</g, '&lt;').replace(/>/g, '&gt;')).join('')

let greet = escape`
<div>
   <p>
       <strong>Hello York.js!</strong>
   </p>
</div>`

console.log( greet )
