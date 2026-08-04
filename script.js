document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Intersection Observer (Animasyonları Tetikleyici)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Eğer eleman bir sayıcı (counter) ise sayma işlemini başlat
                if (entry.target.classList.contains('counter')) {
                    startCounter(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    // Animasyon eklenecek tüm elemanları seç (Yeni sınıflar eklendi)
    const elementsToAnimate = document.querySelectorAll(
        '.glass-card, .info-box, .project-card, .project-card-v2, .why-card, .hero h1, .section-header, .tech-box, .stat, .counter, .spec-item, .tech-info-text, .tech-visual'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('hidden'); // Başlangıçta gizle
        observer.observe(el); // İzlemeye al
    });

    // 2. Sayaç Animasyon Fonksiyonu
    function startCounter(el) {
        if (el.dataset.started === "true") return;
        const target = parseInt(el.getAttribute("data-target"));
        if (isNaN(target)) return;

        el.dataset.started = "true";
        let count = 0;
        const duration = 2000; // 2 saniye sürer
        const increment = target / (duration / 16); // 60 FPS bazlı artış

        const update = () => {
            count += increment;
            if (count < target) {
                // Hedef 100 ise yanına %, 10 ise yanına + ekle (Sunumdaki verilere göre)
                let suffix = (target === 100) ? "%" : (target === 10 ? "+" : "");
                el.innerText = Math.floor(count) + suffix;
                requestAnimationFrame(update);
            } else {
                let suffix = (target === 100) ? "%" : (target === 10 ? "+" : "");
                el.innerText = target + suffix;
            }
        };
        update();
    }

    // 3. Menü Linkleri İçin Yumuşak Kaydırma (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 100; // Header yüksekliği kadar boşluk bırak
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Parallax Derinlik Efekti (Opsiyonel - Hafif Mouse Hareketi)
    const hero = document.querySelector('.hero');
    if (window.innerWidth > 768 && hero) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 20;
            const y = (e.clientY / window.innerHeight) * 20;
            hero.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
        });
    }
});
