const moon = document.getElementById("moon");
const secret = document.getElementById("secret");

let clicks = 0;

moon.addEventListener("click", () => {

    clicks++;

    console.log(clicks);

    if (clicks === 4) {
        secret.style.display = "flex";
        clicks = 0;
    }

});
