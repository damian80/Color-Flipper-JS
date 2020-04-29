const colors = ['green', 'red', 'blue', 'purple'];
// selecting button from HTML
const btn = document.getElementById('btn');
// selecting span from HTML
const color = document.querySelector('.color');

// selecting button from HTML,
// listening and decide what is going to happen with background
btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}