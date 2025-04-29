

export function loadWebsites(content) {
    content.innerHTML = `
    <div id="centerer">
            <div class="section" id="website1">
                <h2 class="section-header">My First Javascript Project</h2>
                <div class="section-text-img">
                    <p class="text-side">Here is my first ever <b>JavaScript</b> project, a basic 4-function calculator</p>
                    <div class="image-side">
                        <a href="https://t-ashcraft.github.io/calculator/" target="_blank" rel="noopener noreferrer">Check it out</a>
                    </div>
                </div>
            </div>
            <div class="section" id="website2">
                <h2 class="section-header">Admin Dashboard</h2>
                <div class="section-text-img">
                    <div class="image-side">
                        <a href="https://t-ashcraft.github.io/dashboard/" target="_blank" rel="noopener noreferrer">Check it out</a>
                    </div>
                    <p class="text-side">This is a <b>CSS/HTML</b> project that uses grid/flexbox to organize the page layout</p>
                </div>
            </div>
            <div class="section" id="website3">
                <h2 class="section-header">Restaurant Page</h2>
                <div class="section-text-img">
                    <p class="text-side">Here is a fake restaurant page to practice with <b>JavaScript, web design</b>, and <b>context-switching</b></p>
                    <div class="image-side">
                        <a href="https://t-ashcraft.github.io/restaurant-page" target="_blank" rel="noopener noreferrer">Check it out</a>

                    </div>
                </div>
            </div>
            <div class="section" id="website4">
                <h2 class="section-header">Library</h2>
                <div class="section-text-img">
                    <div class="image-side">
                        <a href="https://t-ashcraft.github.io/library" target="_blank" rel="noopener noreferrer">Check it out</a>

                    </div>
                    <p class="text-side">Here is a quick <b>JavaScript</b> demonstration of how objects can become elements on the page, inspired by GoodReads.</p>
                </div>
            </div>
            <div class="section" id="website5">
                <h2 class="section-header">Sign up Form</h2>
                <div class="section-text-img">
                    <p class="text-side">Here is an <b>HTML/CSS</b> demonstration of form validation.</p>
                    <div class="image-side">
                        <a href="https://t-ashcraft.github.io/sign-up-form" target="_blank" rel="noopener noreferrer">Check it out</a>

                    </div>
                </div>
            </div>
            <div class="section" id="website6">
                <h2 class="section-header">Landing Page</h2>
                <div class="section-text-img">
                    <div class="image-side">
                        <a href="https://t-ashcraft.github.io/odin-landing" target="_blank" rel="noopener noreferrer">Check it out</a>
                        
                    </div>
                    <p class="text-side">Here is a sample landing page for a fake company</p>
                </div>
            </div>
        </div>
    
    `
}