function isInvalid(v) { return v === '' || v === null || v === undefined || isNaN(v); }

function Soma(an, bn) { return (isInvalid(an) || isInvalid(bn)) ? "Math Error" : fixFloat(an + bn); }
function Subt(an, bn) { return (isInvalid(an) || isInvalid(bn)) ? "Math Error" : fixFloat(an - bn); }
function Mult(an, bn) { return (isInvalid(an) || isInvalid(bn)) ? "Math Error" : fixFloat(an * bn); }
function Frac(an, bn) {
    if (isInvalid(an) || isInvalid(bn) || fixFloat(an / bn) === Infinity) return "Math Error";
    return fixFloat(an / bn)
}

function fixFloat(value) {
    const r = Math.round(value * 1e10) / 1e10;
    return r === 0 ? 0 : r;
}

if (typeof module !== 'undefined') {
    module.exports = { Soma, Subt, Mult, Frac };
}