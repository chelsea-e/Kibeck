//Get data
const nameInput = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");


//Validate Form
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(!nameInputIsValid(nameInput.value)){
        errorNodes[0].innerText = "Please input your full name";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!phoneIsValid(phone.value)){
        errorNodes[1].innerText = "Incorrect phone number";
        phone.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[2].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length < 1){
        errorNodes[3].innerText = "Please state your message or inquiry";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length > 2000){
        errorNodes[3].innerText = "Text is too long";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if(!errorFlag){
        return submitForm();
    }
}


//Clear error / success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
    phone.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

//Check if name is valid
function nameInputIsValid(name){
    let pattern = /^[A-Za-z]*\s{1}[A-Za-z]*[A-Za-z]$/;
    return pattern.test(name);
}

//Check if phone is valid
function phoneIsValid(phone){
    let pattern = /^[0-9]{11}$/;
    return pattern.test(phone);
}

//Check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
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
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
  
    var name = getElementVal("name");
    var phone = getElementVal("phone");
    var email = getElementVal("email");
    var message = getElementVal("message");
  
    saveMessages(name, phone, email, message);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, phone, email, message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      phone: phone,
      email: email,
      message: message,
    });
  };


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

//Check if name is valid
function lettersIsValid(letter) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(letter);
}



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