var userInput;

function convertInput() {
    userInput = document.forms["input"]["fname"].value;
    if (userInput == "") {
        alert("Please give input!");
        return false;
    }
    else {
      alert(userInput);
      return  true;
    }
}
