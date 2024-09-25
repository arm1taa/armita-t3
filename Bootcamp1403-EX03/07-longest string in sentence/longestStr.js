function longest(input) {
    const words = input.split(' ')
    let long = ' ';
    for (const word of words) {
        if (word.length > long.length) {
            long = word;
        }
    }
    return long

}

const result = longest('hi how is life armita')
console.log(result);

