document.addEventListener("click", function (e) {

    

    const el = e.target
    console.log(el.value)

    if (el.value == undefined || el.name == "ignore") {
        if (el.value == "CE") display.value = ""
    }
    else display.value += String(el.value)
})