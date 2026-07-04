


/** 
let name = prompt("Enter your name:");
document.getElementByClass("main").innerHTML = "Hello " + name;


alert("Hello, " + name + "! Welcome to the class.");

console.log("Test_01");
**/



function greet() {

    let name = prompt("What is your name? ");

    document.getElementById("output").innerHTML =
        "Hello " + name + "! Welcome to JavaScript.";

}

function dark(){

    document.body.classList.add("dark");

}

function light(){

    document.body.classList.remove("dark");

}