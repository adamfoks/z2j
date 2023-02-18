function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    alert("Nie można dzielić przez zero!")
  } else {
    return a / b;
  }
}

function modulo(a, b) {
  return a % b;
}

function nextOperation() {
  operator = prompt(`Wynik: ${numA} \nPodaj kolejny operator arytmetyczny (+, -, *, /, %):`);
}

let numA = +prompt("Podaj pierwszą liczbę:", "");
if (isNaN(numA)) {
  alert("Wprowadzona wartość nie jest liczbą!");
}

let operator = prompt("Podaj operator arytmetyczny (+, -, *, /, %):", "");
let numB;

while (
  operator == "+" ||
  operator == "-" ||
  operator == "*" ||
  operator == "/" ||
  operator == "%"
) {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      numB = +prompt("Podaj kolejną liczbę:", "");
      if (isNaN(numB)) {
        alert("Wprowadzona wartość nie jest liczbą!");
        break;
      }
      switch (operator) {
        case "+":
          numA = addition(numA, numB);
          break;
        case "-":
          numA = subtraction(numA, numB);
          break;
        case "*":
          numA = multiplication(numA, numB);
          break;
        case "/":
          numA = division(numA, numB);
          break;
        case "%":
          numA = modulo(numA, numB);
          break;
      }
      nextOperation();
      break;

    default:
      alert("Nieznany operator!");
      operator = prompt("Podaj operator arytmetyczny (+, -, *, /, %):", "");
  }
}




// best working solution

/* const inputNum1 = Number(prompt('Podaj pierwszą liczbę'));
const arithmeticOperator = prompt('Podaj operator arytmetyczny (+, -, *, / lub %)');
const inputNum2 = Number(prompt('Podaj drugą liczbę'));
let error = '';
let result = 0;
 
function add(num1, num2) { return num1 + num2; }
 
function subtract(num1, num2) { return num1 - num2; }
 
function multiply(num1, num2) { return num1 * num2; }
 
function divide(num1, num2) {
  if (num2 === 0) return 'Nie dziel przez 0!';
  else return num1 / num2;
}
 
function modulo(num1, num2) { return num1 % num2; }
 
function calculate(num1, arithmeticOperator, num2) {
  error = '';
  if (isNaN(num1) || isNaN(num2)) {
    error = 'Podane liczby są nieprawidłowe!';
    return 0;
  }
 
  switch (arithmeticOperator) {
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case '*': return multiply(num1, num2);
    case '/': return divide(num1, num2);
    case '%': return modulo(num1, num2);
    default:
      error = 'Nieprawidłowy operator!';
      return 0;
  }
}
 
function displayResult() {
  if (error) alert(error);
  else alert(result);
}
 
result = calculate(inputNum1, arithmeticOperator, inputNum2);
displayResult();
 
while(true) {
  const nextArithmeticOperator = prompt('Podaj operator arytmetyczny (+, -, *, / lub %). Zostaw puste żeby zakończyć.');
  if (!nextArithmeticOperator) break;
 
  const nextNum = Number(prompt('Podaj kolejną liczbę'));
  result = calculate(result, nextArithmeticOperator, nextNum);
  displayResult();
} */