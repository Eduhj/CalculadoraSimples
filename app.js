document.addEventListener("click", function (e) {

    const res = document.getElementById("res")

    const a = document.getElementById("a").value.trim()
    const b = document.getElementById("b").value.trim()

    const an = Number(a)
    const bn = Number(b)

    const el = e.target

    if (el.id === "soma") res.textContent = Soma(an, bn)
    if (el.id === "subt") res.textContent = Subt(an, bn)
    if (el.id === "mult") res.textContent = Mult(an, bn)
    if (el.id === "frac") res.textContent = Frac(an, bn)

})