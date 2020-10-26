gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to('.animation',{ duration: '10%', ease: "power1.inOut", });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.55,})
    .setClassToggle('.seta_direita', 'show')
    .addIndicators({ name: 'start',indent: 0,})
    .addTo(controller)

const scene1 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.pc', 'show')
    .addTo(controller)

const scene2 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('.seta_baixo', 'show')
    .addTo(controller)

const scene3 = new ScrollMagic.Scene({triggerElement: '.predio', duration: 1000, triggerHook: 0.3, })
    .setClassToggle('.seta_cima', 'show')
    .addTo(controller)

const scene4 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.3, })
    .setClassToggle('.seta', 'show')
    .addTo(controller)

const scene5 = new ScrollMagic.Scene({triggerElement: '.predio', duration: 1000, triggerHook: 0.3,})
    .setClassToggle('.file', 'show')
    .addTo(controller)

const scene6 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('.file1', 'show')
    .addTo(controller)
 
const scene7 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.3, })
    .setClassToggle('.file2', 'show')
    .addTo(controller)

const scene8 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.2 })
    .setClassToggle('.seta_grafico', 'show')
    .addTo(controller)

const scene9 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.2 })
    .setClassToggle('.grafico1', 'show',)
    .addTo(controller)

const scene10 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.2 })
    .setClassToggle('.grafico2', 'show',)
    .addTo(controller)
    .setTween(tween)

const scene11 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.6,})
    .setClassToggle('#seta_baixo','show')
    .addIndicators({ name: 'start',indent: 0,})
    .addTo(controller)

const scene12 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.6 })
    .setClassToggle('#salario', 'show',)
    .addTo(controller)

const scene13 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.5 })
    .setClassToggle('#soma_salario', 'show',)
    .addTo(controller)

const scene14 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('#beneficio', 'show',)
    .addTo(controller)

const scene15 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('#seta_baixo1', 'show',)
    .addTo(controller)

const scene16 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#moradia', 'show',)
    .addTo(controller)

const scene17 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#moradia', 'show',)
    .addTo(controller)

const scene18 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#soma-1', 'show',)
    .addTo(controller)
    
const scene19 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#saude', 'show',)
    .addTo(controller)

const scene20 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#soma-2', 'show',)
    .addTo(controller)

const scene21 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#carro', 'show',)
    .addTo(controller)

const scene22 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#soma-3', 'show',)
    .addTo(controller)

const scene23 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#remuneracao', 'show',)
    .addTo(controller)

const scene24 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#soma-4', 'show',)
    .addTo(controller)

const scene25 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#diaria', 'show',)
    .addTo(controller)
    
