// Напишите вызываемую функцию, repeatStr которая повторяет заданную строку string точное количество n раз.
// Примеры:
// repeatStr(6, "I")  "IIIIII"
// repeatStr(5, "Hello")  "HelloHelloHelloHelloHello"
function repeatStr (n, s) {
  let res = ''
  for (let i = 0; i < n; i++) {
    res += s
  }
  return res;
}
module.exports = repeatStr
