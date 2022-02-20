import getDiffOfProgression from './getDiffOfProgression.js';
import getNumber from './getNumber.js';

export default function getProgression(maxNumber) {
  const diffOfProgression = getDiffOfProgression(maxNumber);
  const firstNumber = getNumber(maxNumber);
  const task = [];
  let j = maxNumber;
  for (let i = firstNumber; j > 0; i += diffOfProgression) {
    task.push(i);
    j -= 1;
  }
  return task;
}
