import makeTask from '../modules/makeTask.js';

const brainEven = {
  maxNumber: 100,
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
  makeTask: () => makeTask(brainEven.maxNumber),
  correctAnswer: (task) => (task % 2 === 0 ? 'yes' : 'no'),
};

export default brainEven;
