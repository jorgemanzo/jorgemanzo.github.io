
//toHEX (INPUT)
/*
Desc: Converts Decimal to Hexadecimal always and only
*/
function toHex(n) {
    let temp;
    let hex = [];
    //If the input is Decimal, convert it to hex
    for(i = 0; n != 0; i++){
      temp = n % 16;
      //Assigning the dividend to be the quotient to be used later
      n = Math.floor(n/16);
      switch(temp){
        case 10:
          hex.unshift('A');
          break;
        case 11:
          hex.unshift('B');
          break;
        case 12:
          hex.unshift('C');
          break;
        case 13:
          hex.unshift('D');
          break;
        case 14:
          hex.unshift('E');
          break;
        case 15:
          hex.unshift('F');
          break;
        default:
          hex.unshift(temp);
      }
    }
    console.log(hex.join(""));
}


//toBIN(iNPUT)
/*
Desc: Converts Decimal to binary always and only
*/
function  toBinary(n) {
    let temp;
    let decimal = [];
    let binary  = [];
    //if input is of type decimal
    for(i = 0; n != 0; i++){
      temp = n % 2; //Find remainder
      decimal.unshift(temp); //Append remainder to array
      n = Math.floor(n/2); //Assigning the dividend to be the quotient to be used later
    }
    console.log(decimal.join(""));
}

function hexToDec(USERINPUT){
    let n = 0;
    let length = USERINPUT.toString().length - 1;
    let string = USERINPUT.toString();
    //For(i elements in userinput, multiply string[i] by 16^j)
    for(i = 0, j = length; i <= length && j >= 0; i++, j--){
      //case a-f = 10-15 which is then multiplied by 16^i
      //else take 1-9 and do the same as above, adding the results
      switch (string[i]) {
        case   "A":
          n = n + (10 * (Math.pow(16, j)  ) )
          break;
        case   "B":
          n = n + (11 * (Math.pow(16, j)  ) )
          break;
        case   "C":
          n = n + (12 * (Math.pow(16, j)  ) )
          break;
        case   "D":
          n = n + (13 * (Math.pow(16, j)  ) )
          break;
        case   "E":
          n = n + (14 * (Math.pow(16, j)  ) )
          break;
        case   "F":
          n = n + (15 * (Math.pow(16, j)  ) )
          break;
        default:
          n = n + (parseInt(string[i]) * (Math.pow(16, j) ) );
      }
    }

    return  n;
}

function binToDec(USERINPUT){
    let n = 0;
    let length = USERINPUT.toString().length - 1;
    let string = USERINPUT.toString();
    for(i = 0, j = length; i <= length && j >= 0; i++, j--){
      //case a-f = 10-15 which is then multiplied by 16^i
      //else take 1-9 and do the same as above, adding the results
      switch (string[i]) {
        case   "1":
          n = n + (1 * (Math.pow(2, j)  ) )
          break;
        default:
          break;
      }
    }
    return  n;
}

function output(n){
    console.log("Your number in Decimal:");
    console.log(n);
    console.log("Your number in Binary");
    toBinary(n);
    console.log("Your number in Hex");
    toHex(n);
}


function convert(USERINPUT){
    let n;
    if(document.getElementById("hex").checked){
      n = hexToDec(USERINPUT);
    }
    else if(document.getElementById("bin").checked){
      n = binToDec(USERINPUT);
    }
    else{
      n = parseInt(USERINPUT);
    }
    output(n);
}


function convertInput() {
    const   USERINPUT = document.getElementById("input").value;
    let  isValid;
    let  indicator; //Used to earmark the data for whether it is dec,hex,or bi

    console.log("convertInput() was called at least!");
    console.log(USERINPUT.toString().length);
    convert(USERINPUT);
}
