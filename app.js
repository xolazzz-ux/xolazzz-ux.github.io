/* =============================================================
   Denis Bogdanov · Portfolio · app.js
   ------------------------------------------------------------
   Shared UI features used on every page:
     • Scroll-to-top button (left side) — fades in after the
       user scrolls past ~one viewport height, smooth-scrolls
       back to the top on click.
   ============================================================= */

(function () {
    function setupBackToTop() {
        const btn = document.querySelector('.back-to-top');
        if (!btn) return;

        const threshold = () => window.innerHeight * 0.6;
        const onScroll = () => {
            if (window.scrollY > threshold()) {
                btn.classList.add('is-visible');
            } else {
                btn.classList.remove('is-visible');
            }
        };

        btn.addEventListener('click', () => {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({
                top: 0,
                behavior: reduce ? 'auto' : 'smooth'
            });
        });

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupBackToTop);
    } else {
        setupBackToTop();
    }
})();
