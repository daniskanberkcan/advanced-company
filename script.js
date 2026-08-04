document.addEventListener("DOMContentLoaded", () => {
    
    // 1. NAVBAR SCROLL EFEKTİ
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "15px 8%";
            header.style.background = "rgba(5, 7, 11, 0.95)";
        } else {
            header.style.padding = "0 8%";
            header.style.background = "rgba(5, 7, 11, 0.8)";
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
                
                // SADECE .counter SINIFINA SAHİP ELEMENTLERİ SAYDIR
                if (entry.target.classList.contains('counter')) {
                    startCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Animasyon eklenecek elemanlar
    const animatedElements = document.querySelectorAll(".card, .project, .info-box, .stat, .counter, section h2");
    animatedElements.forEach(el => {
        el.classList.add("hidden"); 
        appearanceObserver.observe(el);
    });

    // 3. İSTATİSTİK SAYACI FONKSİYONU (Sadece atanmış hedefleri sayar)
    function startCounter(counterElement) {
        if (counterElement.dataset.started === "true") return;
        
        const target = parseInt(counterElement.getAttribute("data-target"));
        if (isNaN(target)) return; // Hedef sayı yoksa dur

        counterElement.dataset.started = "true";
        
        // İşaretleri belirle (+ veya %)
        let suffix = "";
        if (target === 10) suffix = "+";
        if (target === 100) suffix = "%";

        let count = 0;
        const duration = 2000; // 2 saniye
        const stepTime = Math.max(duration / target, 30);

        const timer = setInterval(() => {
            count++;
            counterElement.innerText = count + suffix;
            if (count >= target) {
                counterElement.innerText = target + suffix;
                clearInterval(timer);
            }
        }, stepTime);
    }

    // 4. SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: "smooth"
                });
            }
        });
    });
});
