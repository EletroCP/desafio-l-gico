import { 
    convertTemperature,
    bmiCalculation, 
    concatString,
    calcAreaRectangle,
    evenOrOdd,
    ageRange,
    compareNumbers,
    calculator,    
    fareCalculation,
    sumNumbers
}from '../script';


describe('01 - Função de converção de Celsius e Fahrenheit', () => {
    it('Se falha ao informar um tipo incorreto de medida', () => {
        expect(() => convertTemperature('banana', 14)).toThrow(Error);
        expect(() => convertTemperature('banana', 14)).toThrow('Tipo de temperatura inválido.');
    });

    it('Se falha caso o valor da temperatura não seja um numero', () => {
        expect(() => convertTemperature('celcius', 'alho')).toThrow(Error);
        expect(() => convertTemperature('celcius', 'alho')).toThrow('Insira um número válido.');
    });

    it('Se converte corretamente de celsius para fahrenheit', () => {
        expect(convertTemperature('celcius', 25)).toBe(77);       
    });

    it('Se converte corretamente de fahrenheit para celcius', () => {
        expect(convertTemperature('fahrenheit', 41)).toBe(5)
    });
});

describe('02 - Função de calculo de IMC', () => {
    it.each([
      ['p', 1.63, 'Os valores devem ser um número'],
      [80, '%', 'Os valores devem ser um número'],
      [';', '¬', 'Os valores devem ser um número'],
    ])('Falha ao informar um tipo incorreto de valor', (peso, altura, errMsg) => {
      expect(() => bmiCalculation(peso, altura)).toThrow(Error);
      expect(() => bmiCalculation(peso, altura)).toThrow(errMsg);
    });

    it.each([
        [50, 1.80, 'Abaixo do peso normal'],
        [70, 1.80, 'Normal'],
        [85, 1.80, 'Sobrepeso'],
        [100, 1.80, 'Obesidade grau I'],
        [120, 1.80, 'Obesidade grau II'],
        [130, 1.80, 'Obesidade grau III'],
        [140, 1.80, 'Obesidade grau III'],
      ])('Deve retornar o tipo de obesidade com base no peso e altura', (peso, altura, result) => {
        expect(bmiCalculation(peso, altura)).toBe(result);
      });

    });

describe('03 - Função de concatenação de strings', () => {
    it.each([
        ['Carlos', 25, 'Brasilia', 'Olá! Sou Carlos tenho 25 anos e moro em Brasilia'],
        ['Mateus', 36, 'Maceió', 'Olá! Sou Mateus tenho 36 anos e moro em Maceió'],
        ['Breno', 26, 'Curitiba', 'Olá! Sou Breno tenho 26 anos e moro em Curitiba']
    ])('Deve retornar de forma correta a string concatenada', (nome, idade, cidade, result) => {
        expect(concatString(nome, idade, cidade)).toEqual(result);
    });
});

describe('04 - Função de calculo de área de um retangulo', () => {
    it.each([
        ['a', 16, 'Os valores devem ser números'],
        [15, '%', 'Os valores devem ser números'],
        ['>', '!', 'Os valores devem ser números'],
    ])('Deve retornar uma menssagem de erro', (width, heigth, errMsg) => {
        expect(() => calcAreaRectangle(width, heigth)).toThrow(errMsg);
    });

    it.each([
        [15, 16, 240],
        [10, 10, 100],
        [7, 20, 140],
    ])('Deve retornar a multiplicação dos valores', (width, heigth, result) => {
        expect(calcAreaRectangle(width, heigth)).toBe(result);
    });
});

describe('05 - Deve dizer se um número é divisivel por 2', () => {
    it('Falha ao informar um tipo incorreto de valor', () => {
        expect(() => evenOrOdd(NaN)).toThrow(Error);
        expect(() => evenOrOdd('#')).toThrow('O valor informado deve ser um número');
    });

    it.each([
        [2, 'Par'],
        [20, 'Par'],
        [54, 'Par'],
        [7, 'Impar'],
        [19, 'Impar'],
        [21, 'Impar'],
    ])('Retorna de o numero é divisivel por 2', (number, result) => {
        expect(evenOrOdd(number)).toBe(result);
    });
});

describe('06 - Deve informar a faixa etária com base na idade informada', () => {
    it('Falha ao informar um tipo incorreto de valor', () => {
        expect(() => ageRange(NaN)).toThrow(Error);
        expect(() => ageRange('#')).toThrow('O valor informado deve ser um número');
    });

    it('Falha ao informar um valor menor que 0', () => {
        expect(() => ageRange(-3)).toThrow(Error);
        expect(() => ageRange(-1)).toThrow('A idade minima deve ser 0');
    })

    it.each([
        [6, 'Criança'],
        [13, 'Adolescente'],
        [18, 'Adulto'],
        [60, 'Idoso'],
        [11, 'Criança'],
        [17, 'Adolescente'],
        [59, 'Adulto'],
        [99, 'Idoso'],
    ])('Retorna a faixa etária correta com base na idade', (age, response) => {
        expect(ageRange(age)).toBe(response);
    });
});

describe('07 - Deve retornar se os números comparados são maior, menor ou igual', () => {
    it('Falha ao informar um tipo incorreto de valor', () => {
        expect(() => compareNumbers(NaN)).toThrow(Error);
        expect(() => compareNumbers(NaN)).toThrow('O valor informado deve ser um número');
    });

    it.each([
        [1, 2, 'O primeiro número é menor.'],
        [2, 1, 'O primeiro número é maior.'],
        [1, 1, 'Os números são iguais.'],
    ])('Retorna a resposta correta', (value1, value2, response) => {
        expect(compareNumbers(value1, value2)).toBe(response);
    });
});

describe('08 - Deve retornar o resultado correto com base na operação',() => {
    const operators = ['+', '-', '*', '/'];
    it('Falha ao informar valores que não são números', () => {
        expect(() => calculator(operators[0], NaN, 1)).toThrow(Error);
        expect(() => calculator(operators[0], NaN, 1)).toThrow('O valor informado deve ser um número');

        expect(() => calculator(operators[0], 1, NaN)).toThrow(Error);
        expect(() => calculator(operators[0], 1, NaN)).toThrow('O valor informado deve ser um número');

        expect(() => calculator(operators[0], NaN, NaN)).toThrow(Error);
        expect(() => calculator(operators[0], NaN, NaN)).toThrow('O valor informado deve ser um número');
    });

    it('Falha ao não informar um operador', () => {
        expect(() => calculator(null, 4, 4)).toThrow(Error);
        expect(() => calculator(null, 4, 4)).toThrow('Deve se informado um operador valido');
    });

    it.each([
        [operators[3], 5, 5, 1],
        [operators[2], 5, 5, 25],
        [operators[1], 5, 5, 0],
        [operators[0], 5, 5, 10],
        [operators[3], 5, 0, 'Infinity'],
    ])('Retorna os valores corretos com base nas operações', (operator, num1, num2, result) => {
        expect(calculator(operator, num1, num2)).toBe(result)
    });
});

describe('09 - Deve retornar o valor correto da tarifa', () => {
    it('O valor da idade precisa ser um número', () => {
        expect(() => fareCalculation(NaN, true)).toThrow('O valor da idade deve ser um número');
    });

    it('A entrada de estudante deve ser true ou false', () => {
        expect(() => fareCalculation(1, 'sim')).toThrow('Por favor informe se é estudante');
        expect(() => fareCalculation(1, null)).toThrow('Por favor informe se é estudante');
        expect(() => fareCalculation(1, 1)).toThrow('Por favor informe se é estudante');

        expect(() => fareCalculation(1, true)).not.toThrow();
        expect(() => fareCalculation(1, false)).not.toThrow();
    });

    test.each([
        [5, false, 'Passagem gratuita'],
        [7, false, 'Valor da passagem R$ 2,50'],
        [7, true, 'Valor da passagem R$ 1,25'],
        [70, false, 'Valor da passagem R$ 1,75'],
        [70, true, 'Valor da passagem R$ 1,25'],
        [32, false, 'Valor da passagem R$ 2,50']
    ])('Retorna o valor correto da tarifa', (age, student, expectedFare) => {
        expect(fareCalculation(age, student)).toBe(expectedFare);
    });
});

describe('10 - Retorna o valor da soma dos valores anterioreas até a entrada', () => {
    it('Retorna um erro caso a entrada não seja um numero', () => {
        expect(() => sumNumbers(NaN)).toThrow(Error);
        expect(() => sumNumbers(NaN)).toThrow('O valor deve e ser um número');
    })

    it.each([
        [5, 15],
        [10, 55],
        [100, 5050]
    ])('Retorna o valor da soma dos valores', (num, result) => {
        expect(sumNumbers(num)).toBe(result);
    })
});