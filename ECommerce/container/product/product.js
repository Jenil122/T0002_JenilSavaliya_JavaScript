const productBrand = document.getElementById("productBrand");
const productMaterial = document.getElementById("productMaterial");
const productPrice = document.getElementById("productPrice");
const searchBtn = document.getElementById("searchBtn");
const productBottom = document.querySelector(".product-bottom");

let productsData = JSON.parse(localStorage.getItem("productAPI")) || [];
let cart = JSON.parse(localStorage.getItem("cartData")) || [];

function createProductCards(productList) {
  let content = productList.length === 0 ? "<p>No products found.</p>" : "";

  productList.forEach((data, index) => {
    const sizes = data.Size.map((size) => `<p>${size}</p>`).join("");
    content += `
        <div class="productCard">
          <div class="productImg">
            <img src="${data.Img}" alt="Product Image">
          </div>
          <div class="productBrand">
            <h2>${data.Brand} ${data.Name}</h2>
          </div>
          <div class="productDescription">
            <p>${data.Description}</p>
          </div>
          <div class="productMaterial">
            <p>${data.Material}</p>
          </div>
          <div class="productSize">
            ${sizes}
          </div>
          <div class="productPrice">
            <p>$${parseFloat(data.Price).toFixed(2)}</p>
          </div>
          <div class="addToCart">
            <button onclick="addToCart(${index})">Add To Cart</button>
            <div style="display:none" id="cart-info-${index}"></div>
          </div>
        </div>`;
  });

  productBottom.innerHTML = content;
}

function addToCart(index) {
  const product = productsData[index];
  const exist = cart.includes(product);

  if (!exist) {
    cart.push(product);

    localStorage.setItem("cartData", JSON.stringify(cart));

    const cartInfo = document.getElementById(`cart-info-${index}`);
    cartInfo.style.display = "block";
    cartInfo.innerHTML = "Item Added Successfully";
    setTimeout(() => {
      cartInfo.style.display = "none";
    }, 3000);
  } else {
    window.alert("Product Already Exist in Your Shopping Cart");
  }
}

function filterData() {
  const productBrandValue = productBrand.value.toLowerCase().trim();
  const productMaterialValue = productMaterial.value.toLowerCase().trim();
  const productPriceValue = productPrice.value;

  let filteredData = productsData;

  if (productBrandValue !== "all") {
    filteredData = filteredData.filter((product) =>
      product.Brand.toLowerCase().trim().includes(productBrandValue)
    );
  }

  if (productMaterialValue !== "all") {
    filteredData = filteredData.filter((product) =>
      product.Material.toLowerCase().trim().includes(productMaterialValue)
    );
  }

  if (productPriceValue === "lowToHigh") {
    filteredData.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
  } else if (productPriceValue === "highToLow") {
    filteredData.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
  }

  createProductCards(filteredData);
}

searchBtn.addEventListener("click", filterData);

createProductCards(productsData);

window.addToCart = addToCart;
