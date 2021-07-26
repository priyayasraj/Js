const numbers = [1, 2];
function getNumbers(numbers) {
  setTimeout(() => {
    numbers.forEach((number) => console.log(number));
  }, 1000);
}
function addNumber(number, callBack) {
  setTimeout(() => {
    numbers.push(number);
    callBack(numbers);
  }, 2000);
}
addNumber(3, getNumbers);
addNumber(4,getNumbers);
