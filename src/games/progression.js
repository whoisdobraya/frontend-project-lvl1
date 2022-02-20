import getNumber from '../modules/getNumber.js';
import getProgression from '../modules/getProgression.js';

const MAXIMUM_INDEX = 9;

const brainProgression = {
  maxNumber: 10,
  replacingNumber: 0,
  rule: 'What number is missing in the progression?',
  makeTask: () => {
    const progression = getProgression(brainProgression.maxNumber);
    const changingIndex = getNumber(MAXIMUM_INDEX);
    brainProgression.replacingNumber = progression[changingIndex];
    progression[changingIndex] = '..';
    return progression.join(' ');
  },
  correctAnswer: () => `${brainProgression.replacingNumber}`,
};

export default brainProgression;
