function ResetScores() {
    localStorage.removeItem("TestStartedInt");
    localStorage.removeItem("TestCompletedInt");
    localStorage.removeItem("HighestRawWpmInt");
    localStorage.removeItem("AverageRawWpmInt");
    localStorage.removeItem("HighestWpmInt");
    localStorage.removeItem("AverageWpmInt");
    localStorage.removeItem("HighestAccuracyInt");
    localStorage.removeItem("AverageAccuracyInt2");
    Button3.style.animation = "ClickReset 0.15s ease";
    Button3.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
    Button3.style.color = "white";
}





const arabicWords = [
    'أنا',
    'هو',
    'هي',
    'نحن',
    'أنت',
    'أنتم',
    'هم',
    'هن',
    'هذا',
    'هذه',
    'ذلك',
    'أين',
    'ما',
    'من',
    'إلى',
    'عن',
    'عليه',
    'مع',
    'لكن',
    'كما',
    'كان',
    'به',
    'علي',
    'منذ',
    'عند',
    'لأن',
    'كيف',
    'حين',
    'لماذا',
    'متى',
    'إذا',
    'حتى',
    'لو',
    'ولكن',
    'إن',
    'إذ',
    'إلا',
    'في',
    'من',
    'مع',
    'على',
    'لكل',
    'ماذا',
    'منذ',
    'ماذا',
    'مع',
    'ومع',
    'على',
    'وعلى',
    'في',
    'وفي',
    'كيف',
    'وكيف',
    'كان',
    'وكان',
    'به',
    'وبه',
    'علي',
    'وعلي',
    'منذ',
    'ومنذ',
    'عند',
    'وعند',
    'لأن',
    'ولأن',
    'لكن',
    'ولكن',
    'إلى',
    'وإلى',
    'أنا',
    'وأنا',
    'أنت',
    'وأنت',
    'أنتم',
    'وأنتم',
    'أنتن',
    'وأنتن',
    'هو',
    'وهو',
    'هي',
    'وهي',
    'نحن',
    'ونحن',
    'هم',
    'وهم',
    'هن',
    'وهن',
    'هذا',
    'وهذا',
    'هذه',
    'وهذه',
    'ذلك',
    'وذلك',
    'هنا',
    'وهنا',
    'ثم',
    'وثم',
    'فقط',
    'أي',
    'ولأي',
    'ليس',
    'وليس',
    'حاليا',
    'حوالي',
    'كثيرا',
    'قليلا',
    'أكثر',
    'أقل',
    'بالتأكيد',
    'يمكن',
    'ممكن',
    'شيء',
    'لا شيء',
    'كل شيء',
    'الكثير',
    'القليل',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'قوي',
    'ضعيف',
    'صعب',
    'سهل',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل',
    'بارد',
    'حار',
    'رطب',
    'جاف',
    'نظيف',
    'قذر',
    'قوي',
    'ضعيف',
    'جيد',
    'سيء',
    'صغير',
    'كبير',
    'قديم',
    'جديد',
    'سريع',
    'بطيء',
    'رائع',
    'جميل',
    'عادي',
    'ممتع',
    'ممل',
    'بسيط',
    'صعب',
    'خفيف',
    'ثقيل'];
























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
var X = localStorage.getItem("Mag");
var capitalizeFirstLetterBool = localStorage.getItem("IsButton1on");
var ArabicOn = localStorage.getItem("IsButton2on");


if (X == null) {
    localStorage.setItem("Mag", "U");
}
var string = localStorage.getItem("Mag");

function NoMag() {

    string = "U";
    localStorage.setItem("Mag", string);

}

function YesMag() {

    string = "UMag";
    localStorage.setItem("Mag", string);
}

const InputField = document.getElementById("UserInput");
var PopUp = document.getElementById("Result");
let TestStarted = document.getElementById("Started_Tests");
let TestCompleted = document.getElementById("Completed_Tests");
let HighestRawWpmHTML = document.getElementById("Highest_RawWpm");
let AverageRawWpmHTML = document.getElementById("Average_RawWpm");
let HighestWpmHTML = document.getElementById("Highest_Wpm");
let AverageWpmHTML = document.getElementById("Average_Wpm");
let HighestAccuracyHTML = document.getElementById("Highest_Accuracy");
let AverageAccuracyHTML = document.getElementById("Average_Accuracy");


const TimeText = document.getElementById("Time");
const CorrectText = document.getElementById("Correct");
const IncorrectText = document.getElementById("Mistake");
let AccuracyPercent = document.getElementById("Accuracy");
let TypeText = document.getElementById("TypeTxt");
let CapLockDiv = document.getElementById("Caps");
var PauseTime = false;
var shuffledArray = shuffleArray(commonWords);
var TestStartedInt = 0;
var TestCompletedInt = 0;


var paragraph = shuffledArray.join(" ");
if (TypeText != null) {
    if (capitalizeFirstLetterBool == "true") {
        TypeText.style.direction = "ltr";
        TypeText.style.fontFamily = "monospace";
        TypeText.style.lineHeight = "1.6";
        TypeText.style.wordSpacing = "2px";
        TypeText.style.letterSpacing = "0px";
        TypeText.style.fontSize = "28px";
        TypeText.textContent = capitalizeFirstLetter(getFirst50Words(paragraph)) + ".";
    }
    else {
        TypeText.style.direction = "ltr";
        TypeText.style.fontSize = "28px";
        TypeText.style.lineHeight = "1.6";
        TypeText.style.wordSpacing = "2px";
        TypeText.style.letterSpacing = "0px";

        TypeText.style.fontFamily = "monospace";

        TypeText.textContent = getFirst50Words(paragraph) + ".";
    }

    if (ArabicOn == "true") {
        TypeText.style.direction = "rtl";
        TypeText.style.fontSize = "32px";
        TypeText.style.letterSpacing = "1.5px";
        TypeText.style.lineHeight = "2.0";

        TypeText.style.wordSpacing = "5px";
        TypeText.style.fontFamily = "system-ui";

        var shuffledArray = shuffleArray(arabicWords);
        var paragraph = shuffledArray.join(" ");
        TypeText.textContent = getFirst50Words(paragraph) + ".";
    }


}
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
CurrentWriteAllWords[0].classList.add(string);
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

    if (key === "Backspace" && disabled == false && charIndex > 0) {

        if (charIndex > 0) {
            charIndex -= 2;
            console.log(charIndex);

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
                CurrentWriteWord2.classList.remove(string);

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
const pathname = window.location.pathname;

// Extract the file name from the pathname
const parts = pathname.split('/');
const fileName = parts[parts.length - 1];
if (fileName == "Scores.html") {
    var GetTestStartedInt = JSON.parse(localStorage.getItem("TestStartedInt"));
    var GetTestCompletedInt = JSON.parse(localStorage.getItem("TestCompletedInt"));

    var GetHighestRawWpm = JSON.parse(localStorage.getItem("HighestRawWpmInt"));
    var GetAverageRawWpm = JSON.parse(localStorage.getItem("AverageRawWpmInt"));

    var GetHighestWpm = JSON.parse(localStorage.getItem("HighestWpmInt"));
    var GetAverageWpm = JSON.parse(localStorage.getItem("AverageWpmInt"));

    var GetHighestAccuracy = JSON.parse(localStorage.getItem("HighestAccuracyInt"));
    var GetAverageAccuracy = JSON.parse(localStorage.getItem("AverageAccuracyInt2"));
    if (GetTestStartedInt == null) {
        TestStarted.textContent = "Started Tests: 0";
    }
    else {
        TestStarted.textContent = "Started Tests: " + GetTestStartedInt;
    }


    if (GetTestCompletedInt == null) {
        TestCompleted.textContent = "Completed Tests: 0";
    }
    else {
        TestCompleted.textContent = "Completed Tests: " + GetTestCompletedInt;
    }


    if (GetHighestRawWpm == null) {
        HighestRawWpmHTML.textContent = "Highest Raw Wpm: 0";
    }
    else {
        HighestRawWpmHTML.textContent = "Highest Raw Wpm: " + GetHighestRawWpm;
    }

    if (GetAverageRawWpm == null) {
        AverageRawWpmHTML.textContent = "Average Raw Wpm: 0";
    }
    else {
        AverageRawWpmHTML.textContent = "Average Raw Wpm: " + GetAverageRawWpm;
    }




    if (GetAverageWpm == null) {
        AverageWpmHTML.textContent = "Average Wpm: 0";
    }
    else {
        AverageWpmHTML.textContent = "Average Wpm: " + GetAverageWpm;
    }

    if (GetHighestWpm == null) {
        HighestWpmHTML.textContent = "Highest Wpm: 0";
    }
    else {
        HighestWpmHTML.textContent = "Highest Wpm: " + GetHighestWpm;
    }



    if (GetAverageAccuracy == null) {
        AverageAccuracyHTML.textContent = "Average Accuracy: 0%";
    }
    else {
        AverageAccuracyHTML.textContent = "Average Accuracy: " + GetAverageAccuracy + "%";
    }



    if (GetHighestAccuracy == null) {
        HighestAccuracyHTML.textContent = "Highest Accuracy: 0%";
    }
    else {
        HighestAccuracyHTML.textContent = "Highest Accuracy: " + GetHighestAccuracy + "%";
    }
}
function CorrectTyping() {
    const pathname = window.location.pathname;

    // Extract the file name from the pathname
    const parts = pathname.split('/');
    const fileName = parts[parts.length - 1];
    if (disabled == false) {
        Update();

        var CurrentWriteAllWords100 = TypeText.querySelectorAll("span");
        if(charIndex >= 0)
        {
            CurrentWriteAllWords100[charIndex + 1].classList.add(string);
            CurrentWriteAllWords100[charIndex].classList.remove(string);
        }
        else
        {
            CurrentWriteAllWords100[0].classList.add(string);
        }
        while (TimerIndex < 1) {
            TestStartedInt += 1;
            var X = JSON.parse(localStorage.getItem("TestStartedInt"));
            X += 1;
            localStorage.setItem("TestStartedInt", X);
            startCountdown();
            TimerIndex += 1;
        }


        var CurrentWriteWord = TypeText.querySelectorAll("span")[charIndex];
        var CurrentMyWord = InputField.value.charAt(charIndex);

        if (CurrentWriteWord && CurrentWriteWord.textContent === CurrentMyWord) {
            if (CurrentWriteWord) {
                CurrentWriteWord.classList.add("correct");
                CurrentWriteWord.classList.remove("regular");


            }
            charIndex += 1;
            correctLetterCount += 1;

        }
        else {
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
    if (charIndex >= (TypeText.textContent.length - 1)) {
        PauseTime = true;
        disabled = true;

        var CurrentWriteAllWords = TypeText.querySelectorAll("span");

        CurrentWriteAllWords[charIndex].classList.remove(string);

        var CurrentWriteWord = TypeText.querySelectorAll("span")[charIndex];
        var CurrentMyWord = InputField.value.charAt(charIndex);

        if (CurrentWriteWord && CurrentWriteWord.textContent === CurrentMyWord) {
            if (CurrentWriteWord) {
                CurrentWriteWord.classList.add("correct");
                CurrentWriteWord.classList.remove("regular");


            }
            charIndex += 1;
            correctLetterCount += 1;

        }
        else {
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
            CorrectIndex += 1;

        }
        while (IncorrectIndex < getFirstCharIndexWords(TypeText.textContent).length) {
            if (CurrentWriteAllWords[IncorrectIndex].classList.contains("incorrect") || CurrentWriteAllWords[IncorrectIndex].classList.contains("incorrectSpace")) {
                IncorrectLetterCountCurrent += 1;
            }
            IncorrectIndex += 1;

        }
        TestCompletedInt += 1;
        var AccuracyValue = (CorrectLetterCountCurrent / (IncorrectLetterCountCurrent + CorrectLetterCountCurrent)) * 100;
        if(CorrectLetterCountCurrent <= 0 && IncorrectLetterCountCurrent <= 0)
        {
            AccuracyValue = 0;
        }

        if (localStorage.getItem("AverageAccuracyInt2") == null) 
        {
            localStorage.setItem("AverageAccuracyInt2", AccuracyValue.toFixed(1));
        }

        var HighestRawWpm = JSON.parse(localStorage.getItem("HighestRawWpmInt"));
        var AverageRawWpm = JSON.parse(localStorage.getItem("AverageRawWpmInt"));
        var HighestWpm = JSON.parse(localStorage.getItem("HighestWpmInt"));
        var AverageWpm = JSON.parse(localStorage.getItem("AverageWpmInt"));
        var HighestAccuracy = JSON.parse(localStorage.getItem("HighestAccuracyInt"));
        var AverageAccuracy565 = JSON.parse(localStorage.getItem("AverageAccuracyInt2"));





        var RawWpmValue = Math.round(((CorrectLetterCountCurrent + IncorrectLetterCountCurrent) / 5) * (60 / duration));
        var WpmValue = Math.round((CorrectLetterCountCurrent / 5) * (60 / duration));
        if (AverageRawWpm == null) {
            localStorage.setItem("AverageRawWpmInt", RawWpmValue);
        }

        if (AverageWpm == null) {
            localStorage.setItem("AverageWpmInt", WpmValue);
        }




        var AverageRawWpmAgain = JSON.parse(localStorage.getItem("AverageRawWpmInt"));
        var AverageWpmAgain = JSON.parse(localStorage.getItem("AverageWpmInt"));
        var AverageAccuracyAgain = JSON.parse(localStorage.getItem("AverageAccuracyInt2"));

        AverageRawWpmAgain += RawWpmValue;
        AverageWpmAgain += WpmValue;
        AverageAccuracyAgain += AccuracyValue;

        AverageRawWpmAgain = Math.round(AverageRawWpmAgain / 2);
        AverageWpmAgain = Math.round(AverageWpmAgain / 2);
        AverageAccuracyAgain = AverageAccuracyAgain / 2;

        localStorage.setItem("AverageRawWpmInt", AverageRawWpmAgain);
        localStorage.setItem("AverageWpmInt", AverageWpmAgain);
        localStorage.setItem("AverageAccuracyInt2", AverageAccuracyAgain.toFixed(1));

        if (HighestRawWpm == null) {
            if (0 < RawWpmValue) {
                localStorage.setItem("HighestRawWpmInt", RawWpmValue);
            }
            else if (0 >= RawWpmValue) {
                localStorage.setItem("HighestRawWpmInt", 0);
            }
        }

        if (HighestRawWpm >= RawWpmValue) {
            localStorage.setItem("HighestRawWpmInt", HighestRawWpm);
        }
        else if (HighestRawWpm <= RawWpmValue) {
            localStorage.setItem("HighestRawWpmInt", RawWpmValue);
        }






        if (HighestWpm == null) {
            if (0 < WpmValue) {
                localStorage.setItem("HighestWpmInt", WpmValue);
            }
            else if (0 >= WpmValue) {
                localStorage.setItem("HighestWpmInt", 0);
            }
        }

        if (HighestWpm >= WpmValue) {
            localStorage.setItem("HighestWpmInt", HighestWpm);
        }
        else if (HighestWpm <= WpmValue) {
            localStorage.setItem("HighestWpmInt", WpmValue);
        }




        if (HighestAccuracy == null) {
            if (0 < AccuracyValue) {
                localStorage.setItem("HighestAccuracyInt", AccuracyValue.toFixed(1));
            }
            else if (0 >= AccuracyValue) {
                localStorage.setItem("HighestAccuracyInt", 0);
            }
        }

        if (HighestAccuracy >= AccuracyValue) {
            localStorage.setItem("HighestAccuracyInt", HighestAccuracy);
        }
        else if (HighestAccuracy <= AccuracyValue) {
            localStorage.setItem("HighestAccuracyInt", AccuracyValue.toFixed(1));
        }





        var X = JSON.parse(localStorage.getItem("TestCompletedInt"));

        X += 1;
        localStorage.setItem("TestCompletedInt", X);

        AccuracyPercent.textContent = "Accuracy: " + AccuracyValue.toFixed(1) + "%"
        TimeText.textContent = "Time: " + duration + "s";
        CorrectText.textContent = "Correct: " + CorrectLetterCountCurrent;
        IncorrectText.textContent = "Incorrect: " + IncorrectLetterCountCurrent;

        Wpm.textContent = "Wpm: " + Math.round((CorrectLetterCountCurrent / 5) * (60 / duration))
        RawWpm.textContent = "Raw Wpm: " + Math.round(((CorrectLetterCountCurrent + IncorrectLetterCountCurrent) / 5) * (60 / duration))

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
                CorrectIndex += 1;

            }
            while (IncorrectIndex < getFirstCharIndexWords(TypeText.textContent).length) {
                if (CurrentWriteAllWords[IncorrectIndex].classList.contains("incorrect") || CurrentWriteAllWords[IncorrectIndex].classList.contains("incorrectSpace")) {
                    IncorrectLetterCountCurrent += 1;
                }
                IncorrectIndex += 1;

            }

            TestCompletedInt += 1;
            var AccuracyValue = (CorrectLetterCountCurrent / (IncorrectLetterCountCurrent + CorrectLetterCountCurrent)) * 100;
            if(CorrectLetterCountCurrent <= 0 && IncorrectLetterCountCurrent <= 0)
            {
                AccuracyValue = 0;
            }

            if (localStorage.getItem("AverageAccuracyInt2") == null) 
            {
                localStorage.setItem("AverageAccuracyInt2", AccuracyValue.toFixed(1));
            }

            var HighestRawWpm = JSON.parse(localStorage.getItem("HighestRawWpmInt"));
            var AverageRawWpm = JSON.parse(localStorage.getItem("AverageRawWpmInt"));
            var HighestWpm = JSON.parse(localStorage.getItem("HighestWpmInt"));
            var AverageWpm = JSON.parse(localStorage.getItem("AverageWpmInt"));
            var HighestAccuracy = JSON.parse(localStorage.getItem("HighestAccuracyInt"));
            var AverageAccuracy565 = JSON.parse(localStorage.getItem("AverageAccuracyInt2"));





            var RawWpmValue = Math.round(((CorrectLetterCountCurrent + IncorrectLetterCountCurrent) / 5) * (60 / duration));
            var WpmValue = Math.round((CorrectLetterCountCurrent / 5) * (60 / duration));
            if (AverageRawWpm == null) {
                localStorage.setItem("AverageRawWpmInt", RawWpmValue);
            }

            if (AverageWpm == null) {
                localStorage.setItem("AverageWpmInt", WpmValue);
            }




            var AverageRawWpmAgain = JSON.parse(localStorage.getItem("AverageRawWpmInt"));
            var AverageWpmAgain = JSON.parse(localStorage.getItem("AverageWpmInt"));
            var AverageAccuracyAgain = JSON.parse(localStorage.getItem("AverageAccuracyInt2"));

            AverageRawWpmAgain += RawWpmValue;
            AverageWpmAgain += WpmValue;
            AverageAccuracyAgain += AccuracyValue;

            AverageRawWpmAgain = Math.round(AverageRawWpmAgain / 2);
            AverageWpmAgain = Math.round(AverageWpmAgain / 2);
            AverageAccuracyAgain = AverageAccuracyAgain / 2;

            localStorage.setItem("AverageRawWpmInt", AverageRawWpmAgain);
            localStorage.setItem("AverageWpmInt", AverageWpmAgain);
            localStorage.setItem("AverageAccuracyInt2", AverageAccuracyAgain.toFixed(1));

            if (HighestRawWpm == null) {
                if (0 < RawWpmValue) {
                    localStorage.setItem("HighestRawWpmInt", RawWpmValue);
                }
                else if (0 >= RawWpmValue) {
                    localStorage.setItem("HighestRawWpmInt", 0);
                }
            }

            if (HighestRawWpm >= RawWpmValue) {
                localStorage.setItem("HighestRawWpmInt", HighestRawWpm);
            }
            else if (HighestRawWpm <= RawWpmValue) {
                localStorage.setItem("HighestRawWpmInt", RawWpmValue);
            }






            if (HighestWpm == null) {
                if (0 < WpmValue) {
                    localStorage.setItem("HighestWpmInt", WpmValue);
                }
                else if (0 >= WpmValue) {
                    localStorage.setItem("HighestWpmInt", 0);
                }
            }

            if (HighestWpm >= WpmValue) {
                localStorage.setItem("HighestWpmInt", HighestWpm);
            }
            else if (HighestWpm <= WpmValue) {
                localStorage.setItem("HighestWpmInt", WpmValue);
            }




            if (HighestAccuracy == null) {
                if (0 < AccuracyValue) {
                    localStorage.setItem("HighestAccuracyInt", AccuracyValue.toFixed(1));
                }
                else if (0 >= AccuracyValue) {
                    localStorage.setItem("HighestAccuracyInt", 0);
                }
            }

            if (HighestAccuracy >= AccuracyValue) {
                localStorage.setItem("HighestAccuracyInt", HighestAccuracy);
            }
            else if (HighestAccuracy <= AccuracyValue) {
                localStorage.setItem("HighestAccuracyInt", AccuracyValue.toFixed(1));
            }





            var X = JSON.parse(localStorage.getItem("TestCompletedInt"));

            X += 1;
            localStorage.setItem("TestCompletedInt", X);

            AccuracyPercent.textContent = "Accuracy: " + AccuracyValue.toFixed(1) + "%"
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

    } else {
        CapLockDiv.style.opacity = 0;
    }
});














