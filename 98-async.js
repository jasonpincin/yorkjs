/*
   _
  /_\   ____  _ _ _  __
 / _ \ (_-< || | ' \/ _|
/_/ \_\/__/\_, |_||_\__|
           |__/
*/

var http   = require('http'),
    query  = require('querystring'),
    level  = require('level'),
    argosy = require('argosy')(),
    uuid   = require('uuid').v4,
    once   = require('once'),
    match  = argosy.pattern.match

var db = level('./data/db', { valueEncoding: 'json' })

// create a service queue of requests for weather
argosy.accept({
    get: 'weather',
    location: match.defined
}).process(function (msg, cb) {
    var qs = query.stringify({ q: msg.location, units: msg.units || 'imperial' })
    http.get('http://api.openweathermap.org/data/2.5/weather?' + qs, function (res) {
        var body = ''
        res.on('data', function (data) {
            body += data
        }).on('end', function () {
            cb(null, JSON.parse(body).main)
        })
    })
})

// create a service that stores key/value pairs
argosy.accept({
    put: 'weather',
    weather: match.defined
}).process(function (msg, cb) {
    db.put(uuid(), msg.weather, cb)
})

// create a weather history service
argosy.accept({
    get: 'weather-history'
}).process(function (msg, cb) {
    var values = [],
        cb     = once(cb)

    db.createValueStream().on('data', function (data) {
        values.push(data)
    }).on('end', function () {
        cb(null, values)
    }).on('error', cb)
})

// client stubs
var getWeather = argosy.invoke.partial({ get: 'weather' })
var putWeather = argosy.invoke.partial({ put: 'weather' })
var getWeatherHistory = argosy.invoke.partial({ get: 'weather-history' })

;(function sampleWeather () {
    let location = 'York, PA'

    getWeather({ location: location }, function (err, weather) {
        if (err) return console.error(err)
        weather.time = Date.now()

        putWeather({ weather: weather }, function (err) {
            if (err) return console.error(err)

            console.log('Saved weather sample for '+location+':')
            console.log(JSON.stringify(weather, null, 2))

            getWeatherHistory(function (err, history) {
                if (err) return console.error(err)

                history.sort(function (a, b) {
                    return b.time - a.time
                })

                console.log('\nHistory:\n' +
                    history.map(function (e) {
                        return (
                            'Time: ' + new Date(e.time) +
                            '/ Temp: ' + e.temp
                        )
                    }).join('\n')
                )
            })
        })
    })
})()
















