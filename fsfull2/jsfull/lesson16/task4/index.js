function bar() {
  if (!foo) {
  var foo = 10;
  }
  var foo = 1;
  return foo;
}
var foo = bar();
export default foo;
//console.log(foo);