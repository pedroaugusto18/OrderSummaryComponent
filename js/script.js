var submitBtn = document.getElementById('submit');

var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');

var password = document.getElementById('password');

var borderFirstName = document.querySelector('.border-first-name');
var borderLastName = document.querySelector('.border-last-name');
var borderEmail = document.querySelector('.border-email');
var borderPassword = document.querySelector('.border-password');

var errorIconFirstName = document.querySelector('.error-icon-first-name');
var errorIconLastName = document.querySelector('.error-icon-last-name');
var errorIconEmail = document.querySelector('.error-icon-email');
var errorIconPassword = document.querySelector('.error-icon-password');

var errorMsgFirstName = document.querySelector('.error-msg-first-name');
var errorMsgLastName = document.querySelector('.error-msg-last-name');
var errorMsgEmail = document.querySelector('.error-msg-email');
var errorMsgPassword = document.querySelector('.error-msg-password');

var emailTestPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (firstName.value === '') {
    borderFirstName.style.border = "2px solid hsl(0, 100%, 74%)";
    firstName.classList.add("error");
    errorIconFirstName.classList.add('visible');
    errorMsgFirstName.classList.add('visible');
  }

  if (lastName.value === '') {
    borderLastName.style.border = "2px solid hsl(0, 100%, 74%)";
    lastName.classList.add("error");
    errorIconLastName.classList.add('visible');
    errorMsgLastName.classList.add('visible');
  }

  if (email.value === '' || !email.value.match(emailTestPattern)) {
    borderEmail.style.border = "2px solid hsl(0, 100%, 74%)";
    email.classList.add("error");
    errorIconEmail.classList.add('visible');
    errorMsgEmail.classList.add('visible');
    if (email.value === '') {
      errorMsgEmail.innerHTML = "Email Address cannot be empty";
    } else {
      email.classList.add("email-error");
      errorMsgEmail.innerHTML = "Looks like this is not an email";
    }
  }

  if (password.value === '') {
    borderPassword.style.border = "2px solid hsl(0, 100%, 74%)";
    password.classList.add("error");
    errorIconPassword.classList.add('visible');
    errorMsgPassword.classList.add('visible');
  }
}
);