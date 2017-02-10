/*
javascript function to add anything (it can be number or string or array or function that return any number or
array of array etc.)
*/

function add(){
 var sum = 0;
 // accessing each arguments
 for(var i = 0; i<arguments.length; i++){

 //if it would be a function
 if(typeof arguments[i]==="function"){
  arguments[i] = arguments[i]();
 }

 //if the type of the arguments is string
 if(typeof arguments[i] === "string"){
  arguments[i] = 0;
 }

 if(arguments[i] instanceof Array){
 for(var j = 0 ; j<arguments[i].length; j++){
  // function within array
  if(typeof arguments[i][j] === "function"){
   arguments[i][j] = arguments[i][j]();
  }
  // 2-d array
  if(arguments[i][j] instanceof Array){
   for(var k=0;k<arguments[i][j].length;k++){
    sum = sum + (isNaN(parseInt(arguments[i][j][k]))?0:parseInt(arguments[i][j][k]));   
   }
  }
  else{
   sum = sum + (isNaN(parseInt(arguments[i][j]))?0:parseInt(arguments[i][j]));
   }
 }
}
else{
 sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
 }
}
return sum;
}
