//Есть объект obj. В одном из ключей объекта — массив.
// Добавьте в новый массив arrValues значения всех ключей объекта.
// Если значение — массив, добавьте каждый элемент в массив arrValues.

  //  Выведите получившийся массив в консоль.

    //Входные данные:

    //const obj = {
      //  some: 'some',
        //dom: 'text',
        //arr: [1, 2, 3, 4, 5],
        //tom: 'there'
   // };
//Выходные данные: ["some", "text", 1, 2, 3, 4, 5, "there"]

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let arrValues = [];

for(key in obj){
    if(Array.isArray(obj[key])){
        for(i=1; i<=obj[key].length; i++){
            arrValues.push(i)
        }
    }else{
        arrValues.push(key)
    }


}

console.log(arrValues);


