const array = [1, 5123, 532, 2, 6, 26];

function newArray(array) {
    const uniqArr = [...new Set(array)].sort((a, b) => a - b);
    console.log(uniqArr);
}

newArray(array);