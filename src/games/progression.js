import getNumber from '../modules/getNumber.js';
import getProgression from '../modules/getProgression.js';

const MAXIMUM_INDEX = 9;

const brainProgression = {
  maxNumber: 10,
  replacingNumber: 0,
  rule: 'What number is missing in the progression?',
  getNumber,
  makeTask() {
    const progression = getProgression(this.maxNumber);
    const changingIndex = this.getNumber(MAXIMUM_INDEX);
    this.replacingNumber = progression[changingIndex];
    progression[changingIndex] = '..';
    return progression.join(' ');
  },
  correctAnswer() { return `${this.replacingNumber}`; },
};
export default brainProgression;
