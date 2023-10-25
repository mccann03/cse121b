/*Variable*/
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const input = document.getElementById("input");
const answerContainer = answerContainer[questionNum];
const selector = `input[name=question${questionNum}]:checked`;
const userInput = (answerContainer.querySelector(selector)).value;

/* function to retrieve data from JSON file */
async function retrieveJSON() {
    await fetch("questions.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => console.log(data));
}

function generateQuiz() {
    const questionContainer = [];
    questions.forEach((askedQuestion, questionNum) => {
        const answerContainer = [];
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

function results() {
    const answerContainer = output.querySelectorAll(".answer");
    if (inputAnswer === askedQuestion.answer) {
        console.log("Congratulations! You got it right!");
    }
    else {
        console.log(`Sorry, the correct answer is ${answer}.`);
    }
}

generateQuiz();

submit.addEventListener("click", results);
