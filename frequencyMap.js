function duplicates(arr) {
  let counts = new Map();
  arr.filter(n => {
    let count = counts.get(n);
    counts.set(n, count ? count + 1 : 1);
    return count === 1;
  });
  return counts;
}
const getKey = (map, val) => {
  return Object.keys(map).find(key => {
    return map[key] === val;
  });
};

console.log(duplicates([1, 2, 4, 4, 3, 1, 5, '5']));

let map = duplicates([1, 2, 4, 4, 3, 1, 5, '5']);
console.log('map', getKey(map, 1));

const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.entries();
console.log('iterator1', iterator1);
