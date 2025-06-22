function func1() {
    const brand = document.getElementById("brand").value.trim();
    const model = document.getElementById("model").value.trim();
    const categories = document.getElementById("categories").value.trim();
    const description = document.getElementById("Description").value.trim();
    const price = document.getElementById("price").value.trim();
    const imgUrl = document.getElementById("Img").value.trim();

    if (!brand || !model || !categories || !description || !price || !imgUrl) {
        alert("Пожалуйста, заполните все поля");
        return;
    }

    const product = {
        brand,
        model,
        categories,
        description,
        price,
        imgUrl
    };

    // Получаем текущие продукты или создаем пустой массив
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);

    // Сохраняем обратно
    localStorage.setItem("products", JSON.stringify(products));
    
    alert("Продукт сохранен!");
    window.location.href = "newproduct.html";
}