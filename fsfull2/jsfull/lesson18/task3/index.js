function sumOfSquares(){
return [...arguments].map((el)=> {return el * el}).reduce((acc, el)=> { return acc + el}, 0);
}
console.log(sumOfSquares(1, 2, 3));
