const userInput = document.getElementById('divisor')
const resultText = document.getElementById('result')
const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', returnResult);


// Solution
function getTriangularNumber(n) {
  let triangularNumber= 0;
  let iteration = 0;

  while(true) {
    iteration ++
    triangularNumber= triangularNumber + iteration 
    
    let divisors = 0
    //Every triangular number has a number below and above its square root. 
    //If we find a divisor below its square root, there will automatically be a divisor above its square root hence divisor +=2
    for (i = 1; i < Math.sqrt(triangularNumber); i++) {
      if (triangularNumber % i === 0) {
        divisors += 2
      }
    }
    //if the squareRoot is an integer, it is also automatically a divisor 
    if (Number.isInteger(Math.sqrt(triangularNumber))) {
      divisors ++
    }

    //as per the problem, if the divisors exceed the number specified by the user, the triangular number is returned.
    if (divisors > n) {
      return triangularNumber
    }
  }
}

function returnResult() {
  console.log(getTriangularNumber(userInput.value))
  resultText.innerHTML = getTriangularNumber(userInput.value)
}

