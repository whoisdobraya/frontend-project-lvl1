import readlineSync from 'readline-sync';

export const getUserName = () => {
	 const userName = readlineSync.question('May I have your name? ');
	 if (userName === '') {
		console.log(`Hello, anonymous!`);
	 } else {
		console.log(`Hello, ${userName}!`);
	 }
};