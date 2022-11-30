
function factorial(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = i * sum
    }
        return sum;
  
}
result = factorial(5);
console.log(result)