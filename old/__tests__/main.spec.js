import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/main'

describe('Calc', () => {
   
    // Smoke tests
    describe('Smoke tests', () => {

        it('should exist the method `sum`', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('should exist the method `sub`', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });

        it('should exist the method `mult`', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('should exist the method `div`', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });

    });

    // Sum
    describe('Sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(sum(2, 2)).to.be.equal(4);
        });
    });

    // Sub
    describe('Sub', () => {
        it('should return 4 when `sub(6,2)`', () => {
            expect(sub(6, 2)).to.be.equal(4);
        });

        it('should return -4 when `sub(6,10)`', () => {
            expect(sub(6, 10)).to.be.equal(-4);
        });
    });

    // Mult
    describe('Mult', () => {
        it('should return 6 when `sub(2,3)`', () => {
            expect(mult(2, 3)).to.be.equal(6);
        });
    });

    // Div
    describe('Div', () => {
        it('should return 4 when `div(4,2)`', () => {
            expect(div(4, 2)).to.be.equal(2);
        });
    });

});