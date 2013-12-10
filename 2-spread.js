function sum (...args) {
  return args.reduce((a, b) => a + b, 0);
}

var nums = [1,2,3];

// ES5
console.log('sum.apply(null, nums) =', sum.apply(null, nums));

console.log('sum(...nums) =', sum(...nums));

var moreNums = [0, ...nums, 4];
console.log(moreNums);
