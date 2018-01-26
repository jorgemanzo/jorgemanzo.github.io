
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
    toBinary(userInput);

    //convert to hex
}

function  toBinary(userInput) {
    var atoi;
    var temp;
    var decimal = [];
    atoi = parseInt(userInput);
    for(i = 0; atoi != 0; i++){
      temp = atoi % 2; //Find remainder
      decimal.unshift(temp); //Append remainder to array
      atoi = Math.floor(atoi/2); //Assigning the dividend to be the quotient to be used later
    }
    console.log(decimal.toString());
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
