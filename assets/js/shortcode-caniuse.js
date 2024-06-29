function setCanIUseEmbedsTheme(allCanIUseEmbeds, isDark) {
  allCanIUseEmbeds.forEach(function (embed) {
    embed.setAttribute('data-theme', isDark ? 'dark' : 'light');
  });
}

function CanIUseShortcodeInit() {
  if (typeof window.fixit?.switchThemeEventSet === 'object') {
    const allCanIUseEmbeds = document.querySelectorAll('.ciu-embed');
    setCanIUseEmbedsTheme(allCanIUseEmbeds, window.fixit.isDark);
    window.fixit?.switchThemeEventSet.add(function (isDark) {
      setCanIUseEmbedsTheme(allCanIUseEmbeds, isDark);
    })
    return;
  }
}


if (document.readyState !== 'loading') {
  CanIUseShortcodeInit();
} else {
  document.addEventListener('DOMContentLoaded', caniuseShortcodeInit, false);
}