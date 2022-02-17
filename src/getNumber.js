const getNumber = () => {
  const number = Math.floor(Math.random() * 100);
  if (number === 0) {
    return getNumber();
  }
  return number;
};
export default getNumber;
