#!/usr/bin/env node

import getUserName from '../src/modules/getUserName.js';

console.log('Welcome to the Brain Games!');

const userName = getUserName() || 'Anonymous';
const greeting = `Hello, ${userName}!`;
console.log(greeting);
