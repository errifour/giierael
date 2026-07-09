/* ==========================================
   PARA GIOVANNA ❤️
   script.js - PARTE 1
========================================== */

const typingText = document.getElementById("typingText");

const storyText = document.querySelector(".storyText");

const surpriseButton = document.getElementById("surprise");

const explosion = document.getElementById("loveExplosion");

const moon = document.getElementById("moon");

const secret = document.getElementById("secretMessage");

let moonClicks = 0;

/* ===========================
   HISTÓRIA INICIAL
=========================== */

const story = [

"Se eu pudesse escolher um lugar para guardar tudo o que sinto por você...",

"...eu criaria um universo inteiro.",

"Mas como não posso fazer isso...",

"...fiz um pequeno lugar só para nós.",

"Espero que você goste. ❤️"

];

let storyIndex = 0;

function showStory(){

if(storyIndex >= story.length){

return;

}

storyText.innerHTML="";

let text = story[storyIndex];

let i = 0;

let timer = setInterval(()=>{

storyText.innerHTML += text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

setTimeout(()=>{

storyIndex++;

showStory();

},1800);

}

},40);

}

showStory();

/* ===========================
   CARTA
=========================== */

const letter = `

Oi, Giovanna.

Se você chegou até aqui, é porque eu quis guardar um pedacinho do meu coração em um lugar só nosso.

Enquanto escrevia isso, percebi uma coisa.

Eu não quero viver apenas das lembranças que tivemos.

O que eu mais desejo é criar novas.

Novos sorrisos.

Novas fotos.

Novos abraços.

Novas histórias.

Sempre digo que você é o meu paraíso pessoal.

Porque existe paz no seu sorriso.

Porque existe carinho no seu olhar.

Porque as suas gracinhas conseguem transformar qualquer dia.

Porque ouvir a sua risada faz tudo parecer mais leve.

Nunca esperei encontrar alguém exatamente como você.

Mas, de alguma forma...

Parece que sempre esperei por você.

Hoje eu não quero prometer perfeição.

Quero prometer dedicação.

Respeito.

Paciência.

Carinho.

E vontade de construir um futuro bonito ao seu lado.

Espero que, um dia, esta galeria esteja cheia.

Cheia das nossas próximas memórias.

Dos nossos próximos sorrisos.

Das nossas próximas fotos.

Porque este site nunca foi criado para guardar o passado.

Ele foi criado para esperar pelo nosso futuro.

E, independente de qualquer coisa...

Eu te amo.

❤️

- Israel

`;

let charIndex = 0;

function typeLetter(){

if(charIndex < letter.length){

typingText.innerHTML += letter.charAt(charIndex);

charIndex++;

setTimeout(typeLetter,28);

}

}

setTimeout(typeLetter,9000);
