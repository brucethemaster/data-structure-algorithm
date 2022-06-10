class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.value;
  }
  get(key) {
    let address = this._hash(key);

    const currentBucket = this.data[address];
    if (currentBucket.legnth) {
      return currentBucket.filter(item => item[0] === key).reduce((a, c) => c[2])[1];
    }
    return undefined;
  }
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0][0]);
        }
      }
    }
    return result;
  }
}
const myHasTable = new HashTable(2);
myHasTable.set('grapes', 10001);
myHasTable.set('grapes2', 10002);
myHasTable.set('apple', 10003);
myHasTable.set('pear', 10004);
myHasTable.get('pear');
console.log(JSON.stringify(myHasTable, null, 2));
console.log(myHasTable.get('pear2'));
console.log(' keys() ', myHasTable.keys());
