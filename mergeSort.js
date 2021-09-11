function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  if (array.length > 1) {
    var left = array.slice(0, Math.floor(array.length / 2));
    var right = array.slice(Math.floor(array.length / 2));
  }

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++;
    } else {
      temp.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = mergeSort(numbers);
console.log(answer);
