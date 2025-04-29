

export function loadHome(content) {
    content.innerHTML = 
        `<div id="name-section">
            <div id="name">Thomas</div>
            <div id="name2">Ashcraft</div>
            <div id="ticker"></div>
        </div>

        <div id="centerer">
            <div id="about-me" class="section">
                <h2 class="section-header">About Me</h2>
                <p class="section-text">Hi! I'm <b>Thomas</b>, and I'm studying <b>computer science, math,</b> and <b>finance</b> at Purdue. Here you can learn about the projects I'm working on, find links to my socials, and explore my career development.</p>
            </div>
            <div id="section1" class="section">
                <h2 class="section-header">Web Development</h2>
                <div class="section-text-img">
                    <p class="text-side">I've been making websites like this one over on <b>Github</b>. Click the link to check it out.</p>
                    <div class="image-side">
                        <button id="website-button">Check it out</button> 
                    </div>
                </div>
            </div>
            <div id="section2" class="section">
                <h2 class="section-header">Game Development</h2>
                <div class="section-text-img">
                    <div class="image-side">
                        <button id="gamedev-button">See More</button> 
                    </div>
                    <p class="text-side">I also make games in my free time, click <b>"See More"</b> to learn more about them.</p>
                </div>
            </div>
            <div id="section3" class="section">
                <h2 class="section-header">Career/Achievements</h2>
                <div class="section-text-img">
                    <p class="text-side">Want to learn more about my professional development? Click here.</p>
                    <div class="image-side">
                        <button id="career-button">Learn More</button> 
                    </div>
                </div>
                
            </div>
            <div id="section4" class="section">
                <h2 class="section-header">Where to Find Me</h2>
                
                <div class="section-text-img">
                    <div class="image-side">
                        <button id="socials-button">Contact Me</button> 
                    </div>
                    <p class="text-side">Need to contact me? Click the button to find out where.</p>

                </div>
            </div>
        </div>`;



}


