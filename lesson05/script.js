const usernameElement = document.querySelector("#username-string");
const passwordElement = document.querySelector("#password-string");
const continueButton = document.querySelector("#button-continue");
const rememberCheckbox = document.querySelector("#remember-checkbox");
const resetButton = document.querySelector("#button-reset");

const username = "u";
const password = "p";

const savedUserName = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

usernameElement.value = savedUserName;
passwordElement.value = savedPassword;

continueButton.addEventListener("click", () => {
  if (
    usernameElement.value === username &&
    passwordElement.value === password
  ) {
    alert("Log in succesful");
    if (rememberCheckbox.checked) {
      localStorage.setItem("username", usernameElement.value);
      localStorage.setItem("password", passwordElement.value);
    }
  } else {
    alert("Log in unsuccesful, try again");
  }
});

resetButton.addEventListener("click", () => {
  usernameElement.value = "";
  passwordElement.value = "";
  localStorage.clear();
});

// add button RESET: all inputs should be empty, checkbox should be unchecked;
// and values inside localStorage should be deleted !!!! important

// for spotify:
// read about audio tag
// put 3 mp3 files inside folder with code
// put name of file for each song to objects
// read about functions, how to put parameters and return values
