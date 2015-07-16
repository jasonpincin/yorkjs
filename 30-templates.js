/*
 _____               _      _         ___ _       _
|_   _|__ _ __  _ __| |__ _| |_ ___  / __| |_ _ _(_)_ _  __ _ ___
  | |/ -_) '  \| '_ \ / _` |  _/ -_) \__ \  _| '_| | ' \/ _` (_-<
  |_|\___|_|_|_| .__/_\__,_|\__\___| |___/\__|_| |_|_||_\__, /__/
               |_|                                      |___/
*/

let htmlGreeting = (who) =>
`<div>
   <p>
       <strong>Hello ${who}!</strong>
   </p>
</div>`

let greet = htmlGreeting("York.js")
console.log( greet )
