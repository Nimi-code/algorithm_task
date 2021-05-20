//Question 1
function convertFahrToCelsius (val){
    if (typeof val === "string" || typeof val === "number"){
        var num = parseInt(val);
    
     //1F = 1.8C + 32 (e.g 0deg C = 32deg F)

    var answer = ((num - 32) / 1.8);

    var answerDec = answer.toFixed(4);
            return  `'${answerDec}'`
    };

    if (Array.isArray (val)) {
        return `[${val}] is not a valid number but a/ an array.`
    };
    
    if (typeof val === "object"){
        var value = JSON.stringify (val);
        return `${value} is not a valid number but a/an Object.`}

};

console.log (convertFahrToCelsius ("0"));
console.log (convertFahrToCelsius ([1,2,3]));
console.log (convertFahrToCelsius ({temp: 0}));



//Question 2
function checkYuGiOh (n) {
    let valInput = Object.prototype.toString.call(n).slice(8,-1)
    let docInput = valInput.toLowerCase()
    

       
  if (docInput === "nan" || docInput === "array" || isNaN(n) === true || n === "undefined" || n < 1) {
        return `invalid parameter: "${n}"`
      } 
  else {   
      let arr = [];
          for  (let i=1; i<= n; i++) {
              if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
                  arr.push("yu-gi-oh");
              }
              else if (i % 2 === 0 && i % 3 === 0){
                  arr.push("yu-gi");
              }
              else if (i % 2 === 0 && i % 5 === 0){
                  arr.push("yu-oh");
              }
              else if (i % 3 === 0 && i % 5 === 0){
                  arr.push("gi-oh");
              }
              else if (i % 2 === 0 && i % 3 !== 0 && i % 5 !== 0 ){
                  arr.push("yu");
              }
              else if (i % 3 === 0 && i % 2 !== 0 && i % 5 !== 0){
                  arr.push("gi");
              }
              else if (i % 5 === 0 && i % 3 !== 0 && i % 2 !== 0){
                  arr.push("oh");
              }
              else {
                  arr.push(i);
              }
              
          }
          return arr; 
  };
}  
  console.log (checkYuGiOh(10));
  console.log (checkYuGiOh ("5"));
  console.log (checkYuGiOh ("fizzbuzz is meh"));
  console.log (checkYuGiOh([1,2,3,4]));
  console.log (checkYuGiOh(30));
