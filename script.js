//HOME BASKETBALL SCOREBOARD

let counter = 0;
let scoreOnScreen = document.getElementById("home_counter");

function homeScore1() {
    counter += 1;
    scoreOnScreen.textContent = counter;
}

let homeScoreOne = document.getElementById("home_one");
homeScoreOne.addEventListener("click", homeScore1);

function homeScore2() {
    counter += 2;
    scoreOnScreen.textContent = counter;
}

let homeScoreTwo = document.getElementById("home_two");
homeScoreTwo.addEventListener("click", homeScore2);

function homeScore3() {
    counter += 3;
    scoreOnScreen.textContent = counter;
}

let homeScoreThree = document.getElementById("home_three");
homeScoreThree.addEventListener("click", homeScore3);

//GUEST BASKETBALL SCOREBOARD

let counter2 = 0;
let scoreOnScreenGuest = document.getElementById("guest_counter");

function guestScore1() {
    counter2 += 1;
    scoreOnScreenGuest.textContent = counter2;
}

let guestScoreOne = document.getElementById("guest_one");
guestScoreOne.addEventListener("click", guestScore1);

function guestScore2() {
    counter2 += 2;
    scoreOnScreenGuest.textContent = counter2;
}

let guestScoreTwo = document.getElementById("guest_two");
guestScoreTwo.addEventListener("click", guestScore2);

function guestScore3() {
    counter2 += 3;
    scoreOnScreenGuest.textContent = counter2;
}

let guestScoreThree = document.getElementById("guest_three");
guestScoreThree.addEventListener("click", guestScore3);