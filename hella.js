var animals = require('animals')

var Hella = {
  animals: function() {
    return animals.words;
  },

  words: function() {
    // scrape a dictionary
    // what about other languages?
    return ['a', 'the', 'an', 'and', 'sup', 'whatever']
  },

  demons: function() {
    return [ 'Asmodeus', 'Astaroth', 'Azazel', 'Balaam', 'Behemoth', 'Beezlebub',
      'Bile', 'Cimeries', 'Coyote', 'Damballa', 'Dagon', 'Mormo', 'Mictian' ]
  },

  pokemon: function() {
    return [ 'Snorlax', 'Pikachu', 'Charmander', 'Bulbasaur', 'Psyduck', 'Squirtle' ]
  },

  numbers: function() {
    // lol
    var i = 0
    var hellaNumbers = []
    while (i < 99999) {
      hellaNumbers.push(i)
      i++
    }

    return hellaNumbers
  },

  countries: function() {
    // list of countries
    return 'hella todo'
  },

  cities: function() {
    // use substack's 1000cities module
    return 'hella todo'
  },

  gifs: function() {
    // giphy api?
    return 'hella todo'
  },

  memes: function() {
    // know your meme?
    return 'hella todo'
  }
}

module.exports = Hella
