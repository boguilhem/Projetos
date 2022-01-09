function keylessCar() {
  console.log('What is your age?');
}

function checkDriverAge(age) {
  if (age < 18) {
    return 'Sorry, you are too young to drive this car. Powering off';
  } else if (age === 18) {
    return 'Congratulations on your first year of driving. Enjoy the ride!';
  } else if (age > 18) {
    return 'Powering On. Enjoy the ride!';
  }
}

var checkDriverAge2 = function () {
  var userAge = Number(prompt('What is your age?'));

  if (userAge < 18) {
    alert('Sorry, you are too young to drive this car. Powering off');
  } else if (userAge === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!');
  } else if (userAge > 18) {
    alert('Powering On. Enjoy the ride!');
  }
};

keylessCar();
