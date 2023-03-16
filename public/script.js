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
    new Swiper(".review-swiper", {
      slidesPerView: 1,
      spaceBetween: 32,
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

    new Swiper(".hero-swiper", {
      slidesPerView: 1,
      effect: "fade",
      /* effect: "fade",
    fadeEffect: {
      crossFade: true,
    }, */
      autoplay: {
        delay: 4000,
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
  console.log("dropdown");
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
  if (typeof dropdown !== undefined && dropdown) {
    console.log("dropdown");
    // Event Listeners

    body.addEventListener("click", closeDropdownFromOutside);

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
    filtersOpenBtn.addEventListener("click", () => {
      filtersAction.classList.toggle("active");
      filterBox.classList.toggle("open");
    });
  }
  const childAge = document.querySelector(".child-age");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");

  if (typeof plus !== "undefined" && plus) {
    console.log("plus");
    plus.addEventListener("click", function () {
      let input = document.getElementById("child-age");
      let val = input.value;
      if (val <= 9) {
        input.value = Number(val) + 1;
      }
    });
  }

  if (typeof minus !== "undefined" && minus) {
    console.log("minus");
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
      input.value = 0;
      var filters = document.querySelectorAll(
        '#filters input[type="checkbox"]'
      );
      filters.forEach((item) => {
        console.log(item);
        return (item.checked = false);
      });
    });
  }

  if (typeof L !== "undefined") {
    console.log("loading map...");
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
