/* for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  } this was a bad piece of code */

function odd() {
    // if a number is divisable by 2 it's even
    //if a number is not divisable by 2 it's odd
    //always use presise equals ===
    var currentNumber = Number(prompt("Enter a number, please."));
    document.getElementById("num").innerHTML = currentNumber;

    if (currentNumber % 2  === 0) {
        var msg = "The number " + currentNumber + " is even.";
        document.getElementById("result").innerHTML = msg;
    }
    else { 
    var msg2 = "The number " + currentNumber + " is odd.";
    document.getElementById("result").innerHTML = msg2;
    }
}
/* // start your engines
odd(12);
odd(34);
odd(14);
odd(55); */