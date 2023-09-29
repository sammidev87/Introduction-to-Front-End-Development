// Output the typed-in information on the screen, as an <h1> element
let answer = prompt("What is your name?");
if (typeof(answer) === "string") {
    var h1 = document.createElement("h1");
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

/* Script that will take an input from a form 
and display the text that a user types in on the screen */
var h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change.";

var input = document.createElement("input");
input.setAttribute("type", "text");

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

//adding an event listener to the code above
input.addEventListener('change', function() {
    console.log(input.value);
    /* editing the text content of the h1 element 
    with the value of the input field */
    h1.innerText = input.value;
})