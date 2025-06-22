const container = document.getElementById("product-list");
const products = JSON.parse(localStorage.getItem("products")) || [];

if (products.length === 0) {
    container.innerHTML = "<p>Нет добавленных продуктов</p>";
} else {
    products.forEach((product) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <img src="${product.imgUrl}" alt="${product.model}" width="200">
            <h3>${product.brand} - ${product.model}</h3>
            <p>Категория: ${product.categories}</p>
            <p>${product.description}</p>
            <strong>Цена: $${product.price}</strong>
            <hr>
        `;
        container.appendChild(card);
    });
}