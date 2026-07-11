const moon = document.getElementById("moon");
const secret = document.getElementById("secret");

let clicks = 0;

moon.addEventListener("click", () => {

    clicks++;

    moon.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.2)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 250
        }
    );

    if (clicks >= 4) {
        secret.style.display = "flex";
        clicks = 0;
    }

});

secret.addEventListener("click", (e) => {

    if (e.target === secret) {
        secret.style.display = "none";
    }

});
