var user = {
  username: 'user1',
  password: 'password1'
};

var database = [user];

var newsFeed = [
  { username: 'Bobby', timeline: 'So tired from all that learning!' },
  { username: 'Sally', timeline: 'Javascript is soo cool!' },
  { username: 'Mitch', timeline: 'Javascript is awesome!' }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert('Sorry, wrong username or password!');
  }
}

signIn(userNamePrompt, passwordPrompt);
