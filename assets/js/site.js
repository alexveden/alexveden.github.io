const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', (event) => {
        if (!event.target.closest('a')) return;
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
    });
}

const path = window.location.pathname.replace(/\/index\.html$/, '/');

document.querySelectorAll('[data-nav] a').forEach((link) => {
    const url = new URL(link.href);
    if (url.hash || url.pathname !== path) return;
    link.setAttribute('aria-current', 'page');
});
