window.onload = (event) => {
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
    console.log(event.currentTarget);
    input.setAttribute("value", event.currentTarget.textContent);
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
};
