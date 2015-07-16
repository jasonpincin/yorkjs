module.exports = require('./AllSetsArray.json').reduce((cards, set) => cards.concat(set.cards), [])
