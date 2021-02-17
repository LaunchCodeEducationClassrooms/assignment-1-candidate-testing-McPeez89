const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5000 meters = 5 kilometers. ", "3) (5+3)/2*10=? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];
let questionsCorrect = 0;




function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('What is your name? ');
  
console.log(`Candidate Name: ${candidateName}\n`);
}





/*function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswer = input.question(question);

if (candidateAnswer.toUpperCase() === correctAnswer.toUpperCase()){

  console.log(`That's correct, the answer is ${correctAnswer}!`);

}else{

  console.log(`I'm sorry, that's incorrect.`);

}

}*/



function askQuestion() {

let i = 0;

while (i < questions.length) {

 candidateAnswers.push(input.question(questions[i]));

  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}\n`);

  i++;

  }

}





function gradeQuiz(candidateAnswers) {

  if(candidateAnswers[0].toUpperCase() === correctAnswers[0].toUpperCase()) {

    questionsCorrect += 1
  }

 if(candidateAnswers[1].toUpperCase() === correctAnswers[1].toUpperCase()) {

    questionsCorrect += 1
  }

 if(candidateAnswers[2].toUpperCase() === correctAnswers[2].toUpperCase()) {

    questionsCorrect += 1
  } 

if(candidateAnswers[3].toUpperCase() === correctAnswers[3].toUpperCase()) {

    questionsCorrect += 1
  }

if(candidateAnswers[4].toUpperCase() === correctAnswers[4].toUpperCase()) {

    questionsCorrect += 1
  } 

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


let quizLength = questions.length
let grade = ((questionsCorrect) / (quizLength))*100
  
  if(grade >= 80){
    console.log(`>>> Overall Grade: ${grade}% (${questionsCorrect} of ${questions.length} responses correct) <<<\n>>> Status: PASSED <<< `)
  }else{
    console.log(`>>> Overall Grade: ${grade}% (${questionsCorrect} of ${questions.length} responses correct) <<<\n>>> Status: FAILED <<< `)

  }
  
  return grade;
  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};