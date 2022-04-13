// Вы получаете массив чисел, возвращаете сумму всех положительных.
// Пример [1,-4,7,12]=>1 + 7 + 12 = 20
// Примечание: если суммировать нечего, сумма по умолчанию равна 0.
const positiveSum = (arr) => {
  let res = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0) {
      res += arr[i]
    }
  }
  return res
}
module.exports = positiveSum

