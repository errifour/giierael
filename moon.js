const moon = document.getElementById("moon");
const secret = document.getElementById("secret");

let clicks = 0;


const brilho = [
    "drop-shadow(0 0 20px white)",
    "drop-shadow(0 0 35px #fff8b0)",
    "drop-shadow(0 0 55px #fff799)",
    "drop-shadow(0 0 90px #fff36b)"
];



// clique na lua

moon.addEventListener("click", () => {

    clicks++;


    moon.style.filter =
    brilho[Math.min(clicks - 1, 3)];



    // animação da lua

    moon.animate(
        [
            {
                transform:"scale(1) rotate(0deg)"
            },

            {
                transform:"scale(1.3) rotate(8deg)"
            },

            {
                transform:"scale(1) rotate(0deg)"
            }
        ],
        {
            duration:500,
            easing:"ease-out"
        }
    );



    criarEstrelas();



    // terceiro clique
    if(clicks === 3){

        criarCoracao();

    }



    // quarto clique abre segredo

    if(clicks >= 4){


        explosaoLua();



        setTimeout(()=>{

            secret.style.display="flex";

            moon.style.filter=brilho[0];

        },800);



        clicks=0;

    }


});




// cria partículas de estrelas

function criarEstrelas(){


    for(let i=0;i<8;i++){


        const estrela=document.createElement("div");


        estrela.innerHTML="✨";


        estrela.style.position="fixed";

        estrela.style.fontSize=
        Math.random()*15+10+"px";


        estrela.style.left=
        moon.getBoundingClientRect().left+35+"px";


        estrela.style.top=
        moon.getBoundingClientRect().top+35+"px";


        estrela.style.zIndex="999998";

        estrela.style.pointerEvents="none";


        document.body.appendChild(estrela);



        const x=
        (Math.random()-0.5)*200;


        const y=
        (Math.random()-0.5)*200;



        estrela.animate(
            [
                {
                    transform:"translate(0,0)",
                    opacity:1
                },

                {
                    transform:`translate(${x}px,${y}px)`,
                    opacity:0
                }
            ],
            {
                duration:1000
            }
        );



        setTimeout(()=>{

            estrela.remove();

        },1000);

    }

}




// coração no terceiro clique

function criarCoracao(){


    const heart=document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";

    heart.style.fontSize="30px";

    heart.style.left=
    moon.getBoundingClientRect().left+20+"px";

    heart.style.top=
    moon.getBoundingClientRect().top+20+"px";


    heart.style.zIndex="999998";

    heart.style.pointerEvents="none";


    document.body.appendChild(heart);



    heart.animate(

        [

            {
                transform:"translateY(0) scale(1)",
                opacity:1
            },

            {
                transform:"translateY(-100px) scale(1.5)",
                opacity:0
            }

        ],

        {
            duration:1500
        }

    );



    setTimeout(()=>{

        heart.remove();

    },1500);


}





// efeito quando a lua revela o segredo

function explosaoLua(){


    moon.animate(

        [

            {
                transform:"scale(1)",
                filter:"brightness(1)"
            },


            {
                transform:"scale(4)",
                filter:"brightness(5)"
            },


            {
                transform:"scale(1)",
                filter:"brightness(1)"
            }

        ],

        {
            duration:800
        }

    );


}





// fechar segredo

secret.addEventListener("click",(e)=>{


    if(e.target === secret){

        secret.style.display="none";

    }


});
