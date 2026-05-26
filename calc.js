function calcular(expressao) {
  if (!expressao || expressao.trim() === "") return "";

  try {

    const normalizada = expressao
      .replace(/,/g, ".")
      .replace(/(?<![0-9eE])e(?![0-9eE+\-])/g, String(Math.E));

    if (!/^[0-9+\-*/%.eE()\s]+$/.test(normalizada)) {
      return "Erro";
    }

    const resultado = new Function("return " + normalizada)();

    if (!isFinite(resultado)) return "Erro";

    return parseFloat(resultado.toPrecision(10)).toString().replace(".", ",");
  } catch {
    return "Erro";
  }
}

function aplicarSinal(valorAtual) {
  if (!valorAtual || valorAtual === "") return "-";
  if (valorAtual.startsWith("-")) return valorAtual.slice(1);
  return "-" + valorAtual;
}

function aplicarPorcentagem(valorAtual) {
  if (!valorAtual || valorAtual === "") return "";

  const temOperador = /[+\-*/]/.test(valorAtual);

  if (temOperador) {
    const resultadoBruto = calcular(valorAtual);
    if (resultadoBruto === "Erro") return "Erro";
    const num = parseFloat(resultadoBruto.replace(",", ".")) / 100;
    return parseFloat(num.toPrecision(10)).toString().replace(".", ",");
  }

  const num = parseFloat(valorAtual.replace(",", ".")) / 100;
  if (!isFinite(num)) return "Erro";
  return parseFloat(num.toPrecision(10)).toString().replace(".", ",");
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calcular, aplicarSinal, aplicarPorcentagem };
}