document.addEventListener("DOMContentLoaded", function () {
    // Typing effect
    const typing = document.querySelector(".typing"); 
    const words = [" Front-End Developer", "Web Designer", "UI/UX Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let typingInterval;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typing.textContent += words[wordIndex][charIndex];
            charIndex++;
            typingInterval = setTimeout(type, 200);
        } else {
            setTimeout(() => {
                typing.textContent = "";
                charIndex = 0;
                wordIndex = (wordIndex + 1) % words.length;
                type();
            }, 2000);
        }
    }

    type();
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formResponse").textContent = "Thank you for reaching out, I'll get back to you soon!";
    document.getElementById("contactForm").reset();
});
