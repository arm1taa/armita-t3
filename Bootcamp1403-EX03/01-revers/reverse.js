// write your func here
function reverseString(input) {
    const result = input.split('').reverse().join('');
    return result

}
const show = reverseString('this is a string')
console.log(show);