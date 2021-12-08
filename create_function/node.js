var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

suite
  .add('Function declaration', function() {
    function f(x) {
      return x
    }
  })
  .add('Function expression', function() {
    var f = function (x) {
      return x
    }
  })
  .add('Function constructor', function() {
    var f = new Function('x', 'return x')
  })
  .add('Arrow function expression', function() {
    var f = x => x
  })
  .on('cycle', event => console.log(String(event.target)))
  .run()
