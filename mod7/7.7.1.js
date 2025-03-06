function printInfo() {
    return `${this.name} , ${this.age}`
}

let person = {
    name: '<Имя>',
    age: '<Возраст>'
};
console.log(printInfo.call(person));