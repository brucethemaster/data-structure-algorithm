var a = ['a', null, 'c', 'x'];
var b = ['z', 'y', 'i', null];
var c = ['z', 'y', 'x'];
const hasCommonItems = (a, b) => {
  var stringtoSearch = '';
  var arrytosearch = [];
  if (a.length < b.length) {
    stringtoSearch = b.join('');
    arrytosearch = a;
  } else {
    stringtoSearch = a.join('');
    arrytosearch = b;
  }
  for (let item of arrytosearch) {
    console.log('item', item);
    if (stringtoSearch.indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};
console.log(hasCommonItems(a, b));
