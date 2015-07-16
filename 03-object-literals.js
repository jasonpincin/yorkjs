/*
  ___  _     _        _     _    _ _                _
 / _ \| |__ (_)___ __| |_  | |  (_) |_ ___ _ _ __ _| |___
| (_) | '_ \| / -_) _|  _| | |__| |  _/ -_) '_/ _` | (_-<
 \___/|_.__// \___\__|\__| |____|_|\__\___|_| \__,_|_/__/
          |__/
*/

function createPerson (firstName, lastName) {
    var user = {
        firstName: firstName,
        lastName: lastName,
        toString: function () {
            return firstName + ' ' + lastName
        }
    }
    return user
}
