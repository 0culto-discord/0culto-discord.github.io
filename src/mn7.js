(function (w) {
    'use strict';
    var N = w.__hd;

    N.el = {
        gate: N.g('gate-screen'),
        l1: N.g('line-1'),
        l2: N.g('line-2'),
        l3: N.g('line-3'),
        prog: N.g('progress-indicator'),
        dash: N.g('dashboard-screen'),
        clock: N.g('live-clock') // facultatif
    };

    if (!N.el.gate) N.lw('Element #gate-screen introuvable');
    if (!N.el.prog) N.lw('Element #progress-indicator introuvable');
    if (!N.el.dash) N.lw('Element #dashboard-screen introuvable');
})(window);
