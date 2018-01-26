var userInput;
var isValid;

function convertInput() {
    userInput = document.getElementsByName("input")[0].value;
    console.log("convertInput() was called at least!")
    isValid = checkInput(userInput);
    if(isValid) {
      alert(userInput);
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
