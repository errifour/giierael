const screens=document.querySelectorAll(".screen");

const nextButtons=document.querySelectorAll(".next");

let current=0;

function showScreen(index){

screens.forEach(screen=>{

screen.classList.remove("active");

});

screens[index].classList.add("active");

}

nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        current++;

        if(current < screens.length){

            showScreen(current);

            if(current === 1){

                introIndex = 0;
                writeIntro();

            }

            if(current === 2){

                writeLetter();

            }

        }

    });

});

showScreen(0);
/* ==========================================
   INTRODUÇÃO
========================================== */

const introText = document.getElementById("introText");

const introMessages = [

"Se eu pudesse guardar tudo o que sinto por você...",

"...eu criaria um universo inteiro.",

"Mas como não posso...",

"...criei este pequeno lugar onde sempre haverá espaço para nós."

];

let introIndex = 0;

function writeIntro(){

    if(current !== 1) return;

    introText.innerHTML="";

    let message=introMessages[introIndex];

    let i=0;

    const typing=setInterval(()=>{

        introText.innerHTML+=message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(typing);

            setTimeout(()=>{

                introIndex++;

                if(introIndex<introMessages.length){

                    writeIntro();

                }

            },1500);

        }

    },70);

}

/* ==========================================
   CARTA
========================================== */

const letterText=document.getElementById("letterText");

const letter=`

Oi, minha princesa minha Delli.

Se você chegou até aqui...

eu quis guardar um pedacinho do meu coração em um lugar só nosso.

Enquanto escrevia isso...

percebi que não quero viver apenas das lembranças que tivemos.

O que eu realmente desejo...

é criar novas páginas com você 

Novas risadas

Novas fotos

Novos abraços

Novos beijos

Novos carinhos

Novas viagens 

Novas piadas internas

Sempre digo que você é o meu paraíso pessoal

Porque existe paz no seu sorriso

Porque existe carinho no seu olhar

Porque as suas gracinhas deixam qualquer dia mais leve

Porque ouvir sua risada seria o despertador perfeito pra começar bem meu dia

Eu admiro você e toda sua força você é uma mulher incrível em todos os sentidos 

Nunca imaginei encontrar você

Mas, de alguma forma...

sempre esperei por você eva.

Su não blefei eu espero que Deus atenda meu pedido egoísta e deixe eu amar você como amo hoje

Hoje eu não quero prometer perfeição

Quero prometer dedicação

Paciência

Respeito

Carinho

E vontade de construir um futuro ao seu lado.

Espero que, um dia...

este site esteja cheio

Cheio das nossas novas memórias

Ele foi criada para esperar pelo nosso futuro.

Mal posso esperar pra te chamar de minha e nunca mais me preocupar se você vai ficar 

As vezes bobo fico imaginando nós na nossa casa e ter você pra me abraçar 

Nunca quis tanto alguém assim na minha vida

Você sempre esteve marcada em mim como uma tatuagem sem tinta 

Você foi e vai ser de novo minha maior conquista 

Eu te amo mais do que ontem e menos que amanhã.

  ❤️

- delli deixa eu ser seu roxo?

`;

let typingStarted=false;

function writeLetter(){

    if(typingStarted) return;

    typingStarted=true;

    let i=0;

    function type(){

        if(i<letter.length){

            letterText.innerHTML+=letter.charAt(i);

            i++;

            setTimeout(type,75);

        }

    }

    type();

}/* ==========================================
   LUA SECRETA
========================================== */

const moon = document.getElementById("moon");
const secret = document.getElementById("secret");

let moonClicks = 0;

moon.addEventListener("click", () => {

    moonClicks++;

    moon.style.transform = "scale(1.25)";

    setTimeout(() => {

        moon.style.transform = "";

    },200);

if(moonClicks >= 4){

        secret.style.display = "flex";

    }

});

secret.addEventListener("click",()=>{

    secret.style.display="none";

    moonClicks=0;

});

/* ==========================================
   TELA FINAL
========================================== */

const finalButton = document.getElementById("finalButton");
const loveScreen = document.getElementById("loveScreen");

finalButton.addEventListener("click",()=>{

    loveScreen.style.display="flex";

    createExplosion();

});

/* ==========================================
   CORAÇÕES FLUTUANDO
========================================== */

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="105vh";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.opacity=.8;

    heart.style.pointerEvents="none";

    heart.style.transition="transform 10s linear, opacity 10s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=`translateY(-120vh)
        translateX(${(Math.random()-0.5)*250}px)
        rotate(${Math.random()*360}deg)`;

        heart.style.opacity="0";

    },30);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,700);

/* ==========================================
   EXPLOSÃO FINAL
========================================== */

function createExplosion(){

    for(let i=0;i<150;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.fontSize=(15+Math.random()*25)+"px";

        heart.style.pointerEvents="none";

        document.body.appendChild(heart);

        const x=(Math.random()-0.5)*900;

        const y=(Math.random()-0.5)*900;

        setTimeout(()=>{

            heart.style.transition="all 2s ease";

            heart.style.transform=`translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`;

            heart.style.opacity="0";

        },20);

        setTimeout(()=>{

            heart.remove();

        },2200);

    }

}/* ==========================================
   ESTRELA CADENTE
========================================== */

function createShootingStar(){

    const star=document.createElement("div");

    star.style.position="fixed";
    star.style.left=(Math.random()*70)+"vw";
    star.style.top="-20px";

    star.style.width="3px";
    star.style.height="3px";

    star.style.background="white";
    star.style.boxShadow="0 0 15px white";

    star.style.borderRadius="50%";

    star.style.pointerEvents="none";

    star.style.zIndex="999";

    document.body.appendChild(star);

    let x=0;
    let y=0;

    const interval=setInterval(()=>{

        x+=8;
        y+=8;

        star.style.transform=`translate(${x}px,${y}px)`;

        if(y>window.innerHeight){

            clearInterval(interval);

            star.remove();

        }

    },16);

}

setInterval(createShootingStar,12000);

/* ==========================================
   BOTÃO DA MÚSICA
========================================== */

const musicButton=document.createElement("button");

musicButton.innerHTML="🎵 Nossa música";

musicButton.style.marginTop="30px";

musicButton.onclick=()=>{

window.open(
"https://youtu.be/lm50i_r-pd8?si=LZ-vsAbXFNZ_k3t9",
"_blank"
);

};

const lastScreen=document.getElementById("screen6");

lastScreen.appendChild(musicButton);

/* ==========================================
   BRILHO NA LUA
========================================== */

setInterval(()=>{

moon.animate(

[
{transform:"scale(1)"},
{transform:"scale(1.08)"},
{transform:"scale(1)"}
],

{

duration:2200

}

);

},5000);

/* ==========================================
   EFEITO NAS FOTOS
========================================== */

const photos=document.querySelectorAll(".photo");

photos.forEach(photo=>{

photo.addEventListener("mouseenter",()=>{

photo.animate(

[
{transform:"translateY(0px) scale(1)"},
{transform:"translateY(-10px) scale(1.05)"}
],

{

duration:300,
fill:"forwards"

}

);

});

photo.addEventListener("mouseleave",()=>{

photo.animate(

[
{transform:"translateY(-10px) scale(1.05)"},
{transform:"translateY(0px) scale(1)"}
],

{

duration:300,
fill:"forwards"

}

);

});

});

/* ==========================================
   MENSAGEM FINAL
========================================== */

const ps=document.createElement("p");

ps.innerHTML=

"Você é o amor da minha vida,sempre vai ser, o yin do meu yang minha vilã.";

ps.style.marginTop="40px";
ps.style.opacity=".8";
ps.style.fontStyle="italic";

loveScreen.appendChild(ps);
