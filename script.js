document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Intersection Observer for Smooth Fade-In Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Start counter if it's a stat element
                if (entry.target.classList.contains('counter')) {
                    startCounter(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll(
        '.glass-card, .info-box, .project-card, .why-card, .hero h1, .section-header, .tech-box, .stat, .counter'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // 2. Counter Animation Function
    function startCounter(el) {
        if (el.dataset.started === "true") return;
        const target = parseInt(el.getAttribute("data-target"));
        if (isNaN(target)) return;

        el.dataset.started = "true";
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS

        const update = () => {
            count += increment;
            if (count < target) {
                el.innerText = Math.floor(count) + (target === 100 ? "%" : (target === 10 ? "+" : ""));
                requestAnimationFrame(update);
            } else {
                el.innerText = target + (target === 100 ? "%" : (target === 10 ? "+" : ""));
            }
        };
        update();
    }

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 100;
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
