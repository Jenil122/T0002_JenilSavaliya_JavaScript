const loginBtn = document.getElementById("loginBtn");
let loginEmail = document.getElementById("loginEmail");
const emailError = document.querySelector(".emailError");
let loginPassword = document.getElementById("loginPassword");
const passwordError = document.querySelector(".passwordError");

const emailValidation = () => {
  let loginEmailValue = loginEmail.value.trim();
  if (loginEmailValue === "") {
    emailError.innerHTML = "Please enter the Email";
    emailError.style.color = "red";
    return false;
  } else {
    if (
      !loginEmailValue.match(
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
  let loginPasswordValue = loginPassword.value.trim();
  if (loginPasswordValue === "") {
    passwordError.innerHTML = "Please enter the Password";
    passwordError.style.color = "red";
    return false;
  } else {
    if (
      !loginPasswordValue.length >= 8 ||
      !loginPasswordValue.match(
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

loginEmail.addEventListener("keyup", () => {
  emailValidation();
});
loginPassword.addEventListener("keyup", () => {
  passwordValidation;
});

function loginForm(event) {
  event.preventDefault();
  const loginEmailValidation = emailValidation();
  const loginPasswordValidation = passwordValidation();
  let loginEmailValue = loginEmail.value.trim();
  let loginPasswordValue = loginPassword.value.trim();

  if (loginEmailValidation && loginPasswordValidation) {
    const userDatas =
      JSON.parse(localStorage.getItem("registrationData")) || [];
    let validUser = false;

    userDatas.forEach((userData) => {
      if (
        userData.Email === loginEmailValue &&
        userData.Password === loginPasswordValue
      ) {
        validUser = true;
        localStorage.setItem("userLoggedIn", "true");
      }
    });

    if (validUser) {
      loginEmailValue = "",
      loginPasswordValue = ""
      alert("Login Successfully")
      
      window.location.href = "../../index.html";
    } else {
      alert("Invalid email or password");
    }
  }
}

loginBtn.addEventListener("click", loginForm);
