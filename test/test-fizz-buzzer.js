const fizzbuzzer = require('../fizzBuzzer.js');
const expect = require('chai').expect

describe('fizzBuzzer', function () {
    it('should give the right answer either fizz, buzz, or fizzbuzz', function() {
        expect(fizzbuzzer(3)).to.be.equal('fizz')
        expect(fizzbuzzer(5)).to.be.equal('buzz')
        expect(fizzbuzzer(15)).to.be.equal("fizz-buzz")
        expect(fizzbuzzer(7)).to.be.equal(7)
        expect(fizzbuzzer(-15)).to.be.equal('fizz-buzz')
        expect(fizzbuzzer(20)).to.be.equal('buzz')
        expect(fizzbuzzer(21)).to.be.equal('fizz')
        expect(function() {
            fizzbuzzer('string')}).to.throw('`num` must be a number')
        



    })



})