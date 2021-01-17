const quizData = [


{
   question : " Which of the following is not an economic activity?",

   a: "Production",
   b:"Social service",
   c:"Professional",
   d:"Trading in goods",
   correct:"b",
},
{
   question : "Which option is not a business activity?",

   a: "Production of goods ",
   b:"Transportation",
   c:"Excahnge of goods",
   d:"Work in a factory for wages",

   correct:"d",
},
{
   question : " Which of the following is the characteristic of a business?",

   a: "Production",
   b:"Excahnge or sale",
   c:"Risk element",
   d:"All of above",

   correct:"d",
},
{
   question : " Oil refinery and sugar mill are classified under which industries?",

   a: "Primary",
   b:"Tertiary",
   c:"Secondary",
   d:"All of Above",

   correct:"c",
},

{
   question : " Identify the activity which does not support trade",

   a: "Banking",
   b:"Warehouse",
   c:"Insurance",
   d:"Mining",

   correct:"d",
},
{
   question : " Which item does not cause any business risk?",

   a: "Breakdown of machinery",
   b:"Efficient",
   c:"Riot",
   d:"Chnaging government policy",

   correct:"d",
},
{
   question : " In which occupation do people get salary or wages in return for their work?",

   a: "Employment",
   b:"business",
   c:"Profeesion",
   d:"None of Above",

   correct:"a",
},
{
   question : "  In which business, the support service activities are categorized?",

   a: "Commerical industries",
   b:"primary industries",
   c:"Seconday Industries",
   d:"Tertiary industries",

   correct:"d",
},
{
   question : " In business, why is it essential to make a profit?",

   a: "It provides a return to investors",
   b:"It provides funds for future extension",
   c:"It provides funds for future extension",
   d:"All the above",

   correct:"d",
},
{
   question : " Which of the following is not a management function?",

   a: "Planning",
   b:"staffing",
   c:"Cooperating",
   d:"Controlling",

   correct:"c",
}

]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz () {
  deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

}

loadQuiz();


function getSelected () {

      let answer = undefined;

      answerEls.forEach((answerEL)=> {
            if(answerEL.checked)
            {
            	answer = answerEL.id;
            }
      	
      });

      return answer;

	}

function deselectAnswers () {
	answerEls.forEach(answerEL=> {
            answerEL.checked = false;
      	
      });
}

submit.addEventListener("click", ()=>{

  const answer = getSelected();
   
   if(answer){
         if(answer === quizData[currentQuiz].correct){

         	score++;
         }
         
         currentQuiz++;

         if(currentQuiz < quizData.length){
         	loadQuiz();
         }
         else{
         	quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>`;
         }

   }











});