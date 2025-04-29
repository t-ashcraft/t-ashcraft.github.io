export function loadCareer(content) {
    content.innerHTML = `
        <div id="centerer">
            <div class="section" id="career1">
                <h2 class="section-header">Laptop Repair Technician</h2>
                <div class="section-text-img">
                    <div class="image-side"></div>
                    <p class="text-side">During the summer of 2024, I worked as a laptop tech at the <b>School Town of Munster</b>, gaining valuable skills in troubleshooting, hardware, and device imaging, while also learning how to run Cat-6 Network cables through a school (see picture).</p>
                </div>
            </div>
            <div class="section" id="career2">
                <h2 class="section-header">Data Science Research</h2>
                <div class="section-text-img">
                    <p class="text-side">My freshman year, I worked with Wabash using <b>machine learning models</b> in <b>Python</b>. Click the link to view my post on <b>LinkedIn</b>. </p>
                    <div class="image-side">
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7189300523882176514/" target="_blank" rel="noopener noreferrer">View on LinkedIn</a>
                    </div>
                </div>
            </div>
            <div class="section" id="career3">
                <h2 class="section-header">Electrical Designer</h2>
                <div class="section-text-img">
                    <div class="image-side"></div>
                    <p class="text-side">For two summers during high school, I worked at <b>Millies Engineering Group</b> designing electrical components in buildings like schools, restaurants and hospitals. It was a great experience, but I realized that electrical engineering is not for me. </p>
                </div>
            </div>
        </div>
    `;
}