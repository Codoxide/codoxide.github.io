const commonWords = [
    "the",
    "be",
    "of",
    "and",
    "a",
    "to",
    "in",
    "he",
    "have",
    "it",
    "that",
    "for",
    "they",
    "I",
    "with",
    "as",
    "not",
    "on",
    "she",
    "at",
    "by",
    "this",
    "we",
    "you",
    "do",
    "but",
    "from",
    "or",
    "which",
    "one",
    "would",
    "all",
    "will",
    "there",
    "say",
    "who",
    "make",
    "when",
    "can",
    "more",
    "if",
    "no",
    "man",
    "out",
    "other",
    "so",
    "what",
    "time",
    "up",
    "go",
    "about",
    "than",
    "into",
    "could",
    "state",
    "only",
    "new",
    "year",
    "some",
    "take",
    "come",
    "these",
    "know",
    "see",
    "use",
    "get",
    "like",
    "then",
    "first",
    "any",
    "work",
    "now",
    "may",
    "such",
    "give",
    "over",
    "think",
    "most",
    "even",
    "find",
    "day",
    "also",
    "after",
    "way",
    "many",
    "must",
    "look",
    "before",
    "great",
    "back",
    "through",
    "long",
    "where",
    "much",
    "should",
    "well",
    "people",
    "down",
    "own",
    "just",
    "because",
    "good",
    "each",
    "those",
    "feel",
    "seem",
    "how",
    "high",
    "too",
    "place",
    "little",
    "world",
    "very",
    "still",
    "nation",
    "hand",
    "old",
    "life",
    "tell",
    "write",
    "become",
    "here",
    "show",
    "house",
    "both",
    "between",
    "need",
    "mean",
    "call",
    "develop",
    "under",
    "last",
    "right",
    "move",
    "thing",
    "general",
    "school",
    "never",
    "same",
    "another",
    "begin",
    "while",
    "number",
    "part",
    "turn",
    "real",
    "leave",
    "might",
    "want",
    "point",
    "form",
    "off",
    "child",
    "few",
    "small",
    "since",
    "against",
    "ask",
    "late",
    "home",
    "interest",
    "large",
    "person",
    "end",
    "open",
    "public",
    "follow",
    "during",
    "present",
    "without",
    "again",
    "hold",
    "govern",
    "around",
    "possible",
    "head",
    "consider",
    "word",
    "program",
    "problem",
    "however",
    "lead",
    "system",
    "set",
    "order",
    "eye",
    "plan",
    "run",
    "keep",
    "face",
    "fact",
    "group",
    "play",
    "stand",
    "increase",
    "early",
    "course",
    "change",
    "help",
    "line"
];



const InputField = document.getElementById("UserInput");
var PopUp = document.getElementById("Result");
const TimeText = document.getElementById("Time");
const CorrectText = document.getElementById("Correct");
const IncorrectText = document.getElementById("Mistake");
const AccuracyPercent = document.getElementById("Accuracy");
const TypeText = document.getElementById("TypeTxt");
const CapLockDiv = document.getElementById("Caps");
var PauseTime = false;
var shuffledArray = shuffleArray(commonWords);

var paragraph = shuffledArray.join(" ");
TypeText.textContent = capitalizeFirstLetter(getFirst50Words(paragraph)) + ".";
let TimerIndex = 0;
var CanCountDown = false;
let TimerCountDown = 15;
let charIndex = 0;
let correctLetterCount = 0;
let incorrectLetterCount = 0;
var timerElement = document.getElementById("TimeTxt");
var RawWpm = document.getElementById("RawWpm");
var Wpm = document.getElementById("Wpm");
var InputField2 = document.getElementById("UserInput");
var disabled = false;
var capsLockPressed = false; // Initialize the boolean variable

// Wrap each character with a span element
const typeTextContent = TypeText.textContent;
TypeText.innerHTML = [...typeTextContent].map((char) => `<span>${char}</span>`).join("");
var CurrentWriteAllWords = TypeText.querySelectorAll("span");
CurrentWriteAllWords[0].classList.add("U");
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "CapsLock") {
        capsLockPressed = !capsLockPressed; // Toggle the state of the Caps Lock key
        CapLockDiv.style.opacity = 1;

    }
    InputField.focus();


    if (correctLetterCount < 1) {
        correctLetterCount = 0;
    }
    if (incorrectLetterCount < 1) {
        incorrectLetterCount = 0;
    }


    var CurrentWriteAllWords = TypeText.querySelectorAll("span");
    var CurrentMyWord = InputField.value.charAt(charIndex);
    if (key == "Enter") {
        location.reload();
    }

    if (key === "Backspace" && disabled == false) {
        console.log(incorrectLetterCount);

        if (charIndex > 0) {

            console.log(incorrectLetterCount);
            if (CurrentWriteAllWords[charIndex - 1].classList.contains("correct")) {
                correctLetterCount -= 2;
                console.log(correctLetterCount, CurrentWriteAllWords[charIndex].classList.contains("correct"));
            }
            else if (CurrentWriteAllWords[charIndex - 1].classList.contains("incorrect")) {
                incorrectLetterCount -= 2;
                console.log(incorrectLetterCount, CurrentWriteAllWords[charIndex].classList.contains("incorrect"));

            }
            charIndex -= 2;

        }
        else if (charIndex == 0) {
            if (CurrentWriteAllWords[charIndex].classList.contains("correct")) {
                correctLetterCount -= 2;
            }
            else if (CurrentWriteAllWords[charIndex].classList.contains("incorrect")) {
                incorrectLetterCount -= 2;
            }
            charIndex -= 2;

        }
        else if (charIndex < 0) {

            charIndex = 0;
        }
        let index = charIndex


        while (index < CurrentWriteAllWords.length) {
            index += 1;
            var CurrentWriteWord2 = TypeText.querySelectorAll("span")[index];
            if (CurrentWriteWord2) {
                CurrentWriteWord2.classList.add("regular");
                CurrentWriteWord2.classList.remove("incorrect");
                CurrentWriteWord2.classList.remove("correct");
                CurrentWriteWord2.classList.remove("incorrectSpace");
                CurrentWriteWord2.classList.remove("U");

            }
        }

        index = charIndex;
    }

});
function moveUpLine(inputString) {
    // Split the input string into an array of lines
    const lines = inputString.split('\n');

    // Check if there are more than one line
    if (lines.length <= 1) {
        return inputString; // No need to move up if only one line
    }

    // Move up the lines
    const firstLine = lines.shift(); // Remove the first line and store it
    lines.push(firstLine); // Add the first line to the end of the array

    // Join the lines back into a string with '\n' separator
    const movedUpString = lines.join('\n');

    return movedUpString;
}
var Once = 0;
function CorrectTyping() {
    if (disabled == false) {
        Update();

        var CurrentWriteAllWords100 = TypeText.querySelectorAll("span");

        CurrentWriteAllWords100[charIndex + 1].classList.add("U");
        CurrentWriteAllWords100[charIndex].classList.remove("U");
        while (TimerIndex < 1) {
            startCountdown();
            TimerIndex += 1;
        }

        var CurrentWriteWord = TypeText.querySelectorAll("span")[charIndex];
        var CurrentMyWord = InputField.value.charAt(charIndex);

        if (CurrentWriteWord && CurrentWriteWord.textContent === CurrentMyWord) {
            console.log("Correct");
            if (CurrentWriteWord) {
                CurrentWriteWord.classList.add("correct");
                CurrentWriteWord.classList.remove("regular");


            }
            charIndex += 1;
            correctLetterCount += 1;

        }
        else {
            console.log("Incorrect");
            if (CurrentWriteWord) {
                CurrentWriteWord.classList.add("incorrect");
                CurrentWriteWord.classList.remove("regular");
                if (CurrentWriteWord.textContent == " ") {
                    CurrentWriteWord.classList.add("incorrectSpace");
                    CurrentWriteWord.classList.remove("regular");
                }

            }
            charIndex += 1;
            incorrectLetterCount += 1;
        }
    }
}


function Update() {
    console.log(TypeText.textContent.length, charIndex);
    if (charIndex >= (TypeText.textContent.length - 1)) {
        PauseTime = true;
        disabled = true;

        var CurrentWriteAllWords = TypeText.querySelectorAll("span");

        CurrentWriteAllWords[charIndex].classList.remove("U");

        var CurrentWriteWord = TypeText.querySelectorAll("span")[charIndex];
        var CurrentMyWord = InputField.value.charAt(charIndex);

        if (CurrentWriteWord && CurrentWriteWord.textContent === CurrentMyWord) {
            console.log("Correct");
            if (CurrentWriteWord) {
                CurrentWriteWord.classList.add("correct");
                CurrentWriteWord.classList.remove("regular");


            }
            charIndex += 1;
            correctLetterCount += 1;

        }
        else {
            console.log("Incorrect");
            if (CurrentWriteWord) {
                CurrentWriteWord.classList.add("incorrect");
                CurrentWriteWord.classList.remove("regular");
                if (CurrentWriteWord.textContent == " ") {
                    CurrentWriteWord.classList.add("incorrectSpace");
                    CurrentWriteWord.classList.remove("regular");
                }

            }
            charIndex += 1;
            incorrectLetterCount += 1;
        }

        // var words = CurrentWriteAllWords.trim().split(/\s+/);

        // Extract the first 50 words using slice
        // var first50Words = words.slice(0, charIndex + 1);

        // Join the words back into a string using spaces
        // var result = first50Words.join(' ');
        var CorrectIndex = 0;
        var IncorrectIndex = 0;

        var CorrectLetterCountCurrent = 0;
        var IncorrectLetterCountCurrent = 0;
        while (CorrectIndex < getFirstCharIndexWords(TypeText.textContent).length) {
            if (CurrentWriteAllWords[CorrectIndex].classList.contains("correct")) {
                CorrectLetterCountCurrent += 1;
            }
            console.log(CorrectIndex);
            CorrectIndex += 1;

        }
        while (IncorrectIndex < getFirstCharIndexWords(TypeText.textContent).length) {
            if (CurrentWriteAllWords[IncorrectIndex].classList.contains("incorrect") || CurrentWriteAllWords[IncorrectIndex].classList.contains("incorrectSpace")) {
                IncorrectLetterCountCurrent += 1;
            }
            IncorrectIndex += 1;

        }
        AccuracyPercent.textContent = ((CorrectLetterCountCurrent / (IncorrectLetterCountCurrent + CorrectLetterCountCurrent)) * 100).toFixed(1) + "%";
        const intValue = parseInt(timerElement.textContent); // Convert the string to an integer

        CorrectText.textContent = "Correct: " + CorrectLetterCountCurrent;
        IncorrectText.textContent = "Incorrect: " + IncorrectLetterCountCurrent;

        Wpm.textContent = "Wpm: " + Math.round((CorrectLetterCountCurrent / 5) * (60 / (duration - intValue)))
        RawWpm.textContent = "Raw Wpm: " + Math.round(((CorrectLetterCountCurrent + IncorrectLetterCountCurrent) / 5) * (60 / (duration - intValue)))
        TimeText.textContent = "Time: " + (duration - intValue) + "s";

        PopUp.style.animation = 'slide-up 0.5s ease';
        PopUp.style.opacity = 1;
    }
}





var countdown;
var duration = 15; // Timer duration in seconds

function startCountdown() {

    // Clear any previous countdown
    clearTimeout(countdown);

    // Get the current time
    var startTime = Date.now();

    // Function to update the timer display
    function updateTimer() {

        var currentTime = Date.now();

        var elapsedTime = Math.floor((currentTime - startTime) / 1000);

        var remainingTime = duration - elapsedTime;


        if (remainingTime <= 0) {
            // Countdown has finished
            timerElement.textContent = "0";
            disabled = true;
            var CurrentWriteAllWords = TypeText.querySelectorAll("span");
            // var words = CurrentWriteAllWords.trim().split(/\s+/);

            // Extract the first 50 words using slice
            // var first50Words = words.slice(0, charIndex + 1);

            // Join the words back into a string using spaces
            // var result = first50Words.join(' ');
            var CorrectIndex = 0;
            var IncorrectIndex = 0;

            var CorrectLetterCountCurrent = 0;
            var IncorrectLetterCountCurrent = 0;
            while (CorrectIndex < getFirstCharIndexWords(TypeText.textContent).length) {
                if (CurrentWriteAllWords[CorrectIndex].classList.contains("correct")) {
                    CorrectLetterCountCurrent += 1;
                }
                console.log(CorrectIndex);
                CorrectIndex += 1;

            }
            while (IncorrectIndex < getFirstCharIndexWords(TypeText.textContent).length) {
                if (CurrentWriteAllWords[IncorrectIndex].classList.contains("incorrect") || CurrentWriteAllWords[IncorrectIndex].classList.contains("incorrectSpace")) {
                    IncorrectLetterCountCurrent += 1;
                }
                IncorrectIndex += 1;

            }
            AccuracyPercent.textContent = ((CorrectLetterCountCurrent / (IncorrectLetterCountCurrent + CorrectLetterCountCurrent)) * 100).toFixed(1) + "%";
            TimeText.textContent = "Time: " + duration + "s";
            CorrectText.textContent = "Correct: " + CorrectLetterCountCurrent;
            IncorrectText.textContent = "Incorrect: " + IncorrectLetterCountCurrent;

            Wpm.textContent = "Wpm: " + Math.round((CorrectLetterCountCurrent / 5) * (60 / duration))
            RawWpm.textContent = "Raw Wpm: " + Math.round(((CorrectLetterCountCurrent + IncorrectLetterCountCurrent) / 5) * (60 / duration))

            PopUp.style.animation = 'slide-up 0.5s ease';
            PopUp.style.opacity = 1;
            return;
        }

        var hours = Math.floor(remainingTime / 3600);
        var minutes = Math.floor((remainingTime % 3600) / 60);
        var seconds = remainingTime % 60;

        var formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        timerElement.textContent = seconds;

        // Schedule the next update
        if (PauseTime == false) {
            countdown = setTimeout(updateTimer, 1000);


        }
    }

    // Start the countdown
    updateTimer();

}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
function getFirst50Words(longString) {
    // Remove leading/trailing whitespace and split the string into an array of words
    var words = longString.trim().split(/\s+/);

    // Extract the first 50 words using slice
    var first50Words = words.slice(0, 70);

    // Join the words back into a string using spaces
    var result = first50Words.join(' ');

    return result;
}
function getFirst20Words(longString) {
    // Remove leading/trailing whitespace and split the string into an array of words
    var words = longString.trim().split(/\s+/);

    // Extract the first 50 words using slice
    var first50Words = words.slice(0, 50);

    // Join the words back into a string using spaces
    var result = first50Words.join(' ');

    return result;
}
function getFirstCharIndexWords(longString) {
    // Remove leading/trailing whitespace and split the string into an array of words
    var words = longString.trim().split(/\s+/);

    // Extract the first 50 words using slice
    var first50Words = words.slice(0, charIndex + 1);

    // Join the words back into a string using spaces
    var result = first50Words.join(' ');

    return result;
}



document.addEventListener("keydown", () => InputField.focus());
TypeText.addEventListener("click", () => InputField.focus());

InputField.addEventListener("input", function (event) {
    var key = event.data; // Get the entered character

    // Skip the function if the backspace key is pressed
    if (key === "Backspace") {

        return;
    }

    // Call the CorrectTyping function for other input events
    CorrectTyping();
});
InputField.addEventListener("keyup", function (event) {

    if (event.getModifierState("CapsLock")) {
        console.log("Caps On");
    } else {
        CapLockDiv.style.opacity = 0;
    }
});














