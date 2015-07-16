/*
 ___               _
| _ \_ _ ___ _ __ (_)___ ___ ___
|  _/ '_/ _ \ '  \| (_-</ -_|_-<
|_| |_| \___/_|_|_|_/__/\___/__/
*/

// promises

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
