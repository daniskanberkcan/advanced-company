document.addEventListener("DOMContentLoaded", () => {
    
    // 1. INTERSECTION OBSERVER (Animasyonları ve Sayacı Tetikler)
    const observerOptions = {
        threshold: 0.15, // Bölümün %15'i göründüğünde başla
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                
                // Eğer eleman bir sayaç ise saymayı başlat
                if (entry.target.classList.contains('counter')) {
                    startCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Animasyon eklenecek tüm sınıflar (Eksiksiz Liste)
    const elementsToAnimate = document.querySelectorAll(
        '.glass-card, .info-box, .project-card-v2, .why-card, .stat, .counter, ' +
        '.tech-info-text, .tech-visual, .spec-item, .contact-card-v2, ' +
        'section h2, .section-header, .hero h1'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('hidden'); // CSS'deki gizleme sınıfını ekle
        appearanceObserver.observe(el); // Gözlemciye ekle
    });

    // 2. SAYAÇ FONKSİYONU (Hassas ve Hata Korumalı)
    function startCounter(el) {
        if (el.dataset.started === "true") return;
        
        const targetStr = el.getAttribute("data-target");
        const target = parseInt(targetStr);
        if (isNaN(target)) return;

        el.dataset.started = "true";
        
        let count = 0;
        const duration = 2000; // 2 saniyede tamamlansın
        const stepTime = 20; // 20ms'de bir güncelle
        const increment = target / (duration / stepTime);

        // Hangi işareti ekleyeceğimizi belirle
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

    // 3. YUMUŞAK KAYDIRMA (Smooth Scroll)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 90; // Header yüksekliği
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. AKTİF MENÜ TAKİBİ (Hangi sayfadaysan menüde o parlar)
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.style.color = "var(--accent)";
            } else {
                link.style.color = "white";
            }
        });
    });

    // 5. MOUSE PARALLAX (Sadece Hero Bölümünde)
    const hero = document.querySelector('.hero');
    if (window.innerWidth > 768 && hero) {
        hero.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            const content = hero.querySelector('.hero-content');
            if(content) {
                content.style.transform = `translate(${x}px, ${y}px)`;
            }
        });
    }
});
