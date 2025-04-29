import './style.css';

import {loadHome} from "./home";
import {loadWebsites} from "./websites";
import {loadGameDev} from "./gamedev";
import {loadCareer} from "./career";
import {loadSocial} from "./social";

const content = document.getElementById("content");

const homeBtn = document.querySelector("#home");
const websiteBtn = document.querySelector("#websites");
const gamedevBtn = document.querySelector("#game-dev");
const careerBtn = document.querySelector("#career");
const socialBtn = document.querySelector("#social");

function clearContent() {
    content.innerHTML = "";
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
}







// comment out while working on other pages
loadHome(content);

let ticker = document.querySelector("#ticker");


const titles = ["game developer", "software designer", "problem solver", "eagle scout", "boilermaker", "data science researcher"];


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

let websiteBtn2 = document.querySelector("#website-button");
let gamedevBtn2 = document.querySelector("#gamedev-button");
let careerBtn2 = document.querySelector("#career-button");
let socialBtn2 = document.querySelector("#socials-button");
websiteBtn2.addEventListener("click", function() {
    clearContent();
    loadWebsites(content);
});

gamedevBtn2.addEventListener("click", function() {
    clearContent();
    loadGameDev(content);
});

careerBtn2.addEventListener("click", function() {
    clearContent();
    loadCareer(content);
});

socialBtn2.addEventListener("click", function() {
    clearContent();
    loadSocial(content);
});

homeBtn.addEventListener("click", function() {
    clearContent();
    loadHome(content);
    ticker = document.querySelector("#ticker");
    typeTicker();

    websiteBtn2 = document.querySelector("#website-button");
    gamedevBtn2 = document.querySelector("#gamedev-button");
    careerBtn2 = document.querySelector("#career-button");
    socialBtn2 = document.querySelector("#socials-button");
    websiteBtn2.addEventListener("click", function() {
        clearContent();
        loadWebsites(content);
    });
    
    gamedevBtn2.addEventListener("click", function() {
        clearContent();
        loadGameDev(content);
    });
    
    careerBtn2.addEventListener("click", function() {
        clearContent();
        loadCareer(content);
    });
    
    socialBtn2.addEventListener("click", function() {
        clearContent();
        loadSocial(content);
    });
    
});

websiteBtn.addEventListener("click", function() {
    clearContent();
    loadWebsites(content);
});

gamedevBtn.addEventListener("click", function() {
    clearContent();
    loadGameDev(content);
});

careerBtn.addEventListener("click", function() {
    clearContent();
    loadCareer(content);
});

socialBtn.addEventListener("click", function() {
    clearContent();
    loadSocial(content);
});
