const hasPairWithSum2 = (arr, sum) => {
  const mySet = new Set();
  for (let item of arr) {
    if (mySet.has(item)) {
      return true;
    }
    mySet.add(sum - item);
  }
  return false;
};

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 12));
