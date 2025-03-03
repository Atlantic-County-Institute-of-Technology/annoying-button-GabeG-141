let text = document.getElementById("text")
const button1 = document.getElementById("button1");

button1.addEventListener("click", annoy);

let clicks = 0;

const div = document.createElement("div");

function annoy()  {
clicks++;
   if (clicks == 1) {
text.innerHTML = "Hey! Stop that!";
} else if (clicks == 5) { text.innerHTML = "Stop it I said!";}
   else if (clicks == 10) {}}


var click_counter = 0;
var button = document.getElementById("button1");
var countDisplay = document.getElementById("click_counter");
button.addEventListener("click", function() {
   click_counter++;
   countDisplay.innerHTML ="Times clicked: " + click_counter;
});



