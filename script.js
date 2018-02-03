
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
    let n;
    return  n;
}

function binToDec(USERINPUT){
    let n;
    return  n;
}

function output(n){
    toBinary(n)
    toHex(n);
}


function convert(USERINPUT){
    let n;
    if(document.getElementById("hex").checked){
      n = parseInt(hexToDec(USERINPUT));
    }
    else if(document.getElementById("bin").checked){
      n = parseInt(binToDec(USERINPUT))
    }
    else{
      n = parseInt(USERINPUT);
      output(n);
    }
}


function convertInput() {
    const   USERINPUT = document.getElementById("input").value;
    let  isValid;
    let  indicator; //Used to earmark the data for whether it is dec,hex,or bi

    console.log("convertInput() was called at least!");
    convert(USERINPUT);
}
