function Soma(an, bn) {
    return an + bn
}
function Subt(an, bn) {
    return an - bn
}
function Mult(an, bn) {
    return an * bn
}
function Frac(an, bn) {
    return an / bn
}

function calc() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const res = document.getElementById("res");

    if (a === "" || b === "") { res.textContent = "="; return; }

    const an = Number(a);
    const bn = Number(b);
    const op = document.getElementById("op").value;

    if (op === "frac" && bn === 0) {
        res.textContent = "Divisão por Zero não é possível";
        return;
    }

    if (op === 'soma') res.textContent = Soma(an, bn).toFixed(2);
    else if (op === 'subt') res.textContent = Subt(an, bn).toFixed(2);
    else if (op === 'mult') res.textContent = Mult(an, bn).toFixed(2);
    else if (op === 'frac') res.textContent = Frac(an, bn).toFixed(2);
}

document.getElementById("a").addEventListener("input", calc);
document.getElementById("b").addEventListener("input", calc);
document.getElementById("op").addEventListener("change", calc);

if (typeof module !== 'undefined') {
    module.exports = { Soma, Subt, Mult, Frac }
}