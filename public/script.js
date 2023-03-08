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
  if (typeof Swiper !== "undefined") {
    new Swiper(".blog-home-swiper", {
      slidesPerView: 1,
      spaceBetween: 32,
      breakpoints: {
        760: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
          pagination: {
            enabled: true,
          },
          slidesPerGroup: 3,
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
          pagination: {
            enabled: true,
          },
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
      /* effect: "fade",
    fadeEffect: {
      crossFade: true,
    }, */
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
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
  }
  var playButton = document.getElementById("play_button");
  // Event listener for the play/pause button
  var video = document.getElementById("video");

  playButton &&
    playButton.addEventListener("click", function () {
      video.play();
      video.setAttribute("controls", "");
      playButton.style.display = "none";
    });

  console.log("select");
  // Variables
  const dropdown = document.querySelector(".dropdown");
  const input = document.querySelector(".dropdown input");
  const listOfOptions = document.querySelectorAll(".option");
  const body = document.body;

  // Functions
  const toggleDropdown = (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("opened");
  };

  const selectOption = (event) => {
    input.value = event.currentTarget.textContent;
  };

  const closeDropdownFromOutside = () => {
    if (dropdown.classList.contains("opened")) {
      dropdown.classList.remove("opened");
    }
  };
  // Event Listeners

  body.addEventListener("click", closeDropdownFromOutside);

  listOfOptions.forEach((option) => {
    option.addEventListener("click", selectOption);
  });

  dropdown.addEventListener("click", toggleDropdown);

  const childAge = document.querySelector(".child-age");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");

  plus.addEventListener("click", function () {
    let input = document.getElementById("child-age");
    let val = input.value;
    if (val <= 9) {
      input.value = Number(val) + 1;
    }
  });
  minus.addEventListener("click", function () {
    let input = document.getElementById("child-age");
    let val = input.value;
    if (val > 0) {
      input.value = Number(val) - 1;
    }
  });
};
