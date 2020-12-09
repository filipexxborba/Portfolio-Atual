const timelineOne = gsap.timeline({defaults: {ease: 'power2.easeInOut'}});
const timelineTwo = gsap.timeline({defaults: {ease: 'power2.easeInOut'}});

timelineOne
.to('.text', {y: '0%', duration: 1, stagger: .5})
.to('.text', {color: '#000', duration: 1, delay: 2})
.to('.hide', {background: '#fff'}, '-=1')
.to('.text', {background: '#fff'}, '-=1')
.to('.text', {opacity: '0'}, '-=1')
.to('.hide', {display: 'none', duration: 1})
.to('.show', {display: 'block'})
.to('.show', {opacity: '1'});

let activeSection = 1;

$botaoSobre = $('#sobremim').click(function(e){
    e.preventDefault();
    if(activeSection != 1){
        timelineTwo
        .to('#sobremim', {borderBottom: '3px solid white'})
        .to('#projetos', {borderBottom: 'none'}, '-=1')
        .to('#contato', {borderBottom: 'none'}, '-=1');
        timelineTwo
        .to('.projetos', {display: 'none', opacity: 0}, '-=1')
        .to('.contato', {display: 'none', opacity: 0}, '-=1')
        .to('.sobre-mim', {display: 'block', opacity: 1, duration: 1});
        activeSection = 1;

        
    }
});

$botaoProjetos = $('#projetos').click(function(e){
    e.preventDefault();
    if(activeSection != 2){
        timelineTwo
        .to('#projetos', {borderBottom: '3px solid white'})
        .to('#sobremim', {borderBottom: 'none'}, '-=1')
        .to('#contato', {borderBottom: 'none'}, '-=1');
        timelineTwo
        .to('.sobre-mim', {display: 'none', opacity: 0}, '-=1')
        .to('.contato', {display: 'none', opacity: 0}, '-=1')
        .to('.projetos', {display: 'block', opacity: 1, duration: 1});
        activeSection = 2;
    }
});

$botaoContato = $('#contato').click(function(e){
    e.preventDefault();
   if(activeSection != 3){
         timelineTwo
         .to('#contato', {borderBottom: '3px solid white'})
         .to('#sobremim', {borderBottom: 'none'}, '-=1')
         .to('#projetos', {borderBottom: 'none'}, '-=1');
        timelineTwo
        .to('.sobre-mim', {display: 'none', opacity: 0}, '-=1')
        .to('.projetos', {display: 'none', opacity: 0}, '-=1')
        .to('.contato', {display: 'block', opacity: 1, duration: 1});
        activeSection = 3;

        
   }
});

