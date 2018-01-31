
function convertInput() {
    var userInput;
    var isValid;
    var indicator; //Used to earmark the data for whether it is dec,hex,or bi
    var indicatorBinary = 1;
    var indicatorHexadecimal = 2;
    var indicatorDecimal = 3;

    userInput = document.getElementsByName("input")[0].value;
    console.log("convertInput() was called at least!")
    isValid = checkInput(userInput);
    if(isValid) {
      if(document.getElementById("dec").checked){
        alert("You checked decimal yes?");
        indicator = indicatorDecimal;
        fromDecimal(userInput, indicator);
      }
      else if(document.getElementById("hex").checked){
        console.log("You checked Hexadecimal yes?");
        indicator = indicatorHexadecimal;
        fromHexadecimal(userInput);
      }
      else if(document.getElementById("bi").checked){
        console.log("You checked binary yes?");
        indicator = indicatorBinary;
      }

    }
}

function fromDecimal(userInput, indicator) {
    toBinary(userInput, indicator);

    toHex(userInput, indicator);
}

function  fromHexadecimal(userInput, indicator) {
    toBinary(userInput, indicator);

    //toDecimal(userInput, indicator);

}

function toHex(userInput, indicator) {
    var dividend;
    var temp;
    var hex = [];

    //If the input is Decimal, convert it to hex
    if(indicator == 3){
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
      alert(hex.join(""));
    }
}

function  toBinary(userInput, indicator) {
    var dividend;
    var temp;
    var decimal = [];

    //if input is of type decimal
    if(indicator == 3){
      dividend = parseInt(userInput);
      for(i = 0; dividend != 0; i++){
        temp = dividend % 2; //Find remainder
        decimal.unshift(temp); //Append remainder to array
        dividend = Math.floor(dividend/2); //Assigning the dividend to be the quotient to be used later
      }
      alert(decimal.join(""));
    }


    //if input is of type hexadecimal
    else if(indicator == 2){
      console.log(String(userInput));
    }
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
