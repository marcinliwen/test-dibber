window.onload = (event) => {
  const galeryHero = document.getElementById("galery-hero");
  if (galeryHero) {
    galeryHero.classList.add("is-visible");
  }
  let options = {
    threshold: 1,
  };
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  let target = document.querySelector("#isVisible");
  if (target) {
    observer.observe(target);
  }
  const inViews = document.querySelectorAll(".inView");
  if (inViews.length > 0) {
    inViews.forEach((inView) => {
      observer.observe(inView);
    });
  }

  const postVisible = document.getElementById("post-visible");
  if (postVisible) {
    postVisible.classList.add("is-visible");
  }

  const slideLeft = document.querySelector(".slide-left");
  if (slideLeft) {
    slideLeft.classList.add("is-visible");
  }

  let slider = document.querySelector(".slide-move");
  if (slider && slider.getBoundingClientRect().height > 96) {
    let thumb = slider.querySelector(".thumb");
    let tab1 = document.querySelector(".tab-1");
    let tab2 = document.querySelector(".tab-2");
    thumb.onmousedown = function (event) {
      event.preventDefault(); // prevent selection start (browser action)

      let shiftY = event.clientY - thumb.getBoundingClientRect().top;
      console.log("event.clientY", event.clientY);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);

      function onMouseMove(event) {
        let newTop =
          event.clientY - shiftY - slider.getBoundingClientRect().top;

        // the pointer is out of slider => lock the thumb within the bounaries
        if (newTop < 0) {
          newTop = 0;
        }
        let bottomEdge =
          slider.offsetHeight - 52 - thumb.getBoundingClientRect().height;

        if (newTop > bottomEdge) {
          tab2.style.zIndex = "20";
          newTop = bottomEdge;
        } else {
          tab2.style.zIndex = "1";
        }

        let counter = 100 - newTop / 2;
        tab1.style.opacity = counter / 100;

        tab2.style.opacity = newTop / 2 / 100;
        thumb.style.top = newTop + "px";
      }

      function onMouseUp() {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      }
    };

    thumb.ondragstart = function () {
      return false;
    };
  }
  if (slider && slider.getBoundingClientRect().height < 97) {
    let thumb = slider.querySelector(".thumb");
    let tab1 = document.querySelector(".tab-1");
    let tab2 = document.querySelector(".tab-2");
    thumb.onpointerdown = function (event) {
      event.preventDefault(); // prevent selection start (browser action)

      let shiftX = Math.round(event.x) - thumb.getBoundingClientRect().left;
      document.addEventListener("pointermove", onMouseMove);
      document.addEventListener("pointerout", onMouseUp);

      function onMouseMove(event) {
        let newLeft =
          Math.round(event.x) - shiftX - slider.getBoundingClientRect().left;

        // the pointer is out of slider => lock the thumb within the bounaries
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge =
          slider.offsetWidth - 52 - thumb.getBoundingClientRect().width;
        if (newLeft > rightEdge) {
          tab2.style.zIndex = "20";
          newLeft = rightEdge;
        } else {
          tab2.style.zIndex = "1";
        }

        let counter = 100 - newLeft / 2;
        tab1.style.opacity = counter / 100;

        tab2.style.opacity = newLeft / 2 / 100;

        thumb.style.left = newLeft + "px";
      }

      function onMouseUp() {
        document.removeEventListener("pointerout", onMouseUp);
        document.removeEventListener("pointermove", onMouseMove);
      }
    };

    thumb.ondragstart = function () {
      return false;
    };
  }

  var scrollPos = 0;
  const contactBar = document.getElementById("contact-bar");
  console.log(contactBar);
  document.addEventListener("scroll", (event) => {
    const header = document.getElementById("header");
    if (header.offsetTop > 48) {
      header.classList.add("small");
    } else {
      header.classList.remove("small");
    }

    if (header.offsetTop > 196) {
      if (document.body.getBoundingClientRect().top > scrollPos) {
        console.log("up");
        header.classList.add("show-bar");
      } else {
        console.log("down");
        header.classList.remove("show-bar");
      }
    }
    // saves the new position for iteration.
    scrollPos = document.body.getBoundingClientRect().top;
  });

  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  if (openMenu) {
    openMenu.addEventListener("click", () => {
      document.body.classList.add("body-overflow");
    });
  }
  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      document.body.classList.remove("body-overflow");
    });
  }

  /**
   * Modal script
   */
  const openModals = document.querySelectorAll(".open-modal");
  if (openModals) {
    openModals.forEach((item) => {
      item.addEventListener("click", () => {
        document.body.classList.add("body-overflow");
      });
    });
  }

  /**
   * Data Picker
   */
  if (typeof flatpickr !== undefined) {
    const dataPicker = document.querySelector(".flatpickr");
    if (dataPicker) {
      flatpickr.localize(pl.Polish);
      flatpickr(".flatpickr", {
        altInputClass: "data-picker",
        monthSelectorType: "static",
        disableMobile: "true",
        nextArrow: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.91467 10.09L5.23633 9.46872L8.37964 6.58997L5.23633 3.71122L5.91467 3.08997L9.73633 6.58997L5.91467 10.09Z" fill="#094F0C"/>
        </svg>`,
        prevArrow: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.82166 3.08997L7.5 3.71122L4.35669 6.58997L7.5 9.46872L6.82166 10.09L3 6.58997L6.82166 3.08997Z" fill="#094F0C"/>
        </svg>
        `,
        onOpen: function () {
          document
            .querySelector(".flatpickr-calendar ")
            .classList.add("date-picker");
        },
        onChange: function (selectedDates, dateStr) {
          dataPicker.setAttribute("value", dateStr);
        },
      });
    }
  }

  const categoryNavBtns = document.querySelectorAll(".faq-category-nav button");
  const categoryItems = document.querySelectorAll(".category-item");
  if (categoryNavBtns && categoryItems) {
    categoryNavBtns.forEach((item, index) => {
      item.addEventListener("click", () => {
        categoryNavBtns.forEach((item) => item.classList.remove("active"));
        categoryItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        categoryItems[index].classList.add("active");
      });
    });
  }

  /**
   * Search Bar
   */
  const openSearchBarDesctop = document.getElementById("openSearchBar-desktop");
  const searchBar = document.getElementById("searchBar");
  const closeSearch = document.querySelector(".close-search");
  const openSearchBarMobile = document.getElementById("openSearchBar-mobile");

  if (openSearchBarDesctop && searchBar && closeSearch) {
    openSearchBarDesctop.addEventListener("click", () => {
      if (!searchBar.classList.contains("open")) {
        searchBar.classList.add("open");
      }
    });
    closeSearch.addEventListener("click", () => {
      if (searchBar.classList.contains("open")) {
        searchBar.classList.remove("open");
      }
    });
  }
  if (openSearchBarMobile && searchBar && closeSearch) {
    openSearchBarMobile.addEventListener("click", () => {
      if (!searchBar.classList.contains("open")) {
        searchBar.classList.add("open");
      }
    });
    closeSearch.addEventListener("click", () => {
      if (searchBar.classList.contains("open")) {
        searchBar.classList.remove("open");
      }
    });
  }
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
          slidesPerGroup: 3,
        },
      },

      navigation: {
        nextEl: ".blog-next",
        prevEl: ".blog-prev",
      },
    });
    const reviewSwiper = new Swiper(".review-swiper", {
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      },
      pagination: {
        enabled: false,
      },
      breakpoints: {
        760: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
          pagination: {
            enabled: true,
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
        },
      },

      navigation: {
        nextEl: ".review-next",
        prevEl: ".review-prev",
      },
    });
    const reviewSwiperContainer = document.querySelector(".review-swiper");
    if (reviewSwiperContainer && reviewSwiper) {
      reviewSwiperContainer.addEventListener("mouseleave", () => {
        reviewSwiper.autoplay.start();
      });
    }

    const heroSwiper = new Swiper(".hero-swiper", {
      slidesPerView: 1,
      effect: "fade",
      /* effect: "fade",
    fadeEffect: {
      crossFade: true,
    }, */
      /*  autoplay: {
        delay: 4000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }, */
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

    /* const heroSwiperContainer = document.querySelector(".hero-swiper");
    if (heroSwiperContainer && heroSwiper) {
      heroSwiperContainer.addEventListener("mouseleave", () => {
        heroSwiper.autoplay.start();
      });
    } */

    const tabSwiperTitles = [
      "Międzynarodowe przedszkole",
      "Skandynawski program nauczania",
      "Podejście wielojęzykowe",
    ];
    const tabSwiper = new Swiper(".tab-swiper", {
      slidesPerView: 1,
      spaceBetween: 32,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: true,
      },
      pagination: {
        enabled: true,
        el: ".tab-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            "<button class='" +
            className +
            "'>" +
            tabSwiperTitles[index] +
            ".</button>"
          );
        },
      },
    });
    const tabPagination = document.querySelector(".tab-pagination");
    if (tabPagination && tabSwiper) {
      tabPagination.addEventListener("mouseleave", () => {
        tabSwiper.autoplay.start();
      });
      tabPagination.addEventListener("mouseenter", () => {
        tabSwiper.autoplay.stop();
      });
    }
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

  // Variables
  const dropdownCities = document.querySelector(".dropdown.cities");
  const inputCities = document.getElementById("input-cities");
  const hiddenInputCities = document.querySelector(".dropdown.cities #hidden");
  const listOfOptionsCities = document.querySelectorAll(
    ".dropdown.cities .option"
  );
  const bodyCities = document.body;
  // Functions
  const toggleDropdownCities = (event) => {
    event.stopPropagation();
    dropdownCities.classList.toggle("opened");
  };

  const selectOptionCities = (event) => {
    console.log(event.currentTarget);
    hiddenInputCities.setAttribute(
      "value",
      event.currentTarget.getAttribute("data-value")
    );
    inputCities.value = event.currentTarget.textContent;
  };

  const closeDropdownFromOutsideCities = () => {
    if (dropdownCities.classList.contains("opened")) {
      dropdownCities.classList.remove("opened");
    }
  };
  if (typeof dropdownCities !== undefined && dropdownCities) {
    // Event Listeners

    bodyCities.addEventListener("click", closeDropdownFromOutsideCities);

    listOfOptionsCities.forEach((option) => {
      option.addEventListener("click", selectOptionCities);
    });

    dropdownCities.addEventListener("click", toggleDropdownCities);
  }

  // Variables
  const dropdown = document.querySelector(".dropdown.places");
  const input = document.querySelector(".dropdown.places #input-places");
  const hiddenInput = document.querySelector(".dropdown.places #hidden");
  const listOfOptions = document.querySelectorAll(".dropdown.places .option");
  const body = document.body;
  // Functions
  const toggleDropdown = (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("opened");
  };

  const selectOption = (event) => {
    console.log(event.currentTarget);
    hiddenInput.setAttribute(
      "value",
      event.currentTarget.getAttribute("data-value")
    );
    input.value = event.currentTarget.textContent;
  };

  const closeDropdownFromOutside = () => {
    if (dropdown.classList.contains("opened")) {
      dropdown.classList.remove("opened");
    }
  };
  if (typeof dropdown !== undefined && dropdown) {
    // Event Listeners
    body.addEventListener("click", closeDropdownFromOutside);

    console.log(listOfOptions);
    listOfOptions.forEach((option) => {
      option.addEventListener("click", selectOption);
    });

    dropdown.addEventListener("click", toggleDropdown);
  }

  const filtersOpenBtn = document.getElementById("filters-open");
  const filtersAction = document.getElementById("filters-action");
  const filterBox = document.querySelector(".filter-box");
  const clearFilters = document.getElementById("clear-filters");

  if (filtersOpenBtn) {
    const filterBoxHeight = filterBox.offsetHeight;
    filterBox.style.height = filterBoxHeight + "px";
    filtersOpenBtn.addEventListener("click", () => {
      if (filterBox.classList.contains("open")) {
        filterBox.style.height = "0px";
        filterBox.classList.remove("open");
        filtersAction.classList.remove("active");
      } else {
        filterBox.classList.add("open");
        filtersAction.classList.add("active");

        filterBox.style.height = filterBoxHeight + "px";
      }
    });
  }
  const childAge = document.querySelector(".child-age");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");

  if (typeof plus !== "undefined" && plus) {
    plus.addEventListener("click", function () {
      let input = document.getElementById("child-age");
      let val = input.value;
      if (val <= 9) {
        input.value = Number(val) + 1;
      }
    });
  }

  if (typeof minus !== "undefined" && minus) {
    minus.addEventListener("click", function () {
      let input = document.getElementById("child-age");
      let val = input.value;
      if (val > 0) {
        input.value = Number(val) - 1;
      }
    });
  }
  if (clearFilters) {
    clearFilters.addEventListener("click", () => {
      let input = document.getElementById("child-age");
      if (input) {
        input.value = 0;
      }
      var filters = document.querySelectorAll(
        '#filters input[type="checkbox"]'
      );
      filters.forEach((item) => {
        return (item.checked = false);
      });
    });
  }

  if (typeof L !== "undefined") {
    var map = L.map("map");
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      // Specify the maximum zoom of the map
      maxZoom: 19,

      // Set the attribution for OpenStreetMaps
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Set the view of the map
    // with the latitude, longitude and the zoom value
    map.setView([48.8584, 2.2945], 16);

    var customIcon = L.icon({
      iconUrl: "/assets/marker.svg",
      iconSize: [38, 95], // size of the icon
      //shadowSize: [50, 64], // size of the shadow
      //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62], // the same for the shadow
      //popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    let customMarker = L.marker([48.8584, 2.2945], { icon: customIcon }).addTo(
      map
    );

    const screen = window.innerWidth;
    const defaultPoints = screen < 768 ? [-150, 150] : [-200, 150];
    let mapPopupPosition =
      screen < 768 ? mapPopupPositionMobile : mapPopupPositionDesktop;

    customMarker
      .bindPopup(customPopup, {
        minWidth: 255,
        offset:
          typeof mapPopupPosition !== "undefined"
            ? mapPopupPosition
            : defaultPoints,
      })
      .openPopup();
  }
};

const customPopup = `<div class="rounded-r_20 p-4 lg:p-8 bg-secondary-200  z-20  customPopup ">
<div class="flex gap-5 items-center bg-white px-4 py-2" style="margin-bottom:12px">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_174_13742" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_174_13742)">
<path d="M4 21V11.625L2.2 13L1 11.4L4 9.1V6H6V7.575L12 3L23 11.4L21.8 12.975L20 11.625V21H4ZM6 19H11V15H13V19H18V10.1L12 5.525L6 10.1V19ZM4 5C4 4.16667 4.29167 3.45833 4.875 2.875C5.45833 2.29167 6.16667 2 7 2C7.28333 2 7.521 1.904 7.713 1.712C7.90433 1.52067 8 1.28333 8 1H10C10 1.83333 9.70833 2.54167 9.125 3.125C8.54167 3.70833 7.83333 4 7 4C6.71667 4 6.479 4.09567 6.287 4.287C6.09567 4.479 6 4.71667 6 5H4Z" fill="#094F0C">
</path>
</g>
</svg>
<p class="text-sm font-bold">Przedszkole Wilanów</p>
</div>
<div class="flex gap-5 items-center bg-white px-4 py-2 mb-3" style="margin-bottom:12px">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_174_13747" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_174_13747)">
<path d="M7 17H14V15H7V17ZM7 13H17V11H7V13ZM7 9H17V7H7V9ZM5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#094F0C">
</path>
</g>
</svg>
<p class="text-sm font-bold">Al. Rzeczpospolitej 23</p>
</div>
<div class="flex gap-5 items-center bg-white px-4 py-2">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.95 21C17.8 21 15.7043 20.5207 13.663 19.562C11.621 18.604 9.81267 17.3373 8.238 15.762C6.66267 14.1873 5.396 12.379 4.438 10.337C3.47933 8.29567 3 6.2 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.72933 7.74567 9.688 7.937C9.646 8.129 9.55 8.3 9.4 8.45L6.975 10.9C7.675 12.1 8.55433 13.225 9.613 14.275C10.671 15.325 11.8333 16.2333 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3873 16.038 14.312C16.2793 14.2373 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15 20.625 15.1123 20.775 15.287C20.925 15.4623 21 15.6667 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2877 18.4583 16.963 18.625C17.6377 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z" fill="#094F0C">
</path>
</svg>
<p class="text-sm font-bold">+48 501 393 891</p>
</div>
</div><button class="btn primary nav-btn">Wyznacz trasę dojazdu</button>`;
