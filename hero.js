const init = () =>{
    // const marquee = document.querySelector('[wb-data="marquee"]');
    const marquee = document.querySelector('.hero-big-text');
    // const marquee = document.querySelector('.hero-component');
    if (!marquee) {
        return;
    }
    // const duration = parseInt(marquee.getAttribute("duration"), 10) || 5;
    // const marqueeContent = marquee.innerHTML;
    const marqueeContent = marquee.firstElementChild;

    if (!marqueeContent) {
        return;
    }

    const marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);

    let tween;

    const playMarquee = ()=>{
        let progress = tween ? tween.progress() : 0;
        tween && tween.progress(0).kill();
        const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue("width"), 10);
        const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue("grid-column-gap"), 10);
        const distanceToTranslate = -1 * (gap + width);

        tween = gsap.fromTo(marquee.children, {
            x: 0
        }, {
            x: distanceToTranslate,
            duration: 240,
            ease: "none",
            repeat: -1
        });
        tween.progress(progress);
    }
    ;
    playMarquee();

    function debounce(func) {
        var timer;
        return function(event) {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(()=>{
                func();
            }
            , 500, event);
        }
        ;
    }


    const tl = gsap.timeline({ defaults: { ease: "elastic.out(0.8,0.6)" } });
    tl.fromTo(".hero-card.third", { y:"100%", opacity: 0}, { y:"0%", opacity: 1, duration: 3});
    tl.fromTo(".hero-card.second", { y:"100%", opacity: 0}, { y:"0%", opacity: 1, duration: 3}, "-=2.5");
    tl.fromTo(".hero-card.first", { y:"100%", opacity: 0}, { y:"0%", opacity: 1, duration: 3}, "-=2.5");

    window.addEventListener("resize", debounce(playMarquee));
}
;

document.addEventListener("DOMContentLoaded", init);
