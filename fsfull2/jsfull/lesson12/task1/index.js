const calc = (expression) =>{
    let result;
  const [a, operator, b] = expression.split(" ");
  switch(operator){
    case "+":
   result = Number(a) + Number(b);
   break;
     case "-":
    result = a - b;
    break;
    case "*":
     result = a * b;
     break;
    case "/":
     result = a / b;
     break;
  }
  return `${expression} = ${result}`;
}
console.log(calc("6 * 2"));
