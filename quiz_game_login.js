function addUser(){
    player1_var_name = document.getElementById("input1").value;
    player2_var_name = document.getElementById("input2").value;

    localStorage.setItem("player1_name" , player1_var_name);
    localStorage.setItem("player2_name" , player2_var_name);

    window.location = "quiz_game_page.html";
}