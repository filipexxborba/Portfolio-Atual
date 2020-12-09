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

$hideClass = 'hide-class';
$activeClass = 'hide-class';

$botaoSobre = $('#sobremim').click(function(e){
    e.preventDefault();
    // $('.projetos').addClass($hideClass);
    // $('.contato').addClass($hideClass);

    timelineTwo
    .to('.projetos', {display: 'none', opacity: 0}, '-=1')
    .to('.contato', {display: 'none', opacity: 0}, '-=1')
    .to('.sobre-mim', {display: 'block', opacity: 1, duration: 1});
    // $('.sobre-mim').removeClass($hideClass);

});

$botaoProjetos = $('#projetos').click(function(e){
    e.preventDefault();
    timelineTwo
    .to('.sobre-mim', {display: 'none', opacity: 0}, '-=1')
    .to('.contato', {display: 'none', opacity: 0}, '-=1')
    .to('.projetos', {display: 'block', opacity: 1, duration: 1});
});

$botaoContato = $('#contato').click(function(e){
    e.preventDefault();
    timelineTwo
    .to('.sobre-mim', {display: 'none', opacity: 0}, '-=1')
    .to('.projetos', {display: 'none', opacity: 0}, '-=1')
    .to('.contato', {display: 'block', opacity: 1, duration: 1});
});

