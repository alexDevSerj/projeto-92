var question_number
var input_box
var check_buttom
var row

var player1_score = 0
var player2_score = 0

var question_turn = "player2"
var answer_turn = "player1"

var player2_name = localStorage.getItem("player2");
var player1_name = localStorage.getItem("player1");

question();

function send(){
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt(number2);

  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";

  question_number = "<center><h4>" + number1 + "X" + number2 + "</h4>";
  input_box = "<br>resposta : <input type='text' id='input_check_box'>";
  check_buttom = "<br><br><button class='btn btn-info' onclick='check()'>checar</buttom></center>"
  row = question_number + input_box + check_buttom ;

  document.getElementById("output").innerHTML = row;

} 

function check(){
  var get_answer = document.getElementById("input_check_box").value;
  if(get_answer == actual_answer){
    if(answer_turn == "player1"){
      player1_score = player1_score +1;
      document.getElementById("player1_score").innerHTML = player1_score;
      document.getElementById("player1_name").innerHTML = player1_name
    }else{
      player2_score = player2_score +1;
      document.getElementById("player2_score").innerHTML = player2_score;
      document.getElementById("player2_name").innerHTML = player2_name
    }  
  }
  question();
}

function question() {
  row = '<center>'+
        '  <p>número 1</p>'+
        '  <input type="text" placeholder="número 1" id="number1">'+
        '  <p>número 2</p>'+
        '  <input type="text" placeholder="número 2" id="number2">'+
        '  <br><br>'+
        '<button onclick="send()">enviar</button>'+
        '</center>';
  document.getElementById("output").innerHTML = row;
  
  if(question_turn == "player1"){
    question_turn = "player2"
    answer_turn = "player1"
    document.getElementById("player_question").innerHTML = "turno de pergunta - " + player2_name ;
    document.getElementById("player_answer").innerHTML = "turno de resposta - " + player1_name ;
  }else{
    question_turn = "player1"
    answer_turn = "player2"
    document.getElementById("player_question").innerHTML = "turno de pergunta - " + player1_name ;
    document.getElementById("player_answer").innerHTML = "turno de resposta - " + player2_name ;
  }
}