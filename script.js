var numLike = 0;
var likeButton = document.querySelector("#likec");
function likef() {
    numLike++;
    likeButton.innerHTML = numLike;
}

function alertf() {
 getRandomFact();
}

var elem = document.getElementById("disappearingb");
function disappearingf() {
    elem.parentNode.removeChild(elem);
}

function mouseoverf(element) {
    element.style.backgroundColor = "lime";
}

function mouseoutf(element) {
    element.style.backgroundColor = "grey";
}

///////////////////////

// need to fetch data from an API

async function getRandomFact() {
    var response = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    var randomFact = await response.json();
    console.log(randomFact.text);

    document.querySelector("#facts").innerText = randomFact.text

    
}

getRandomFact();

function getImage(){
    var width = document.querySelector("#width").value;
    console.log(width)
    document.querySelector("#keanuimg").src = "https://placekeanu.com/" + width;
}