// write your func here
function comper(v1, v2) {
    for (let item of v1) {
        if (v1[item] === v2[item]) {
            return true
        }
        return false
    }


}
const result = comper([1, 21, 3], [1, 2, 3])
console.log(result);