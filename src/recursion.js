// const fibonacciIteration = (n) => {
//   let arr = [0, 1];
//   let [a, b] = arr;

//   for (let i = 0; i < n - 2; i++) {
//     b = a + b;
//     a = b - a;
//     arr.push(b);
//   }
//   console.log(arr);
// };
// fibonacciIteration(8);

// const fibonacciRecursive = (n) => {
//   let arr = [0, 1];
//   if (n - 2 > 0) {
//     let b = arr[arr.length - 1] + arr[arr.length - 2];
//     arr.push(b);
//     fibonacciRecursive(n - 1);
//   }
//   return arr;
// };

// console.log(fibonacciRecursive(5));

