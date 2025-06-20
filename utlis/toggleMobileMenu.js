export const openMobileMenu = () => {
  const menuPanel = document.getElementById("uc-menu-panel");
  
  if (menuPanel) {
    // Pour le nouveau menu View4Sight
    if (menuPanel.classList.contains("view4sight-mobile-menu")) {
      // Afficher le menu avec styles forcés
      menuPanel.style.setProperty('display', 'block', 'important');
      menuPanel.style.setProperty('opacity', '1', 'important');
      menuPanel.style.setProperty('visibility', 'visible', 'important');
      menuPanel.style.setProperty('pointer-events', 'auto', 'important');
      menuPanel.style.setProperty('position', 'fixed', 'important');
      menuPanel.style.setProperty('top', '0', 'important');
      menuPanel.style.setProperty('left', '0', 'important');
      menuPanel.style.setProperty('width', '100%', 'important');
      menuPanel.style.setProperty('height', '100vh', 'important');
      menuPanel.style.setProperty('z-index', '9999', 'important');
      menuPanel.style.setProperty('background', 'rgba(0, 0, 0, 0.5)', 'important');
      
      // Faire glisser le panel
      const panel = menuPanel.querySelector('.menu-panel');
      if (panel) {
        panel.style.setProperty('transform', 'translateX(0)', 'important');
        panel.style.setProperty('position', 'absolute', 'important');
        panel.style.setProperty('top', '0', 'important');
        panel.style.setProperty('right', '0', 'important');
        panel.style.setProperty('width', '320px', 'important');
        panel.style.setProperty('height', '100vh', 'important');
        panel.style.setProperty('background', '#222222', 'important');
        panel.style.setProperty('color', 'white', 'important');
      }
      
      document.body.style.overflow = "hidden"; // Empêcher le scroll du body
    } else {
      // Pour l'ancien menu template (fallback)
      menuPanel.classList.add("uc-offcanvas-overlay");
      menuPanel.classList.add("uc-open");
    }
  }
};

export const closeMobileMenu = () => {
  const menuPanel = document.getElementById("uc-menu-panel");
  if (menuPanel) {
    // Pour le nouveau menu View4Sight
    if (menuPanel.classList.contains("view4sight-mobile-menu")) {
      // Faire glisser le panel hors écran
      const panel = menuPanel.querySelector('.menu-panel');
      if (panel) {
        panel.style.transform = "translateX(100%)";
      }
      
      document.body.style.overflow = ""; // Rétablir le scroll du body
      
      // Masquer complètement après l'animation
      setTimeout(() => {
        menuPanel.style.display = "none";
        menuPanel.style.opacity = "0";
        menuPanel.style.visibility = "hidden";
        menuPanel.style.pointerEvents = "none";
      }, 300);
    } else {
      // Pour l'ancien menu template (fallback)
      menuPanel.classList.remove("uc-offcanvas-overlay");
      menuPanel.classList.remove("uc-open");
    }
  }
};
