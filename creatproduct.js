document.getElementById("Img").addEventListener("input", () => {
  document.getElementById("img1").src = document.getElementById("Img").value;
});

function func1() {
  const product = {
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    categories: document.getElementById("categories").value,
    description: document.getElementById("Description").value,
    price: document.getElementById("price").value,
    imgUrl: document.getElementById("img1").src
  };

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  alert("Продукт успешно добавлен");
  window.location.href = "newproduct.html";
}
