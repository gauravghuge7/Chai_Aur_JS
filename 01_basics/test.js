// console.log("Gaurav");

// /***
//    basics of js 
// */


// var a = 10;

// console.log(a);

const arr = [];
const obj = {};



function isEmpty(obj) {

   if(Array.isArray(obj)) {
      if(obj.length <= 0) return true;
      else return false;
   }
   else {
      const keys = Object.keys(obj);

      if(keys.length <= 0) return true;
      else return false;
   }
}


// console.log(isEmpty(arr));


// class Calculator {
//    ans = 0;

// }

// isEmpty(obj);


var chunk = function(arr, size) {
   
   let ans = [];

   let tempSize = size;
   let start = 0;
   let end = size;


   while(end < arr.length) {

      let temp = [];

      for(let i=0; i<end; i++) {
         temp.push(arr[i]);
      }

      ans.push(temp);

      start += tempSize;
      size += tempSize;
   }

   return ans;

};




let arr1 = [1,9,6,3,2];

let size = 3

// console.log(chunk(arr, size));


Array.prototype.last = function() {
    
   if(this.length < 1) {
      return -1;
   }
   
   return this.at(this.length - 1);

};

