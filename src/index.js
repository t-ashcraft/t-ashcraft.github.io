import './style.css';


const titles = ["game developer", "software designer", "problem solver", "eagle scout", "boilermaker", "data science researcher"];
const ticker = document.getElementById("ticker");

let titleIndex = 0;
let charIndex = 0;
let typing = true;

function typeTicker() {
    const currentTitle = titles[titleIndex];

    if (typing) {
        if (charIndex < currentTitle.length) {
        ticker.textContent += currentTitle.charAt(charIndex);
        charIndex++;
        // delay per key
        setTimeout(typeTicker, 100);
        } else {
        typing = false;
        // delay per pause
        setTimeout(typeTicker, 1500);
        }
    } else {
        if (charIndex > 0) {
        ticker.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        // delay for backspacing
        setTimeout(typeTicker, 50);
        } else {
        typing = true;
        titleIndex = (titleIndex + 1) % titles.length;
        // delay before writing next
        setTimeout(typeTicker, 300);
        }
    }
  }

  typeTicker();