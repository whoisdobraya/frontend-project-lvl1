import getNumber from './getNumber.js';

const getDiffOfProgression = (maxNumber) => {
  const diffOfProgression = getNumber(maxNumber);
  return diffOfProgression === 0 ? getDiffOfProgression(maxNumber) : diffOfProgression;
};
export default getDiffOfProgression;
