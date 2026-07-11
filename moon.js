const moon = document.getElementById("moon");
const secret = document.getElementById("secret");

alert("Moon: " + (moon !== null) + " | Secret: " + (secret !== null));
const moon = document.getElementById("moon");
const secret = document.getElementById("secret");

if (moon && secret) {

    let moonClicks = 0;

    moon.addEventListener("click", () => {

        moonClicks++;

        // Pequeno efeito ao clicar
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

        // Abre o segredo após 4 cliques
        if (moonClicks >= 4) {

            secret.style.display = "flex";
            moonClicks = 0;

        }

    });

    // Fecha ao tocar fora da caixa
    secret.addEventListener("click", (e) => {

        if (e.target === secret) {
            secret.style.display = "none";
        }

    });

}
