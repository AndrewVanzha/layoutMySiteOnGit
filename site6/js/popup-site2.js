var link = document.querySelector(".legend-title");
var popup = document.querySelector(".modal-form ");
var date1 = popup.querySelector("[name=date-in]");

window.addEventListener("keydown", function (evnt) {
  if (evnt.keyCode === 27) {
    console.log("ACHTUNG!");
    if (popup.classList.contains("modal-form")) {
      evnt.preventDefault();
      popup.classList.remove("modal");
    }
  }
});

link.addEventListener("click", function (evnt) {
  evnt.preventDefault();
  console.log(popup);
/*      popup.classList.add("modal");*/
  popup.classList.toggle("modal");
  date1.focus();
});