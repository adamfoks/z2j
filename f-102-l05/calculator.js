/* const num1 = parseFloat(prompt('Podaj pierwszą liczbę:'));
const operator = prompt('Podaj operator arytmetyczny (+, -, *, /, %):');
const num2 = parseFloat(prompt('Podaj druga liczbę:'));

if (isNaN(num1) || isNaN(num2)) {
    alert("Proszę wprowadzić liczbę!");
} else {

    if (operator === "+") {

        let result;

        result = num1 + num2;
        alert(result);
    } else if (operator === "-") {
        result = num1 - num2;
        alert(result);
    } else if (operator === "*") {
        result = num1 * num2;
        alert(result);
    } else if (operator === "/") {

        if (num2 == 0) {
            result = alert("Nie można dzielić przez zero!");
        } else {
            result = num1 / num2;
            alert(result);
        }
    } else if (operator === "%") {
        result = num1 % num2;
        alert(result);
    } else {
        alert('Wprowadz właściwe dane!');
    }
};
 */



const num1 = parseFloat(prompt('Podaj pierwszą liczbę:'));
const operator = prompt('Podaj operator arytmetyczny (+, -, *, /, %):');
const num2 = parseFloat(prompt('Podaj druga liczbę:'));

if (isNaN(num1) || isNaN(num2)) {
    alert("Proszę wprowadzić liczbę!");
} else {
    function sum(num1, num2) {
        alert (num1 + num2);
    }
    sum(num1, num2);
}