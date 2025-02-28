const button1 = document.getElementById("button1");

button1.addEventListener("click", first_interaction);

function first_interaction()  {
   alert("hey!")
}

var count = 0;
var button = document.getElementById("button1");
var countDisplay = document.getElementById("count");
button.addEventListener("click", function() {
   count++;
   countDisplay.innerHTML ="Times clicked: " + count;
});