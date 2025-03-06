/*
Есть массив объектов, представляющих собой пользователей,
каждый из которых имеет свойство age (возраст).
Создайте новый массив, содержащий только тех пользователей,
чей возраст больше или равен 18. Затем создайте новый массив,
содержащий только свойства name (имя) каждого пользователя.*/

const array = [
    {name:"Jonh", age: 19},
    {name:"Joe", age: 17},
    {name:"Sara", age: 21}
];

const arrayAge = array.filter(array => array.age >= 18);
const arrayName = array.map(array => array.name);

console.log(arrayAge);
console.log(arrayName);