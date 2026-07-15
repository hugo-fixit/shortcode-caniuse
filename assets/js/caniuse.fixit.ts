const { fixit } = window as any

interface CanIUseEmbed extends HTMLElement {
  theme: string
}

function setEmbedsTheme(embedEls: NodeListOf<CanIUseEmbed>, isDark: boolean) {
  embedEls.forEach((el) => {
    el.theme = isDark ? 'dark' : 'light'
  });
}

function initCanIUseeEmbeds() {
  const embedEls = document.querySelectorAll<CanIUseEmbed>('caniuse-embed');
  requestAnimationFrame(() => {
    setEmbedsTheme(embedEls, fixit.isDark)
  })
  fixit.eventBus.on('fixit:switch-theme', ({ detail }: { detail: { mode: string, isDark: boolean, isChanged: boolean } }) => {
    if (detail.isChanged) {
      setEmbedsTheme(embedEls, detail.isDark)
    }
  })
}


document.addEventListener('DOMContentLoaded', initCanIUseeEmbeds, false)
