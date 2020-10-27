gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to('.animation',{ duration: '10%', ease: "power1.inOut", });

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.6,})
    .setClassToggle('.predio', 'show')
    .addIndicators({ name: 'start',indent: 0,})
    .addTo(controller)

const sc1 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.5})
    .setClassToggle('.seta_direita', 'show')
    .addTo(controller)

const sc2 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.pc', 'show')
    .addTo(controller)

const sc3 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('.seta_baixo', 'show')
    .addTo(controller)

const sc4 = new ScrollMagic.Scene({triggerElement: '.predio', duration: 1000, triggerHook: 0.3, })
    .setClassToggle('.seta_cima', 'show')
    .addTo(controller)

const sc5 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.3, })
    .setClassToggle('.seta', 'show')
    .addTo(controller)

const sc6 = new ScrollMagic.Scene({triggerElement: '.predio', duration: 1000, triggerHook: 0.3,})
    .setClassToggle('.file', 'show')
    .addTo(controller)

const sc7 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('.file1', 'show')
    .addTo(controller)
 
const sc8 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.3, })
    .setClassToggle('.file2', 'show')
    .addTo(controller)

const sc9 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.2})
    .setClassToggle('.seta_grafico', 'show')
    .addTo(controller)

const sc10 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.2 })
    .setClassToggle('.grafico1', 'show',)
    .addTo(controller)

const sc11 = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.2 })
    .setClassToggle('.grafico2', 'show',)
    .addTo(controller)
    .setTween(tween)
  
const sc12 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.7,})
    .setClassToggle('#empregado','show')
    .addIndicators({ name: 'start',indent: 0,})
    .addTo(controller)

const sc13 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.6 })
    .setClassToggle('#seta_baixo', 'show',)
    .addTo(controller)
const sc14 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.6 })
    .setClassToggle('#salario', 'show',)
    .addTo(controller)

const sc15 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.5 })
    .setClassToggle('#soma_salario', 'show',)
    .addTo(controller)

const sc16 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('#beneficio', 'show',)
    .addTo(controller)

const sc17 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('#seta_baixo1', 'show',)
    .addTo(controller)

const sc18 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#moradia', 'show',)
    .addTo(controller)

const sc19 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#moradia', 'show',)
    .addTo(controller)

const sc20 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#soma-1', 'show',)
    .addTo(controller)
    
const sc21 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#saude', 'show',)
    .addTo(controller)

const sc22 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#soma-2', 'show',)
    .addTo(controller)

const sc23 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#carro', 'show',)
    .addTo(controller)

const sc24 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#soma-3', 'show',)
    .addTo(controller)

const sc25 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#remuneracao', 'show',)
    .addTo(controller)

const sc26 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#soma-4', 'show',)
    .addTo(controller)

const sc27 = new ScrollMagic.Scene({ triggerElement: '#empregado', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('#diaria', 'show',)
    .addTo(controller)
    
