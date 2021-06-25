let tab = function () {
  let tabNav = document.querySelectorAll('.tabs-list__button'),
    tabContent = document.querySelectorAll('.tabs-content'),
    tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
  }

};


tab();

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".mySwiper__next",
    prevEl: ".mySwiper__prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

var swiper2 = new Swiper(".mySwiper-2", {
  navigation: {
    nextEl: ".mySwiper-2__next",
    prevEl: ".mySwiper-2__prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});
