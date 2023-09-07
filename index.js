gsap.to(".nav", {
    backgroundColor: "#000",
    height: "90px",
    duration: 1,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1

    }
})
gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})
gsap.from(".about-us img ,.about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})
gsap.from(".semi1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: ".semi1",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#semi2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#semi2",
        scroller: "body",
        start: "top 100%",
        end: "top 85%",
        scrub: 4
    }
})
gsap.from(".page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        scrub: 4,
    }

})


// gsap.from("#semi2", {
//     y: 70,
//     x: 70,
//     scrollTrigger: {
//         trigger: "#semi2",
//         scroller: "body",
//         markers:true,
//         start: "top 55%",
//         end: "top 45%",
//         scrub: 4,
//     },
// });
// gsap.from(".card", {
//     scale: 0.8,  
//     opacity: 0,
//     duration: 0.8,
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".card",
//         scroller: "body",
//         // markers:true,
//         start: "top 85%",
//         end: "top 70%",
//         scrub: 1
//     }
// })





var cursor = document.querySelector(".cursor")
var cursor1 = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x - 11 + "px"
    cursor.style.top = dets.y - 11 + "px"
    cursor1.style.left = dets.x - 150 + "px"
    cursor1.style.top = dets.y - 150 + "px"
})

var h4 = document.querySelectorAll(".nav h4")
var arrow=document.querySelector(".arrow")
arrow.addEventListener("mouseenter",function(){
    cursor.style.scale=3
    cursor.style.backgroundColor="transparent"
    cursor.style.border="1px solid white"
})
arrow.addEventListener("mouseleave",function(){
    cursor.style.scale=1
    cursor.style.backgroundColor="#95C11E"
    cursor.style.border="0px solid white"
})

h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "0.5px solid white"
        cursor.style.backgroundColor = "transparent"

    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})
