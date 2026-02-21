document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('js-hamburger');
  const mobileMenu = document.getElementById('js-mobile-menu');
  const overlay = document.getElementById('js-mobile-overlay');
  const closeBtn = document.getElementById('js-menu-close');
  const menuLinks = document.querySelectorAll(
    '.mobile-menu__link, .mobile-menu__contact-btn'
  );

  if (!hamburger || !mobileMenu) return;

  // ===============================
  // メニュー開閉トグル
  // ===============================
  const toggleMenu = () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

    hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');

    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    document.body.classList.toggle('body--fixed');
  };

  // ===============================
  // メニューを閉じる
  // ===============================
  const closeMenu = () => {
    hamburger.classList.remove('is-active');
    mobileMenu.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('body--fixed');
  };

  // ===============================
  // イベント登録（存在チェック付き）
  // ===============================
  hamburger.addEventListener('click', toggleMenu);

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ===============================
  // Escapeキーで閉じる
  // ===============================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });

});