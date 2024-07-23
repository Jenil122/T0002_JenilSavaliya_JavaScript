const forgetBtn = document.getElementById("forgetBtn");
let forgetEmail = document.getElementById("forgetEmail");
let forgetPassword = document.getElementById("forgetPassword");
let forgetReEnterPassword = document.getElementById("forgetReEnterPassword");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const cPasswordError = document.querySelector(".cPasswordError");

const emailValidation = () => {
  let forgetEmailValue = forgetEmail.value.trim();
  if (forgetEmailValue === "") {
    emailError.innerHTML = "Please enter the Email";
    emailError.style.color = "red";
    return false;
  } else {
    if (
      !forgetEmailValue.match(
        /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/g
      )
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
  let forgetPasswordValue = forgetPassword.value.trim();
  if (forgetPasswordValue === "") {
    passwordError.innerHTML = "Please enter the Password";
    passwordError.style.color = "red";
    return false;
  } else {
    if (
      !forgetPasswordValue.length >= 8 ||
      !forgetPasswordValue.match(
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
  let passwordValue = forgetPassword.value.trim();
  let cPasswordValue = forgetReEnterPassword.value.trim();
  if (passwordValue === "") {
    cPasswordError.innerHTML = "Please enter the Conform Password";
    cPasswordError.style.color = "red";
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

forgetEmail.addEventListener("keyup", emailValidation);
forgetPassword.addEventListener("keyup", passwordValidation);
forgetReEnterPassword.addEventListener("keyup", conformPasswordValidation);


function forgetPasswords(event) {
  event.preventDefault();
  const getDataLocal =JSON.parse(localStorage.getItem("registrationData")) || [];
  const forgetPasswordContainer = document.querySelector(".forgetPasswordContainer");

  const forgetEmailValidation = emailValidation();
  const forgetPasswordValidation = passwordValidation();
  const forgetCPasswordValidation = conformPasswordValidation();

  if (forgetEmailValidation) {
    const user = getDataLocal.find((data) => data.Email === forgetEmail.value);
    if (user) {
      forgetEmail.style.display = "none";
      forgetPasswordContainer.style.display = "inline-block";
      forgetBtn.id = "forget";
      forgetBtn.innerHTML = "Submit";

      emailError.innerHTML = ""
      forgetBtn.onclick = (event) => {
        event.preventDefault();
        if (forgetPasswordValidation && forgetCPasswordValidation) {
          if (forgetPassword.value === forgetReEnterPassword.value) {
            user.Password = forgetPassword.value;
            localStorage.setItem(
              "registrationData",
              JSON.stringify(getDataLocal)
            );
            alert("Password Set Successfully")
            window.location.href = "../login/login.html";
          } else {
            alert("Passwords do not match");
          }
        }
      };
    } else {
      alert("Email not found");
    }
  }
}

forgetBtn.addEventListener("click", forgetPasswords);
