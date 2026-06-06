/* =============================================================
   Denis Bogdanov · Portfolio · case.js
   ------------------------------------------------------------
   Bootstrap for case.html. Reads the ?slug=... URL parameter,
   finds the matching entry in window.CASES (from cases-data.js)
   and populates the page. If the slug is missing or unknown a
   small "not found" fallback is shown.
   ============================================================= */

/* ---------- Tiny HTML helper — escapes text content, allows
   the strong tags we use in bullet items (which already come
   pre-escaped in the data file). ---------- */
function escapeAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
                    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Render one section block — text column on top, optional
   full-width gallery below.                                    */
function sectionHTML(section, idx) {
    const body  = (section.body  || []).map(p => `<p>${p}</p>`).join('');
    const list  = section.list && section.list.length
        ? `<ul class="case-detail__list">${section.list.map(li => `<li>${li}</li>`).join('')}</ul>`
        : '';
    const after = (section.bodyAfter || []).map(p => `<p>${p}</p>`).join('');

    /* Two shapes supported for `images`:
         ['a.png', 'b.png']              → one gallery row
         [['a.png','b.png'], ['c.png']]  → multiple explicit rows
       Each row becomes its own .case-detail__gallery div, so
       you can freely break images into rows just by nesting. */
    const imgs = section.images || [];
    const rows = imgs.length === 0
        ? []
        : (Array.isArray(imgs[0]) ? imgs : [imgs]);

    const gallery = rows.map(row => {
        let mod = '';
        if (row.length === 1) mod = ' case-detail__gallery--solo';
        else if (row.length === 2) mod = ' case-detail__gallery--duo';

        const figs = row.map(src => `
            <figure class="case-detail__shot">
                <img src="${encodeURI(src)}" alt="" loading="lazy" decoding="async" />
            </figure>`).join('');

        return `<div class="case-detail__gallery${mod}">${figs}</div>`;
    }).join('');

    return `
        <section class="case-detail__section" style="--i:${idx}">
            <div class="case-detail__section-text">
                <h2 class="case-detail__section-title">${escapeAttr(section.heading)}</h2>
                ${body}
                ${list}
                ${after}
            </div>
            ${gallery}
        </section>
    `;
}

/* ---------- Main render ---------- */
function renderCase() {
    const params = new URLSearchParams(window.location.search);
    const slug   = params.get('slug');
    const data   = (window.CASES || []).find(c => c.slug === slug);

    const root   = document.getElementById('case-root');
    const empty  = document.getElementById('case-empty');

    if (!data) {
        // Hide the populated template, show fallback.
        if (root) {
            root.querySelector('.case-detail__head')?.setAttribute('hidden', '');
            root.querySelector('.case-detail__sections')?.setAttribute('hidden', '');
        }
        if (empty) empty.hidden = false;
        document.title = 'Case not found · Denis Bogdanov';
        return;
    }

    // <title> + meta description
    document.title = `${data.title} · Denis Bogdanov`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', data.intro.slice(0, 160));

    // Header
    document.getElementById('case-title').textContent = data.title;
    document.getElementById('case-intro').textContent = data.intro;

    const cover = document.getElementById('case-cover');
    cover.src = encodeURI(data.cover);
    cover.alt = data.alt || data.title;

    // Sections
    const sectionsRoot = document.getElementById('case-sections');
    sectionsRoot.innerHTML = (data.sections || []).map(sectionHTML).join('');
}

/* ---------- Scroll-in reveal for sections + screenshots ---------- */
function observeReveal() {
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.case-detail__section, .case-detail__shot')
            .forEach(el => el.classList.add('in-view'));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });

    document.querySelectorAll('.case-detail__section, .case-detail__shot')
        .forEach(el => io.observe(el));
}

/* ---------- Bootstrap ---------- */
document.addEventListener('DOMContentLoaded', () => {
    renderCase();
    observeReveal();
});
