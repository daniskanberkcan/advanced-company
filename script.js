document.addEventListener("DOMContentLoaded", () => {
    
    // Intersection Observer (Sayfa kaydırınca beliren öğeler)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                if (entry.target.classList.contains('counter')) {
                    startCounter(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    // Tüm animasyonlu öğeleri seç
    document.querySelectorAll('.stat, .card, .contact-box, .hero h1, .counter, section h2, footer p').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Sayaç Fonksiyonu
    function startCounter(el) {
        if (el.dataset.started === "true") return;
        const target = parseInt(el.getAttribute("data-target"));
        if (isNaN(target)) return;

        el.dataset.started = "true";
        let count = 0;
        const speed = 2000 / target; // 2 saniyede tamamlanır

        let suffix = "";
        if (target === 10) suffix = "+";
        if (target === 100) suffix = "%";

        const update = () => {
            if (count < target) {
                count++;
                el.innerText = count + suffix;
                setTimeout(update, speed);
            } else {
                el.innerText = target + suffix;
            }
        };
        update();
    }
});
