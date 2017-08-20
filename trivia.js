// Javascript trivia engine

// Add all the questions, answers, and responses to object

// Game
function Game(category){
  var all_questions = {
    example: [
      {
        question: 'What is the tallest mountain in the world?',
        answers: [
          'Mt. Everest',
          'Jeff',
          'Mt. Fuji',
          'My. Olympia',
        ]
      },
      {
        question: 'What is the tallest mountain in the world?',
        answers: [
          'Mt. Everest',
          'Bob',
          'Mt. Fuji',
          'My. Olympia',
        ]
      },
      {
        question: 'What is the tallest mountain in the world?',
        answers: [
          'Mt. Everest',
          'Mt. McKinley',
          'Mt. Fuji',
          'Steve',
        ]
      },
      {
        question: 'What is the tallest mountain in the world?',
        answers: [
          'Mt. Everest',
          'Mt. McKinley',
          'Mt. Fuji',
          'Brad',
        ]
      },
      {
        question: 'What is the tallest mountain in the world?',
        answers: [
          'Mt. Everest',
          'Mt. McKinley',
          'Jim',
          'My. Olympia',
        ]
      },
    ]
  }

  var questions = all_questions[category]
  var correct = 0;
  var total = 0;
  var currentTimer = 10;
  var currentInterval;
  var current_question;
  var current_answer;

  // Update theme
  function ClearBoard(){
    currentTimer = 10;
    $("#timer").empty()
    $("#answers").empty()
    $("#current-question").empty()
  }

  function NextQuestion(){
    ClearBoard()

    var rand_question_index = Math.floor(Math.random()*questions.length)
    var question = questions.splice(rand_question_index, 1)[0]

    current_question = question
    current_answer = question.answers[0]

    $("#current-question").text(question.question)
    $("#score").text(correct+"/"+total)

    while(question.answers.length){
        var rand_answer_index = Math.floor(Math.random()*question.answers.length)
        var answer_text = question.answers.splice(rand_answer_index, 1)

        var answer_card = $('<div>', {
          class: "answer-card"
        }).text(answer_text)

        answer_card.on("click", function(){
          console.log($(this).text())
          if($(this).text() === current_answer){
            guess(true)
          } else {
            guess(false)
          }
        })

        $('#answers').append(answer_card)
    }

    $('#timer').text(currentTimer)
    currentInterval = setInterval(function(){
      currentTimer -= 1
      if(currentTimer < 0){
        guess(false);
      } else {
        $('#timer').text(currentTimer)
      }
    }, 1000)
  }

  function guess(is_right){
    ClearBoard()
    clearInterval(currentInterval)
    total++

    if(is_right){
      correct++
    }

    $("#score").text(correct+"/"+total)

    if(questions.length){
      NextQuestion()
    } else {
      alert('Done!')
      return
    }

  }

  NextQuestion()
}

$("#newgame").click(function(){
  var category = $("#categories").val()
  console.log(category)
  Game(category)
})

// Game has current score
// Current question
// Current timer

// init game
// set category
// update theme??

// New question:
//  Get random question from selected category
//  Update game window
//    update question
//    update answers
//  start question

// Start Question:
// Unlock answer buttons
// Start timer

// Answer event:
// Lock answers
// Buttons send event with their answer to this function
// Check that answer is == question.answer
// If it is
    // Correct
// Else
    // Incorrect

// Correct
// Increment score
// enable next question button

// Incorrect
// enable next question button

// Windows
// Top row has a button for starting new games and selecting categories
// Next row is the game window
//    Player score, current timer,
//    Current question
//    Possible answers
