document.addEventListener("DOMContentLoaded", () => {
    
    // 1. NAVBAR SCROLL
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

    // 2. INTERSECTION OBSERVER (Animasyonlar)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                
                // SADECE .counter sınıfı varsa ve data-target varsa saydır
                if (entry.target.classList.contains('counter') && entry.target.hasAttribute('data-target')) {
                    startCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Animasyon eklenecek tüm öğeler
    const animatedElements = document.querySelectorAll(".card, .project, .info-box, .stat, .counter, section h2");
    animatedElements.forEach(el => {
        el.classList.add("hidden"); 
        appearanceObserver.observe(el);
    });

    // 3. SAYAÇ FONKSİYONU (Hata Korumalı)
    function startCounter(el) {
        if (el.dataset.started === "true") return;
        
        const targetStr = el.getAttribute("data-target");
        const target = parseInt(targetStr);

        // Eğer hedef sayı değilse veya yoksa fonksiyondan çık (NaN hatasını engeller)
        if (isNaN(target)) return;

        el.dataset.started = "true";
        
        let count = 0;
        const duration = 2000; // 2 saniye
        const stepTime = 15; // Güncelleme hızı
        const increment = target / (duration / stepTime);

        // İşaretleri belirle
        let suffix = "";
        if (target === 10) suffix = "+";
        if (target === 100) suffix = "%";

        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                el.innerText = target + suffix;
                clearInterval(timer);
            } else {
                el.innerText = Math.floor(count) + suffix;
            }
        }, stepTime);
    }

    // 4. SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - 90,
                    behavior: "smooth"
                });
            }
        });
    });
});
