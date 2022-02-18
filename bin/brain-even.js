#!/usr/bin/env node
import goPlay from '../src/index.js';

const brainEven = {
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
  getNumber() { return Math.floor(Math.random() * 100); },
  makeTask() {
    const number = this.getNumber();
    return number === 0 ? this.makeTask() : number;
  },
  correctAnswer(task) { return task % 2 === 0 ? 'yes' : 'no'; },
};
goPlay(brainEven);
