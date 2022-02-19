import getNumber from '../modules/getNumber.js';

const MAXIMUM_NUMBER = 10;
const MAXIMUM_INDEX = 9;

const brainProgression = {
  rule: 'What number is missing in the progression?',
  replacingNumber: 0,
  getNumber,
  getProgression() {
    const progression = this.getNumber(MAXIMUM_NUMBER);
    return progression === 0 ? this.getProgression() : progression;
  },

  makeTask() {
    const progression = this.getProgression();
    const firstNumber = this.getNumber(MAXIMUM_NUMBER);
    const task = [];
    let j = MAXIMUM_NUMBER;
    for (let i = firstNumber; j > 0; i += progression) {
      task.push(i);
      j -= 1;
    }
    const changingIndex = this.getNumber(MAXIMUM_INDEX);
    this.replacingNumber = task[changingIndex];
    task[changingIndex] = '..';
    return task.join(' ');
  },
  correctAnswer() { return `${this.replacingNumber}`; },
};
export default brainProgression;
