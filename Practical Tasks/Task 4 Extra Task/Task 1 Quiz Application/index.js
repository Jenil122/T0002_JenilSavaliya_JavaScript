const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correct: "Mars",
  },
  {
    id: 3,
    question: "Who wrote 'Hamlet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Leo Tolstoy",
    ],
    correct: "William Shakespeare",
  },
  {
    id: 4,
    question: "Which of these is a mammal?",
    options: ["Snake", "Lion", "Crocodile", "Turtle"],
    correct: "Lion",
  },
  {
    id: 5,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    correct: "H2O",
  },
  {
    id: 6,
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    correct: "Leonardo da Vinci",
  },
  {
    id: 7,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "India", "South Korea"],
    correct: "Japan",
  },
];

const questionData = document.getElementById("questionData");
const optionsData = document.getElementById("optionData");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const numberOfQuiz = document.getElementById("numberOfQuiz");
const submit = document.getElementById("submit");
const endQuiz = document.getElementById("endQuiz");
const Quiz = document.getElementById("Quiz");
const maxLength = questions.length;
let current = 0;
let count = 0;

const loadData = (current) => {
  optionsData.innerHTML = "";
  numberOfQuiz.innerHTML = `${current + 1} out of ${maxLength}`;
  questionData.innerHTML = `${questions[current].question}`;
  questions[current].options.forEach((opt, idx) => {
    optionsData.innerHTML += `<label for=${idx}><input type="radio" id=${idx} name="radio" value="${opt}"> ${opt}</label><br>`;
  });
  updateButtonState();
};

const updateButtonState = () => {
  previous.disabled = current === 0;
  next.disabled =
    current === maxLength - 1 
};

const previousQuestion = () => {
  if (current > 0) {
    current--;
    loadData(current);
  }
};

const nextQuestion = () => {
  if (current < maxLength - 1) {
    current++;
    loadData(current);
  }
};

const submitAns = () => {
  const selectedOption = document.querySelector('input[name="radio"]:checked');
  if (selectedOption && selectedOption.value === questions[current].correct) {
    count++;
  }
  
};

const restart = () => {
  window.location.reload();
};

const finalScore = () => {
  submitAns();
  Quiz.innerHTML = `<div class="showAns">
      <p>Your Correct Ans is ${Math.floor(count/2)} out of ${maxLength}</p>
      <button onClick="restart()" id="resetBtn">Restart</button>
  </div>`;
};



loadData(current);
next.addEventListener("click", () => {
  submitAns();
  nextQuestion();
});
previous.addEventListener("click", previousQuestion);
submit.addEventListener("click", submitAns);
endQuiz.addEventListener("click", finalScore);
