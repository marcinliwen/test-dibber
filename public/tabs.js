window.onload = (event) => {
  console.log("tabs");
  const tabNav = document.querySelectorAll(".tab-nav button");
  const tabItems = document.querySelectorAll(".tab-item");
  console.log(tabNav);
  tabNav &&
    tabNav.forEach((el, index) => {
      el.addEventListener("click", function (event) {
        tabNav.forEach((item) => item.classList.remove("active"));
        tabItems.forEach((item) => item.classList.remove("active"));
        tabNav[index].classList.add("active");
        tabItems[index].classList.add("active");
      });
    });
};
