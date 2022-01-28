function isBeautifulString(inputString) {
  const alphabet = [];

  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    alphabet.push(String.fromCharCode(i));
  }

  let map = alphabet.reduce(
    (acc, e) =>
      acc.set(e, inputString.match(new RegExp(e, 'g')) === null ? 0 : inputString.match(new RegExp(e, 'g')).length),
    new Map()
  );

  let array = [...map.values()];

  console.log('array', array);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isBeautifulString('aabbcc'));
