let primeNumbers = [2];
let index = 0;
let sum = 0;
let isPrime = true;
function primeSum () {
  let total = document.getElementById("sum");

    for (let currentNumber = 3; currentNumber < 3000; currentNumber++) {

      for (let x = primeNumbers.length; x > 0; x--) {

        if (currentNumber % primeNumbers[index] == 0) {
          x = 0;
          isPrime = false;
        }
        index++;

      }

      if (isPrime) {
        primeNumbers.push(currentNumber);
      }
      index = 0;
      isPrime = true;

    }

    for (let x = primeNumbers.length; x > 0; x--) {
      sum = sum + primeNumbers[x-1];
    };

    total.innerHTML = "Sum: " + sum;
    sum = 0;
    
}
