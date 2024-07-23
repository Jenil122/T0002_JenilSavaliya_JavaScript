const navigate = document.getElementById("navigate");

function isLoggedIn() {
  return localStorage.getItem("userLoggedIn") === "true";
}

function updateNavigation() {
  const loginLink = isLoggedIn()
    ? '<li><a href="../../container/reset/reset.html">Reset Password</a></li><li onClick="logoutBtn()">Logout</li>'
    : '<li><a href="../../container/login/login.html">Login</a></li>';

  navigate.innerHTML = `
    <header>
      <div class="nav-left">
        <div class="nav-logo">
          <img
            src="../../public/IMG/Logo/logo.png"
            alt="logo"
          />
        </div>
       
      </div>
      <div class="nav-right">
        <ul class="navigation">
          <li><a href="../../index.html">Home</a></li>
          <li><a href="../../container/product/product.html">Product</a></li>
          ${loginLink}
          <li><a href="../../container/cart/cart.html">Cart</a></li>
        </ul>
        <div class="menu-toggle" id="menuToggle">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </header>
  `;

  document.getElementById("menuToggle").addEventListener("click", function () {
    document.querySelector(".navigation").classList.toggle("active");
  });



  function logoutBtn() {
    JSON.stringify(localStorage.setItem("userLoggedIn", "false"))
    window.location.href = "../../index.html"
  }

  window.logoutBtn = logoutBtn
}



updateNavigation();
