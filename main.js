/* =============================================================
   Denis Bogdanov · Portfolio · main.js
   - Renders case-study cards from cases-data.js (window.CASES)
   - Observes them with IntersectionObserver to trigger the
     reveal animation when they scroll into view
   - Card links point to case.html?slug=... (detail page)
   ============================================================= */

/* ---------- 1. Build case URL helper ----------
   Builds the case detail URL for a given slug. Kept as a single
   helper so it's easy to swap (e.g. to /cases/<slug>/ later).
   ---------------------------------------------------------- */
function caseUrl(slug) {
    return `case.html?slug=${encodeURIComponent(slug)}`;
}

/* ---------- 2. Render cards ---------- */
function renderCases() {
    const list = document.getElementById('cases-list');
    if (!list || !Array.isArray(window.CASES)) return;

    const html = window.CASES.map((c, i) => `
        <li class="case-card" data-slug="${c.slug}" style="--i:${i}">
            <div class="case-card__body">
                <h3 class="case-card__title">${c.title}</h3>
                <p class="case-card__desc">${c.intro}</p>
                <a class="case-card__cta" href="${caseUrl(c.slug)}">
                    <span class="case-card__cta-arrow" aria-hidden="true">↗</span>
                    <span>See more</span>
                </a>
            </div>
            <a class="case-card__media-link" href="${caseUrl(c.slug)}" aria-label="Open case: ${c.title}">
                <div class="case-card__media">
                    <img
                        src="${encodeURI(c.cover)}"
                        alt="${c.alt}"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </a>
        </li>
    `).join('');

    list.innerHTML = html;
}

/* ---------- 3. Scroll-trigger the RGB reveal ---------- */
function observeCards() {
    const cards = document.querySelectorAll('.case-card');
    if (!('IntersectionObserver' in window) || !cards.length) {
        cards.forEach(c => c.classList.add('in-view'));
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Small delay per card so multiple coming in at once stagger.
                // Uses CSS animation-delay (the entry effect is an animation, not a transition).
                const idx = Number(entry.target.style.getPropertyValue('--i')) || 0;
                entry.target.style.animationDelay = `${Math.min(idx * 0.05, 0.25)}s`;
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.22,
        rootMargin: '0px 0px -8% 0px',
    });

    cards.forEach(card => io.observe(card));
}

/* ---------- 4. Hero parallax (very subtle) ----------
   Moves the entire .hero__photo so all 4 RGB layers shift together.
   Each layer's own intro/idle animation still runs on the layer itself,
   while parallax translates the parent figure — no interference.
   ---------------------------------------------------- */
function heroParallax() {
    const photo = document.querySelector('.hero__photo');
    if (!photo) return;
    const onMove = (e) => {
        const x = (e.clientX / window.innerWidth - .5) * 8;   // -4..4 px
        const y = (e.clientY / window.innerHeight - .5) * 8;
        photo.style.translate = `${x}px ${y}px`;
    };
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('pointermove', onMove, { passive: true });
    }
}

/* ---------- 5. Bootstrap ---------- */
document.addEventListener('DOMContentLoaded', () => {
    renderCases();
    observeCards();
    heroParallax();
});
