var Hella = {
  animals: function() {
    // should scrape and store a bunch of animals, or find a free api
    return ['zebras', 'pumas', 'penguins', 'monkeys', 'hyenas', 'elk'];
  },

  words: function() {
    // scrape a dictionary
    // what about other languages?
    return ['a', 'the', 'an', 'and', 'sup', 'whatever'];
  },

  numbers: function() {
    // lol
    var i = 0;
    while (i < 99999) {
      console.log(i + ' ');
      i++;
    }
  },

  countries: function() {
    // list of countries
  },

  cities: function() {
    // use substack's 1000cities module
  }
}

module.exports = Hella;
