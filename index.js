var hella = require('./hella.js');

// process.argv.forEach(function(val, index, array) {
//   console.log(index + ': ' + val);
// });

// console.log(hella)

// hella.animals();
// console.log(hella.numbers())

var request = process.argv[2]

if (request !== undefined) {

  if (hella[request] !== undefined) {
    console.log(hella[request]())
  } else {
    console.log('hella bummer, yo, I don\'t have any ' + request)
  }

} else {
  console.log('hella random')
  var hellaLength = Object.keys(hella).length - 1
  var hellaRandomNumber = Math.floor(Math.random() * (hellaLength - 0)) + 0
  var hellaRandomMethod = Object.keys(hella)[hellaRandomNumber]

  console.log(hella[hellaRandomMethod]())
}

// should do a cli thing like "hello, what do you want hella of?" and the user can type "animals" and get hella animals
