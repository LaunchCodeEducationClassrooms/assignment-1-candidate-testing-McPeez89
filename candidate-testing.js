const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = [ 'Who was the first American woman in space? ',  'True or false: 5 kilometer == 5000 meters? ',  '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];




function askForName() {
  /*// TODO 1.1b: Ask for candidate's name //*/
candidateName = input.question('What is your name? ');
  
}






function askQuestion() {

let i = 0;

while (i < questions.length) {

 candidateAnswers.push(input.question(questions[i]));

  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}\n`);

    i++;

  }

}





let questionsCorrect = 0;

function gradeQuiz(candidateAnswers) {

  if(candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase()) {

    questionsCorrect += 1;
  }

 if(candidateAnswers[1].toLowerCase() === correctAnswers[1].toLowerCase()) {

    questionsCorrect += 1;
  }

 if(candidateAnswers[2].toLowerCase() === correctAnswers[2].toLowerCase()) {

    questionsCorrect += 1;
  } 

if(candidateAnswers[3].toLowerCase() === correctAnswers[3].toLowerCase()) {

    questionsCorrect += 1;
  }

if(candidateAnswers[4].toLowerCase() === correctAnswers[4].toLowerCase()) {

    questionsCorrect += 1;
  } 


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //


let grade = (questionsCorrect / questions.length) * 100
  console.log(`>>>Overall Grade: ${grade}% (${questionsCorrect} of ${questions.length} responses correct)<<<`);

if (grade >= 80){
    console.log(`>>>Status: Passed<<<`);
} else {
    console.log( `>>>Status: Failed<<<`);
}
 
return grade;
  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Name: ${candidateName}\n`);

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