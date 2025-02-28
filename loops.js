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
  }else if (i % 5 == 0) {
    console.log(" buzz");
  }else if (i % 3 == 0 && i % 5 == 0) {
    console.log(" fizz buzz");
  } else {
    console.log(i);
  }
}


//Part 2: Prime Time
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