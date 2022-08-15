/*
1
Correct the syntax error
[ 1,7  9  45, ]

["Str" "alex","moh"

'the','fox' 'over' lazy, 'dog',  ]

*/

// 1
// [ 1,7, 9, 45]
// ["Str", "alex" ,"moh",'the','fox', 'over', "lazy", 'dog']


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/


// var fruits=["Tomato","Banana","Watermelon"]
// let i=0
// while(i<fruits.length){
//     if(fruits[i]=="Tomato",fruits[i]=="Banana" ){
//         console.log("the index for "+fruits[i]+" is "+ i);
//     }
//     i++;
// }



/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

// favoriteFood=["burger","Mansaf","Kabsa","Shawarma","Molokhia"];
// favoriteSport=["football","swimming","push up"]; 
// favoriteMovie=["Superman","Superman","Superman","Superman"];



/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// function firstOfArray(array){
//     firstItem=array.shift();
//     return firstItem;
// }
// console.log(firstOfArray([1,2,3,4]));


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

// function lastOfArray(Array){
//     firstItem=Array.pop();
//     return firstItem;
// }
// console.log(lastOfArray([1,2,3,4]));



/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var arr1 = [0,5,7,9];
arr1.push(10);
for(i=0;i<3;i++){arr1.shift();}
arr1.unshift(1,3,4,6,8);
console.log(arr1);



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


// var arr2 = [5,9,-7,3.5];
// arr2.push(10);
// console.log(arr2);
// arr2.unshift(2);
// console.log(arr2);
// arr2.shift();
// console.log(arr2);
// arr2.pop();
// console.log(arr2);



/*
/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*/


// function doubleValues(arr){
//     let doubleItem=[];
//     for(i=0;i<arr.length;i++){
//     doubleItem.push(arr[i]*2);
//     }
//     return doubleItem;

// }
// console.log(doubleValues([2,3,4,5,6,7]));


/*
* Exercise:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/



// function onlyEvenValues(arr){
//     even_item=[];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             even_item.push(arr[i]);
//         }
//     }
//     return even_item;
// }
// console.log(onlyEvenValues([1,2,3,4,5,,7,8,9,10]))


/*
* Exercise:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/


// function showFirstAndLast(arr){
//     FirstAndLast=[];
//     for(i=0;i<arr.length;i++){
//         let cut=arr[i]
//         let First=cut.charAt(0);
//         let Last=cut.charAt(cut.length-1);
//         let FL=First+Last;
//         FirstAndLast.push(FL);
//     }
//     return FirstAndLast;
   
// }
// console.log(showFirstAndLast(['jameel','sam', 'sara']));


/*8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/


// function middleOfArray(arr){
//     let A1;
//     let A2;
//     if(arr.length %2 !==0){
//         A1=arr.length/2 - 0.5;
//         console.log(arr[A1]);
//     }
//     else{
//         A1=arr.length/2;
//         A2=A1-1;
//         console.log(arr[A2]+" and "+arr[A1]);
//     }
// }
// middleOfArray([1,2,3]);
// middleOfArray(["A","B","C","D"]);


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/


// var animals=[];
// animals[0]='cat';
// animals[1]='ele';
// animals[2]='bird';
// animals[3]='elephant';
// console.log(animals);


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/


// function indexOfArray(Arr,index){
//     return Arr[index];
// }
// let nums=[1,2,3,4,5,6];
// console.log(indexOfArray(nums,5));
// console.log(indexOfArray(nums,3));
// console.log(indexOfArray(nums,2));


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/


// function arrayExceptLast(arr){
//     arr.pop();
//     return arr;
// }
// console.log(arrayExceptLast([1,2,3,4,5,6]));
// console.log(arrayExceptLast(["A","B","C","D","E"]));


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/


// function addToEnd(arr,add){
//     arr.pop();
//     arr.push(add);
//     return arr;

// }
// console.log(addToEnd([1,2,3,4,5,6],55));
// console.log(addToEnd(['jam','sam','sara'],'ahm'));


/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function sumArray(arr){
//     let sumfor=0;
//     let sumwhile=0;
//     for(i=0;i<arr.length;i++){
//         sumfor=sumfor+arr[i];
//     }
//     console.log(" using for = "+sumfor);

//     index=0;
//     while(index<arr.length){
//         sumwhile=sumwhile+arr[index];
//         index ++;
//     }
//     console.log(" using while = "+sumwhile);
// }

// sumArray([2,2,6,4,1,6,4]);

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function minInArray(arr){
//     let min=arr[0];
// for(i=1;i<arr.length;i++){
//     if(arr[i]<min){min=arr[i];}
// }
// console.log( " using for = "+min);


// let index=0;
//     while(index<arr.length){
//     if(arr[index]<min){min=arr[index]}
//     index ++;
// }
// console.log( " using while = "+min);

// }

// minInArray([5,8,7,6,22]);


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function removeFromArray(arr,v){
//     for(i=0;i<arr.length;i++){
//     if(arr[i]===v){arr.splice(i,1);}
//     }

// console.log(" using for = "+ arr);

//     let index=0;
// while(index<arr.length){
//     if(arr[index]===v){
//     arr.splice(index,1);
//     }
//     index++;
// }
// console.log(" using while = "+ arr);
// }
// removeFromArray([1,2,3,4],2);

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function oddArray(arr){
//     oddItem=[];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             oddItem.push(arr[i]);
//         }
//     }
//   console.log(" using for ");
//   console.log(oddItem);

// oddItem2=[];
//   let index=0;
//   while(index<arr.length){
//     if(arr[index]%2!=0){
//         oddItem2.push(arr[index]);
//     }
//     index++;
// }
// console.log(" using while ");
// console.log(oddItem2);

//   }

// oddArray([1,2,3,4,5,6,7,8,9]);


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function aveArray(arr){
// sum1=0;
// for(i=0;i<arr.length;i++){
//     sum1=sum1+arr[i];
// }
// ave=sum1/arr.length;
// console.log("using for "+ave)

// index=0;
// sum2=0;
// while(index<arr.length){
//     sum2=sum2+arr[index]
//     index++;
// }
// ave2=sum2/arr.length;
// console.log("using while "+ave2)

// }
// aveArray([1,2,3,8,9,77]);



/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function shorterInArray(arr){
//     shorter=arr[0];
//     for(i=1;i<arr.length;i++){
//         if(arr[i].length<shorter.length){shorter=arr[i];}
//     }
//     console.log(" using for "+shorter);

//     index=0;
//     while(index<arr.length){
//         if(arr[index].length<shorter.length){
//             shorter=arr[index];
//         }
//         console.log("  using while  "+shorter);
//         index++;

//     }

// }

// shorterInArray(["alex","mercer","madrasa","rashed2","emad","hala"])

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


//??????????????????????????????????????????????????????????


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function evenIndexOddLength(arr){
//     evenIndex=[];
//     evenIndex2=[];
//     for(i=0;i<arr.length;i++){
//         if(arr[i].length%2!=0 && i%2==0){evenIndex.push(arr[i]);}
//     }
//     console.log("using for "+evenIndex);

// index=0;
//     while(index<arr.length){
//         if(arr[index].length%2!=0 && index%2==0){evenIndex2.push(arr[index]);}
//         index++;
//     }
//     console.log(" using while "+evenIndex2);
// }
// evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]);


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function powerElementIndex(arr){
//     powerEl=[];
//     powerEl2=[];

// for(i=0;i<arr.length;i++){
//     powerEl.push(Math.pow(arr[i],i));
// }
// console.log("using for "+powerEl)
// index=0;
// while(index<arr.length){
//     powerEl2.push(Math.pow(arr[index],index));
//     index++;
// }
// console.log(" using while "+powerEl2)
// }
// powerElementIndex([44, 5, 4, 3, 2, 10])


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function evenNumberEvenIndex(arr){
//     evenIndexeven=[];
//     evenIndexeven2=[];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2==0 && i%2==0){
//         evenIndexeven.push(arr[i]);

//         }
//     }

//     console.log(" using for "+evenIndexeven);
// index=0;
//     while(index<arr.length){
//         if(arr[index]%2==0 && index%2==0){evenIndexeven2.push(arr[index]);}
//         index++;
//     }
//     console.log(" using while  "+evenIndexeven2);
// }

// evenNumberEvenIndex( [5,2,2,1,8,66,55,77,34,9,55,1]);

/*
While Exercises 
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
// function subtract(num){
//     sub=num;
//     let s=0;
//     while(num>0){
//     s=s+sub; 
//     sub=1-num;
//     num--;
//     }
//     return s;
   
// }
// console.log(subtract(4));

// /*
// 2
// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1
// Ex: factorial(2); => 2 * 1 => 2
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
// */
// function factorial(num){
//     f=1;
//     fn=num;
//     while(fn>=1){
//         f=f*fn;


//         fn--;
//     }
//     console.log("the factorial for "+num+"="+f);

// }

// factorial(5);


// /*
// 3
// Create a function called repeatStr
// that takes 2 parameters string and number,
// and return the string number time with space
// Important: the continue condition should be [somthing !== 0]
// ** Think how we can return nothing ???
// ** Important: You should dint have extra space at the end
// Ex: repeatStr("to",2); => "to to"
// Ex: repeatStr("to",4); => "to to to to"
// */
// function repeatStr(st,ind){
// j=0;
// str="";
// while(j<ind-1){
// str+=`${st} `
// j++;
// }
// str+=`${st}`
// return `"${str}"`;

// }
// console.log("the repeatStr:  "+repeatStr("to",6));

// /*
// 4
// Create a function called sum2
// that take two parameter
// and will return the sumation from the first number to the second number
// Ex: sum2(4, 5); => 4 + 5 => 9
// Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
// */
// function sumBetween(n1,n2){
// maxNum=Math.max(n1,n2);
// minNum=Math.min(n1,n2);
// sum=0;
// while(maxNum>=minNum){

// sum=sum+maxNum;

// maxNum--;

// }
// console.log("the sumation from "+n1+" to "+n2+" ="+sum);
// }
// sumBetween(3,6);

// /*
// 5
// Create a function called multiOf
// that takes 3 parameters,
// and return the first number mutiple by
// (the second one ^ the third number)
// ** Important: dont use **
// Ex: multiOf(4,10,3); => 4000
// Ex: multiOf(6,3,2); => 54
// Ex: multiOf(6,2,3); => 48
// */
// function multiOf(n1,n2,n3){
//     p=Math.pow(n2,n3);

//     mul=n1*p;

//     return mul;

// }

// console.log("multiOf "+multiOf(4,10,3));
// console.log("multiOf "+multiOf(6,3,2))

// /*
// 6
// Create a function called muti2
// that take two parameter
// and will return the multiplication
// from the first number to the second number
// Ex: muti2(4, 5); => 4 * 5 => 20
// Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
// */

// function muti2(n1,n2){
//     maxNum=Math.max(n1,n2);
//     minNum=Math.min(n1,n2);
//     mul=1;
//     while(maxNum>=minNum){
    
//         mul=mul*maxNum;
    
//     maxNum--;
    
//     }
    
//     console.log("the multiplication from "+n1+" to "+n2+" ="+mul);
    
//     }
//     muti2(3,6);
// /*
// 7
// Create a function called numberBetweenUs
// that take 2 parameters
// and return the number between them
// ** Important: You should't have extra space at the end and comma
// ** Important: the stop condition should [num1!==num2-1]
// ** hint: maybe you will have 2 if statment
// numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
// numberBetweenUs(1,3) => "2"
// */
// function numberBetweenUs(n1,n2){
// j=n1+1;
// str="";
// while(j<n2-1){
// str+=`${j}, `
// j++;
// }
// str+=`${j}`
// return `"${str}"`;

// }
// console.log("the numberBetweenUs:  "+numberBetweenUs(2,8));

// /*
