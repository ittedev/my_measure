var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

var arr = []
for (var i = 0; i < 1000; i++) arr[i] = i

suite
  .add('for i++', function() {
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i]
    }
  })
  .add('for i--', function() {
    for (var i = arr.length; i >= 0; i--) {
      var a = arr[i]
    }
  })
  .add('while i--', function() {
    var i = arr.length
    while (i--) {
      var a = arr[i]
    }
  })
  .add('for of', function() {
    for (var v of arr) {
      var a = v
    }
  })
  .add('forEach', function() {
    arr.forEach(v => {
      var a = v
    })
  })
  .on('cycle', event => console.log(String(event.target)))
  .run({ 'async': true })
