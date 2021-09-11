const reverse = str => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm thats is not good';
  }
  str = str;
  let newStr = [];

  for (i = str.length; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join('');
};

const reverseString = str => {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
};
console.log(reverse('ierdnA si eman yM iH'));
console.log(reverseString('yoyo master'));
