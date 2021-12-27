


console.log("%c by.",'background:black; color:white;');
console.log(
    "     _\n" +
    " ___(_)_     _\n" +
    "/ __| | \\   / |\n" +
    "\\__ \\ |  \\_/  |\n" +
    "|___/_|_|\\_/|_|\n" +
    "\n" +
    "Version : 1.5.0\n" +
    "Author  : SeonBeom Sim\n" +
    "Website : https://github.com/simseonbeom");


console.log("%c - KindTiger - ",'background:black; color:white;');


gsap.registerPlugin(ScrollTrigger);



class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = "horizontalScroll";

  transformDelta(delta, fromEvent) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta;
    }

    const { x, y } = delta;

    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y
    };
  }
}

Scrollbar.use(HorizontalScrollPlugin,OverscrollPlugin);


const overscrollOptions = {
  enable: true,
  effect: navigator.userAgent.match(/Android/) ? 'glow' : 'glow',
  damping: 0.11,
  maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
  glowColor: 'transparent',
};




const scrollbar = document.querySelector("#scrollbar");


const myHorizontalScrollbar = Scrollbar.init(scrollbar,{
  plugins: {
    overscroll: { ...overscrollOptions },
  },
});

myHorizontalScrollbar.setPosition(0, 0);




$('.startPoint').click(function () {

  myHorizontalScrollbar.scrollTo(0, 0, 600, {
    callback: () => console.log('done!'),
    easing: easing.easeInOutCirc,
  });


});




ScrollTrigger.scrollerProxy(scrollbar, {
  scrollTop(value) {
    if (arguments.length) {
      myHorizontalScrollbar.scrollTop = value;
    }
    return myHorizontalScrollbar.scrollTop;
  },
  scrollLeft(value) {
    if (arguments.length) {
      myHorizontalScrollbar.scrollLeft = value;
    }
    return myHorizontalScrollbar.scrollLeft;
  }
});



myHorizontalScrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: scrollbar });


gsap.to("#section03", {
  scrollTrigger: {
    trigger: "#section03",
    start: "left left",
    horizontal: true,
    scroller: scrollbar,
    scrub: true,
    onUpdate: self => {
      // console.log("progress:", self.progress)

      v = Math.floor(self.progress *5);
      console.log(v)

      // list.find('.slide_img').stop().slideUp();
      // list.eq(v).find('.slide_img').one().stop().slideDown();

    }
    //markers: true
  }
});

/*


gsap.to('.fix_section', {
  rotation: 360,
  // x: -innerWidth*3,
  scrollTrigger: {
    trigger: "#section02",
    start: "left left",
    // end: () => "+=" + 300,
    end: 'right right',
    pin: true,
    horizontal: true,
    // pinSpace:false,
    pinSpacing: false,
    scrub: true,
    markers: true
  }
});

*/




/*

gsap.to(".square", {
  rotate: "360deg",
  scrollTrigger: {
    trigger: "#section01",
    // start: "left left",
    horizontal: true,
    scroller: scrollbar,
    scrub: true
    //markers: true
  }
});



*/
