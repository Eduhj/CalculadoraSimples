let resultado = null

function numParaStr(n) {
  return n.toLocaleString('en-US', { maximumFractionDigits: 10 }).replace(/,/g, '')
}

function avaliar(expr) {
  if (!expr || expr.trim() === "") return null
  try {
    const exprJS = expr
      .replace(/,/g, ".")
      .replace(/π/g, "Math.PI")
    const valor = Function('"use strict"; return (' + exprJS + ')')()
    if (!isFinite(valor)) return null
    return valor
  } catch {
    return null
  }
}

function aplicarPorcentagem(expr) {
  const match = expr.match(/([\d.,]+)$/)
  if (!match) return expr
  const num = parseFloat(match[1].replace(",", "."))
  return expr.slice(0, match.index) + numParaStr(num / 100)
}

function inverterSinal(expr) {
  const match = expr.match(/([\d.,]+)$/)
  if (!match) return expr
  const num = parseFloat(match[1].replace(",", "."))
  return expr.slice(0, match.index) + numParaStr(num * -1)
}

function processarEntrada(valor, exibido) {
  switch (valor) {
    case "CE":
      resultado = null
      return ""

    case "=": {
      const res = avaliar(exibido)
      resultado = res
      return res !== null ? numParaStr(res) : "Erro"
    }

    case "%":
      return aplicarPorcentagem(exibido)

    case "sinal":
      return inverterSinal(exibido)

    default: {
      if (resultado !== null) {
        const ehOperador = ["+", "-", "*", "/"].includes(valor)
        const base = numParaStr(resultado)
        resultado = null
        return ehOperador ? base + valor : valor
      }
      return exibido + valor
    }
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { avaliar, aplicarPorcentagem, inverterSinal, processarEntrada }
}