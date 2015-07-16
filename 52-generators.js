/*
  ___                       _
 / __|___ _ _  ___ _ _ __ _| |_ ___ _ _ ___
| (_ / -_) ' \/ -_) '_/ _` |  _/ _ \ '_(_-<
 \___\___|_||_\___|_| \__,_|\__\___/_| /__/
*/

function *createSequence () {
    var id = 10
    while (id < 18) console.log( yield id++ )
    return 100
}

var sequence = createSequence()

for (var i = 0; i < 10; i++)
    console.log(sequence.next())
