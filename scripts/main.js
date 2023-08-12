let myButton = document.querySelector("button");
let myHeading = document.querySelector("p");

function setUserName() {
    let myName = prompt("what's your name?");
    localStorage.setItem("Name", myName);
    myHeading.textContent = "It's awesome, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Awesome, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};