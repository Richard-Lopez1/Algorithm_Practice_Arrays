var testArr = [6,3,5,1,2,4]
for(var x = 0;  x < testArr.length; x++) {    
    if (x > 0) {
        sum = testArr[x] ;
        var z = y + sum;
       console.log("Num:",sum,',','Sum: ',z);
        var y = z
    }      
      else {
       sum = testArr[x];
       var y = testArr[x]; 
       console.log("Num:", sum, ',', 'Sum: ',y);                
      }   
}   
