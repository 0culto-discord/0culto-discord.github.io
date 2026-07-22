(function (w) {
    'use strict';
    var N = w.__hd;

    function clock() {
        if (!N.el.clock) return;
        function upd() {
            var now = new Date();
            N.el.clock.textContent = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
        }
        upd();
        setInterval(upd, 1000);
    }

    function reveal() {
        try {
            if (!('IntersectionObserver' in w)) return;
            var obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) e.target.classList.add('visible');
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.scroll-reveal').forEach(function (el) {
                obs.observe(el);
            });
        } catch (err) {
            N.lw('initScrollReveal failed:', err && err.message ? err.message : err);
        }
    }

    N.reveal = reveal;

    N.showDash = function () {
        if (N.el.gate) N.el.gate.classList.add('hidden');
        if (N.el.dash) N.el.dash.classList.remove('hidden');
        clock();
        reveal();
    };
})(window);
