(function (w) {
    'use strict';
    var N = w.__hd = w.__hd || {};

    N.g = function (id) {
        return document.getElementById(id) || null;
    };
    N.li = function () {
        console.info.apply(console, ['[app]'].concat([].slice.call(arguments)));
    };
    N.lw = function () {
        console.warn.apply(console, ['[app]'].concat([].slice.call(arguments)));
    };
    N.le = function () {
        console.error.apply(console, ['[app]'].concat([].slice.call(arguments)));
    };
})(window);
