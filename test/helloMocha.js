// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Substraction
// 3. Multiplication
// 4. Divide

var assert = require('assert');

describe('Mathematical Operations - Test Suite ', () => {

    it('Addition of two Variables ', () => {

        var a = 10
        var b = 10

        var c = a + b
        assert.equal(c, 20)

    });

    it('Substraction of two Variables ', () => {

        var a = 10
        var b = 10

        var c = a - b
        assert.equal(c, 0)

    });

    it('Multiplication of two Variables ', () => {

        var a = 10
        var b = 10

        var c = a * b
        assert.equal(c, 100)

    });

    it('Division of two Variables ', () => {

        var a = 10
        var b = 10

        var c = a / b
        assert.equal(c, 1)

    });

    it('This is a pending test');

});