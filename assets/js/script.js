document.addEventListener('DOMContentLoaded', function () {
  // Navbar Scroll Animation
  var navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Responsive Menu Toggle
  const btnRes = document.querySelector('.nav-btn-responsive');
  const menu = document.querySelector('.navbar-collapse');

  if (btnRes && menu) {
    btnRes.addEventListener('click', function () {
      menu.classList.toggle('active');
      btnRes.classList.toggle('cross');
    });
  }

  // AOS Initialization
  AOS.init({
    disable: function () {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    },
    duration: 1200,
    easing: 'ease-in-out',
    once: true,
    mirror: true,
    anchorPlacement: 'top-bottom',
  });

  // Navbar Underline Animation
  const navItems = document.querySelectorAll('.nav-item');
  const firstNavItem = navItems[0];
  const underline = document.querySelector('.underline');

  if (underline && firstNavItem) {
    underline.style.width = `${firstNavItem.offsetWidth}px`;
    underline.style.transform = `translateX(${firstNavItem.offsetLeft}px)`;
  }

  navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      changeTab(item);
    });
  });

  function changeTab(item) {
    if (underline) {
      underline.style.width = `${item.offsetWidth}px`;
      underline.style.transform = `translateX(${item.offsetLeft}px)`;
    }

    navItems.forEach(function (navItem) {
      navItem.classList.remove('active');
    });

    item.classList.add('active');
  }

  window.addEventListener('resize', updateUnderline);

  // Navbar Link Click Event
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      const navMenu = document.querySelector('.nav-menu');
      const isMenuOpen = navMenu.classList.contains('open');

      if (isMenuOpen) {
        navMenu.classList.remove('open');
      }
    });
  });
});
