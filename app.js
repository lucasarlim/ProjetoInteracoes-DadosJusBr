gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to('.animation',{ duration: '10%', ease: "power1.inOut", });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.5,})
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
