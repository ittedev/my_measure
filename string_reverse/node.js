var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

var str = 'abcdefghijklmnopqrstuvwxyz'

function reverseUseSubstring(str) {
  return str === '' ? '' : reverseUseSubstring(str.substring(1)) + str[0]
}

function reverseUseSlice(str) {
  return str === '' ? '' : reverseUseSlice(str.slice(1)) + str[0]
}

suite
  .add('Array.reverse()', function() {
    var r = str.split('').reverse().join('')
  })
  .add('Array.reduce()', function() {
    var r = str.split('').reduce((r, c) => c + r)
  })
  .add('Array.forEach()', function() {
    var r = ''
    str.split('').forEach(c => {
      r = c + r
    })
  })
  .add('for in', function() {
    var r = ''
    for (var c in str) {
      r = c + r
    }
  })
  .add('for loop ++', function() {
    var r = ''
    for (var i = 0; i < str.length; i++) {
      r = str[i] + r
    }
  })
  .add('for loop --', function() {
    var r = ''
    for (var i = str.length - 1; i >= 0; i--) {
      r += str[i]
    }
  })
  .add('Recursion use substring', function() {
    var r = reverseUseSubstring(str)
  })
  .add('Recursion use slice', function() {
    var r = reverseUseSlice(str)
  })
  .on('cycle', event => console.log(String(event.target)))
  .run()
