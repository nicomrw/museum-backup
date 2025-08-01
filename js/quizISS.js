var currentQuestionNoISS = 0;
var currentQuestionISS;
var points = 0;
var rightAnswerPoints = 10;


var questionsISS = [
  {
    id: "1",
    question: "Was ist die ISS?",
    answers: {
      A: "Ein Planet",
      B: "Ein Raumfahrtzentrum",
      C: "Eine Raumstation",
      D: "Eine Rakete",
    },
    right: "C",
  },
  {
    id: "2",
    question: "Wie viel wiegt die ISS?",
    answers: {
      A: "ca. 560t",
      B: "ca. 690t",
      C: "ca. 220t",
      D: "ca. 440t",
    },
    right: "D",
  },
  {
    id: "3",
    question: "Mit welcher Geschwindigkeit bewegt sich die ISS?",
    answers: {
      A: "13.400 km/h",
      B: "28.800 km/h",
      C: "26.100 km/h",
      D: "16.580 km/h",
    },
    right: "B",
  },
  {
    id: "4",
    question: "Wann wurden die ersten beiden Module der ISS verbunden?",
    answers: {
      B: "06. Dezember 1998",
      A: "07. April 2000",
      C: "17. September 1996",
      D: "24. Januar 1999",
    },
    right: "B",
  },
  {
    id: "5",
    question: "Wie lange benötigt die ISS ungefähr, um die Erde zu umkreisen?",
    answers: {
      A: "5 Stunden",
      B: "24 Stunden",
      C: "44 Stunden",
      D: "1,5 Stunden",
    },
    right: "D",
  },
  {
    id: "6",
    question: "Wofür wird die ISS genutzt?",
    answers: {
      A: "Um zu anderen Planeten zu fliegen",
      B: "Als Teleskop",
      C: "Zur Forschung",
      D: "Für militärische Zwecke",
    },
    right: "C",
  },
 // {
 //   id: "7",
 //   question:
 //     "Wie ist das Verhältnis von Sauerstoff und Stickstoff auf der ISS?",
 //   answers: {
 //     A: "21% Sauerstoff, 78% Stickstoff, 1% sonstige Gase",
 //     B: "48% Sauerstoff, 49% Stickstoff, 3% sonstige Gase",
 //     C: "64% Sauerstoff, 32% Stickstoff, 4% sonstige Gase",
 //     D: "84% Sauerstoff, 16% Stickstoff, 0% sonstige Gase",
 //   },
 //   right: "A",
 // },
  {
    id: "7",
    question: "Wie viele Quadratmeter haben die Solarzellen der ISS?",
    answers: {
      A: "1.500 m2",
      B: "500 m2",
      C: "4.500 m2",
      D: "3.500 m2",
    },
    right: "C",
  },
  {
    id: "8",
    question:
      "Welches der folgenden Länder ist nicht am Betrieb der ISS beteiligt?",
    answers: {
      A: "Schweden",
      B: "Finnland",
      C: "Norwegen",
      D: "Dänemark",
    },
    right: "B",
  },
  {
    id: "9",
    question: "Wie hieß die erste Raumstation im Weltall?",
    answers: {
      A: "Saljut 1",
      B: "ISS",
      C: "Mir",
      D: "Skylab",
    },
    right: "A",
  },
];

function showNextQuestionISS() {
  if (currentQuestionNoISS >= questionsISS.length) {
    showEnd();
    currentQuestionNoISS = 0;
  }
  console.log("Loading Question:" + currentQuestionNoISS);
  currentQuestionISS = questionsISS[currentQuestionNoISS];
  $("#qno").text(currentQuestionNoISS + 1);
  $("#question_text").text(currentQuestionISS.question);
  $("#answer_a").text(currentQuestionISS.answers.A);
  $("#answer_b").text(currentQuestionISS.answers.B);
  $("#answer_c").text(currentQuestionISS.answers.C);
  $("#answer_d").text(currentQuestionISS.answers.D);

  $(".answer").removeClass("btn-primary btn-danger btn-success btn-default");
  $(".answer").addClass("btn-default");
}

function getRightAnswer() {
  return currentQuestionISS.right;
}
