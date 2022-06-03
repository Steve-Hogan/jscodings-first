// Add two Numbers
// You are provided with two numbers 
// A
//  and 
// B
// . Your task is to add these two numbers.

// Note: You have to complete AddTwoNumbers function. No need to take any input.

// Input Format
// The first line contains two integers 
// A
//  and 
// B
// .

// Output Format
// Return the result after adding two numbers
const AddTwoNumbers = (a,b) => {
    let result = a+b;
    return result;
};

// Find if the conditions are obeyed or not?
// You are given two number first as 
// A
//  and second as 
// B
//  and check if both conditions (
// A
// <
// 10
//  and 
// A
// >
// B
// ) are satisfied or not with the help of operators.

// Note: You have to complete Is_Valid function. No need to take any input.

// Input Format
// The first line contains two integers 
// A
//  and 
// B
// .

// Output Format
// Return the result as true if the given condition gets satisfied, else false
const Is_Valid = (a,b) => {
    result = a<10&&a>b;
    return result;
  };


//   Check the conditons
// You are given two numbers 
// A
//  and 
// B
// . You need to do the following checks:

// if both are divisible by 10 console true.
// if both are not divisible by 10 console false.
// if one of them only is divisible by 10 console true.
// Use operator to do this.

// Note: You have to complete Check function. No need to take any input.

// Input Format
// The first line contains two natural numbers 
// A
//  and 
// B
// .

// Output Format
// Return the required result.
const Check = (A, B) => 
{
  if(A%10 ==0 && B%10 == 0){
    return true;
  }
  else if(A%10 != 0 && B%10 != 0){
  return false;  
  }
  else{
  return true;
}
};


// Find the first digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the first digit of that number.

// Note: You have to complete First_Digit function. No need to take any input.

// Input Format
// The first line contains one four digit natural number 
// N
// .

// Output Format
// Return the required result.
const First_Digit = (n) => {
    n = n/1000;
     return parseInt(n);
   };


//    Find the last digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the last digit of that number.

// Note: You have to complete Last_Digit function. No need to take any input.

// Input Format
// The first line contains one four digit natural number 
// N
// .

// Output Format
// Return the required result
const Last_Digit = (n) => {
    n = n%10;
    return n;
  };

  

//   Find the remainder
// You are provided with two numbers 
// A
//  and 
// B
//  where 
// A
//  as  divisor and 
// B
//  as  dividend.Your task is find the remainder.

// Note: You have to complete Find_the_remainder function. No need to take any input.

// Input Format
// The first line of the input contains two integers 
// A
//  and 
// B
// .

// Output Format
// Return the result after finding the remainder.
const Find_the_remainder = (a,b) => {
    result = b%a;
    return result;
  };


//   Multipy two Numbers
// You are provided with two numbers 
// A
//  and 
// B
// . Your task is to multiply these two numbers.

// Note: You have to complete Multiply_two_number function. No need to take any input.

// Input Format
// The first line contains two integers 
// A
//  and 
// B
// .

// Output Format
// Return the result after multiplying two numbers
const Multiply_two_number = (a,b) => {
    result=a*b;
    return result;
  };


//   Marks Calculator
// Shyam has got his marks in three subjects as 
// A
// , 
// B
//  and 
// C
//  (out of 100).Write a program to calculate his total marks and his total percentage.

// Note: You have to complete Sum and Average function. No need to take any input.

// Input Format
// The input contains three numbers 
// A
// , 
// B
//  and 
// C
// .

// Output Format
// Return the required result
const Sum = (A, B, C) => 
{
 totalMarks = A+B+C;
  return totalMarks;
};

const Average = (A, B, C) => 
{
 totalPercentage=((A+B+C)/300)*100;
 return totalPercentage;
};