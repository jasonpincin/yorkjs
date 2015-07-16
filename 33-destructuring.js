/*
 ___         _               _            _
|   \ ___ __| |_ _ _ _  _ __| |_ _  _ _ _(_)_ _  __ _
| |) / -_|_-<  _| '_| || / _|  _| || | '_| | ' \/ _` |
|___/\___/__/\__|_|  \_,_\__|\__|\_,_|_| |_|_||_\__, |
                                                |___/
*/

// object matching

let mem = process.memoryUsage()

console.log( mem['rss'], mem['heapTotal'], mem['heapUsed'] )

// versus

let { rss, heapTotal, heapUsed } = process.memoryUsage()

console.log( rss, heapTotal, heapUsed )

// rename
let { rss:resident } = process.memoryUsage()
console.log(resident)
