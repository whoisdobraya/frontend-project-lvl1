import getGcd from '../modules/getGcd.js';
import getNumber from '../modules/getNumber.js';

const brainGcd = {
  maxNumber: 100,
  rule: 'Find the greatest common divisor of given numbers.',
  numbers: [],
  makeTask: () => {
    brainGcd.numbers[0] = getNumber(brainGcd.maxNumber);
    brainGcd.numbers[1] = getNumber(brainGcd.maxNumber);
    return `${brainGcd.numbers[0]} ${brainGcd.numbers[1]}`;
  },
  correctAnswer: () => `${getGcd(brainGcd.numbers[0], brainGcd.numbers[1])}`,
};

export default brainGcd;
