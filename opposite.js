// По заданному целому числу или числу с плавающей запятой найти его противоположность.
// Примеры:
// 1: -1
// 14: -14
// -34: 34
function opposite(number) {
  if(number > 0) {
    return number * -1
  }
  if(number < 0) {
    return number * -1
  }
  if(number === 0) {
    return number
  }
}
module.exports = opposite
