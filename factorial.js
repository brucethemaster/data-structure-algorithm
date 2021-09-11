const factorial = number => {
  if (number === 2) {
    return 2;
  }
  return number * factorial(number - 1);
};

console.log(factorial(4));

//O(n)

const fibnoacci = number => {
  if (number === 0) {
    return 0;
  }
  if (number === 1 || number === 2) {
    return 1;
  }
  return fibnoacci(number - 1) + fibnoacci(number - 2);
};

const fibnoacci1 = n => {
  let arra = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arra.push(arra[i - 2] + arra[i - 1]);
  }
  return arra[n];
};
console.log(fibnoacci(6));

console.log('fibnoacci1', fibnoacci1(6));

//recursive make your code dry less looping and readable
// large stack reslove by tail call  Optimization
