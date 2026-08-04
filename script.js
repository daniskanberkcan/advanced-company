/* =====================================================
   ADVANCED TECHNOLOGY & ENGINEERING - JS v8.0
   Full Presentation & Animation Controller
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. INTERSECTION OBSERVER (Elemanlar göründüğünde animasyonları başlatır)
    const observerOptions = {
        threshold: 0.15, // Bölümün %15'i göründüğünde tetiklenir
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                
                // Eğer eleman bir sayaç ise rakamları döndür
                if (entry.target.classList.contains('counter')) {
                    startCounter(entry.target);
                }
                
                // Eğer bu bir 'stat' kutusuysa içindeki sayacı bul ve başlat
                const innerCounter = entry.target.querySelector('.counter');
                if (innerCounter) {
                    startCounter(innerCounter);
                }
            }
        });
    }, observerOptions);

    // Animasyon eklenecek tüm elemanların listesi (YENİ EKLENEN TÜM SINIFLAR DAHİL)
    const elementsToAnimate = document.querySelectorAll(
        '.glass-card, .project-card-v2, .stat, .counter, .spec-row, ' +
        '.tech-visual-box, .tech-data-box, .why-card, .contact-card-final, ' +
        '.section-header, .hero-content, .info-box, .tech-item-v2, .cap-item'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('hidden'); // Başlangıçta gizle
        appearanceObserver.observe(el); // Gözlemciye kaydet
    });

    // 2. GELİŞMİŞ SAYAÇ FONKSİYONU
    function startCounter(el) {
        if (el.dataset.started === "true") return; // Zaten saydıysa bir daha sayma
        
        const targetStr = el.getAttribute("data-target");
        const target = parseInt(targetStr);
        if (isNaN(target)) return;

        el.dataset.started = "true";
        
        let count = 0;
        const duration = 2000; // Sayma işlemi 2 saniye sürer
        const stepTime = 20; // 20ms'de bir güncelleme
        const increment = target / (duration / stepTime);

        // İşaretleri Belirle (+ veya %)
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

    // 3. YUMUŞAK KAYDIRMA (SMOOTH SCROLL) - Header Offset Dahil
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = 110; // CSS'deki header yüksekliği
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. AKTİF SAYFA TAKİBİ (Navigasyonda hangi bölümde olduğunu gösterir)
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const headerHeight = 120;
            if (window.pageYOffset >= sectionTop - headerHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.style.color = "white"; // Varsayılan renk
            if (link.getAttribute("href").includes(current)) {
                link.style.color = "var(--accent)"; // Aktif bölüm rengi
            }
        });
    });

    // 5. HERO MOUSE PARALLAX (Derinlik Efekti)
    const hero = document.querySelector('.hero');
    if (window.innerWidth > 1024 && hero) {
        hero.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            const content = hero.querySelector('.hero-content');
            if (content) {
                content.style.transform = `translate(${x}px, ${y}px)`;
            }
        });
    }
});
