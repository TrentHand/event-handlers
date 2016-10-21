//global variables

var outputTarget = document.getElementById("output-target");
var sectionTarget = document.getElementsByClassName("article-section");
var h1Target = document.getElementById("page-title");
var keypressInput = document.getElementById("keypress-input");
var addColor = document.getElementById("add-color");
var makeLarge = document.getElementById("make-large");
var guineaPig = document.getElementById("guinea-pig");
var addBorder = document.getElementById("add-border");
var addRounding = document.getElementById("add-rounding");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section" ***DONE


function handleSectionClick (event) {
	outputTarget.innerHTML ="You clicked on the " + event.target.innerHTML+ " section!";
}
for (var i = 0; i < sectionTarget.length; i++){
	sectionTarget.item(i).addEventListener("click", handleSectionClick);
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header". ***DONE

h1Target.addEventListener("mouseenter", mouseOverEvent);

function mouseOverEvent () {
	outputTarget.innerHTML = "You moved your mouse over the header.";
}

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!". ***DONE

h1Target.addEventListener("mouseleave", mouseLeaveEvent);

function mouseLeaveEvent () {
	outputTarget.innerHTML = "You left me!";
}

// When you type characters into the input field, the output element should mirror the text in the input field. ***DONE***

keypressInput.addEventListener("keyup", printTypedWords);

function printTypedWords () {
	outputTarget.innerHTML = keypressInput.value;
}

// When you click the "Add color" button, the guinea-pig element's text color should change to blue. ***DONE***

addColor.addEventListener("click", makeBlue);

function makeBlue() {
	guineaPig.classList.add("makeblue");
}


// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.***DONE***

makeLarge.addEventListener("click", enlarge);

function enlarge() {
	guineaPig.classList.add("bigify");
}


// When you click the "Capture it" button, the guinea-pig element should have a border added to it.***DONE***

addBorder.addEventListener("click", bordered);

function bordered() {
	guineaPig.classList.add("border");
}



// When you click the "Rounded" button, the guinea-pig element's border should become rounded.***DONE***

addRounding.addEventListener("click", rounder);

function rounder() {
	guineaPig.classList.add("rounder");
}

