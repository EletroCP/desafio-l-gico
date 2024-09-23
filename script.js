export const convertTemperature = (type, temperature) => {
    const value = parseFloat(temperature);
    const typeLowerCase = type.toLowerCase();

    if (isNaN(value)) {
        throw new Error('Insira um número válido.');
    }

    if (typeLowerCase !== 'celcius' && typeLowerCase !== 'fahrenheit') {
        throw new Error('Tipo de temperatura inválido.');
    }

    if (typeLowerCase === 'celcius') {
        const toFahrenheit = (value * 1.8) + 32;
        return toFahrenheit;
    }

    const toCelcius = (value - 32) / 1.8;
    return toCelcius;
};

export const bmiCalculation = (weight, height) => {
    if (isNaN(weight) || isNaN(height)) {
        throw new Error('Os valores devem ser um número');
    }

    const calculation = weight / (height * height);

    if (calculation < 18.5) {
        return 'Abaixo do peso normal';
    } else if (calculation >= 18.5 && calculation <= 24.9) {
        return 'Normal';
    } else if (calculation >= 25.0 && calculation <= 29.9) {
        return 'Sobrepeso';
    } else if (calculation >= 30.0 && calculation <= 34.9) {
        return 'Obesidade grau I';
    } else if (calculation >= 35.0 && calculation <= 39.9) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
};

export const concatString = (name, age, state) => {
    return `Olá! Sou ${name} tenho ${age} anos e moro em ${state}`
};

export const calcAreaRectangle = (width, height) => {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('Os valores devem ser números');
    }

    const calc = width * height;
    return calc;
};

export const evenOrOdd = (number) => {
    if (isNaN(number)) {
        throw new Error('O valor informado deve ser um número');
    }

    const calc = number % 2;

    if (calc === 0) {
        return 'Par';
    } else {
        return 'Impar';
    }
}

export const ageRange = (age) => {
    if (isNaN(age)) {
        throw new Error('O valor informado deve ser um número');
    }

    if (age >= 0 && age <= 12) {
        return 'Criança';
    } else if (age >= 13 && age <= 17) {
        return 'Adolescente';
    } else if (age >= 18 && age <= 59) {
        return 'Adulto';
    } else if (age >= 60) {
        return 'Idoso';
    } else {
        throw new Error('A idade minima deve ser 0');
    }
};

export const compareNumbers = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('O valor informado deve ser um número');
    }

    const num1IsBigger = num1 > num2;

    if (num1 === num2) {
        return 'Os números são iguais.';
    } else if (!num1IsBigger) {
        return 'O primeiro número é menor.';
    } else {
        return 'O primeiro número é maior.';
    }
};

export const calculator = (operator, num1, num2) => {
    const operators = ['+', '-', '*', '/'];

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('O valor informado deve ser um número');
    }

    if (operator === null || operator === undefined) {
        throw new Error('Deve se informado um operador valido');
    }

    if (operator === operators[3] && (num1 === 0 || num2 === 0)) {
        return 'Infinity'
    }

    switch (operator) {
    case operators[0]: return num1 + num2;
    case operators[1]: return num1 - num2;
    case operators[2]: return num1 * num1;
    default: return num1 / num2;
    }
};

export const fareCalculation = (age, studant) => {
    if (isNaN(age)) {
        throw new Error('O valor da idade deve ser um número');
    }

    if (typeof studant !== 'boolean') {
        throw new Error('Por favor informe se é estudante');
    }

    if (age <= 6) {
        return 'Passagem gratuita';
    };

    if (studant) {
        return 'Valor da passagem R$ 1,25';
    }

    if (age >= 60) {
        return 'Valor da passagem R$ 1,75'
    }

    return 'Valor da passagem R$ 2,50';
};

export const sumNumbers = (number) => {
    if (isNaN(number)) {
        throw new Error('O valor deve e ser um número');
    }

    let response = 0;

    for (let index = 0; index <= number; index += 1) {
        response += index;
    }

    return response;
};