document.addEventListener("DOMContentLoaded", () => {
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

    document.querySelectorAll('.stat, .card, .info-box, .project, .hero h1, .counter, section h2, footer p').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    function startCounter(el) {
        if (el.dataset.started === "true") return;
        const target = parseInt(el.getAttribute("data-target"));
        if (isNaN(target)) return;
        el.dataset.started = "true";
        let count = 0;
        const speed = 2000 / target;
        let suffix = target === 10 ? "+" : (target === 100 ? "%" : "");
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
