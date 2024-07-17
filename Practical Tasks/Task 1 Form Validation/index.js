let username = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cPassword = document.getElementById("cPassword");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const cPasswordError = document.getElementById("cPasswordError");
const btn = document.getElementById("btn");

const nameValidation = () => {
  let usernameValue = username.value.trim();
  if (usernameValue === "") {
    usernameError.innerHTML = "Please enter the name";
    return false;
  } else {
    if (
      usernameValue.length < 3 ||
      usernameValue.match(/[0-9][\@\#\$\%\^\&\*\(\)]*/g)
    ) {
      usernameError.innerHTML =
        "Name Must be at least 3 characters long and  not contain numbers or special characters.";
      usernameError.style.color = "red";
      return false;
    }
  }
  usernameError.innerHTML = "valid";
  usernameError.style.color = "green";
  return true;
};

const emailValidation = () => {
  let emailValue = email.value.trim();
  if (emailValue === "") {
    emailError.innerHTML = "Please enter the Email";
    return false;
  } else {
    if (
      !emailValue.match(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/g)
    ) {
      emailError.innerHTML = "Please enter valid format";
      emailError.style.color = "red";
      return false;
    }
  }
  emailError.innerHTML = "valid";
  emailError.style.color = "green";
  return true;
};

const passwordValidation = () => {
  let passwordValue = password.value.trim();
  if (passwordValue === "") {
    passwordError.innerHTML = "Please enter the Password";
    return false;
  } else {
    if (
      !passwordValue.length >= 8 ||
      !passwordValue.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/g
      )
    ) {
      passwordError.innerHTML =
        "Password Must be at least 8 characters long and  include at least one uppercase letter, one lowercase letter, one number, and one special character.";
      passwordError.style.color = "red";
      return false;
    }
  }
  passwordError.innerHTML = "valid";
  passwordError.style.color = "green";
  return true;
};

const conformPasswordValidation = () => {
  let passwordValue = password.value.trim();
  let cPasswordValue = cPassword.value.trim();
  if (passwordValue === "") {
    cPasswordError.innerHTML = "Please enter the Conform Password";
    return false;
  } else {
    if (passwordValue !== cPasswordValue) {
      cPasswordError.innerHTML = "Password don't match";
      cPasswordError.style.color = "red";
      return false;
    }
  }
  cPasswordError.innerHTML = "valid";
  cPasswordError.style.color = "green";
  return true;
};

const validation = () => {
  const isNameValid = nameValidation();
  const isEmailValid = emailValidation();
  const isPasswordValid = passwordValidation();
  const isConfirmPasswordValid = conformPasswordValidation();
  if (
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    btn.removeAttribute("disabled");
  }
};

username.addEventListener("keyup", () => {
  nameValidation();
  validation();
});
email.addEventListener("keyup", () => {
  emailValidation();
  validation();
});
password.addEventListener("keyup", () => {
  passwordValidation;
  validation();
});
cPassword.addEventListener("keyup", () => {
  conformPasswordValidation;
  validation();
});

function formSubmit(event) {
  event.preventDefault();
  const isNameValid = nameValidation();
  const isEmailValid = emailValidation();
  const isPasswordValid = passwordValidation();
  const isConfirmPasswordValid = conformPasswordValidation();

  if (
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    alert("Form submitted successfully!");
    window.location.reload();
  } else {
    alert("Please fill out the form correctly.");
  }
}
