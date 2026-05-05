function calc() {
    const a = document.getElementById("a").value.trim();
    const b = document.getElementById("b").value.trim();
    const res = document.getElementById("res");

    if (a === "" || b === "") { res.textContent = "="; return; }

    const an = Number(a);
    const bn = Number(b);

    if (isNaN(an) || isNaN(bn)) { res.textContent = "Entrada inválida"; return; }

    const op = document.getElementById("op").value;

    if (op === "frac" && bn === 0) { res.textContent = "Divisão por zero não é possível"; return; }

    const ops = { soma: Soma, subt: Subt, mult: Mult, frac: Frac };
    const fn = ops[op];
    res.textContent = fn ? formatResult(fn(an, bn)) : "Operação desconhecida";
}

document.getElementById("a").addEventListener("input", calc);
document.getElementById("b").addEventListener("input", calc);
document.getElementById("op").addEventListener("change", calc);