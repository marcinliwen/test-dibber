window.onload = () => {
  if (typeof flatpickr !== undefined) {
    const dataPicker = document.querySelector(".flatpickr");
    console.log(pl);
    if (dataPicker) {
      flatpickr.localize(pl.Polish);
      flatpickr(".flatpickr", {
        altInputClass: "data-picker",
        monthSelectorType: "static",
        disableMobile: "true",
        onOpen: function () {
          document
            .querySelector(".flatpickr-calendar ")
            .classList.add("date-picker");
        },
        onChange: function (selectedDates, dateStr, instance) {
          console.log("selectedDates", selectedDates);
          dataPicker.setAttribute("value", dateStr);
        },
      });
    }
  }
};
