gsap.to('#test', {
    opacity: 1.5,
    duration: 1,
    scrollTrigger: {
      trigger: '.author-section',
      tooggleActions: "restart none reverse none",
      start: "bottom bottom",
      markers: false,
      scrub: true
    }
})
gsap.to('.author-bg-img', {
    scale: 1,
    duration: .1,
    scrollTrigger: {
      trigger: '.author-bg-img',
      tooggleActions: "restart none reverse none",
      markers: false,
      scrub: true
    }
})
gsap.to('.arrow-line', {
    width: 900,
    duration: 30,
    scrollTrigger: {
      trigger: '.progress-section',
      tooggleActions: "restart none reverse none",
      start: "top center",
    //   markers: true,
      scrub: true
    }
})
gsap.to('.million-txt', {
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.million-trigger',
      tooggleActions: "restart none reverse none",
      start: "top center",
    //   markers: true,
      scrub: true
    }
})
gsap.to('.million-title', {
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.million-trigger',
      tooggleActions: "restart none reverse none",
      start: "top center",
    //   markers: true,
      scrub: true
    }
})

ScrollTrigger.create({
    trigger: ".author-section",
    start: "top top",
    pin: true,
    // markers: true,
    pinSpacing: false
})
ScrollTrigger.create({
    trigger: ".progress-section",
    start: "top top",
    pin: true,
    // markers: true,
    pinSpacing: false,
    end: "+="
})

gsap.to('.teamBgImg', {
    scale: 1,
    x:0,
    y:0,
    duration: 1,
    scrollTrigger: {
      trigger: '.million-title',
      tooggleActions: "restart none reverse none",
      start: "top bottom",
    //   markers: true,
      scrub: true
    }
})

gsap.to('.team-section-title', {
    y:0,
    duration: 1,
    scrollTrigger: {
      trigger: '.team-section',
      tooggleActions: "restart none reverse none",
      start: "top bottom",
      // markers: true,
      scrub: true
    }
})