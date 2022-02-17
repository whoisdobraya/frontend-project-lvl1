#!/usr/bin/env node

import getUserName from '../src/cli.js';
import getNumber from '../src/getNumber.js';
import getAnswer from '../src/getAnswer.js';
import getCorrectAnswer from '../src/getCorrectAnswer.js';

console.log('Welcome to the Brain Games!');

const userName = getUserName() || 'Anonymous';
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const number = getNumber();
  const correctAnswer = getCorrectAnswer(number);
  console.log(`Question: ${number}`);
  const userAnswer = getAnswer();
  console.log(`Your answer: ${userAnswer}`);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
