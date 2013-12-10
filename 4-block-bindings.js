var nums = [1, 2, 3];

for (var i in nums) {
  setTimeout(() => {
    console.log('var i =', nums[i]);
  }, 1000 * i);
}

for (let i in nums) {
  setTimeout(() => {
    console.log('let i =', nums[i]);
  }, 1000 * i);
}
