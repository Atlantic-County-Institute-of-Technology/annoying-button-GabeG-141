let text = document.getElementById("text")
const button1 = document.getElementById("button1");
const button2 = document.createElement("button");
let CL = document.getElementById("body");
const TFC = document.getElementById("TFC");
 


button1.addEventListener("click", annoy);

let clicks = 0;

const div = document.createElement("div");

function annoy()  {
clicks++;
   if (clicks == 1) {
text.innerHTML = "Hey! Stop that!";
} else if (clicks == 2){
   text.innerHTML = "it was a joke I wasn't going to blind you!"
}
 else if (clicks == 5) { 
   text.innerHTML = "Stop it I said!";
}

   else if (clicks == 10) {
      text.innerHTML = "Stop clicking me!";
   }

   else if (clicks == 20) {
      button1.classList.add("angry");
      text.innerHTML = "You'll neve click me now!";
   } else if (clicks == 21){
      text.innerHTML = "Damn it!";
button1.classList.remove("angry")
   } else if (clicks == 25) {
      button2.innerHTML = "PRESS ME";
      button2.classList.add("button1");
      button2.classList.add("button2");
      container.appendChild(button2);
      button2.classList.add("visib");
   } else if (clicks == 35) {
      CL.classList.add("CL","black");
      text.classList.add("textCA");
      text.innerHTML ="Fine, no more click counter for you";
      button2.classList.remove("visib");
   } else if (clicks == 40) {
      text.innerHTML ="Last warning"
   } else if (clicks == 45) {
      text.innerHTML = "get closer, dont be shy"
   } else if (clicks == 50) {
      text.innerHTML = "half an inch away from the screen would be preferable"
   } else if (clicks == 51) {
      TFC.classList.replace("TFC" , "TFCvis")
      TFC.play();
   }}


var click_counter = 0;
var button = document.getElementById("button1");
var countDisplay = document.getElementById("click_counter");
button.addEventListener("click", function() {
   click_counter++;
   countDisplay.innerHTML ="Times clicked: " + click_counter;
})