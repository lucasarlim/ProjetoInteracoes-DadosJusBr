gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to('.animation',{ duration: '10%', ease: "power1.inOut", });

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({ triggerElement: '.predio', duration: 1000, triggerHook: 0.6,})
    .setClassToggle('.predio', 'show')
   
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

const scene28 = new ScrollMagic.Scene({ triggerElement: '.p1', duration: 1000, triggerHook: 0.63,})
    .setClassToggle('.p1','show')
    .addTo(controller)

const sc29 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.5 })
    .setClassToggle('.seta_p1', 'show',)
    .addTo(controller)

const sc30 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.sal_p1', 'show',)
    .addTo(controller)

const sc31 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.soma_p1', 'show',)
    .addTo(controller)

const sc32 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.ben_p1', 'show',)
    .addTo(controller)

const sc33 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.63 })
    .setClassToggle('.p2', 'show',)
    .addTo(controller)

const sc34 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.5 })
    .setClassToggle('.seta_p2', 'show',)
    .addTo(controller)

const sc35 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.sal_p2', 'show',)
    .addTo(controller)

const sc36 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.soma_p2', 'show',)
    .addTo(controller)

const sc37 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.ben_p2', 'show',)
    .addTo(controller)

const sc38 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.63 })
    .setClassToggle('.p3', 'show',)
    .addTo(controller)

const sc39 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.5 })
    .setClassToggle('.seta_p3', 'show',)
    .addTo(controller)

const sc40 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.sal_p3', 'show',)
    .addTo(controller)

const sc41 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.soma_p3', 'show',)
    .addTo(controller)

const sc42 = new ScrollMagic.Scene({ triggerElement: '.p2', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.ben_p3', 'show',)
    .addTo(controller)

const sc43 = new ScrollMagic.Scene({ triggerElement: '.fileCima', duration: 1000, triggerHook: 0.5,})
    .setClassToggle('.computadorAnimacao1','show')
    .addTo(controller)    

const sc44 = new ScrollMagic.Scene({ triggerElement: '.fileCima', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.seta_esquerda_animacao1', 'show',)
    .addTo(controller)

const sc45 = new ScrollMagic.Scene({ triggerElement: '.fileCima', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.seta_direita_animacao1', 'show',)
    .addTo(controller)
    
const sc46 = new ScrollMagic.Scene({ triggerElement: '.fileCima', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.seta_cima_animacao1', 'show',)
    .addTo(controller)
    
const sc47 = new ScrollMagic.Scene({ triggerElement: '.fileCima', duration: 1000, triggerHook: 0.4 })
    .setClassToggle('.seta_baixo_animacao1', 'show',)
    .addTo(controller)

const sc48 = new ScrollMagic.Scene({ triggerElement: '.fileCima', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('.fileEsquerda', 'show',)
    .addTo(controller)

const sc49 = new ScrollMagic.Scene({ triggerElement: '.fileCima', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('.fileCima', 'show',)
    .addTo(controller)

const sc50 = new ScrollMagic.Scene({ triggerElement: '.fileCima', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('.fileBaixo', 'show',)
    .addTo(controller)

const sc51 = new ScrollMagic.Scene({ triggerElement: '.fileCima', duration: 1000, triggerHook: 0.3 })
    .setClassToggle('.fileDireita', 'show',)
    .addTo(controller)