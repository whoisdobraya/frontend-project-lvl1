export default function makeTask() {
  const number = this.getNumber(this.maxNumber);
  return number === 0 ? this.makeTask() : number;
}
