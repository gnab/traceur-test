function* range(a, b) {
  var value = a;

  while (value <= b) {
    yield value;
    value += 1;
  }
}

console.log('range(1,5):');

for (let n of range(1,5)) {
  console.log(n);
}

function* fib () {
  var [a, b] = [1, 1];

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

Object.prototype.take = function* (n) {
  var i = 0;
  for (k of this) {
    if (i === n) {
      break;
    }
    i += 1;
    yield k;
  }
};

console.log('fib().take(10):');

for (let n of fib().take(10)) {
  console.log(n);
}
