var userInput;

function convertInput() {
    userInput = document.getElementsByName("input")[0].value;
    console.log("convertInput() was called at least!")
    if (userInput == "") {
        alert("Please give input!");
        return false;
    }
    else {
      alert(userInput);
      return  true;
    }
}
