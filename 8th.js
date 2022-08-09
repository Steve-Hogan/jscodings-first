function zero(){
    console.log("zero");
}
zero();

function addition(a,b){
console.log(a+b);
} 
addition(3,4);

const steve = (a,b)=>{
console.log(a-b);
}
steve(4,3);

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();//undefined//no value is assigned

var x = 21;
girl ();//undefined//no value is assigned
console.log(x)//21
function girl() {
    console.log(x);
    var x = 20;
};

// var x = 21;
// a();//not defined//ie.not defined with var or const or let
// b();
// console.log(a);
// a = function() {
//    x = 20;
//   console.log(x);
// };
// b = function() {
//     x = 40;
//    console.log(x);
// };

const factorial = (n) => {
    let result = 1;
    for (let i = n;i >= 1; i--) {//decrement from 3
      result *= i;//result*decrement value
    }
    return result;//returns the value
  }
  console.log(factorial(3));//prints the result
