/* ==========================
   ADVANCED TECHNOLOGY
   script.js
========================== */

// Navbar arkaplanı

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(5,7,11,.92)";
        header.style.boxShadow = "0 5px 30px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(5,7,11,.75)";
        header.style.boxShadow = "none";

    }

});


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card").forEach(card=>{

    observer.observe(card);

});

document.querySelectorAll(".project").forEach(card=>{

    observer.observe(card);

});

document.querySelectorAll(".info-box").forEach(card=>{

    observer.observe(card);

});


// Smooth Scroll

document.querySelectorAll("nav a").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// Hero Fade

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.opacity=1-window.scrollY/700;

});


// Mouse Parallax

const hero=document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

    let x=(window.innerWidth/2-e.pageX)/70;

    let y=(window.innerHeight/2-e.pageY)/70;

    hero.style.backgroundPosition=`calc(50% + ${x}px) calc(50% + ${y}px)`;

});


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText='0';

    const updateCounter=()=>{

        const target=+counter.getAttribute("data-target");

        const c=+counter.innerText;

        const increment=target/80;

        if(c<target){

            counter.innerText=`${Math.ceil(c+increment)}`;

            setTimeout(updateCounter,25);

        }else{

            counter.innerText=target;

        }

    }

    updateCounter();

});


// Fade Up

const hidden=document.querySelectorAll(".info-box,.card,.project");

hidden.forEach(el=>{

    el.classList.add("hidden");

});
