var tap = require('tap')

// you can test stuff just using the top level object.
// no suites or subtests required.

tap.equal(1, 1, 'check if numbers still work')
tap.notEqual(1, 2, '1 should not equal 2')

// also you can group things into sub-tests.
// Sub-tests will be run in sequential order always,
// so they're great for async things.

tap.test('first stuff', function (t) {
  t.ok(true, 'true is ok')
  t.similar({a: [1,2,3]}, {a: [1,2,3]})
  // call t.end() when you're done
  t.end()
})

// If you have a bunch of setup stuff that MUST work or else
// the rest of the tests are not worth running, then you can
// pass `{ bail: true }` to make it bail out on failure.

tap.test('must succeed or all is lost', { bail: true }, function (t) {
  db = new DataBorscht()
  t.ok(db, 'borscht setup must succeed')
  t.end()
})

// You can also bail out based on specific conditions, or with a
// different error message of your choosing.
tap.test('must mostly succeed or all is lost', function (t) {
  db = new DataBorscht()

  t.ok(db, 'borscht setup')
  if (!db) {
    t.bailout('the borscht is lost.  I cannot continue.')
    return
  }

  t.ok(db.connection, 'db must have connection')
  t.ok(db.username, 'db must have username')
  t.equal(db.color, 'red', 'borscht should be red')
  if (!t.passing())
    t.bailout('something weird with the data borscht.')

  t.end()
})

// you can specify a 'plan' if you know how many
// tests there will be in advance. Handy when
// order is irrelevant and things happen in parallel.

tap.test('planned test', function (t) {
  t.plan(2)
  setTimeout(function () {
    t.ok(true, 'a timeout')
  })
  setTimeout(function () {
    t.ok(true, 'b timeout')
  })
})

// you can do `var test = require('tap').test` if you like
// it's pre-bound to the root tap object.

var test = require('tap').test

// subtests can have subtests
test('parent', function (t) {
  t.test('child', function (tt) {
    tt.throws(function () {
      throw new Error('fooblz')
    }, {
      message: 'fooblz'
    }, 'throw a fooblz')

    tt.throws(function () { throw 1 }, 'throw whatever')

    tt.end()
  })

  t.end()
})

// thrown errors just fail the current test, so you can
// also use your own assert library if you like.
// Of course, this means it won't be able to print out the
// number of passing asserts, since passes will be silent.

test('my favorite assert lib', function (t) {
  var assert = require('assert')
  assert.ok(true, 'true is ok')
  assert.equal(1, 1, 'math works')

  // Since it can't read the plan, using a custom assert lib
  // means that you MUST use t.end()
  t.end()
})

// You can mark tests as 'todo' either using a conf object,
// or simply by omitting the callback.
test('solve halting problem')
test('prove p=np', { todo: true }, function (t) {
  // i guess stuff goes here
  t.fail('traveling salesmen must pack their own bags')
  t.end()
})

// Prefer mocha/rspec/lab style global objects?
// Got you covered.  This is a little experimental,
// patches definitely welcome.
tap.mochaGlobals()
describe('suite ride bro', function () {
  it('should have a wheel', function () {
    assert.ok(thingie.wheel, 'wheel')
  })
  it('can happen async', function (done) {
    setTimeout(function () {
      assert.ok('ok')
      done()
    })
  })
})
