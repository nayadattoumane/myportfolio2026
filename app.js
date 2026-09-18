// Changing the text content of the heading element with id 'about'
const heading = document.getElementById('about');

if (heading) {
    heading.innerHTML = "Hello, I'm Nayad Attoumane, <br>Software Engineering Student from Comoros 🇰🇲<br> <br>Welcome to My Portfolio!";
} 

// run the function when the button is clicked
const button = document.getElementById("btn");

function changeHeading() {
    heading.textContent = "Thank you for visiting my page 😊. Please feel free to reach out to me if you have any questions or would like to collaborate on a project.";
    button.textContent = "visited ✅";
}

if (button) {
    button.addEventListener("click", changeHeading);
}

const button2 = document.getElementById("btn2");

function showAboutMe() {
    button2.textContent = "I am a Software Engineering Student from Comoros 🇰🇲 studying in Uganda 🇺🇬. I am passionate about technology, content creation, and business. I enjoy learning new skills and applying them to real-world projects. In my free time, I like to explore new ideas and work on personal projects that challenge me to grow.";
}

if (button2) {
    button2.addEventListener("click", showAboutMe);
}

const achievements = document.getElementById("achv");

const hideButton = document.getElementById("Hidebtn");

function hideAchievements() {
    if (achievements.style.display === "none" || achievements.style.display === "") {
        achievements.style.display = "block";
        hideButton.textContent = "Hide Achievements";
    } else {
        achievements.style.display = "none";
        hideButton.textContent = "View Achievements";
    }
}

if (hideButton) {
    hideButton.addEventListener("click", hideAchievements);
}

const quotes = [
    "Consistency is key to success.",
    "Small progress every day leads to big results.",
    "Dream big. Start small. Stay consistent.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Never stop learning.",
    "Success comes with patience and perseverance."
]

let currentQuote = 0;

const quote = document.getElementById("quote");
const newQuote = document.getElementById("newQuote");

function nextQuote() {
    
    quote.textContent = quotes[currentQuote];

    currentQuote++;

    if (currentQuote >= quotes.length) {
        currentQuote = 0;   
    }

}

if (newQuote) {
    newQuote.addEventListener("click", nextQuote);
}

const darkButton = document.getElementById("darkBtn");

const headings2 = document.querySelectorAll("h2");

const achvbtn = document.getElementById("Hidebtn");

const projects = document.getElementById("project");

function switchToDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkButton.textContent = "Light Mode ☀️";
    } else {
        darkButton.textContent = "Dark Mode 🌙";
    }
}

if (darkButton) {
    darkButton.addEventListener("click", switchToDarkMode);
}

// =====================================================
// SMOOTH SCROLLING
// =====================================================

const smoothScrollLinks = document.querySelectorAll('a[href*="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener("click", event => {
            const url = new URL(link.href);

            if (url.pathname === window.location.pathname) {
                event.preventDefault();

                const targetSection = document.querySelector(url.hash);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
});

// ================================== PROJECT CARDS ==============================================

const detailsButtons = document.querySelectorAll(".details-button");

detailsButtons.forEach((button) => {
    const projectCard = button.closest(".project-card");
    const projectDetails = projectCard.querySelector(".project-details");

    button.addEventListener("click", () => {
        projectDetails.classList.toggle("show");

        if (projectDetails.classList.contains("show")) {
            button.textContent = "Hide Details";
        } else {
            button.textContent = "View Details";
        }
    });
});

/*const detailsButton = document.querySelector(".details-button");
const projectDetails = document.querySelector(".project-details");

if (detailsButton && projectDetails) {

    detailsButton.addEventListener("click", () => {

        console.log("BUTTON WORKS");

        projectDetails.classList.toggle("show");

    });
} */