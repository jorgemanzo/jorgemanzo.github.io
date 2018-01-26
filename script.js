var userInput;
var isValid;


function convertInput() {
    userInput = document.getElementsByName("input")[0].value;
    console.log("convertInput() was called at least!")
    isValid = checkInput(userInput);
    if(isValid) {
      if(document.getElementById("dec").checked){
        console.log("You checked decimal yes?");
      }
      else if(document.getElementById("hex").checked){
        console.log("You checked Hexadecimal yes?");
      }
      else if(document.getElementById("bi").checked){
        console.log("You checked binary yes?");
      }

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
