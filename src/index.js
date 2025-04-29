import './style.css';

import {loadHome} from "./home";

const content = document.getElementById("content");

const homeBtn = document.querySelector("#home");
const websiteBtn = document.querySelector("#websites");
const gamedevBtn = document.querySelector("#game-dev");
const careerBtn = document.querySelector("#career");
const socialBtn = document.querySelector("#social");

function clearContent() {
    content.innerHTML = "";
}


// comment out while working on other pages
loadHome(content);



const titles = ["game developer", "software designer", "problem solver", "eagle scout", "boilermaker", "data science researcher"];
let ticker = document.querySelector("#ticker");


let titleIndex = 0;
let charIndex = 0;
let typing = true;
let mostRecentId;

function typeTicker() {
    const currentTitle = titles[titleIndex];
    if (mostRecentId !== undefined) {
        clearTimeout(mostRecentId);
    }
    if (typing) {
        if (charIndex < currentTitle.length) {
        ticker.textContent += currentTitle.charAt(charIndex);
        charIndex++;
        // delay per key
        mostRecentId = setTimeout(typeTicker, 100);
        } else {
        typing = false;
        // delay per pause
        mostRecentId = setTimeout(typeTicker, 1500);
        }
    } else {
        if (charIndex > 0) {
        ticker.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        // delay for backspacing
        mostRecentId = setTimeout(typeTicker, 50);
        } else {
        typing = true;
        titleIndex = (titleIndex + 1) % titles.length;
        // delay before writing next
        mostRecentId = setTimeout(typeTicker, 300);
        }
    }
}

typeTicker(ticker);

homeBtn.addEventListener("click", function() {
    clearContent();
    loadHome(content);
    ticker = document.querySelector("#ticker");
    typeTicker();
    
});

websiteBtn.addEventListener("click", function() {
    clearContent();
});

gamedevBtn.addEventListener("click", function() {
    clearContent();
});

careerBtn.addEventListener("click", function() {
    clearContent();
});

socialBtn.addEventListener("click", function() {
    clearContent();
});
