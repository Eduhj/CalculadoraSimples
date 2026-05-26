const display = document.getElementById("display");
 
function CollectClick(e) {
  const el = e.target;
  if (el.tagName !== "BUTTON") return;
 
  const val = el.value;
 
  switch (val) {
    case "CE":
      display.value = "";
      break;
 
    case "=":
      display.value = calcular(display.value);
      break;
 
    case "sinal":
      display.value = aplicarSinal(display.value);
      break;
 
    case "%":
      display.value = aplicarPorcentagem(display.value);
      break;
 
    default:
      display.value += val;
  }
}
 
document.addEventListener("click", CollectClick);