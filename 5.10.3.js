let name = prompt("Введите свое имя : ");
let yearOfBirth = prompt("Введите год своего рождения");
let age = 2025 - (+yearOfBirth);

alert(name + '\n' + age);

if(isNaN(yearOfBirth))  {
  alert("Год должен быть числом");
}else{
    alert(age);
}

