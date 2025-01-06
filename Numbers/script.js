
/********************التكليف 02********* */
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991




/***************************************التكليف 03******/
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16



/**********************************التكليف 04*********** */
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57



/********************************التكليف 05 ********/
let num = 10;

console.log(Number(Number.isInteger(num))+(Number.isInteger(num))); // 2



/***************************التكليف 06******/
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10