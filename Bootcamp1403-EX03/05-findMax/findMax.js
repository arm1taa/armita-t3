// write your func here
function maximom(value) {
    // console.log(Math.max(...value))

    while (value.length) {
        let maxNum = 0;
        for (const item of value) {
            if (maxNum < item) {
                maxNum = item;
            }
        }
        return maxNum
    }
}
const result = maximom([1, 4, 2, 60, 3, 30])
console.log(result);