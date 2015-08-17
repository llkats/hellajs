module.exports.firstLetters = function( list ) {
  var firstLetters = []
  for (var i=0;i<list.length;i++) {
    firstLetters.push( list[i][0] )
  }
  return firstLetters.join('')
}
