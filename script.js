/* =====================================================
   ADVANCED TECHNOLOGY & ENGINEERING
   script.js - Version 2.1
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. NAVBAR SCROLL EFEKTİ
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "15px 8%";
            header.style.background = "rgba(5, 7, 11, 0.95)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            header.style.padding = "0 8%";
            header.style.background = "rgba(5, 7, 11, 0.8)";
            header.style.boxShadow = "none";
        }
    });

    // 2. INTERSECTION OBSERVER (Görünce Belirme Animasyonu)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Eğer bu bir istatistik kartıysa sayacı başlat
                if (entry.target.classList.contains('stat')) {
                    startCounter(entry.target.querySelector('h2'));
                }
            }
        });
    }, observerOptions);

    // Animasyon eklenecek tüm elemanları seç
    const animatedElements = document.querySelectorAll(".card, .project, .info-box, .stat, section h2");
    animatedElements.forEach(el => {
        el.classList.add("hidden"); // CSS'deki hidden class'ını ekle
        appearanceObserver.observe(el);
    });

    // 3. İSTATİSTİK SAYACI FONKSİYONU
    function startCounter(counterElement) {
    if (!counterElement || counterElement.dataset.started === "true") return;
    
    counterElement.dataset.started = "true";
    const target = parseInt(counterElement.getAttribute("data-target"));
    
    // Hangi sayıya hangi işaretin geleceğini belirleyelim
    let suffix = "";
    if (target === 10) suffix = "+";  // 10+ olması için
    if (target === 100) suffix = "%"; // 100% olması için

    let count = 0;
    const duration = 2000; // 2 saniye sürecek
    const increment = target / (duration / 16); // 60 FPS bazlı artış

    const update = () => {
        count += increment;
        if (count < target) {
            counterElement.innerText = Math.ceil(count) + suffix;
            requestAnimationFrame(update);
        } else {
            counterElement.innerText = target + suffix;
        }
    };
    update();
}

    // 4. HERO MOUSE PARALLAX (Hafif ve Akıcı)
    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");

    if (hero) {
        hero.addEventListener("mousemove", (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;

            // İçeriği hafifçe ters yöne hareket ettirerek derinlik algısı yarat
            if (heroContent) {
                heroContent.style.transform = `translate(${x}px, ${y}px)`;
            }
            
            // Varsa arka plan videosunu/görselini çok hafif kaydır
            const bgMedia = document.querySelector(".hero-bg-media");
            if (bgMedia) {
                bgMedia.style.transform = `scale(1.1) translate(${-x/2}px, ${-y/2}px)`;
            }
        });
    }

    // 5. HERO FADE OUT ON SCROLL
    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY;
        if (heroContent && scrollPos < 800) {
            heroContent.style.opacity = 1 - scrollPos / 600;
            heroContent.style.filter = `blur(${scrollPos / 100}px)`;
        }
    });

    // 6. SMOOTH SCROLL (Tüm İç Bağlantılar İçin)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});
