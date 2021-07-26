const numbers = [1, 2];
function getNumbers() {
  setTimeout(() => {
    numbers.forEach((number) => console.log(number));
  }, 1000);
}
function addNumber(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            numbers.push(number);
        resolve('success');
    });
  }, 2000);
}
addNumber(3)
.then(result => console.log(result))
addNumber(4)
.then(result => console.log(result))
getNumbers();
/*const promise1 = addNumber(3);
const promise2 = addNumber(4);
Promise.all([promise1,promise2])
.then(getNumbers);*/

