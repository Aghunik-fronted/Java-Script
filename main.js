let firstName = prompt('Введите ваше имя');
alert('Привет, ' + firstName + ' !');


let old = +prompt ('Введите ваш год рождения');
const thisYear = 2026;
alert (thisYear - old);

side = +prompt('Введите длину стороны квадрата');
let P = side * 4;
alert('Приметр квадрата равна ' + P + ' !');


r = +prompt('Введите радиус окружности ');
let S = 3.14 * r ** 2; 
alert('Площадь окружности равна ' + S + ' !');

distance = +prompt('Введите расстояние в км между двумя городами !');
T = +prompt('Введите, за сколько часов хотите добраться !');
let V = distance / T;
alert ('Необходимо двигаться со скоростью ' + V + ' км/ч !');

let usd = +prompt('Введите сумму в долларах (USD):');
const toEur = 0.84;
let eur = usd * toEur;
alert(eur + ' евро !');