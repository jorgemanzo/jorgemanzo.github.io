
//convets Decimal input to Hexadecimal output
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
    document.getElementById('hexOut').innerHTML = hex.join("");
}

//Converts Decimal to binary output
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
    document.getElementById('binOut').innerHTML = decimal.join("");
    return decimal.join("");
}
//Converts Hexadecimal input into Decimal output
function hexToDec(USERINPUT){
    let n = 0;
    let length = USERINPUT.toString().length - 1;
    let string = USERINPUT.toString();
    //For(i elements in userinput, multiply string[i] by 16^j)
    for(i = 0, j = length; i <= length && j >= 0; i++, j--){
      //case a-f = 10-15 which is then multiplied by 16^i
      //else take 1-9 and do the same as above, adding the results
      switch (string[i]) {
        case "A":
          n = n + (10 * (Math.pow(16, j)  ) )
          break;
        case "B":
          n = n + (11 * (Math.pow(16, j)  ) )
          break;
        case "C":
          n = n + (12 * (Math.pow(16, j)  ) )
          break;
        case "D":
          n = n + (13 * (Math.pow(16, j)  ) )
          break;
        case "E":
          n = n + (14 * (Math.pow(16, j)  ) )
          break;
        case "F":
          n = n + (15 * (Math.pow(16, j)  ) )
          break;
        default:
          n = n + (parseInt(string[i]) * (Math.pow(16, j) ) );
      }
    }
    return  n;
}

//helper function, counts the number of ' ' or '.' in binary input
function counter(string, length){
  let n = 0 //be the number of periods or spaces in string
  for(i = 0; i < length; i++){
    if(string[i] === "." || string[i] === " "){n++;}
  }
  return n;
}


//Converts binary input to Decimal output
function binToDec(USERINPUT){
    let n = 0;
    let length = USERINPUT.toString().length - 1;
    let string = USERINPUT.toString();
    length = length - counter(string, length);
    for(i = 0, j = length; j >= 0; i++, j--){
      switch (string[i]) {
        case "1":
          n = n + (1 * (Math.pow(2, j)  ) )
          break;
        case " ":
          j++;
          break;
        case ".":
          j++;
          break;
        default:
          break;
      }
    }
    return  n;
}

function hexToBin(USERINPUT){
  let hex1   = [];
  let length = USERINPUT.toString().length - 1;
  let string = USERINPUT.toString();
  for(i = 0, j = length; j >= 0; i++, j--){
    switch (string[i]) {
      case "A":
        hex1.unshift('1010'); //Append remainder to array
        break;
      case "B":
        hex1.unshift('1011'); //Append remainder to array
        break;
      case "C":
        hex1.unshift('1100'); //Append remainder to array
        break;
      case "D":
        hex1.unshift('1101'); //Append remainder to array
        break;
      case "E":
        hex1.unshift('1110'); //Append remainder to array
        break;
      case "F":
        hex1.unshift('1111'); //Append remainder to array
        break;
      default:
        hex1.unshift(toBinary(string[i]))
        break
    }

    console.log(hex1.join(""));
    return  hex1.join("");
  }
}

function output(n){
    document.getElementById('decOut').innerHTML = n;
    toBinary(n);
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
        n = parseInt(USERINPUT) //Convert user's decimal input into Binary
      }
      output(n);
}

function twosComplement(n){
  let invert  = [];
  let length = n.toString().length - 1;
  let string = n.toString();
  for(i = 0, j = length; j >= 0; i++, j--){
    switch (string[i]) {
      case "0":
        invert.unshift('1'); //Append remainder to array
        break;
      default:
        invert.unshift('0');
        break
    }
    console.log("Your number inverted:");
    console.log(invert.join(""));

  }
}

function checkForSpecial(USERINPUT){
  let n;
  if(document.getElementById("fromNeg").checked){
    //convert whatever input type to negative using two's complement
    if(document.getElementById("hex").checked){
      n = hexToBin(USERINPUT);
    }

    else if(document.getElementById("dec").checked){
      n = toBinary(USERINPUT);
    }
    else{
      n = USERINGPUT;
    }
    twosComplement(n)
  }
}


function convertInput() {
    const   USERINPUT = document.getElementById("input").value;
    let  isValid;
    let  indicator; //Used to earmark the data for whether it is dec,hex,or bi
    checkForSpecial(USERINPUT);
    convert(USERINPUT);
    return true;
}
