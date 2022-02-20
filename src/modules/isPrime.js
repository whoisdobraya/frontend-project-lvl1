export default (task) => {
  if (task === 1) {
    return false;
  }
  let answer = true;
  for (let i = 2; i < task; i += 1) {
    if (task % i === 0) {
      answer = false;
      break;
    }
  }
  return answer;
};
