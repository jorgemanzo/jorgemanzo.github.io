
function convertInput() {
    var userInput;
    var isValid;

    userInput = document.getElementsByName("input")[0].value;
    console.log("convertInput() was called at least!")
    isValid = checkInput(userInput);
    if(isValid) {
      if(document.getElementById("dec").checked){
        console.log("You checked decimal yes?");
        toBinary(userInput);
      }
      else if(document.getElementById("hex").checked){
        console.log("You checked Hexadecimal yes?");
      }
      else if(document.getElementById("bi").checked){
        console.log("You checked binary yes?");
      }

    }
}

function fromDecimal(userInput) {
    //toBinary(userInput);

    toHex(userInput);
}

function toHex(userInput) {
    var dividend;
    var temp;
    var hex = [];
    dividend = parseInt(userInput);
    for(i = 0; dividend != 0; i++){
      temp = dividend % 16;
      if(temp == 10){
        hex.unshift('A');
      }

      else if(temp == 11) {
        hex.unshift('B');
      }

      else if(temp == 12) {
        hex.unshift('C');
      }

      else if(temp == 13) {
        hex.unshift('D');
      }

      else if(temp == 14) {
        hex.unshift('E');
      }

      else if(temp == 15) {
        hex.unshift('F');
      }

      else {
        hex.unshift(temp);
      }
      dividend = Math.floor(dividend/16); //Assigning the dividend to be the quotient to be used later
    }
    console.log(hex.join(""));
}

function  toBinary(userInput) {
    var dividend;
    var temp;
    var decimal = [];
    dividend = parseInt(userInput);
    for(i = 0; dividend != 0; i++){
      temp = dividend % 2; //Find remainder
      decimal.unshift(temp); //Append remainder to array
      dividend = Math.floor(dividend/2); //Assigning the dividend to be the quotient to be used later
    }
    console.log(decimal.join(""));
}


function checkInput(userInput) {
    if (userInput == "") {
        alert("Please give input!");
        return false;
    }
    else {
        return true;
    }
}
