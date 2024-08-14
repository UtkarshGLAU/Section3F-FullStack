let Sl = document.getElementById("slider");
let Vl = document.getElementById("VL");

Vl.value = Sl.value;

Vl.addEventListener("keypress", () => {
  if (event.key == "Enter") {
    if (Vl.value == "") {
      Vl.value = 0;
    }
    Sl.value = Vl.value;
  }
});

Sl.addEventListener("input", () => {
  Vl.value = Sl.value;
});
