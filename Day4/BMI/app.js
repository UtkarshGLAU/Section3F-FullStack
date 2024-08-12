const d = document.getElementById(we);
const h = document.getElementById(he);
const od = document.getElementById(o);
const te = document.getElementById(t);

function ce() {
  o.value = (we.value / (he.value * he.value)) * 10000;
  let bmi = o.value;
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  t.value = category;
}
