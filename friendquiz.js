var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your Name ");

console.log("Hello ", userName, "!!!", "How well do you know Yogesh? ");

var TotalScore = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question)
  if (userAns === answer) 
  {
    console.log("Right")
    TotalScore = +1
  } 
  else 
  {
    console.log("wrong")
  }
  console.log("Your total score is", TotalScore);
  console.log("-----------------")
}


var questions = [{ question:"Where does he live? ", answer:"mumbai"},
  { question:"What does he like? ", answer:"tea" }];


for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}