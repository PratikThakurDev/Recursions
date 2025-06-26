const fibonacciIteration = (n) => {
  let arr = [0, 1];
  let [a, b] = arr;

  for (let i = 0; i < n - 2; i++) {
    b = a + b;
    a = b - a;
    arr.push(b);
  }
  console.log(arr);
};
fibonacciIteration(8);

const fibonacciRecursive = (n) => {
  let arr = [0, 1];
  if (n - 2 > 0) {
    let b = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(b);
    fibonacciRecursive(n - 1);
  }
  return arr;
};

console.log(fibonacciRecursive(5));

const arr = [4, 3, 8, 1, 2, 5];

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  while (i< left.length){
    result.push(left[i++])
  }
  while (j< right.length){
    result.push(right[j++])
  }
  return result
};
 console.log(mergeSort(arr))