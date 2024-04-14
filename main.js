// Setup stuff
const wordList = document.getElementById("wordlist");

let words = [];
for (let i = 0; i < 3; i++) {
    words[i] = prompt("Please enter a word.");
}
displayList(words);


/* CAPITAL BUTTON */

// Displays the words in all-capital letters.
// On-click function for button id="caps"
function capitalise() {
    document.getElementById("wordlist").style.color = "black";
    let newList = words.map(caps);
    displayList(newList);
}

// Returns the text converted to uppercase.
function caps(text) {
    return text.toUpperCase();
}

// Empties the displayed words and displays new words.
function displayList(list) {
    wordList.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        let item = document.createElement("li");
        item.textContent = list[i];
        wordList.appendChild(item);
    }
}

/* RED BUTTON */
const redButton = document.getElementById("red");
redButton.addEventListener("click", function() {
    document.getElementById("wordlist").style.color = "red";
});

/* SWAP BUTTON */
const swapButton = document.getElementById("swap");
swapButton.addEventListener("click", swapList(wordList));

function swapList(list) {
    document.getElementById("wordlist").style.color = "black";
}

function swap(text) {
    console.log(text.)
}

