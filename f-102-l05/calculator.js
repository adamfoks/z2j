function dodawanie(a, b) {
    return a + b;
  }

  function odejmowanie(a, b) {
    return a - b;
  }

  function mnożenie(a, b) {
    return a * b;
  }

  function dzielenie(a, b) {
    if (b === 0) {
      alert("Nie można dzielić przez zero!")
    } else {
      return a / b;
    }
  }

  function modulo(a, b) {
    return a % b;
  }

  function nastepnyOperator() {
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
        numB = +prompt("Podaj kolejną liczbę:", "");
        if (isNaN(numB)) {
          alert("Wprowadzona wartość nie jest liczbą!");
          break;
        }
        numA = dodawanie(numA, numB);
        nastepnyOperator();
        break;

      case "-":
        numB = +prompt("Podaj kolejną liczbę:", "");
        if (isNaN(numB)) {
          alert("Wprowadzona wartość nie jest liczbą!");
          break;
        }
        numA = odejmowanie(numA, numB);
        nastepnyOperator();
        break;

      case "*":
        numB = +prompt("Podaj kolejną liczbę:", "");
        if (isNaN(numB)) {
          alert("Wprowadzona wartość nie jest liczbą!");
          break;
        }
        numA = mnożenie(numA, numB);
        nastepnyOperator();
        break;

      case "/":
        numB = +prompt("Podaj kolejną liczbę:", "");
        if (isNaN(numB)) {
          alert("Wprowadzona wartość nie jest liczbą!");
          break;
        }
        numA = dzielenie(numA, numB);
        nastepnyOperator();
        break;

      case "%":
        numB = +prompt("Podaj kolejną liczbę:", "");
        if (isNaN(numB)) {
          alert("Wprowadzona wartość nie jest liczbą!");
          break;
        }
        numA = modulo(numA, numB);
        nastepnyOperator();
        break;

      default:
        alert("Nieznany operator!");
        operator = prompt("Podaj operator arytmetyczny (+, -, *, /, %):", "");
    }
  }