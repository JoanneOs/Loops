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
