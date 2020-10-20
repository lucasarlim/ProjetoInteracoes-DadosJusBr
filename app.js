gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to('.predio',{ duration: '200%', ease: "power1.inOut", });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({ triggerElement: '.animation', duration: 1200, triggerHook: 0.3,})
    .setClassToggle('.seta_direita', 'show')
    .setTween(tween)
    .addIndicators({ name: 'seta_direita',indent: 0,})
    .addTo(controller)

const scene1 = new ScrollMagic.Scene({ triggerElement: '.animation', duration: 1100, triggerHook: 0.20 })
    .setClassToggle('.pc', 'show')
    .addIndicators({ name: 'pc', indent: 200 })
    .addTo(controller)

const scene2 = new ScrollMagic.Scene({ triggerElement: '.animation', duration: 900, triggerHook: 0.1 })
    .setClassToggle('.seta_baixo', 'show')
    .addIndicators({ name: 'seta_baixo',indent: 400 })
    .addTo(controller)

const scene3 = new ScrollMagic.Scene({triggerElement: '.animation', duration: 900, triggerHook: 0.1, })
    .setClassToggle('.seta_cima', 'show')
    .addIndicators({ name: 'seta_cima',indent: 600, })
    .addTo(controller)

const scene4 = new ScrollMagic.Scene({ triggerElement: '.animation', duration: 900, triggerHook: 0.1, })
    .setClassToggle('.seta', 'show')
    .addIndicators({ name: 'seta', indent: 800, })
    .addTo(controller)

const scene5 = new ScrollMagic.Scene({triggerElement: '.animation', duration: 900, triggerHook: 0.1,})
    .setClassToggle('.file', 'show')
    .addIndicators({ name: 'file', indent: 1000, })
    .addTo(controller)

const scene6 = new ScrollMagic.Scene({ triggerElement: '.animation', duration: 900, triggerHook: 0.1 })
    .setClassToggle('.file1', 'show')
    .addIndicators( {name: 'file1', indent: 1200,})
    .addTo(controller)
 
const scene7 = new ScrollMagic.Scene({ triggerElement: '.animation', duration: 900, triggerHook: 0.1, })
    .setClassToggle('.file2', 'show')
    .addIndicators({ name:'file2', indent: 1400,})
    .addTo(controller)

const scene8 = new ScrollMagic.Scene({ triggerElement: '.animation', duration: 700, triggerHook: 0 })
    .setClassToggle('.seta_grafico', 'show')
    .addIndicators( {name: 'file1', indent: 1600,})
    .addTo(controller)

const scene9 = new ScrollMagic.Scene({ triggerElement: '.animation', duration: 700, triggerHook: 0 })
    .setClassToggle('.grafico', 'show',)
    .addIndicators( {name: 'file1', indent: 1600,})
    .addTo(controller)

const scene10 = new ScrollMagic.Scene({ triggerElement: '.animation', duration: 700, triggerHook: 0 })
    .setClassToggle('.grafico1', 'show',)
    .addIndicators( {name: 'file1', indent: 1600,})
    .addTo(controller)

   
