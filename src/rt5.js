(function (w) {
    'use strict';
    var N = w.__hd;

    function switchTab(tab) {
        var tabs = ['osint', 'opsec', 'geoint'];
        tabs.forEach(function (t) {
            var content = N.g('tab-content-' + t);
            var btn = N.g('tab-btn-' + t);
            if (content) {
                if (t === tab) content.classList.remove('hidden');
                else content.classList.add('hidden');
            }
            if (btn) {
                if (t === tab) {
                    btn.classList.add('border-emerald-500', 'text-emerald-400');
                    btn.classList.remove('border-transparent', 'text-slate-400');
                } else {
                    btn.classList.remove('border-emerald-500', 'text-emerald-400');
                    btn.classList.add('border-transparent', 'text-slate-400');
                }
            }
        });
    }
    w.switchDefinitionTab = switchTab;

    if (N.el.gate) {
        N.el.gate.addEventListener('click', function () {
            try {
                N.boot();
            } catch (err) {
                N.le('Erreur lors du démarrage de la séquence :', err && err.message ? err.message : err);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        N.li('app chargé');
    });

    w.__HiDenscript = {
        startBootSequence: N.boot,
        switchDefinitionTab: switchTab,
        initScrollReveal: N.reveal
    };
})(window);
