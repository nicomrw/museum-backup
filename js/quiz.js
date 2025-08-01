var currentQuestionNo = 0;
var currentQuestion;
var points = 0;
var rightAnswerPoints = 10;


var questions = [
  {
    id: "1",
    question: "Wer ist Alexander Gerst?",
    answers: {
      A: "Ein Astronaut",
      B: "Ein Sänger",
      C: "Ein Sternekoch",
      D: "Ein Rennfahrer",
    },
    right: "A",
  },
  {
    id: "2",
    question: "Wann flog Alexander Gerst das erste Mal zur ISS?",
    answers: {
      A: "26. Juni 2017",
      B: "28. Mai 2014",
      C: "17. März 2011",
      D: "04. Januar 2015",
    },
    right: "B",
  },
  {
    id: "3",
    question: "Wo ist Alexander Gerst aufgewachsen?",
    answers: {
      A: "Stuttgart",
      B: "Künzelsau",
      C: "Schwäbisch Hall",
      D: "Crailsheim",
    },
    right: "B",
  },
  {
    id: "4",
    question: "Wann ist Alexander Gerst geboren?",
    answers: {
      A: "29.7.1984",
      B: "20.2.1983",
      C: "20.12.1963",
      D: "03.05.1976",
      
 //     A: "29. Juli 1984",
 //     B: "20. Feburar 1983",
  //    C: "11. Dezember 1963",
   //   D: "03. Mai 1976",
    },
    right: "D",
  },
  {
    id: "5",
    question: "Wie alt war Alexander Gerst bei seinem ersten Flug ins Weltall?",
    answers: {
      A: "42 Jahre",
      B: "53 Jahre",
      C: "47 Jahre",
      D: "38 Jahre",
    },
    right: "C",
  },
  {
    id: "6",
    question: "Wann wurde Alexander Gerst zum Astronauten ernannt?",
    answers: {
      A: "22. November 2010",
      B: "16. Juni 2012",
      C: "03. März 2009",
      D: "25. September 2011",
    },
    right: "A",
  },
  {
    id: "7",
    question:
      "Der wie vielte deutsche Astronaut war Alexander Gerst auf der ISS?",
    answers: {
      A: "Er war der Erste",
      B: "Er war der Zweite",
      C: "Er war der Dritte",
      D: "Er war der Vierte",
    },
    right: "C",
  },
  {
    id: "8",
    question:
      "Wie viele Tage verbrachte Alexander Gerst bei seinem ersten Flug im Weltall?",
    answers: {
      A: "256 Tage",
      B: "128 Tage",
      C: "312 Tage",
      D: "165 Tage",
    },
    right: "D",
  },
  {
    id: "9",
    question:
      "Welchen Titel bekam Alexander Gerst während seines zweiten Aufenthalts auf der ISS?",
    answers: {
      A: "Bordbiologe",
      D: "ISS-Kommandant",
      C: "Bord-Funker",
      B: "ISS-Ingenieur",
    },
    right: "D",
  },
  {
    id: "10",
    question: "Welcher Organisation gehört Alexander Gerst an?",
    answers: {
      A: "DLR",
      D: "NASA",
      C: "Roskosmos",
      B: "ESA",
    },
    right: "B",
  },
];


function showNextQuestion() {
  if (currentQuestionNo >= questions.length) {
    showEnd();
    currentQuestionNo = 0;
  }
  console.log("Loading Question:" + currentQuestionNo);
  currentQuestion = questions[currentQuestionNo];
  $("#qno").text(currentQuestionNo + 1);
  $("#question_text").text(currentQuestion.question);
  $("#answer_a").text(currentQuestion.answers.A);
  $("#answer_b").text(currentQuestion.answers.B);
  $("#answer_c").text(currentQuestion.answers.C);
  $("#answer_d").text(currentQuestion.answers.D);

  $(".answer").removeClass("btn-primary btn-danger btn-success btn-default");
  $(".answer").addClass("btn-default");
}


function getRightAnswer() {
  return currentQuestion.right;
}
