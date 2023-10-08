console.log("Samuel");

const double = (n) => n * 2;

// console.log(double(10));
// console.log(global);

// console.log(process.argv[2]);

const [, , n] = process.argv;

const double1 = (n) => n * 2;

// console.log(double1(n));

const [, , a, b] = process.argv;
const sum = (a, b) => a + b;
// console.log(sum(Number(a), Number(b)));
// console.log(sum(parseInt(a), parseInt(b)));
console.log(sum(+a, +b));
