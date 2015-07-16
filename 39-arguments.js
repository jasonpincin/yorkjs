/*
   _                               _
  /_\  _ _ __ _ _  _ _ __  ___ _ _| |_ ___
 / _ \| '_/ _` | || | '  \/ -_) ' \  _(_-<
/_/ \_\_| \__, |\_,_|_|_|_\___|_||_\__/__/
          |___/
*/

// destructuring
function connect ({ host = 'localhost', port = 8080, timeout = 30000, reconnect = false } = {}) {

    console.log(`${host}:${port} (timeout: ${timeout}, reconnect: ${reconnect})`)
}

connect()
connect({ host: 'otherhost' })
connect({ host: 'otherhost', port: 443 })
connect({ port: 443, reconnect: true })

// python named args?
