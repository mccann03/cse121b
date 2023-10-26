/*Variable*/
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const input = document.getElementById("input");
const answerContainer = answerContainer[questionNum];
const selector = `input[name=question${questionNum}]:checked`;
const userInput = (answerContainer.querySelector(selector)).value;

/* function to retrieve data from JSON file */
async function retrieveJSON() {
    await fetch("scripts/question.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => console.log(data));
}

/* function to build quiz */
function generateQuiz() {
    const questionContainer = [];
    questions.forEach((askedQuestion, questionNum) => {
        answerContainer = [];
        for (letter in askedQuestion.answer) {
            answer.push(
                `<input type="radio" name="question${questionNum}" value="letter">
                ${letter} :
                ${askedQuestion.answer[letter]}`
            );
        }
        output.push();
            }
        );
        questionContainer.innerHTML = output.join('');
}

/* function to determine result of question and output string depending
on whether it was right or wrong */
function results() {
    answerContainer = output.querySelectorAll(".answer");
    if (inputAnswer === askedQuestion.answer) {
        console.log("Congratulations! You got it right!");
    }
    else {
        console.log(`Sorry, the correct answer is ${answer}.`);
    }
}

generateQuiz();

submit.addEventListener("click", results);
