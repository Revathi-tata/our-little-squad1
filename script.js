/* Create Twinkling Stars */

const background = document.getElementById("magicBackground");

for (let i = 0; i < 85; i++) {

    const star = document.createElement("span");

    star.className = "star";
    star.innerHTML = "✦";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize =
        (Math.random() * 12 + 7) + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    background.appendChild(star);
}


/* Surprise Button */

function showSurprise() {

    const message = document.getElementById("surpriseMessage");

    message.innerHTML =
        "💗 No matter where life takes us, OUR LITTLE SQUAD will always be special! 🦋✨";

}
function openSurprise() {

    const letter = document.getElementById("surpriseLetter");
    const gift = document.getElementById("giftEmoji");

    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {
        gift.innerHTML = "💝";
        createHearts();
    } else {
        gift.innerHTML = "🎁";
    }
}

function createHearts() {

    const emojis = ["💗", "💜", "✨", "🦋", "🌸"];

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("span");

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = "25px";
        heart.style.zIndex = "20";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        heart.animate(
            [
                { transform: "translateY(0)", opacity: 1 },
                { transform: "translateY(100vh)", opacity: 0 }
            ],
            {
                duration: 3000 + Math.random() * 2000
            }
        );

        setTimeout(() => heart.remove(), 5500);
    }
}