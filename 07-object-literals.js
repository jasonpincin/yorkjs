/*
 ___      _       ___  _     _        _     _    _ _                _
| __|_ _ | |_    / _ \| |__ (_)___ __| |_  | |  (_) |_ ___ _ _ __ _| |___
| _|| ' \| ' \  | (_) | '_ \| / -_) _|  _| | |__| |  _/ -_) '_/ _` | (_-<
|___|_||_|_||_|  \___/|_.__// \___\__|\__| |____|_|\__\___|_| \__,_|_/__/
                          |__/
*/

function createPerson (firstName, lastName, job) {
    var person = {
        firstName,
        lastName,
        [job.toLowerCase()]: true,
        toString() {
            return firstName + ' ' + lastName
        }
    }
    return person
}

var u1 = createPerson('Jason', 'Pincin', 'Developer')
console.log(u1.toString())
console.log(JSON.stringify(u1, null, 2))
