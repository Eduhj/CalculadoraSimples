
function calc() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const an = Number(a);
    const bn = Number(b);
    const op = document.getElementById("op").value;
    const res = document.getElementById("res");

    function Soma(an, bn) {
        return an + b
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

    switch (op) {
        case "soma":
            res.textContent = Soma(an, bn)
            break

        case "subt":
            res.textContent = Subt(an, bn)
            break

        case "frac":
            res.textContent = Frac(an, bn)
            break

        case "mult":
            res.textContent = Mult(an, bn)
            break
    }

    if (b == 0 && op == "frac") {
        res.textContent = "Divisão por Zero não é possível"
    }
    else if (a == "" || b == "") {
        res.textContent = "="
    }

}

document.getElementById("a").addEventListener("input", calc);
document.getElementById("b").addEventListener("input", calc);
document.getElementById("op").addEventListener("change", calc);