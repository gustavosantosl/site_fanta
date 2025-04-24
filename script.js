//Criação de uma TIMELINE do GSAP com animações sincronizadas com o scroll


var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //depuração
    },
});

tl .to(
    '#fanta',
    {
        top: '120%', //Quando move o elemento id fanta para 120% do topo
        left: '0%', //
    },
    'orange'
); //Nomeando esse trecho de animação para 'orange' para sincronização

tl .to(
    '#laranja-cortada',
    {
        top: '160%', //move o elemento 'orange' para 160% do topo
        left: '23%', //move o elemento para 13% da esquerda
    },
    'orange'
);

tl .to(
    '#laranja',
    {
        width: '15%', //reduz a largura do elemento para 15%
        top: '170%',  //move o elemento ate 15% do topo
        right: '10%', // move o elemento para 10% da direita
    },
    'orange'
); //nomeando a sincronização como orange

tl.to(
    '#folha',
    {
        top: '100%',
        rotate: '500deg',
        left: '70%',
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top: '100%',
        rotate: '530deg',
        left: '0%',
    },
    'orange'
);

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //depuração
    },
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '-110%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '-110%',
    },

    {
        rotate: '0deg', // Garante que finalize retinho
        left: '0%',     // Move para a posição final correta
        top: '0%',      // Ajusta para não ficar desalinhado

    },
    'ca'
);

tl.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca',
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '10%',
    },

    {
        rotate: '0deg', // Garante que finalize retinho
        left: '0%',     // Move para a posição final correta
        top: '0%',      // Ajusta para não ficar desalinhado

    },
    'ca'
);

tl2 .to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);


tl2 .to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '203%',
    },
    'ca'
);