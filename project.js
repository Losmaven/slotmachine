// function deposit( parameter,args) { body }  calling const x = deposit()

const prompt = require("prompt-sync")(); // extra paranthesis for users input when call the fn

const ROWS = 3;
const COLMS = 3;

// defining symbols "object" in js with quants and values, here u dont need quates for properties or keys
const SYMBOLS_COUNT = {
  A: 2,
  x: 4,
  w: 6,
  Q: 8,
}

 // its acts multiplier of bet getting each keys
const SYMBOLS_VALUES ={
    A: 5,
    x: 4,
    w: 3,
    Q: 2,
    
}


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

// after depositing amt now entering line to place objs

const getNumbofLines =() => {
    
        while(true){
       const Lines = prompt("enter num of lines to bet on (1-3):  "); 
        const numofLines = parseFloat(Lines);
    
     if (isNaN(numofLines) || numofLines <= 0 || numofLines >3) {
        console.log("invalid no of lines,try again.")
     } else{ 
         return numofLines ;
     }
        }
    };
 // here alotation of lines are done




//  const depositAmt= deposit();

const getBet = (balance,lines) => {
      
    while(true) {
   const bet = prompt("enter total bet per line:  "); 
    const numbet = parseFloat(bet);

 if (isNaN(numbet) || numbet <= 0 || numbet > balance / lines){
    console.log("invalid bet,try again.")
 } else{ 
     return numbet ;
 }
    }
};

// bet in done,here bet is based per no of line by doing dividing bal/lines


const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
         for (let i = 0; i < count; i++){
            symbols.push(symbol); // in js by push to add new elem
         }
 }
    // console.log(symbols);
   // to represent cols in slot machine
    const reels = [ [],[],[]];
    // this for loop is for each reels/colms
           for(let i = 0; i < COLMS; i++){  
         const reelSymbols = [...symbols]; //copying symbols to another array
             for(j =0;j < ROWS; j++){
              //for random selection of elems
              const randomIndex = Math.floor(Math.random() * reelSymbols.length)
                const selectedSymbol = reelSymbols[randomIndex];
                reels[i].push(selectedSymbol); // index i represents the reel v working on

                //now v hv to remv this symbols so v cant select this again while generate this reel
                   reelSymbols.splice(randomIndex, 1); // 1 here to remove one element
                }

           }
           return reels;

};
       const reels = spin();
       console.log(reels);

       
    let balance = deposit();
  const numofLines = getNumbofLines();
const bet = getBet(balance,numofLines);


