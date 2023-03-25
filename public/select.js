// Variables
const dropdownCities = document.querySelector(".dropdown.cities");
const inputCities = document.getElementById("input-cities");
const hiddenInputCities = document.querySelector(".dropdown.cities #hidden");
const listOfOptionsCities = document.querySelectorAll(".option");
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
const input = document.querySelector(".dropdown.places #input-value");
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

  listOfOptions.forEach((option) => {
    option.addEventListener("click", selectOption);
  });

  dropdown.addEventListener("click", toggleDropdown);
}
