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
async function displayNumbers () {
  getNumbers();
  console.log("hello world");
    const returnResultNo3 = await addNumber(3);
    console.log(returnResultNo3);
    const returnResultNo4 =await addNumber(4);
    console.log(returnResultNo4);
    getNumbers();
}
displayNumbers();