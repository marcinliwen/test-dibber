window.onload = (event) => {
  console.log("page is fully loaded");

  console.log("I am on home page");

  const tabNav = document.querySelectorAll(".tab-nav button");
  const tabItems = document.querySelectorAll(".tab-item");
  console.log(tabNav);
  tabNav.forEach((el, index) => {
    el.addEventListener("click", function (event) {
      tabNav.forEach((item) => item.classList.remove("active"));
      tabItems.forEach((item) => item.classList.remove("active"));
      tabNav[index].classList.add("active");
      tabItems[index].classList.add("active");
    });
  });

  new Swiper(".blog-home-swiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".blog-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          (index < 10 ? "0" : "") +
          (index + 1) +
          ".</span>"
        );
      },
    },
    navigation: {
      nextEl: ".blog-next",
      prevEl: ".blog-prev",
    },
  });
  new Swiper(".review-swiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".review-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          (index < 10 ? "0" : "") +
          (index + 1) +
          ".</span>"
        );
      },
    },
    navigation: {
      nextEl: ".review-next",
      prevEl: ".review-prev",
    },
  });

  new Swiper(".hero-swiper", {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".hero-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          (index < 10 ? "0" : "") +
          (index + 1) +
          ".</span>"
        );
      },
    },
  });
};
