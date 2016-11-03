const maxSafeFibonacciValue = 79

function *fibonacci() {
  var fn1 = 0
  var fn2 = 1
  while(true) {
    var current = fn1
    fn1 = fn2
    fn2 = current + fn1
    var reset = yield current
    if (reset) {
      fn1 = 0
      fn2 = 1
    }
  }
}

var iteriate = fibonacci()

console.log(iteriate.next().value)
console.log(iteriate.next().value)

funcTime = process.hrtime()
console.log(`fibonacci() runs at ${ funcTime }`)
