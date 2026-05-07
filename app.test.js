const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { Soma, Subt, Mult, Frac } = require('./calc');

describe('Soma', () => {
    it('inteiros positivos', () => assert.equal(Soma(4, 4), 8));
    it('com negativo', () => assert.equal(Soma(4, -3), 1));
    it('decimal + zero', () => assert.equal(Soma(4.6, 0), 4.6));
    it('decimal + negativo', () => assert.equal(Soma(4.6, -3), 1.6));
    it('zero + negativo', () => assert.equal(Soma(0, -3), -3));
});

describe('Subt', () => {
    it('inteiros positivos', () => assert.equal(Subt(4, 4), 0));
    it('com negativo', () => assert.equal(Subt(4, -3), 7));
    it('decimal + zero', () => assert.equal(Subt(4.6, 0), 4.6));
    it('decimal + negativo', () => assert.equal(Subt(4.6, -3), 7.6));
    it('zero + negativo', () => assert.equal(Subt(0, -3), 3));
});

describe('Mult', () => {
    it('inteiros positivos', () => assert.equal(Mult(4, 4), 16));
    it('com negativo', () => assert.equal(Mult(4, -3), -12));
    it('decimal + zero', () => assert.equal(Mult(4.6, 0), 0));
    it('decimal + negativo', () => assert.equal(Mult(4.6, -3), -13.8));
    it('zero + negativo', () => assert.equal(Mult(0, -3), 0));
});

describe('Frac', () => {
    it('inteiros positivos com ponto fluante', () => assert.equal(Frac(1, 3), 0.3333333333));
    it('inteiros positivos iguais', () => assert.equal(Frac(4, 4), 1));
    it('com negativo', () => assert.equal(Frac(4, -3), parseFloat((-4 / 3).toFixed(10))));
    it('decimal + zero', () => assert.equal(Frac(4.6, 0), Infinity));
    it('decimal + negativo', () => assert.equal(Frac(4.6, -3), parseFloat((4.6 / -3).toFixed(10))));
    it('zero + negativo', () => assert.equal(Frac(0, -3), 0));
});