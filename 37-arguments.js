/*
   _                               _
  /_\  _ _ __ _ _  _ _ __  ___ _ _| |_ ___
 / _ \| '_/ _` | || | '  \/ -_) ' \  _(_-<
/_/ \_\_| \__, |\_,_|_|_|_\___|_||_\__/__/
          |___/
*/

// defaults
function connect (options = {}) {

    let host = options.host || 'localhost'
    let port = options.port || 8080
    let timeout = options.timeout || 30000
    let reconnect = options.reconnect ? true : false

    console.log(`${host}:${port} (timeout: ${timeout}, reconnect: ${reconnect})`)
}

connect()
connect({ host: 'otherhost' })
connect({ host: 'otherhost', port: 443 })
connect({ port: 443, reconnect: true })
