var userInput;

function convertInput() {
    userInput = document.getElementsByName("input").value;
    if (userInput == "") {
        alert("Please give input!");
        return false;
    }
    else {
      alert(userInput);
      return  true;
    }
}
