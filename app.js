const display = document.getElementById('display')
const divBotoes = document.getElementById('div_botoes')

divBotoes.addEventListener('click', (e) => {
    const btn = e.target.closest('button')
    if (!btn) return
    display.value = processarEntrada(btn.value, display.value)
})