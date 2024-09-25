// write your func here
function factor(num) {
    let multi = 1;
    while (num > 0) {
        multi *= num;
        num--;
    }
    return multi;
}
const show = factor(12)
console.log(show);