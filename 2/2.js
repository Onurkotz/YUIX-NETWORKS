function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

var unsorted = [5, 16, -50, 48, 2, 78];
var sorted = quicksort(unsorted);

console.log("Quicksort: " + sorted);
