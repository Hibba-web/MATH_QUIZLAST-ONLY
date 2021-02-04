    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");

    player1_score = 0 ; 
    player2_score = 0 ; 

    document.getElementById("player1_name&score").innerHTML = player1_name + " : " + player1_score; 
    document.getElementById("player2_name&score").innerHTML = player2_name + " : " + player2_score;

    document.getElementById("player_question&player").innerHTML = "Question Turn : " + player1_name;
    document.getElementById("player_answer&player").innerHTML = "Answer Turn : " + player2_name;

function send(){
    number1 = document.getElementById("input_no1").value; 
    number2 = document.getElementById("input_no2").value;
    actual_answer = parseInt(number1) * parseInt(number2); 

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
    input_box = "<input type='text' id= 'input_check_box'>"
    check_button = "<br> <br> <button class='btn btn-info'id='btn_check' style='width:75%; height:50px; xfont-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button ; 

    document.getElementById("output").innerHTML= row;

    document.getElementById("input_no1").value= "";
    document.getElementById("input_no2").value= "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_name&score").innerHTML = player1_name + " : " + player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_name&score").innerHTML = player2_name + " : " + player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question&player").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question&player").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer&player").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer&player").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}


