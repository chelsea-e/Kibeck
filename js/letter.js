
//Get data for Newsletter
const letters = document.querySelector("#letter");
const errorNode = document.querySelectorAll(".err");

//Validate Form
function validateEmail() {
  clearText();
  let errorFlag = false;

  if (!lettersIsValid(letter.value)) {
    errorNode[0].innerText = "Invalid email address";
    errorFlag = true;
  }
  if (!errorFlag) {
    return submitEmail();
  }
}

//Clear error / success messages
function clearText() {
  for (let i = 0; i < errorNode.length; i++) {
    errorNode[i].innerText = "";
  }
  letters.classList.remove("error-border");
}

//Check if email is valid
function lettersIsValid(letter) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(letter);
}




// Firebase Database
const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyB5tULQ8SEbt9VfVu2JHmrb7OhgxiUc3f4",
    authDomain: "contactform-kibeck.firebaseapp.com",
    databaseURL: "https://contactform-kibeck-default-rtdb.firebaseio.com",
    projectId: "contactform-kibeck",
    storageBucket: "contactform-kibeck.appspot.com",
    messagingSenderId: "771905742308",
    appId: "1:771905742308:web:dd4b9ebf325a577d1153f1"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);



  // reference your database
  var newsFormDB = firebase.database().ref("newsForm");
  
  document.getElementById("newsForm").addEventListener("submit", submitEmail);
  
  function submitEmail(a) {
  
    var letter = getElementVal("letter");
  
    saveEmails(letter);
  
    //   reset the form
    document.getElementById("newsForm").reset();
  }
  
  const saveEmails = (letter) => {
    var newNewsForm = newsFormDB.push();
  
    newNewsForm.set({
      name: letter,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };