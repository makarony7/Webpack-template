import '../scss/style.scss'

var green = document.getElementById('green')
green.innerHTML= 'A green webpack template';

var yellow = document.getElementById('yellow')
yellow.innerHTML= 'A yellow webpack template';

[1, 2, 3].map((n) => n + 1);

// show date function
const clickButton = document.getElementById('clickButton')
const showDate = document.getElementById('showDate')
const closeDate = document.getElementById('closeDate')

clickButton.addEventListener("click", showDateHour);
function showDateHour() {
    showDate.innerHTML = Date();
    closeDate.classList.add("d-block");
}

// hide date function
closeDate.addEventListener("click", hideDateHour);
function hideDateHour() {
    showDate.innerHTML = '';
    closeDate.classList.remove("d-block");
}