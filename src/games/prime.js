import getNumber from '../modules/getNumber.js';
import isPrime from '../modules/isPrime.js';
import makeTask from '../modules/makeTask.js';

const brainPrime = {
  maxNumber: 100,
  rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getNumber,
  makeTask,
  correctAnswer(task) {
    return isPrime(task) ? 'yes' : 'no';
  },
};

export default brainPrime;
