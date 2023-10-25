// function deposit( parameter,args) { body }  calling const x = deposit()
const prompt = require("prompt-sync")(); // extra paranthesis for users input when call the fn

const deposit =() => {
// looping is used for entering no everytimes its invalid
    while(true){
   const depositAmt = prompt("enter amt:  "); // asking deposit amt and storing depositamt
 // to convert amt in integer 

 const numbdepositAmt = parseFloat(depositAmt);
 // to check wheater amt is valid 
 if (isNaN(numbdepositAmt) || numbdepositAmt <= 0) {
    console.log("invalid deposite amt,try again.")
 } else{ // to break looping
     return numbdepositAmt;
 }
    }
};

 const depositAmt= deposit();
 console.log(depositAmt);

 // here we conclude the part of depositing money.