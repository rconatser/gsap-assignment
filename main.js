const logoBorder = document.getElementById('flower');

TweenMax.set(logoBorder, {
  scale: 1
});

logoBorder.addEventListener('load',
  function () {
    TweenMax.to(
      logoBorder,
      2,
      {
        scale: 1.15,
        x: 20,
        ease: Linear.noEase, 
        repeat: -1,
        yoyo: true
      }
    );
  });

const button1 = document.querySelector('#button1');
button1.addEventListener('mouseover', function(){
  TweenMax.fromTo(
   button1,
    2, {
      x: 0,
      ease: Power4.easeOut
    },{
      x: 30,
      ease: Power4.easeOut
    });
});

button1.addEventListener('mouseout', function() {
  TweenMax.fromTo(
    button1,
    1, {
      x: 30,
      ease: Power4.easeOut
    },{
      x: 0,
      ease: Power4.easeOut
    });
});

const button2 = document.querySelector('#button2');
button2.addEventListener('mouseover', function(){
  TweenMax.fromTo(
   button2,
    2, {
      x: 0,
      ease: Power4.easeOut
    },{
      x: 30,
      ease: Power4.easeOut
    });
});

button2.addEventListener('mouseout', function() {
  TweenMax.fromTo(
    button2,
    1, {
      x: 30,
      ease: Power4.easeOut
    },{
      x: 0,
      ease: Power4.easeOut
    });
});


const button3 = document.querySelector('#button3');
button3.addEventListener('mouseover', function(){
  TweenMax.fromTo(
   button3,
    2, {
      x: 0,
      ease: Power4.easeOut
    },{
      x: 30,
      ease: Power4.easeOut
    });
});

button3.addEventListener('mouseout', function() {
  TweenMax.fromTo(
    button3,
    1, {
      x: 30,
      ease: Power4.easeOut
    },{
      x: 0,
      ease: Power4.easeOut
    });
});

const button4 = document.querySelector('#button4');
button4.addEventListener('mouseover', function(){
  TweenMax.fromTo(
   button4,
    2, {
      x: 0,
      ease: Power4.easeOut
    },{
      x: 30,
      ease: Power4.easeOut
    });
});

button4.addEventListener('mouseout', function() {
  TweenMax.fromTo(
    button4,
    1, {
      x: 30,
      ease: Power4.easeOut
    },{
      x: 0,
      ease: Power4.easeOut
    });
});

const button5 = document.querySelector('#button5');
button5.addEventListener('mouseover', function(){
  TweenMax.fromTo(
   button2,
    2, {
      x: 0,
      ease: Power4.easeOut
    },{
      x: 30,
      ease: Power4.easeOut
    });
});

button5.addEventListener('mouseout', function() {
  TweenMax.fromTo(
    button5,
    1, {
      x: 30,
      ease: Power4.easeOut
    },{
      x: 0,
      ease: Power4.easeOut
    });
});

const button6 = document.querySelector('#button6');
button6.addEventListener('mouseover', function(){
  TweenMax.fromTo(
   button6,
    2, {
      x: 0,
      ease: Power4.easeOut
    },{
      x: 30,
      ease: Power4.easeOut
    });
});

button6.addEventListener('mouseout', function() {
  TweenMax.fromTo(
    button6,
    1, {
      x: 30,
      ease: Power4.easeOut
    },{
      x: 0,
      ease: Power4.easeOut
    });
});

