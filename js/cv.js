/* 
+----------------------------------------------------------------------+
| Animation pour le kursor
+----------------------------------------------------------------------+
*/
new kursor({
    type: 1,
    color: 'rgba(0,134,200)',
    removeDefaultCursor: true
});

/* 
+----------------------------------------------------------------------+
| AOS
+----------------------------------------------------------------------+
*/
AOS.init();

/* 
+----------------------------------------------------------------------+
| Animation pour les skills
+----------------------------------------------------------------------+
*/
function edu() {
    document.getElementById("exp").style.opacity = "0%"
    document.getElementById("edu").style.opacity = "100%"
}

function exp() {
    document.getElementById("exp").style.opacity = "100%"
    document.getElementById("edu").style.opacity = "0%"
}

function comp() {
    document.getElementById("comp1").style.opacity = "0%"
    document.getElementById("comp").style.opacity = "100%"
}

function comp1() {
    document.getElementById("comp1").style.opacity = "100%"
    document.getElementById("comp").style.opacity = "0%"
}

function active(non) {
    if (non == 1) {
        edu()
        comp()
    } else {
        exp()
        comp1()
    }
    const ok = document.querySelector(".semititre1")
    const ok1 = document.querySelector(".semititre2")
    const ok2 = document.querySelector(".semititre3")
    const ok3 = document.querySelector(".semititre4")

    ok.classList.toggle("active")
    ok1.classList.toggle("active")
    ok2.classList.toggle("active")
    ok3.classList.toggle("active")

}
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

if (localStorage.getItem("night") === "dark") {

    icon.classList.toggle("icon-change");
    emoji.classList.toggle("emoji-change");
    body.classList.toggle("night");
}

emoji.addEventListener("click", () => {

    icon.classList.toggle("icon-change");
    emoji.classList.toggle("emoji-change");
    body.classList.toggle("night");

    if (localStorage.getItem("night") === "dark") {
        localStorage.setItem("night", "white")

    } else {
        localStorage.setItem("night", "dark")
    }

});

navSlide();