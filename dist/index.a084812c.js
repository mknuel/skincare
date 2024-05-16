const tl = gsap.timeline({
    defaults: {
        duration: 0.75,
        ease: "power3.out"
    }
});
tl.fromTo(".hero-img", {
    scale: 1.3,
    borderRadius: "0rem"
}, {
    scale: 1,
    borderRadius: "1.5rem",
    delay: 0.35,
    duration: 2.5,
    ease: "elastic.out(1.5, 1)"
});
tl.fromTo(".cta1", {
    x: "100%",
    opacity: 0.5
}, {
    x: 0,
    opacity: 1
}, "<20%").fromTo(".cta3", {
    x: "-100%",
    opacity: 0.5
}, {
    x: 0,
    opacity: 1
}, "<20%").fromTo(".cta2", {
    y: "100%",
    opacity: 0.5
}, {
    y: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta4", {
    x: "100%",
    opacity: 0.5
}, {
    x: 0,
    opacity: 1
}, "<20%").fromTo(".cta6", {
    x: "-100%",
    opacity: 0.5
}, {
    x: 0,
    opacity: 1
}, "<20%").fromTo(".cta5", {
    y: "-100%",
    opacity: 0.5
}, {
    y: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta-btn", {
    y: 20,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "<");
const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");
logo.textContent = "";
letters.forEach((letter)=>{
    logo.innerHTML += `<span class="letter">${letter}</span>`;
});
gsap.set(".letter", {
    display: "inline-block"
});
gsap.fromTo(".letter", {
    y: "100%",
    "-webkit-text-stroke-width": 0.5,
    // "-webkit-text-stroke-color": "black",
    "-webkit-text-fill-color": "white",
    scale: "10",
    opacity: 0,
    color: "white"
}, {
    y: 0,
    delay: 1,
    stagger: 0.1,
    color: "black",
    scale: 1,
    "-webkit-text-stroke-width": 0,
    "-webkit-text-fill-color": "black",
    opacity: 1,
    ease: "back.out(1)"
});

//# sourceMappingURL=index.a084812c.js.map
