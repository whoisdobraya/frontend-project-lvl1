import getNumber from './getNumber.js';

export default function getDiffOfProgression(maxNumber) {
  const diffOfProgression = getNumber(maxNumber);
  return diffOfProgression === 0 ? getDiffOfProgression() : diffOfProgression;
}
