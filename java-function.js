// //1
function tellFortune(X,Y,Z,N){
    console.log('You will be a '+' '+ X +' '+'in'+' '+ Y +' '+'and married to'+' '+Z +' '+'with '+ N +' kids.')
    }
    tellFortune('software engineer','Jordan','Alice',3)

 //2
function calculateDogAge(age){ return  age *7 }

 console.log( "Your doggie is "+ calculateDogAge(2) +" years old in dog years!" )
   

 //3

function calculateSupply (age,number){
    let cups=(100-age)*number*365
    return("You will need " +cups+" to last you until the ripe old age of 100")
  }
  console.log(calculateSupply(30,3))

 //4
function calledcube(prise , valum){
 sss = (prise * 3)
  console.log(sss)

 sss = (valum * 3)
  console.log(sss)
  }
  calledcube(5,3)

 //5
function fullName(firstName, lastName){

 console.log(firstName + " " +lastName)}

 fullName("jameel" , "algharabat")



 //6
function average(a,b,c,d,e){
     console.log((a+b+c+d+e)/5)
 }
 average(1,2,3,4,5)
 average(5,7,9,3,5)

//7
  function randomNumber(){
 let value1 = Math.random()
    console.log(value1)
 }
 randomNumber()




 //4
function greet(name){
     console.log("Hello " + name)
 }
 greet("Adam")

 //5
function double(cat) {
     return 2 * cat;
   }
  
function double(A) {
     return 2 * A;
   }
  
function double(x) {
     return 2 * x;
  }

 //6
function double1(x) {
    return 2 * x ;
  }
  
function double2(x){ 
      return 2 * x; }


function  double3(x) {
    return 2 * x;}
 
 //8
function multiply (first,second){
   return first*second
   }
   console.log("multiply= "+multiply(3,4))
  
 //9
function canIGetADrivingLicense(age){
    if (age < 20){
          console.log("You can not")}
    else{
     console.log("yes you can")
    } }
 canIGetADrivingLicense(21)
 canIGetADrivingLicense(17)
 canIGetADrivingLicense(20)

 //10
function sameLength(x,y){
    let xlength= x.length
     let ylength= y.length
    if (xlength==ylength){
      console.log("true")}
     else{
      console.log("false") }
  }
  sameLength("name","diana")

 //11
function largerNubmer(a,b){
    if (a>b){console.log(a)}
    else if (a==b){console.log("they are equal to each other")}
    else{console.log(b)}
  
  }
  largerNubmer(15,20)
  
 //12
function smallerNubmer(A,B,C){
    if (A<B){
      if (A<C){console.log(A)}
    }
    if (B<A){
      if (B<C){console.log(B)}
      } 
    if (C<B){
      if (C<A){console.log(C)}
      }
  }
  smallerNubmer(5,7,2)

//13
  function shorterString(q,w,e,r,t){
    var arr = [q,w,e,r,t];
  
  console.log(
    arr.reduce((a, b) => a.length <= b.length ? a : b)
  )
  }
  shorterString("air","tr","car","github","by")
  

//14
  var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
  ];
  
  var lgth = 0;
  var longest;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
      var lgth = arr[i].length;
      longest = arr[i];
    }
  }
  
  console.log(longest);



//15
  function test(b){
    if (b%2 == 0){
        return true;
    }
    else{
        return false;
    }
  }
  console.log(test(5))

 //16
 function isOdd (num) {
    if (num % 2 == 0 ) {
        return false ;
        
    }
    else {
        return true ;
    }
    
}
console.log (isOdd(5)) ;
console.log (isOdd(4)) ;

//17
function positive (h){
    return Math.abs(h);
}
console.log(positive(-5));


//18










//19
function average(a,b,c,d,e){
    var sum = a + b + c + d + e ;
    var avg = sum / 5 ;
    return avg ; 
}
console.log(average(1,2,3,4,5));
console.log(average(5,7,9,3,5));


//20
function randomNumber(){
    return  Math.random() ;
  }
  console.log(randomNumber());

  //21

  function randomBetweenNumbers( x,y){
    return Math.random() * (y - x) + x;
  }
  console.log(randomBetweenNumbers(1,8));
  
  //22
  function scoreInUniversty(num){
    if(num>=95 && num<=100){return "A"}
    if(num>=85 && num<=94){return "B"}
    if(num>=70 && num<=84){return "C"}
    if(num>=60 && num<=69){return "D"} 
    if(num>=0 && num<=59){return "F"} 
  }
  console.log(scoreInUniversty(95));
  console.log(scoreInUniversty(65));
  console.log(scoreInUniversty(45));
  

  //23

  count=0;
function counter(){
return count++;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


 

//24

  