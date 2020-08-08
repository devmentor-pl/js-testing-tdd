// ./__tests__/Calculator.test.js
const Calculator = require('./../src/Calculator');

describe('Calculator', () => {
    describe('Prop num1', () => {
        it('return 0 when is not set', () => {
            const calc = new Calculator();
            expect(calc.num1).toBe(0);
        });

        it('return 4 when prop is set to 4 in constructor', () => {
            const value = 4;
            const calc = new Calculator(value);
            expect(calc.num1).toBe(value);
        });
        
        it('throw exception when prop is not a number', () => {
            function createCalculator() {
                new Calculator('4');
            }
        
            expect(createCalculator).toThrow();
        });     
    });

    describe('Prop num2', () => {
        it('return 0 when is not set', () => {
            const calc = new Calculator();
            expect(calc.num2).toBe(0);
        });

        it('return 4 when prop is set to 4 in constructor', () => {
            const value = 4;
            const calc = new Calculator(undefined, value);
            expect(calc.num2).toBe(value);
        });
        
        it('throw exception when prop is not a number', () => {
            function createCalculator() {
                new Calculator(undefined, '4');
            }
        
            expect(createCalculator).toThrow();
        });
    });
   
    describe('Method add()', () => {
        it('return 7 when num1 = 4 and num2 = 3', () => {
            const calc = new Calculator(4, 3);
            const result = calc.add();
            expect(result).toBe(7);
        });
    });
   
});
