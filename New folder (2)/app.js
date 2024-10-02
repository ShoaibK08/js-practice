const quiz = [
    { question: "What is the capital of France?", correctAnswer: "Paris" },
    { question: "Is JavaScript a programming language? (yes/no)", correctAnswer: "yes" },
    { question: "What is 5 + 3?", correctAnswer: "8" },
    { question: "Is Earth the third planet from the Sun? (yes/no)", correctAnswer: "yes" },
    { question: "What color is the sky on a clear day?", correctAnswer: "blue" },
    { question: "Is 10 greater than 15? (yes/no)", correctAnswer: "no" },
    { question: "What is the opposite of 'up'?", correctAnswer: "down" },
    { question: "Is water a solid at room temperature? (yes/no)", correctAnswer: "no" },
    { question: "Which planet is known as the Red Planet?", correctAnswer: "Mars" },
    { question: "How many legs does a spider have?", correctAnswer: "8" }
  ];
  
//   let currentQuestionIndex = 0;
  
//   function displayQuestion() {
//     const questionEl = document.getElementById('question');
//     const answerInput = document.getElementById('answer');
//     const resultEl = document.getElementById('result');
  
//     questionEl.innerText = quiz[currentQuestionIndex].question;
//     answerInput.value = '';
//     resultEl.innerText = '';
//   }
  
//   function checkAnswer() {
//     const answerInput = document.getElementById('answer').value.trim();
//     const correctAnswer = quiz[currentQuestionIndex].correctAnswer.toLowerCase();
//     const resultEl = document.getElementById('result');
  
//     if (answerInput.toLowerCase() === correctAnswer) {
//       resultEl.innerText = 'Correct!';
//       resultEl.style.color = 'green';
//     } else {
//       resultEl.innerText = 'Wrong! The correct answer is ' + quiz[currentQuestionIndex].correctAnswer;
//       resultEl.style.color = 'red';
//     }
//   }
  
//   function nextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < quiz.length) {
//       displayQuestion();
//     } else {
//       const quizContainer = document.getElementById('quiz-container');
//       quizContainer.innerHTML = '<h2>Quiz Completed!</h2>';
//     }
//   }
  
//   document.getElementById('checkBtn').addEventListener('click', checkAnswer);
//   document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  
//   // Display the first question on page load
//   displayQuestion();
  

const currentQuestionIndex = 0;


 function displayQ (){
     const questionEl= document.getElementById('question')
const answerInput = document.getElementById('answer')
const resultEl = document.getElementById('result')

     questionEl.innerText = quiz[currentQuestionIndex].question
      answerInput.value = '';
      resultEl.value = '';
 }

function checkAnswer(){
    const answerInput = document.getElementById('answer').value.trim();
    const resultEl = document.getElementById('result')
    const correctAnswer = quiz[currentQuestionIndex].correctAnswer.toLowerCase();

  if (answerInput===correctAnswer) {
     resultEl.innerHTML=" your answer is correct "
     resultEl.style.color= 'green'
}  else {
  resultEl.innerHTML=`your answer is  wrong  the Correct answer is ${correctAnswer} `
     resultEl.style.color= 'red'

}

}

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
      displayQuestion();
    } else {
      const quizContainer = document.getElementById('quiz-container');
      quizContainer.innerHTML = '<h2>Quiz Completed!</h2>';
    }
  }



document.getElementById('checkBtn').addEventListener('click', checkAnswer)
document.getElementById('nextBtn').addEventListener('click',nextQuestion)



displayQ();

