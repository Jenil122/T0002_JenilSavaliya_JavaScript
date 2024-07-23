const resetBtn = document.getElementById("resetBtn");
const newPassword = document.getElementById("newPassword");
const reEnterNewPassword = document.getElementById("reEnterNewPassword");
const passwordError = document.querySelector(".passwordError");
const cPasswordError = document.querySelector(".cPasswordError");

const passwordValidation = () => {
  let newPasswordValue = newPassword.value.trim();
  if (newPasswordValue === "") {
    passwordError.innerHTML = "Please enter the Password";
    passwordError.style.color = "red";
    return false;
  } else {
    if (
      !newPasswordValue.length >= 8 ||
      !newPasswordValue.match(
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
  let passwordValue = newPassword.value.trim();
  let cPasswordValue = reEnterNewPassword.value.trim();
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

newPassword.addEventListener("keyup", passwordValidation);
reEnterNewPassword.addEventListener("keyup", conformPasswordValidation);

function resetPassword(event) {
  event.preventDefault();

  const currentPassword = document.getElementById("currentPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  const reEnterNewPassword =
    document.getElementById("reEnterNewPassword").value;
  const passwordValidations = passwordValidation();
  const cPasswordValidation = conformPasswordValidation();
  const getPasswordLocalStorage =
    JSON.parse(localStorage.getItem("registrationData")) || [];

  if (
    currentPassword === "" ||
    newPassword === "" ||
    reEnterNewPassword === ""
  ) {
    alert("Password fields can't be blank");
    return;
  }

  let passwordUpdated = false;

  getPasswordLocalStorage.forEach((data, index) => {
    if (data.Password === currentPassword) {
      if (passwordValidations && cPasswordValidation) {
        if (newPassword === reEnterNewPassword) {
          data.Password = newPassword;
          localStorage.setItem(
            "registrationData",
            JSON.stringify(getPasswordLocalStorage)
          );
          passwordUpdated = true;
          alert("Password updated successfully!");
          window.location.href = "../../index.html";
        } else {
          alert("New passwords do not match");
        }
      }
    }
  });

  if (!passwordUpdated) {
    alert("Current password is incorrect or user not found");
  }
}

resetBtn.addEventListener("click", resetPassword);
