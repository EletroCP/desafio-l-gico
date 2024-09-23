import {
    calculationTable,
    primeNumbers,
    asteriskPattern,
    fibonacciSequence,
    isDivisible,
    minValue,
    maxValue
} from '../script';

describe('11 - Função de calculo de tabuada do 1 ao 10', () => {
    it('O valor de entrada deve ser um número', () => {
        expect(() => calculationTable(NaN)).toThrow(Error);
        expect(() => calculationTable(NaN)).toThrow('O valor de entrada deve ser um número');
    });

    it.each([
        [1, [1,2,3,4,5,6,7,8,9,10]],
        [2, [2,4,6,8,10,12,14,16,18,20]],
        [3, [3,6,9,12,15,18,21,24,27,30]]
    ])('Espera o retorno de um array, com os valores da peração', (input, expected) => {
        expect(calculationTable(input)).toEqual(expected);
    });
});

describe('12 - Função que retorna todos os números primos de 1 até N', () => {
    it('Retorna um erro caso a entrada não sejá um número', () => {
        expect(() => primeNumbers(NaN)).toThrow(Error);
        expect(() => primeNumbers(NaN)).toThrow('O valor de entrada deve ser um número');
    });

    it.each([
        [11, [2, 3, 5, 7, 11]],
        [30, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]],
        [100, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]]
    ])('Deve retornar um array com a lista de números primos de 1 até %i', (input, expected) => {
        expect(primeNumbers(input)).toEqual(expected);
    });
});

describe('13 - Função que exibe um padrão de asteriscos até N', () => {
    it('Deve lançar um erro se a entrada não for um número positivo', () => {
        expect(() => asteriskPattern(-5)).toThrow('O valor de entrada deve ser um número positivo');
        expect(() => asteriskPattern(0)).toThrow('O valor de entrada deve ser um número positivo');
        expect(() => asteriskPattern(NaN)).toThrow('O valor de entrada deve ser um número positivo');
    });

    it.each([
        [1, '*'],
        [2, `*
**`],
        [3, `*
**
***`],
        [5, `*
**
***
****
*****`]
    ])('Deve retornar o padrão correto de asteriscos para N = %i', (input, expected) => {
        expect(asteriskPattern(input)).toBe(expected);
    });
});

describe('14 - Receba um número N e exibe a sequência de Fibonacci até N.', () => {
    it('Deve lançar um erro se a entrada não for um número positivo', () => {
        expect(() => fibonacciSequence(-5)).toThrow('O valor de entrada deve ser um número positivo');
        expect(() => fibonacciSequence(0)).toThrow('O valor de entrada deve ser um número positivo');
        expect(() => fibonacciSequence(NaN)).toThrow('O valor de entrada deve ser um número positivo');
    });
    
    it.each([
        [10, [1, 1, 2, 3, 5, 8]],
        [50, [1, 1, 2, 3, 5, 8, 13, 21, 34]],
        [200, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]]
    ])('Deve retornar a sequência de Fibonacci de 1 até %i', (input, expected) => {
        expect(fibonacciSequence(input)).toEqual(expected);
    });
});


describe('15 - Receve dois valores e retorna se o primeiro é divisivel pelo segundo', () => {
    it('Deve lançar um erro se a entrada não for um número positivo', () => {
        expect(() => isDivisible('*', 10)).toThrow('O valor de entrada deve ser um número');
        expect(() => isDivisible(10, '*')).toThrow('O valor de entrada deve ser um número');
        expect(() => isDivisible(0)).toThrow('Infinito');
        expect(() => isDivisible(NaN)).toThrow('O valor de entrada deve ser um número');
    });

    it.each([
        [10,5, 'É divisivel.'],
        [10, 2, 'É divisivel.'],
        [10, 30, 'Não é divisivel.'],
    ])('Retorna se é ou não divisivel com base no resto', (number1, number2, expected) => { 
        expect(isDivisible(number1, number2)).toBe(expected);
    });
});

describe('16 - Recebe um valor e retornana o sesultado fatorial dele', () => {
    it('Deve lançar um erro se a entrada não for um número positivo', () => {
        expect(() => factorial(-5)).toThrow('O valor de entrada deve ser um número positivo');
        expect(() => factorial(NaN)).toThrow('O valor de entrada deve ser um número positivo');
    });
    it.each([
        [0, 'O fatorial de 0 é 1.'],
        [5, 'O fatorial de 5 é 120.'],
        [10, 'O fatorial de 10 é 3.628.800.'],
    ])('Deve retornar o valor fatorial de %i', (number, expect) => {
        expect(factorial(number)).toBe(expect);
    });
});

describe('17 - Min - Retorna o valor minimo entre dois número', () => {
    it('Deve lançar um erro se a entrada não for um número positivo', () => {
        expect(() => minValue('*', 10)).toThrow('O valor de entrada deve ser um número');
        expect(() => minValue(10, '*')).toThrow('O valor de entrada deve ser um número');
        expect(() => minValue(NaN)).toThrow('O valor de entrada deve ser um número');
    });

    it.each([
        [0, 1, 0],
        [7, 11, 7]
        [-5, -12, -12]
    ])('Verifica se o valor retornado é o menor entre os inseridos', (num1, num2, expected) => {
        expect(minValue(num1, num2)).toBe(expected);
    });
});
