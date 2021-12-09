const func = sentence => {
  let sentenceArry = sentence.split('/[ ][:][;][-]/g', '');
  return sentenceArry.reduce(0, a => getScore(a));
};

const getScore = a => {
  if (a.length - countVoewels(a) < countVoewels(a)) {
    return 5;
  }
  if (a.length - countVoewels(a) === countVoewels(a)) {
    return 3;
  }
  if (a.length - countVoewels(a) > countVoewels(a)) {
    return 1;
  }
};
const countVoewels = object => {
  return object.match(/[aeiou]/gi).length;
};

console.log('hello');
