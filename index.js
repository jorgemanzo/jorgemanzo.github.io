import * as converter from './script.js';
function convertInput(e) {
    e.preventDefault();
    const   USERINPUT = document.getElementById("input").value;
    if(document.getElementById("fromNeg").checked){
      let n = 0;
      let complemented = 0;
      if(document.getElementById('hex').checked){
        n = converter.hexToBin(USERINPUT);
        complemented = converter.twosComplement(n);
        document.getElementById('decOut').innerHTML = converter.binToDec(complemented);
        document.getElementById('binOut').innerHTML = complemented;
        document.getElementById('hexOut').innerHTML = USERINPUT;
      } else if(document.getElementById('dec').checked){
        n = converter.toBinary(USERINPUT);
        complemented = converter.twosComplement(n);
        document.getElementById('decOut').innerHTML = USERINPUT;
        document.getElementById('binOut').innerHTML = complemented;
        document.getElementById('hexOut').innerHTML = converter.toHex(converter.binToDec(complemented));
      } else {
        n = USERINPUT;
        complemented = converter.twosComplement(n);
        document.getElementById('decOut').innerHTML = converter.binToDec(complemented);
        document.getElementById('binOut').innerHTML = USERINPUT;
        document.getElementById('hexOut').innerHTML = converter.toHex(converter.binToDec(complemented));
      }

    } else {
      let n = 0;
      if(document.getElementById("hex").checked){
        n = converter.hexToDec(USERINPUT);
      }
      else if(document.getElementById("bin").checked){
        n = converter.binToDec(USERINPUT);
      }
      else{
        n = parseInt(USERINPUT);
      }
      document.getElementById('decOut').innerHTML = n;
      document.getElementById('binOut').innerHTML = converter.toBinary(n);
      document.getElementById('hexOut').innerHTML = converter.toHex(n);
    }

    return true;
}

document.getElementById('inputForm').addEventListener('submit', convertInput);
