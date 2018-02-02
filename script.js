
function convertInput() {
    const   USERINPUT = document.getElementsByName("input")[0].value;
    const   indicatorBinary = 1;
    const   indicatorHexadecimal = 2;
    const   indicatorDecimal = 3;
    var     isValid;
    var     indicator; //Used to earmark the data for whether it is dec,hex,or bi


    console.log("convertInput() was called at least!")
    isValid = checkInput(USERINPUT);
    if(isValid) {
      if(document.getElementById("dec").checked){
        console.log("You checked decimal yes?");
        indicator = indicatorDecimal;
        fromDecimal(USERINPUT, indicator);
      }
      else if(document.getElementById("hex").checked){
        console.log("You checked Hexadecimal yes?");
        indicator = indicatorHexadecimal;
        fromHexadecimal(USERINPUT, indicator);
      }
      else if(document.getElementById("bi").checked){
        console.log("You checked binary yes?");
        indicator = indicatorBinary;
      }

    }
}

function fromDecimal(USERINPUT, indicator) {
    toBinary(USERINPUT, indicator);

    toHex(USERINPUT, indicator)
}

function  fromHexadecimal(USERINPUT, indicator) {
    toBinary(USERINPUT, indicator);

    //toDecimal(userInput, indicator);

}

function toHex(USERINPUT, indicator) {
    var dividend;
    var temp;
    var hex = [];

    //If the input is Decimal, convert it to hex
    if(indicator == 3){
      dividend = parseInt(USERINPUT);
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

function  toBinary(USERINPUT, indicator) {
    var dividend;
    var temp;
    var decimal = [];
    var binary  = [];
    //if input is of type decimal
    if(indicator == 3){
      dividend = parseInt(USERINPUT);
      for(i = 0; dividend != 0; i++){
        temp = dividend % 2; //Find remainder
        decimal.unshift(temp); //Append remainder to array
        dividend = Math.floor(dividend/2); //Assigning the dividend to be the quotient to be used later
      }
      console.log(decimal.join(""));
    }


    //if input is of type hexadecimal
    else if(indicator == 2){

    //For every char in the user input
        for(i = 0; i < USERINPUT.length; i++){
          //Convert each char to its binary representation and append to a new string
          if(USERINPUT[0][i] == '1'){
            binary.unshift("0001");
          }
	}
        console.log(binary.join(""));
    }
}


function checkInput(USERINPUT) {
    if (USERINPUT == "") {
        alert("Please give input!");
        return false;
    }
    else {
        return true;
    }
}
