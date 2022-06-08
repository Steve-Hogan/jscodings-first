// Find the number of digits
// Take a number from the user and print the count of digits in that number.

// Note: You have to complete Find_Digits. No need to take any input.

// Input Format
// The input contains a single number N.

// Output Format
// Return the count of digits in the given number.

const Find_Digits = (N) => 
{
	 let count = 0;
	 while(N != 0){
	   count=count+1;
	   N = parseInt(N/10);
	   
	 }
	 	    return count;
};


// Find the Fives.
// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

// Note: You have to complete Find_Five. No need to take any input.

// Input Format
// The input contains a single number N.

// Output Format
// Return the number of fives as the desired output.


const Find_Five = (N) => 
{
  let b=0;
  let a=5;
  while(N>0){
    if(N%10 ==a){
      b++;
    }
	  N=parseInt(N/10);
	 }
	 return b;
};


// Find Sum
// You are given an integer N, and your task is to find the sum of 
// all the even integers starting from 1 upto N (N inclusive).

// Note: You have to complete findSum function. No need to take any input.

// Input Format
// The first and the only line of the input contains an integer N.

// Output Format
// Return the sum of all even integers from 
// 1 upto N (N inclusive).


const findSum = (n) => {
    let sum=0;
    let i=2;
    while(i<=n){
      sum=sum+i;
      i=i+2;
    }
    return sum;
  };



//   Find the sum of the digits of a given number.
// Write a program that takes a number from the user and get the sum of the digits present in the number.

// Note: You have to complete Number_Sum. No need to take any input.

// Input Format
// The input contains a single number N.

// Output Format
// Return the sum of the digits of the number.


const Number_Sum = (N) => 
{
	let sum=0;
	while(N != 0){
	  sum=sum+(N%10);
	  N=parseInt(N/10);
	}
	return sum;
};


// Print the Odds.
// Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

// Note: You have to complete Print_Odd. No need to take any input.

// Input Format
// The input contains a single number N.

// Output Format
// Print the desired output.


const Print_Odd = (N) => 
{
  let num=3;
  console.log('2');
  while(num<=N){
    console.log(num);
    num=num+2;
  }
};


// Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik .

// Note: You have to complete Print_pattern. No need to take any input.

// Input Format
// The input contains a single number N.

// Output Format
// Print the required pattern



const Print_pattern = (N) => 
{
  let i,j;
  for(i=0;i<N;i++){
     let star='';
    for(j=0;j<=i;j++){
      star=star+'*';
    }
    console.log(star);
}
};


// Check whether a Number is a prime or not.
// Write a program which takes  a number from user and check whether number is prime number or not a prime number.

// Note: You have to complete Prime_Check. No need to take any input.

// Input Format
// The input contains a single number N.

// Output Format
// Return "YES" if the given number is Prime, else print "NO"(without quotes).



const Prime_Check = (N) => 
{
	 let i=2;
	 while(i<N){
	   if(N%i !=0){
	     return "YES";
	   }else{
	     return "NO";
	   }
	   i++;
	 }
};


// Print Numbers
// You are given an integer N, and your task is to print all the integers
// starting from 1 till N (N inclusive).

// Note: You have to complete printNumbers function. No need to take any input.

// Input Format
// The first and the only line of the input contains an integer N.

// Output Format
// Print all the numbers starting from 1 till N (including N).


const printNumbers = (n) => {
    for(let i=1;i<=n;i++){
      console.log(i);
    }
};


// Print the Table
// Write a program which takes a number from user and print the table.

// Note: You have to complete Print_Table. No need to take any input.

// Input Format
// The input contains a single number N.

// Output Format
// Print the table of the given number.



const Print_Table = (N) => 

{
	for(let i=1;i<=10;i++){
	  console.log(N+' '+'*'+' '+i+' '+'='+' '+ N*i);
	}
};