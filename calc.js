function fixFloat(value) {
    return Math.round(value * 1e10) / 1e10;
}

function Soma(an, bn) { return fixFloat(an + bn); }
function Subt(an, bn) { return fixFloat(an - bn); }
function Mult(an, bn) { return fixFloat(an * bn); }
function Frac(an, bn) { return fixFloat(an / bn); }

function fixFloat(value) { // Concertar erro de ponto flutuante
    const r = Math.round(value * 1e10) / 1e10;
    return r === 0 ? 0 : r;
}

if (typeof module !== 'undefined') { // Exportar funções
    module.exports = { Soma, Subt, Mult, Frac};
}