var [first, second, ...rest] = [1, 2, 3, 4, 5];

// first  => 1
// second => 2
// rest   => [3, 4, 5]

var a = {x: 0, y: 0},
    b = {x: 3, y: 4};

function distance({x: x1, y: y1}, {x: x2, y: y2}) {
  return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}

distance(a, b);

// => 5
