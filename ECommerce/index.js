const products = document.querySelector(".products");
const getProductData = JSON.parse(localStorage.getItem("productAPI")) || [];
products.innerHTML = "";

for (let i = 0; i < 10; i++) {
  products.innerHTML += `
  <a href="./container/product/product.html">
  <div class="productCard">
  <div class="productImg">
    <img src="${getProductData[i].Img}" alt="img">
  </div>
  <div class="productBrand">
    <h2>${getProductData[i].Brand}</h2>
  </div>
  <div class="productName">
    <p>${getProductData[i].Name}</p>
  </div>
  <div class="productDesc">
    <p>${getProductData[i].Description}</p>
  </div>
  <div class="productPrice">
    <p>${getProductData[i].Price}</p>
  </div>
</div></a>
  `;
}
