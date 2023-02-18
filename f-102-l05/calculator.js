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