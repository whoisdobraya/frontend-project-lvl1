const MAXIMUM_NUMBER = 100;

const brainEven = {
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
  getNumber() { return Math.floor(Math.random() * MAXIMUM_NUMBER); },
  makeTask() {
    const number = this.getNumber();
    return number === 0 ? this.makeTask() : number;
  },
  correctAnswer(task) { return task % 2 === 0 ? 'yes' : 'no'; },
};

export default brainEven;
