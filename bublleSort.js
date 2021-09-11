function bubbleSort(arra) {
  const length = arra.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arra[j] > arra[j + 1]) {
        let temp = arra[j];
        arra[j] = arra[j + 1];
        arra[j + 1] = temp;
      }
    }
  }
}
