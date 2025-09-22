function createHeart() {
    const left = Math.random() * 100;
    const size = Math.random() * 20 + 10;
    const duration = Math.random() * 3 + 2;

    const containers = document.querySelectorAll(".hearts-container");

    containers.forEach(container => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        heart.style.left = left + "%";
        heart.style.fontSize = size + "px";
        heart.style.animationDuration = duration + "s";
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, (duration + 1) * 1000);
    });
}

setInterval(createHeart, 200);