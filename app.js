function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    let element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let element = document.getElementById(`choice${i}`);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress");
  element.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

function showScores() {
  let gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += `<h1 id="score">Your score: ${quiz.score}</h1>`;
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

const questions = [
  new Question(
    "Which one is not an object oriented programming language?",
    ["Java", "C#", "C++", "C"],
    "C"
  ),
  new Question(
    "Which question is used for styling web pages?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),

  new Question(
    "There are _____ main components of object oriented programming.",
    ["1", "6", "2", "4"],
    "4"
  ),

  new Question(
    "Which language is used for web apps?",
    ["PHP", "Python", "Javascript", "All"],
    "All"
  ),

  new Question(
    "MVC is a _____.",
    ["Language", "Library", "Framework", "All"],
    "Framework"
  ),
];

let quiz = new Quiz(questions);

populate();
