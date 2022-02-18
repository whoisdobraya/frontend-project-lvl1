import getUserName from './modules/getUserName.js';
import getAnswer from './modules/getAnswer.js';

export default (play) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  console.log(play.rule);

  for (let i = 0; i < 3; i += 1) {
    const playTask = play.makeTask();
    const correctAnswer = play.correctAnswer(playTask);

    console.log(`Question: ${playTask}`);
    const userAnswer = getAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
