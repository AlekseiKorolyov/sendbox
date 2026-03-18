/*
Instructions

This code does not execute properly. Try to figure out why.

function multiply(a, b){
a * b;
}

 */


//Solution

function multiply(a, b){
    return a * b;
}

//Simple tests

const assert = require("chai").assert;

describe("Multiply", () => {
    it("fixed tests", () => {
        assert.strictEqual(multiply(1,1), 1);
        assert.strictEqual(multiply(2,1), 2);
        assert.strictEqual(multiply(2,2), 4);
        assert.strictEqual(multiply(3,5), 15);
        assert.strictEqual(multiply(5,0), 0);
        assert.strictEqual(multiply(0,5), 0);
        assert.strictEqual(multiply(0,0), 0);
    });
});
