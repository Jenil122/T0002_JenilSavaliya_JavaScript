document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.querySelector(".cart-items");
  const totalPrice = document.getElementById("totalPrice");
  const checkoutBtn = document.getElementById("checkoutBtn");
  let cart = JSON.parse(localStorage.getItem("cartData")) || [];
  const isLogin = JSON.parse(localStorage.getItem("userLoggedIn"));
  let price = 0;

  function initializeTotalPrice() {
    price = cart.reduce((total, item) => total + parseFloat(item.Price), 0);
    updateTotalPrice();
  }

  function updateTotalPrice() {                     
    totalPrice.innerHTML = price.toFixed(2);
  }

  function removePrice(index) {
    cart.splice(index, 1);

    localStorage.setItem("cartData", JSON.stringify(cart));
    createCart();
  }

  function createCart() {
    if (cart.length === 0) {
      cartItems.innerHTML = "<p>Your cart is empty.</p>";
      totalPrice.innerHTML = "0.00";
      return;
    }

    let content = "";
    cart.forEach((data, index) => {
      content += `
        <div class="cartProduct">
          <div class="cartProductImg">
            <img src="${data.Img}" alt="Product Image">
          </div>
          <div class="cartProductBrand">
            <h2>${data.Brand}</h2>
          </div>
          <div class="cartProductName">
            <p>${data.Name}</p>
          </div>
          <div class="cartProductPrice">
            <p>$${parseFloat(data.Price).toFixed(2)}</p>
          </div>
         
          <div class="cartBtn">
            <button class="removeCartItem" onclick="removePrice(${index})">Remove</button>
          </div>
        </div>`;
    });

    cartItems.innerHTML = content;
    initializeTotalPrice();
  }

  if (isLogin) {
    createCart();
  } else {
    window.location.href = "../../container/login/login.html";
  }

  window.removePrice = removePrice;

  checkoutBtn.addEventListener("click", () => {
    if (cart.length !== 0) {
      if (confirm("Are you sure you want to place the order?")) {
        alert("Your order has been placed successfully!");
        cart = [];
        localStorage.setItem("cartData", JSON.stringify(cart));

        createCart();
        window.location.href = "../../index.html";
      }
    } else {
      alert("Please select at least one product to checkout.");
    }
  });
});
