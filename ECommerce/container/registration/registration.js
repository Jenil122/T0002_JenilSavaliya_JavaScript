const addData = [];
const registrationBtn = document.getElementById("registrationBtn");
let registrationName = document.getElementById("registrationName");
const registrationEmail = document.getElementById("registrationEmail");
const registrationPassword = document.getElementById("registrationPassword");
const registrationMobileNumber = document.getElementById(
  "registrationMobileNumber"
);
const registrationAddress = document.getElementById("registrationAddress");
const usernameError = document.querySelector(".usernameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const mobileNumberError = document.querySelector(".mobileNumberError");

const nameValidation = () => {
  let registrationNameValue = registrationName.value.trim();
  if (registrationNameValue === "") {
    usernameError.innerHTML = "Please enter the name";
    usernameError.style.color = "red";
    return false;
  } else {
    if (
      registrationNameValue.length < 3 ||
      registrationNameValue.match(/[0-9][\@\#\$\%\^\&\*\(\)]*/g)
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

const mobileValidation = () => {
  let registrationMobileNumberValue = registrationMobileNumber.value.trim();
  if (registrationMobileNumberValue === "") {
    mobileNumberError.innerHTML = "Please enter the name";
    mobileNumberError.style.color = "red";
    return false;
  } else {
    if (
      registrationMobileNumberValue.length !== 10 &&
      !registrationMobileNumberValue.match(/[0-9]{10}/g)
    ) {
      mobileNumberError.innerHTML =
        "Mobile number is not smaller then 10 digit";
      mobileNumberError.style.color = "red";
      return false;
    }
  }
  mobileNumberError.innerHTML = "valid";
  mobileNumberError.style.color = "green";
  return true;
};

const emailValidation = () => {
  let registrationEmailValue = registrationEmail.value.trim();
  if (registrationEmailValue === "") {
    emailError.innerHTML = "Please enter the Email";
    emailError.style.color = "red";
    return false;
  } else {
    if (
      !registrationEmailValue.match(
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
  let registrationPasswordValue = registrationPassword.value.trim();
  if (registrationPasswordValue === "") {
    passwordError.innerHTML = "Please enter the Password";
    passwordError.style.color = "red";
    return false;
  } else {
    if (
      !registrationPasswordValue.length >= 8 ||
      !registrationPasswordValue.match(
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

registrationName.addEventListener("keyup", nameValidation);
registrationEmail.addEventListener("keyup", emailValidation);
registrationPassword.addEventListener("keyup", passwordValidation);
registrationMobileNumber.addEventListener("keyup", mobileValidation);

function registrationForm(event) {
  event.preventDefault();
  const registrationNameValidation = nameValidation();
  const registrationEmailValidation = emailValidation();
  const registrationPasswordValidation = passwordValidation();
  const registrationMobileValidation = passwordValidation();
  if (
    registrationEmailValidation &&
    registrationPasswordValidation &&
    registrationNameValidation &&
    registrationMobileValidation
  ) {
    addData.push({
      Name: registrationName.value,
      Email: registrationEmail.value,
      mobileNumber: registrationMobileNumber.value,
      Address: registrationAddress.value,
      Password: registrationPassword.value,
    });
    alert("Your Register Successfully");
    window.location.href = "../../container/login/login.html";
    registrationName.value = "";
    registrationEmail.value = "";
    registrationMobileNumber.value = "";
    registrationAddress.value = "";
    registrationPassword.value = "";
    localStorage.setItem("registrationData", JSON.stringify(addData));
  }
}

registrationBtn.addEventListener("click", registrationForm);
