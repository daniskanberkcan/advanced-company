document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                if (entry.target.classList.contains('counter')) startCounter(entry.target);
            }
        });
    }, { threshold: 0.15 });

    // Animate these elements
    const targets = document.querySelectorAll('.glass-card, .project-card-v2, .stat, .why-card, .contact-card-final, .hero h1, .section-header');
    targets.forEach(t => {
        t.classList.add('hidden');
        observer.observe(t);
    });

    // Smart Counter
    function startCounter(el) {
        if (el.dataset.started === "true") return;
        el.dataset.started = "true";
        const target = parseInt(el.getAttribute("data-target"));
        let count = 0;
        const inc = target / 100;
        const update = () => {
            count += inc;
            if (count < target) {
                el.innerText = Math.floor(count) + (target === 10 ? "+" : (target === 100 ? "%" : ""));
                requestAnimationFrame(update);
            } else {
                el.innerText = target + (target === 100 ? "%" : (target === 10 ? "+" : ""));
            }
        };
        update();
    }
});
