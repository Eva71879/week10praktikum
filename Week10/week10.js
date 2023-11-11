//Задание 1
// Напишите функцию firstFunction, которая будет выводить консоль переменную first.
let first = 8;

function firstFunction() {
	return first;
}

console.log(firstFunction());

//Задание 2
// Напишите функцию sum, которая принимает два параметра a и b, складывает их и выводит в консоль результат.
// let a = 5;
// let b = 3;

function sum(a, b) {
	return a + b
}

console.log(sum(5,3));

//Задание 3
// Напишите функцию multiply, которая принимает два параметра x и y, перемножает их и выводит в консоль результат.
// let x = 4;
// let y = 2;

function multiply(x, y) {
	return x*y;
}

console.log(multiply(4,2));

//Задание 4
// Напишите функцию greet, которая принимает один параметр name и выводит в консоль приветствие с этим именем.
let name = 'Alice';

function greet(name) {
	return console.log(`Привет, ${name}!`); 
}
greet (name); //почему здесь зачеркивается name??

//Задание 5
// Напишите функцию calculateArea, которая принимает два параметра width и height, вычисляет площадь прямоугольника и выводит в консоль результат.
// let width = 6;
// let height = 4;

function calculateArea(width, height) {
	return console.log((width*height))
}

calculateArea(6, 4);

//Задание 6
// Напишите функцию printMessage(), которая принимает один параметр message и выводит его в консоль. Если параметр не передан, используйте значение по умолчанию: "Сообщение отсутствует".

let message = "Привет, Кот!";

function printMessage (message='Сообщение отсутствует') {
	return console.log(message)
}
printMessage();
printMessage(message);


//Задание 7
// Напишите функцию secondFunction, которая принимает два параметра: c и d, и выводит в консоль их сумму. Если значения параметров не переданы, используйте значения по умолчанию: c = 5 и d = 10.
// let c = 5;
// let d = 10;

function secondFunction(c=5, d=10) {
	return console.log(c + d)
}

secondFunction(); //Выведет 15
//Обратите ваше внимание, что мы можем передать в функцию любые аргументы и secondFunction подставит их на место параметров соответственно, перемножит их и вернёт результат.
secondFunction(2, 3); //Выведет 5

//Задание 8
// Напишите функцию thirdFunction, которая принимает два параметра: f и g, и выводит в консоль их произведение. Если только одно значение передано, используйте его как оба параметра функции. Если ни одно значение не передано, используйте значения по умолчанию: f = 2 и g = 3.
// let f = 2;
// let g = 3;

function thirdFunction(f = 2, g = 3) {
	if (g === undefined) {
		g = f;
	  }
	  return console.log(f * g);
}

thirdFunction(); //Выведет 6
thirdFunction(4); //все равно выводит 12 вместо 16 (4*4), не понимаю почему if не срабатывает :(
thirdFunction(10, 5); //выводит 50

//Обратите ваше внимание, что мы можем передать в функцию любые аргументы и thirdFunction подставит их на место параметров соответственно (если пармаметр не задан, то он подставится по умлочанию), перемножит их и вернёт результат.


//Задание 9
// Напишите функцию приветствия (название придумайте самостоятельно), которая принимает один параметр guestName и возвращает приветствие в формате "Привет, {guestName}!". Если параметр не передан, используйте значение по умолчанию: "Гость". Чтобы увидеть результат в консоли, вызовите функцию внутри console.log.

function greetGuest (guestName = 'Гость') {
	return `"Привет, ${guestName}!"`
}
console.log (greetGuest());
console.log (greetGuest("Анна"));

//Задание 10
// Создайте функцию calculateDifference с помощью Function Expression и правильно используйте её, чтобы вычесть два числа и вывести результат в консоль.
// Ваш код

const calculateDifference = function (a, b) {
	return a - b
};

console.log(calculateDifference(10, 5));
console.log(calculateDifference(25, 24));

//Задание 11
// Напишите функцию calculateProduct с помощью Function Expression, которая будет принимать два параметра. Функция должна перемножить значения и вывести результат в консоль.

const total = function calculateProduct (a, b) {
	return console.log(a * b)
};

total(5,3); //Выведет 15

//Задание 12
// Напишите стрелочную функцию calculateSquare, которая будет принимать один параметр num. Внутри функции объявите локальную переменную result и присвойте ей значение, равное квадрату числа num. Затем верните значение переменной result из функции.

const calculateSquare = num => {
	result = num * num;
	console.log(result)
};

calculateSquare(5); // Выведет 25

//Задание 13
// Напишите  стрелочную функцию sayThree, которая будет выводить в консоль сообщение "Три!"

const sayThree = () => {
	console.log('Три!');
};

sayThree();

//Задание 14
// Напишите функцию findAnimal, которая будет выводить в консоль значения переменных cat и rabbit. Переменная cat объявлена внутри функции, а переменная rabbit объявлена во внешней области видимости.

let rabbit = 'я переменная во внешней зоне видимости';

const findAnimal = () => {
let cat = 'я переменная в локальной зоне видимости';
console.log(cat, rabbit);
};

findAnimal();

//Задание 15
// Допишите программу, которая вычисляет сколько лет прошло с летней олимпиады в Токио, Япония. Подсказка: 1. нужно создать переменную с текущим годом. 2. при вызове функции в круглые скобки нужно передать два параметра: текущий год и год летней олимпиады в Токио.

const lastOlympicsYear = 2021;
let currentYear = 2023;

function calculateYearsSinceLastOlympics(a, b) {
	console.log(
		'С момента летней олимпиады в Токио прошло ' + (a-b) + ' года',
	);
}

calculateYearsSinceLastOlympics (currentYear, lastOlympicsYear);


// //Задание 16
// // Напишите программу, которая вычисляет возраст пользователя на основе его года рождения, будет выводить результат в консоль.
const friendYearOfBirth = 1985;

function calculateAge(a, b) {
	return a - b;
}

console.log(calculateAge(currentYear, friendYearOfBirth));

//Задание 17
// Напишите функцию которая принимает ваш год рождения и возвращает ваш возраст. Обратите ваше внимание, что в глобальной зоне видимости есть переменная с текущим годом.

let myYearOfBirth = 1988;

let myAge = () => {
	return currentYear - myYearOfBirth;
}

console.log(myAge());

//Задание 18
// Напишите функцию, которая должна возводить число в заданную степень. Результат должен выводить в консоль в формате: console.log("Результат: " + result);

// let result = calculatePower(2,3);
// function calculatePower(a, b) {
// return a**b;
// }

// console.log("Результат: " + result);


function calculatePower(a, b) {
	let result = a**b;
	return console.log("Результат: " + result);
	
}
calculatePower(2,3);
calculatePower(6,2);