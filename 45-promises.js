/*
 ___               _
| _ \_ _ ___ _ __ (_)___ ___ ___
|  _/ '_/ _ \ '  \| (_-</ -_|_-<
|_| |_| \___/_|_|_|_/__/\___/__/
*/

// callbacks

let query = (filter, cb) => {
    // lets fake it
    console.log(`Querying for: ` + JSON.stringify(filter))
    setTimeout(() => cb(null, {
        firstName: 'Bilbo',
        lastName: 'Baggins'
    }), 2000)
}

query({ firstName: 'Bilbo' }, (err, result) => {
    if (err) return console.error(err)
    console.log('Query complete: ', JSON.stringify(result))
})
