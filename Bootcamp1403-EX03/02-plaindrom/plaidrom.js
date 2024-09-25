// write your func here
function palindorm(input) {
    const reverseStr = input.split('').reverse().join('')
    if (input == reverseStr) {
        return true
    }
    return false
}
const result = palindorm('headphone')
console.log(result);

