const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { Soma, Subt, Mult, Frac } = require('./calc');

describe('Soma', () => {
    it('inteiros positivos', () => assert.equal(Soma(4, 4), 8));
    it('com negativo', () => assert.equal(Soma(4, -3), 1));
    it('decimal + zero', () => assert.equal(Soma(4.6, 0), 4.6));
    it('decimal + negativo', () => assert.equal(Soma(4.6, -3), 1.6));
    it('zero + negativo', () => assert.equal(Soma(0, -3), -3));
    it('valor a vazio', () => assert.equal(Soma(NaN, -3), "Math Error"));
    it('valor b vazio', () => assert.equal(Soma(5, NaN), "Math Error"));
    it('ambos valores vazios', () => assert.equal(Soma(NaN, NaN), "Math Error"));

});

describe('Subt', () => {
    it('inteiros positivos', () => assert.equal(Subt(4, 4), 0));
    it('com negativo', () => assert.equal(Subt(4, -3), 7));
    it('decimal + zero', () => assert.equal(Subt(4.6, 0), 4.6));
    it('decimal + negativo', () => assert.equal(Subt(4.6, -3), 7.6));
    it('zero + negativo', () => assert.equal(Subt(0, -3), 3));
    it('valor a vazio', () => assert.equal(Subt(NaN, -3), "Math Error"));
    it('valor b vazio', () => assert.equal(Subt(5, NaN), "Math Error"));
    it('ambos valores vazios', () => assert.equal(Subt(NaN, NaN), "Math Error"));
});

describe('Mult', () => {
    it('inteiros positivos', () => assert.equal(Mult(4, 4), 16));
    it('com negativo', () => assert.equal(Mult(4, -3), -12));
    it('decimal + zero', () => assert.equal(Mult(4.6, 0), 0));
    it('decimal + negativo', () => assert.equal(Mult(4.6, -3), -13.8));
    it('zero + negativo', () => assert.equal(Mult(0, -3), 0));
    it('valor a vazio', () => assert.equal(Mult(NaN, -3), "Math Error"));
    it('valor b vazio', () => assert.equal(Mult(5, NaN), "Math Error"));
    it('ambos valores vazios', () => assert.equal(Mult(NaN, NaN), "Math Error"));
});

describe('Frac', () => {
    it('inteiros positivos com ponto fluante', () => assert.equal(Frac(1, 3), 0.3333333333));
    it('inteiros positivos iguais', () => assert.equal(Frac(4, 4), 1));
    it('com negativo', () => assert.equal(Frac(4, -3), parseFloat((-4 / 3).toFixed(10))));
    it('decimal + zero', () => assert.equal(Frac(4.6, 0), "Math Error"));
    it('decimal + negativo', () => assert.equal(Frac(4.6, -3), parseFloat((4.6 / -3).toFixed(10))));
    it('zero + negativo', () => assert.equal(Frac(0, -3), 0));
    it('valor a vazio', () => assert.equal(Frac(NaN, -3), "Math Error"));
    it('valor b vazio', () => assert.equal(Frac(5, NaN), "Math Error"));
    it('ambos valores vazios', () => assert.equal(Frac(NaN, NaN), "Math Error"));
});