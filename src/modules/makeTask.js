import getNumber from './getNumber.js';

const makeTask = (maxNumber) => {
  const number = getNumber(maxNumber);
  return number === 0 ? makeTask() : number;
};
export default makeTask;
