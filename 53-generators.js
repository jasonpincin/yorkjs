/*
  ___                       _
 / __|___ _ _  ___ _ _ __ _| |_ ___ _ _ ___
| (_ / -_) ' \/ -_) '_/ _` |  _/ _ \ '_(_-<
 \___\___|_||_\___|_| \__,_|\__\___/_| /__/
*/

function run (g) {
    let generator = g()

    function step (promise = Promise.resolve()) {
        promise.then(value => {
            let next = generator.next(value)
            if (!next.done) step(next.value)
        })
        promise.catch(err => generator.throw(err))
    }

    step(generator.next().value)
}
