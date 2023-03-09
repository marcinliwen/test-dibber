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
  if (typeof dropdown !== undefined && dropdown) {
    console.log("dropdown");
    // Event Listeners

    body.addEventListener("click", closeDropdownFromOutside);

    listOfOptions.forEach((option) => {
      option.addEventListener("click", selectOption);
    });

    dropdown.addEventListener("click", toggleDropdown);
  }

  const childAge = document.querySelector(".child-age");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");

  if (typeof plus !== undefined && plus) {
    console.log("plus");
    plus.addEventListener("click", function () {
      let input = document.getElementById("child-age");
      let val = input.value;
      if (val <= 9) {
        input.value = Number(val) + 1;
      }
    });
  }

  if (typeof minus !== undefined && minus) {
    console.log("minus");
    minus.addEventListener("click", function () {
      let input = document.getElementById("child-age");
      let val = input.value;
      if (val > 0) {
        input.value = Number(val) - 1;
      }
    });
  }

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

  customMarker.addEventListener("click", () => {
    console.log("marker click");
    document.querySelector(".customPopup").classList.add("show");
  });
  map.on("move", () => {
    document.querySelector(".customPopup").classList.remove("show");
  });
  map.on("click", () => {
    document.querySelector(".customPopup").classList.remove("show");
  });
  body.addEventListener("click", () => {
    //document.querySelector(".customPopup").classList.remove("show");
  });
};
