function doubleValues (arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    console.log(newArr) ;
}
doubleValues([1,2,3]);
doubleValues([5,1,2,3,10]);
doubleValues([5,2,6,9]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function onlyEvenValues(arr){
    const arr2 = [];
      arr.forEach((val) => {
        if(val % 2 === 0) arr2.push(val);
      });
      return arr2;
  }
  console.log(onlyEvenValues([1,2,3]));
  console.log(onlyEvenValues([5,1,2,3,10]));
  
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  function showFirstAndLast (arr) {
  
    var newString = '';
    
    arr.forEach ( function (val) {
      var newVal = val[val.length-1];
      newString = val[0] + newVal;
    console.log(newString);
    }); 
  }
  showFirstAndLast(['colt','matt', 'tim', 'udemy']);
  showFirstAndLast(['hi', 'goodbye', 'smile'])


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  function addKeyAndValue(arr,key,val){
    arr.forEach(obj => obj[key] = val)
    return arr
  }
  console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')) 

  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}
console.log(vowelCount('Elie'))
console.log(vowelCount('Tim'))
console.log(vowelCount('Matt'))
console.log(vowelCount('hmmm'))
console.log(vowelCount('I Am awesome and so are you'))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
