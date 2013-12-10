function range(a, b) {
  // iterable range
  return {
    [Symbol.iterator]: function () {
      var value = a - 1,
          done;

      // range iterator
      return {
        next: function () {
          value += 1;
          done = value > b;

          // object initializer shorthand ({value: value, done: done})
          return {value, done};
        }
      };
    }
  }
}

for (let n of range(1,5)) {
  console.log(n);
}
