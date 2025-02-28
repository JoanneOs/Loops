console.log("Hi, this is ALAB 308.3.1: Practical Loops");

// Part 1: Fizz Buzz
//Loop through all numbers from 1 to 100.
console.log("Loop through all numbers from 1 to 100.");

for (let i = 1; i <= 100; i++) {
  //     {console.log(i);}

  // If a number is divisible by 3, log “Fizz.”
  //i=55;
  //console.log("If a number is divisible by 3, log “Fizz.");
  if (i % 3 == 0) {
    console.log(" fizz");
  } else if (i % 5 == 0) {
    console.log(" buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(" fizz buzz");
  } else {
    console.log(i);
  }
}

//Part 2: Prime Time

/*
let x=4; //we can change this input
let y=x+1;


console.log("Starting number (n):", x);
console.log("Searching for the next prime number...");

//false is prime number//
//wile number is not fulse

//Context: It searches for the next prime number starting from a given n.
//Arbitrary number n: The variable x is declared as n, and the script searches for the next prime starting from x + 1.

while(true){let z=true;
    for(let r=2;r<y;r++){if(y%r===0){z=false;
        //need break
        break;
    }
//if z still true then y is a prime
if(z){console.log("next prime number = "+y);break;}y++;}
}
*/ ///stoping loop going to part3

//Part 3: Feeling Loopy

//givings string
let csv =
  "ID,Name,Occupation,Age42,Bruce,Knight,4157,Bob,Fry Cook,1963,Blaine,Quiz Master,5898,Bill,Doctor’s Assistant,26";
let row1 = " ";
let row2 = " ";
let row3 = " ";
let row4 = " ";
let row5 = " ";
let cellnumber = 0;

//loop as long length of csv is more than m, to print it, until we get to ,
for (let m = 0; m < csv.length; m++) {
  let iscoma = csv.charAt(m);
  if (iscoma === ",") {
    cellnumber++;
    if (iscoma === 1) {
      row2 = row1;
    } else if (iscoma === 2) {
      row3 = row1;
    } else if (iscoma === 3) {
      row4 = row1;
    }
  }
//console.log("row1"+row1+ "raw1");  // didn;t print

row1=""; //restart new row
}else if(csv==='/n'){row5=row1;
    console.log(row1,row2,row3,row4,row5)
    row2=row3=row4=row5;//to reset
}
