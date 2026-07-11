const moon = document.getElementById("moon");
const secret = document.getElementById("secret");

let clicks = 0;

const brilho = [
    "drop-shadow(0 0 20px white)",
    "drop-shadow(0 0 35px #fff8b0)",
    "drop-shadow(0 0 50px #fff799)",
    "drop-shadow(0 0 70px #fff36b)"
];

moon.addEventListener("click", () => {

    clicks++;

    moon.style.filter = brilho[Math.min(clicks - 1, 3)];

    moon.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.25)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 250
        }
    );

    if (clicks >= 4) {

        secret.style.display = "flex";

        moon.style.filter = brilho[0];

        clicks = 0;

    }

});

secret.addEventListener("click", (e) => {

    if (e.target === secret) {

        secret.style.display = "none";

    }

});
