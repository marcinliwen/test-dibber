window.onload = () => {
  console.log("modal");
  const openModals = document.querySelectorAll(".open-modal");
  if (openModals) {
    openModals.forEach((item) => {
      item.addEventListener("click", () => {
        document.body.classList.add("body-overflow");
      });
    });
  }
};
