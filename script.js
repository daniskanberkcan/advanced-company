document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                if (entry.target.classList.contains('counter')) startCounter(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card, .project-card-v2, .stat, .hero h1, .tech-info-text, .tech-visual').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    function startCounter(el) {
        if (el.dataset.started === "true") return;
        el.dataset.started = "true";
        const target = parseInt(el.getAttribute("data-target"));
        let count = 0;
        const update = () => {
            count += target / 100;
            if (count < target) {
                el.innerText = Math.floor(count) + (target === 100 ? "%" : (target === 10 ? "+" : ""));
                requestAnimationFrame(update);
            } else {
                el.innerText = target + (target === 100 ? "%" : (target === 10 ? "+" : ""));
            }
        };
        update();
    }
});
