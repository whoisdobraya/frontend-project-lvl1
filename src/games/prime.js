import isPrime from '../modules/isPrime.js';
import makeTask from '../modules/makeTask.js';

const brainPrime = {
  maxNumber: 100,
  rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  makeTask: () => makeTask(brainPrime.maxNumber),
  correctAnswer: (task) => (isPrime(task) ? 'yes' : 'no'),
};

export default brainPrime;
