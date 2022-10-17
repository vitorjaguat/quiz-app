///////////Create quiz:
import quizData from "./quizData.js";

const questionInput = document.getElementById('question-input');
const answerInput = document.querySelectorAll('answer-input');
const submitInput = document.getElementById('submit');

submitInput.addEventListener('click', () => {
    const newQA = {};
    const newQuestion = questionInput.value;
    answerInput.forEach((answer, i) => {
        const letters = [a,b,c,d];
        newQA[letters[i]] = answer.value;
    })
    newQA.question = newQuestion
    quizData.push(newQA);
})