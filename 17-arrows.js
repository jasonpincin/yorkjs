/*
   _                        ___             _   _
  /_\  _ _ _ _ _____ __ __ | __|  _ _ _  __| |_(_)___ _ _  ___
 / _ \| '_| '_/ _ \ V  V / | _| || | ' \/ _|  _| / _ \ ' \(_-<
/_/ \_\_| |_| \___/\_/\_/  |_| \_,_|_||_\__|\__|_\___/_||_/__/
*/

var mtgCards = require('./data/mtg-cards')

function summarize (terms) {
    // Exclude any that don't match our search terms
    return mtgCards.filter(card => terms.every(term => (
        ~(card.supertypes || [])
        .concat(card.types)
        .concat(card.subtypes)
        .indexOf(term)
    )))
    // Then count up how many we have by rarity
    .reduce((summary, card) => {
        summary[card.rarity] = summary[card.rarity] || 0
        summary[card.rarity]++
        return summary
    }, {})
}

var summary = summarize(['Human', 'Wizard', 'Artifact'])

// log it
console.log( JSON.stringify(summary, null, 2) )
