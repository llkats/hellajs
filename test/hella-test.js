var test = require('tap').test
var hella = require('../hella.js')
var testUtil = require('./test-util.js')

test('hella tests', function(t) {
  test('hella animals', function(tt) {
    var soManyAnimals = hella.animals()

    tt.ok(soManyAnimals.length > 0, 'hella animals has more than one animal')
    tt.type(soManyAnimals, Array, 'hella animals are returned in an array')

    tt.end()
  })

  test('hella words', function(tt) {
    var soManyWords = hella.words()

    tt.ok(soManyWords.length > 0, 'hella words has more than one word')
    tt.type(soManyWords, Array, 'hella words are returned in an array')

    tt.end()
  })

  test('hella numbers', function(tt) {
    var soManyNumbers = hella.numbers()

    tt.ok(soManyNumbers.length > 0, 'hella numbers has more than one number')
    tt.type(soManyNumbers, Array, 'hella numbers are returned in an array')

    tt.end()
  })

  test('hella pokemon', function(tt) {
    var soManyPokemon = hella.pokemon()

    tt.ok(soManyPokemon.length > 0, 'gotta catch em all. pokemon. (at least several)')
    tt.type(soManyPokemon, Array, 'hella pokemon are returned in an array')
    tt.equal(testUtil.firstLetters(soManyPokemon),
      testUtil.firstLetters(soManyPokemon).toUpperCase(),
      'Pokemon names are proper nouns')

    tt.end()
  })

  test('hella demons', function(tt) {
    var soManyDemons = hella.demons()

    tt.ok(soManyDemons.length > 0, 'hella demons has more than one number')
    tt.type(soManyDemons, Array, 'demons array themselves before returning')
    tt.equal(testUtil.firstLetters(soManyDemons),
      testUtil.firstLetters(soManyDemons).toUpperCase(),
      'Demons names are proper nouns')

    tt.end()
  })

  t.end()
})
