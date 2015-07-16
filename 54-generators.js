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

let query = filter => {
    console.log(`Querying for: ` + JSON.stringify(filter))
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            firstName: 'Bilbo',
            lastName: 'Baggins'
        }), 2000)
    })
}

query({ firstName: 'Bilbo' }).then(result =>
    console.log('Query complete: ', JSON.stringify(result))
).catch(console.error)
