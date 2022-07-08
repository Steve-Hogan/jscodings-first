// Create one function with zero parameter having a console statement;

function parameter(){
    console.log("parameter");
  }
  parameter()

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

  function add(a,b){
    console.log(a+"+"+b+" = "+ (a+b));
  }
  add(3,4);

  // Create one arrow function

  let sub = (a,b)=>{
    console.log(a+"-"+b+" = "+ (a-b));
  }
  sub(7,4);

// "Print output: 
    var x = 1;
    function undefinedOutput() {
        console.log(x);
        var x = 2;
    };
    undefinedOutput();//undefined
  
// "Print output:

    var x = 21;
    console.log(x);//21
    a();
    function a() { 
    console.log(x);
    var x = 20;
    };//undefined
    
// "Print output

    // var x = 21;
    // b();//cannot access b before initialization
    // c();
    // console.log(b);
    // let b = function() {
    // x = 20;
    // console.log(x);
    // };
    // let c = function() {  
    //     x = 40;
    // console.log(x);
    // };

//Write a function that accepts parameter n and returns factorial of n.

function factorial(n){
    if(n===0){
        return "1";//doesn't return 0.returns 1.
    }
    if(n===1){
        return n;
    }
    return n*factorial(n-1);//4*(4-1)*(3-1)*(2-1)*(1-1)//0 returns 1
}
console.log(factorial(4));