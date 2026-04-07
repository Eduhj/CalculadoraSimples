
function calc() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const op = document.getElementById("op").value;
    const res = document.getElementById("res");

    function Soma(a, b) {
        return a + b
    }

    function Subt(a, b) {
        return a - b
    }

    function Mult(a, b) {
        return a * b
    }

    function Frac(a, b) {
        return a / b
    }

    switch (op) {
        case "soma":
            res.textContent = Soma(a, b)
            break

        case "subt":
            res.textContent = Subt(a, b)
            break

        case "frac":
            res.textContent = Frac(a, b)
            break

        case "mult":
            res.textContent = Mult(a, b)
            break
    }
}

document.getElementById("a").addEventListener("input", calc);
document.getElementById("b").addEventListener("input", calc);
document.getElementById("op").addEventListener("change", calc);