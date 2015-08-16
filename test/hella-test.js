var test = require('tap').test
var hella = require('../hella.js')

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

  t.end()
})
