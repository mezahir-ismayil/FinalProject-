const container = document.getElementById("product-list");
const products = JSON.parse(localStorage.getItem("products")) || [];

if (products.length === 0) {
  container.innerHTML = `<tr><td colspan="8">Нет добавленных продуктов</td></tr>`;
} else {
  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${1000 + index}</td>
      <td>${product.brand}</td>
      <td>${product.model}</td>
      <td>${product.categories}</td>
      <td><img src="${product.imgUrl}" width="80"></td>
      <td>${product.price} $</td>
      <td>${index + 1}/${products.length}</td>
      <td>
        <button class="edit-btn">✏️</button>
        <button class="delete-btn" onclick="deleteProduct(${index})">🗑</button>
      </td>
    `;
    container.appendChild(row);
  });
}

function deleteProduct(index) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  location.reload();
}
