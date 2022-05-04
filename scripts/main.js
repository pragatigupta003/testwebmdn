const myHeading = document.querySelector('h3');
myHeading.textContent = 'Hello world!';

document.querySelector('#test-id').addEventListener('click', function() {
    alert("Ouch! Stop poking me!");
});     //when hit element with id as test-id pop-up will appear

let myheading = document.querySelector('h2');
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name. Non-void name plz');
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myheading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myheading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}