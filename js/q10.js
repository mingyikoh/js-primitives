
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];


var sortAges = ages.sort(function(a, b) {
  return a - b;
});

// console.log(sortAges)

var totalNum = sortAges.length;
var medianIndex = ((totalNum +1) / 2) - 1;

// console.log(totalNum);
console.log('Median age is ' + sortAges[medianIndex]);
