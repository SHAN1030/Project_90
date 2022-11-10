score_2 = 0;
score_1 = 0;

document.getElementById("player1_name").innerHTML = localStorage.getItem("player1_name") + ": " + score_2;
document.getElementById("player2_name").innerHTML = localStorage.getItem("player2_name") + ": " + score_1;

document.getElementById("question_turn").innerHTML = "Question Turn - " + localStorage.getItem("player1_name");
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + localStorage.getItem("player2_name");

function send(output) {
    $("#"+"output").show();
    num_1= document.getElementById("number_1").value;
    num_2= document.getElementById("number_2").value;
    localStorage.setItem("number_1", num_1);
    localStorage.setItem("number_2", num_2);
    document.getElementById("output_2").innerHTML = localStorage.getItem("number_1") + " x " + localStorage.getItem("number_2") + ' = ';
}


