let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc=== 'images/margiela20hc20rs17200299.jpg'){
        myImage.setAttribute ('src','images/mm3.jpg');
    }else {
        myImage.setAttribute ('src','images/margiela20hc20rs17200299.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Please,enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'take a look at the Maison Margiela face dress, ' + myName;
}

if (!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'take a look at the Maison Margiela face dress, ' + storedName;
}

myButton.onclick = function (){
    setUserName();
}