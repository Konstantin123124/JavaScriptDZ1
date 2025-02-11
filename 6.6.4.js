const fieldSize = 3;
const field = [];
for (let i = 0; i < fieldSize; i++) {
    const row = [];
    for (let j = 0; j < fieldSize; j++) {
        row.push(Math.random() < 0.5 ? 'X' : 'O');
    }
    field.push(row);
    console.log(field[i].join(' '));
}