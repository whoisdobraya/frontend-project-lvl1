import readlineSync from 'readline-sync';

const getUserName = () => {
  const gotName = readlineSync.question('May I have your name? ');
  return gotName === '' ? 'Anonymous' : gotName;
};
export default getUserName;
