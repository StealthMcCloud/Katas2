let a0 = add(2, 4);

function add(x, y) {
return x + y;
console.log(a0)
}
console.log("add(2,4) = " + a0 + " (a0)")

console.log( "_____________________")

let m0 = multiply(a0, 8)

function multiply(x, y) {
    let result = 0;
    for (let i = 0; i < y; i++) {
        result = add(result, x);
    }
    console.log(result)
    return result;
}
console.log( "_____________________")

power(2, 8)

function power(x, n) {
    let result = x
    for (let i = 1; i < n; i++) {
        result = multiply(result, x)
    }
    console.log(result)
    console.log( "_____________________")
    return result;
}

factorial(4)

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = multiply(result, i);
    }
    console.log(result);
    return result;
  }
  console.log( "_____________________")



fibonacci(8)

function fibonacci(n) {

    let a = -1, b = 1, result = 0;

    for (let i = 0; i < n; i++) {
    result = add(a, b);
    a = b;
    b = result;
    console.log(result);
}

return result;
}
