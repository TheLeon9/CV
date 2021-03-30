new kursor({
    type: 1,
    color: 'rgba(0,134,200)',
    removeDefaultCursor: true
});

/* 
+----------------------------------------------------------------------+
| Animation pour la transition
+----------------------------------------------------------------------+
*/
var dur = 0.7;
var delay = 0.2;
function AnimationTest(href) {
    gsap.to(".tleft", {
        left: "0",
        top: "0",
        rotate: "0deg",
        duration: dur,
        
        ease: [0.68, -0.6, 0.32, 1.6]
    });
    gsap.to(".tright", {
        right: "0",
        top: "0",
        rotate: "0deg",
        duration: dur,
        
        ease: [0.68, -0.6, 0.32, 1.6]
    });
    gsap.to(".bleft", {
        left: "0",
        bottom: "0",
        rotate: "0deg",
        duration: dur,
        
        ease: [0.68, -0.6, 0.32, 1.6]
    });
    gsap.to(".bright", {
        right: "0",
        bottom: "0",
        rotate: "0deg",
        duration: dur,
        ease: [0.68, -0.6, 0.32, 1.6],
        onComplete: function () {
            document.location.href = href;
        }
    });
}
gsap.to(".tleft", {
    left: "-38vw",
    top: "-25vh",
    rotate: "50deg",
    delay,
    duration: dur,
    ease: [0.68, -0.6, 0.32, 1.6]
});
gsap.to(".tright", {
    right: "-38vw",
    top: "-25vh",
    rotate: "-50deg",
    delay,
    duration: dur,
    ease: [0.68, -0.6, 0.32, 1.6]
});
gsap.to(".bleft", {
    left: "-38vw",
    bottom: "-20vh",
    rotate: "-50deg",
    duration: dur,
    delay,
    ease: [0.68, -0.6, 0.32, 1.6]
});
gsap.to(".bright", {
    right: "-38vw",
    bottom: "-20vh",
    rotate: "50deg",
    delay,
    duration: dur,
    ease: [0.68, -0.6, 0.32, 1.6]
});

/* 
+----------------------------------------------------------------------+
| Animation pour le black mode
+----------------------------------------------------------------------+
*/
var emoji = document.querySelector(".emoji-overlay");
var icon = document.querySelector(".icon");
var body = document.querySelector("body");

if (localStorage.getItem("night")=== "dark") {

    icon.classList.toggle("icon-change");
    emoji.classList.toggle("emoji-change");
    body.classList.toggle("night");
}

emoji.addEventListener("click", () => {

    icon.classList.toggle("icon-change");
    emoji.classList.toggle("emoji-change");
    body.classList.toggle("night");

    if (localStorage.getItem("night") === "dark" ) {
        localStorage.setItem("night", "white")

    } else {
        localStorage.setItem("night", "dark")
    }

});

navSlide();
/* 
+----------------------------------------------------------------------+
| Animation pour la souris qui bouge
+----------------------------------------------------------------------+
*/


