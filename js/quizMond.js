
var currentQuestionNoMond = 0;
var currentQuestionMond;
var points = 0;
var rightAnswerPoints = 10;


var questionsMond = [{
    "id": "1",
    "question": "Was ist der Mond?",
    "answers": {
      "A": "Ein Planet",
      "B": "Ein Schiff",
      "C": "Eine Brotschneidemaschine",
      "D": "Eine unerforschte Welt"
    },
    "right": "A"
  }, {
    "id": "2",
    "question": "Wie viel wiegt der Mond?",
    "answers": {
      "A": "Eine Tonne",
      "B": " 10.000 Pfund",
      "C": "300.000 Kg",
      "D": "1,25% der Erdmasse"
    },
    "right": "D"
  }, {
    "id": "3",
    "question": "Mit welcher Geschwindigkeit bewegt sich der Mond?",
    "answers": {
      "A": "800 km/h",
      "B": "1.023 km/s",
      "C": "100 km/h",
      "D": "5.628 km/s"
    },
    "right": "B"
  }, {
    "id": "4",
    "question": "Wann wurde der Mond das erste Mal betreten?",
    "answers": {
      "C": "21. Juli 1969",
      "B": "08. Juni 1945",
      "A": "16. April 1990",
      "D": "28. Juli 1962"
    },
    "right": "C"
  }, {
    "id": "5",
    "question": "Wie lange benötigt der Mond ungefähr, um die Erde zu umkreisen?",
    "answers": {
      "A": "50 Tage",
      "B": "31 Tage",
      "C": "12 Tage",
      "D": "27 Tage"
    },
    "right": "D"
  }, {
    "id": "6",
    "question": "Wofür wird der Mond genutzt?",
    "answers": {
      "A": "Um zu anderen Planeten zu fliegen",
      "B": "Als Teleskop",
      "C": "Zur Forschung",
      "D": "Für militärische Zwecke"
    },
    "right": "C"
  }, {
    "id": "7",
    "question": "Aus was besteht der Mond?",
    "answers": {
      "A": "Basaltgestein",
      "B": "Marmor",
      "C": "Kalkstein",
      "D": "Granit"
    },
    "right": "A"
  }, {
    "id": "8",
    "question": "Wie groß ist die Fläche des Mondes?",
    "answers": {
      "A": "932.330 km2",
      "B": "5.337.932 km2",
      "C": "37.932.330 km2",
      "D": "83.632.530 km2"
    },
    "right": "C"
  }, {
    "id": "9",
    "question": "Was beeinflusst der Mond?",
    "answers": {
      "A": "Die Temperatur",
      "B": "Die Ebbe und Flut",
      "C": "Den Tag und Nacht Wechsel",
      "D": "Die Zeit"
    },
    "right": "B"
  }, {
    "id": "10",
    "question": "Wie weit ist der Mond durchschnittlich von der Erde entfernt?",
    "answers": {
      "A": "384.403 Kilometer",
      "B": "500 Kilometer",
      "C": "805.692 Kilometer",
      "D": "386.792 Kilometer"
    },
    "right": "A"
  }
  ];

  
  function showNextQuestionMond() {

    if (currentQuestionNoMond >= questionsMond.length) {
      showEnd();
      currentQuestionNoMond = 0;
    }
    console.log("Loading Question:" + currentQuestionNoMond);
    currentQuestionMond = questionsMond[currentQuestionNoMond];
    $("#qno").text(currentQuestionNoMond + 1);
    $("#question_text").text(currentQuestionMond.question);
    $("#answer_a").text(currentQuestionMond.answers.A);
    $("#answer_b").text(currentQuestionMond.answers.B);
    $("#answer_c").text(currentQuestionMond.answers.C);
    $("#answer_d").text(currentQuestionMond.answers.D);
  
    $(".answer").removeClass("btn-primary btn-danger btn-success btn-default");
    $(".answer").addClass("btn-default");
  }
  
  
  function getRightAnswer() {
    return currentQuestionMond.right;
  }