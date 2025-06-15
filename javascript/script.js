    // Mobile Menu Toggle
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuOpen = document.getElementById('menu-open');
      const menuClose = document.getElementById('menu-close');

      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpen.classList.toggle('hidden');
        menuClose.classList.toggle('hidden');
        const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
        menuToggle.setAttribute('aria-expanded', isExpanded);
        mobileMenu.setAttribute('aria-hidden', isExpanded === 'true' ? 'true' : 'false');
      });

      // Dark Mode Toggle
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
      const sunIcon = document.getElementById('sun-icon');
      const moonIcon = document.getElementById('moon-icon');
      const mobileSunIcon = document.getElementById('mobile-sun-icon');
      const mobileMoonIcon = document.getElementById('mobile-moon-icon');

      const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');
        mobileSunIcon.classList.toggle('hidden');
        mobileMoonIcon.classList.toggle('hidden');
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark') ? 'enabled' : 'disabled');
      };

      darkModeToggle.addEventListener('click', toggleDarkMode);
      mobileDarkModeToggle.addEventListener('click', toggleDarkMode);

      // Load Dark Mode Preference
      if (localStorage.getItem('darkMode') === 'enabled') {
        document.documentElement.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        mobileSunIcon.classList.add('hidden');
        mobileMoonIcon.classList.remove('hidden');
      }