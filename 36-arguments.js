/*
   _                               _
  /_\  _ _ __ _ _  _ _ __  ___ _ _| |_ ___
 / _ \| '_/ _` | || | '  \/ -_) ' \  _(_-<
/_/ \_\_| \__, |\_,_|_|_|_\___|_||_\__/__/
          |___/
*/

// defaults
function connect (host = 'localhost', port = 8080) {

    console.log(`${host}:${port}`)
}

connect()
connect('otherhost')
connect('otherhost', 443)
connect(undefined, 443)
