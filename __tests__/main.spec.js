var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function(){
   
    // Smoke tests
    describe('Smoke tests', function(){

        it('should exist the calc lib', function(){
            expect(calc).to.exist;
        });

        it('should exist the method `sum`', function(){
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exist the method `sub`', function(){
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exist the method `mult`', function(){
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });

        it('should exist the method `div`', function(){
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });

    });

    // Sum
    describe('Sum', function(){
        it('should return 4 when `sum(2,2)`', function(){
            expect(calc.sum(2, 2)).to.be.equal(4);
        });
    });

    // Sub
    describe('Sub', function(){
        it('should return 4 when `sub(6,2)`', function(){
            expect(calc.sub(6, 2)).to.be.equal(4);
        });

        it('should return -4 when `sub(6,10)`', function(){
            expect(calc.sub(6, 10)).to.be.equal(-4);
        });
    });

    // Mult
    describe('Mult', function(){
        it('should return 6 when `sub(2,3)`', function(){
            expect(calc.mult(2, 3)).to.be.equal(6);
        });
    });

    // Div
    describe('Div', function(){
        it('should return 4 when `div(4,2)`', function(){
            expect(calc.div(4, 2)).to.be.equal(2);
        });
    });

});