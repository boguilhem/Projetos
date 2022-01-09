function calculator() {
  var operation = prompt(
    'Inform the operation you would like to do: \n 1- Sum \n 2- Subtract \n 3- Multiply \n 4- Divide'
  );

  switch (operation) {
    case '1':
      sum();
      break;
    case '2':
      subtract();
      break;
    case '3':
      multiply();
      break;
    case '4':
      divide();
      break;
    default:
      break;
  }
}

const sum = () => {
  var fisrtNumber = prompt('Type the first number: ');
  var secondNumber = prompt('Type the second number: ');
  var total = Number(fisrtNumber) + Number(secondNumber);
  var answer = alert('The total is: ' + total);
  return answer;
};

const subtract = () => {
  var fisrtNumber = prompt('Type the first number: ');
  var secondNumber = prompt('Type the second number: ');
  var difference = Number(fisrtNumber) - Number(secondNumber);
  var answer = alert('The difference is: ' + difference);
  return answer;
};

const multiply = () => {
  var fisrtNumber = prompt('Type the first number: ');
  var secondNumber = prompt('Type the second number: ');
  var product = Number(fisrtNumber) * Number(secondNumber);
  var answer = alert('The product is: ' + product);
  return answer;
};

const divide = () => {
  var fisrtNumber = prompt('Type the first number: ');
  var secondNumber = prompt('Type the second number: ');
  var quocient = Number(fisrtNumber) / Number(secondNumber);
  var answer = alert('The quocient is: ' + quocient);
  return answer;
};
