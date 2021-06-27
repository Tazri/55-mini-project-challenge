// track element
const quizBox = document.querySelector('.quiz-box');
const questionHeader = document.querySelector('.question');
const questionA = document.getElementById('a');
const questionB = document.getElementById('b');
const questionC = document.getElementById('c');
const questionD = document.getElementById('d');
const labelA = document.getElementById('label-a');
const labelB = document.getElementById('label-b');
const labelC = document.getElementById('label-c');
const labelD = document.getElementById('label-d');
const scoreBox = document.querySelector('.score');
const options = document.querySelectorAll('.input-option');
const scoreValue= document.getElementById('score-value');
const submitButton = document.getElementById('submit');
const reloadButton = document.getElementById('reload');


// nessecary variable
const totalQuestion = data.length;
let currentQuestion = 0;
let score = 0;

// submitQuestion function
function submitQuestion(){
    // find about user answare
    let [checked, userAnswer,questionRadio] = isUserCheckTheQuestion();

    // if Question is not finish and user checked
    if(checked && !isQuestionIsFinish()){
        // extract correct answer
        let correctAnswer = data[currentQuestion].correct;

        // uncheck the question
        questionRadio.checked = false;

        // update score
        correctAnswer == userAnswer && score++;

        // load next question
        currentQuestion++;
        loadQuestion();
    }else if(isQuestionIsFinish()){
        // hide the quizBox and show the scoreBox with score
        scoreValue.innerText = score;
        quizBox.classList.add('hide');
        scoreBox.classList.remove('hide');
    }
}

// userCheckTheQuestion function
function isUserCheckTheQuestion(){
    for(let i = 0; i < 4;i++){
        // check it checked the user then return true
        if(options[i].checked){
            return [true,options[i].value,options[i]];
        } 
    }

    // if user not check anything 
    return [false];
}

// isQuestionIsFinish function
function isQuestionIsFinish(){
    return currentQuestion + 1 >= totalQuestion;
}

// loadQuestion function
function loadQuestion(){
    // get question
    let questionObject = data[currentQuestion];

    // extract questionObject
    let {
        question,
        a,
        b,
        c,
        d
    } = questionObject;

    // update question
    questionHeader.innerText = question;
    questionA.value = a;
    questionB.value = b;
    questionC.value = c;
    questionD.value = d;

    // update label
    labelA.innerText = a;
    labelB.innerText = b;
    labelC.innerText = c;
    labelD.innerText = d;
}

// add event listener on submit button
submitButton.addEventListener('click',submitQuestion);

// add event listener on reloadButton
reloadButton.addEventListener('click',event=>{
    location.reload();
})

// intial call function
loadQuestion();
isUserCheckTheQuestion();