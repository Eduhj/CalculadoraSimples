const { describe, test } = require('node:test')
const assert = require('node:assert/strict')
const { avaliar, aplicarPorcentagem, inverterSinal, processarEntrada } = require('./calc')

// ─── avaliar ────────────────────────────────────────────────────────────────

describe('avaliar', () => {
    test('soma', () => assert.equal(avaliar('2+3'), 5))
    test('subtração', () => assert.equal(avaliar('10-4'), 6))
    test('multiplicação', () => assert.equal(avaliar('3*4'), 12))
    test('divisão', () => assert.equal(avaliar('10/2'), 5))
    test('expressão composta', () => assert.equal(avaliar('2+3*4'), 14))
    test('vírgula como decimal', () => assert.equal(avaliar('1,5+1,5'), 3))
    test('constante PI', () => assert.ok(Math.abs(avaliar('π') - 3.14159) < 0.001))
    test('expressão vazia → null', () => assert.equal(avaliar(''), null))
    test('expressão inválida → null', () => assert.equal(avaliar('2+'), null))
    test('divisão por zero → null', () => assert.equal(avaliar('1/0'), null))
})

// ─── aplicarPorcentagem ──────────────────────────────────────────────────────

describe('aplicarPorcentagem', () => {
    test('número simples', () => assert.equal(aplicarPorcentagem('50'), '0.5'))
    test('número grande', () => assert.equal(aplicarPorcentagem('200'), '2'))
    test('após operador', () => assert.equal(aplicarPorcentagem('100+50'), '100+0.5'))
    test('sem número no fim', () => assert.equal(aplicarPorcentagem('+'), '+'))
})

// ─── inverterSinal ───────────────────────────────────────────────────────────

describe('inverterSinal', () => {
    test('positivo vira negativo', () => assert.equal(inverterSinal('42'), '-42'))
    test('após operador', () => assert.equal(inverterSinal('10+5'), '10+-5'))
    test('sem número no fim', () => assert.equal(inverterSinal('+'), '+'))
})

// ─── processarEntrada ────────────────────────────────────────────────────────

describe('processarEntrada', () => {
    test('digitar número acumula', () => assert.equal(processarEntrada('5', '12'), '125'))
    test('CE limpa o display', () => assert.equal(processarEntrada('CE', '123'), ''))
    test('= retorna resultado como string', () => assert.equal(processarEntrada('=', '2+3'), '5'))
    test('= expressão inválida → "Erro"', () => assert.equal(processarEntrada('=', '2+'), 'Erro'))
    test('% aplica porcentagem', () => assert.equal(processarEntrada('%', '200'), '2'))
    test('+/- inverte sinal', () => assert.equal(processarEntrada('sinal', '9'), '-9'))
    test('após resultado, operador continua', () => {
        processarEntrada('=', '6+4')      // define resultado = 10
        assert.equal(processarEntrada('+', '10'), '10+')
    })
    test('após resultado, número recomeça', () => {
        processarEntrada('=', '6+4')      // define resultado = 10
        assert.equal(processarEntrada('7', '10'), '7')
    })
})