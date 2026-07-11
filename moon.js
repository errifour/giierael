const moon = document.getElementById("moon");
const secret = document.getElementById("secret");

let moonClicks = 0;

moon.addEventListener("click", () => {

    moonClicks++;

    alert("Clique: " + moonClicks);

    if (moonClicks >= 4) {
        secret.style.display = "flex";
        moonClicks = 0;
    }

});

secret.addEventListener("click", (e) => {

    if (e.target === secret) {
        secret.style.display = "none";
    }

});
