const arr2 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr3 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arr4 = [1, 1];
const arr = [2, 5, 5, 2, 3, , 4, 5, 6, 2, 1, 1, 1];

const checkFirstDuplicate = arr => {
  const arrMap = new Map();
  let duplicate = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arrMap[arr[i]] !== undefined) {
      return arr[i];
    } else arrMap[arr[i]] = 1;
  }
  return undefined;
};

const checkFirstDuplicate1 = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
};

console.log(checkFirstDuplicate(arr));
console.log(checkFirstDuplicate1(arr));
