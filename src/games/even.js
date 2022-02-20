import getNumber from '../modules/getNumber.js';
import makeTask from '../modules/makeTask.js';

const brainEven = {
  maxNumber: 100,
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
  getNumber,
  makeTask,
  correctAnswer(task) { return task % 2 === 0 ? 'yes' : 'no'; },
};

export default brainEven;
