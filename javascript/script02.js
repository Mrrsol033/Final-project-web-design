  // Dark Mode Toggle
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
      const sunIcon = document.getElementById('sun-icon');
      const moonIcon = document.getElementById('moon-icon');
      const mobileSunIcon = document.getElementById('mobile-sun-icon');
      const mobileMoonIcon = document.getElementById('mobile-moon-icon');

      const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        sunIcon.classList.toggle('hidden', isDark);
        moonIcon.classList.toggle('hidden', !isDark);
        mobileSunIcon.classList.toggle('hidden', isDark);
        mobileMoonIcon.classList.toggle('hidden', !isDark);
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
      };

      darkModeToggle.addEventListener('click', toggleDarkMode);
      mobileDarkModeToggle.addEventListener('click', toggleDarkMode);

      // Load dark mode preference
      if (localStorage.getItem('darkMode') === 'enabled' || 
          (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        mobileSunIcon.classList.add('hidden');
        mobileMoonIcon.classList.remove('hidden');
      }

      // Mobile Menu Toggle
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuOpen = document.getElementById('menu-open');
      const menuClose = document.getElementById('menu-close');

      menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        menuOpen.classList.toggle('hidden');
        menuClose.classList.toggle('hidden');
        mobileMenu.setAttribute('aria-hidden', isExpanded);
      });
            function toggleDropdown(id) {
        const el = document.getElementById(id);
        el.classList.toggle("hidden");
      }
      function toggleDropdown(id) {
        document.getElementById(id).classList.toggle("hidden");
      }