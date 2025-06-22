let arr = [];
let tbody = document.getElementsByClassName("addedElements")[0];

for(let i = 0; i < localStorage.length; i++){
  let key = localStorage.key(i);

  if(key.startsWith("custom")){
    let objOfElement = JSON.parse(localStorage.getItem(key));
    arr.push(key);

    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td><img src="${objOfElement.img}" alt="">
          ${objOfElement.name1}
      </td>
      <td class="price">${objOfElement.price}</td>
      <td><input class="inpp1" type="number" min="1" value="1"></td>
      <td class="sub">${objOfElement.price}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    tbody.appendChild(tr);
  }
}

const rows = tbody.querySelectorAll("tr");

rows.forEach((row, index) => {
  const input = row.querySelector(".inpp1");
  const priceCell = row.querySelector(".price");
  const subCell = row.querySelector(".sub");
  const deleteBtn = row.querySelector(".delete-btn");
  const key = arr[index];
  let obj = JSON.parse(localStorage.getItem(key));

  input.addEventListener("input", () => {
    let qty = parseInt(input.value);
    if (!qty || qty < 1) {
      qty = 1;
      input.value = qty;
    }
    let total = qty * obj.price;
    subCell.textContent = total.toFixed(2);
    obj.quantity = qty;
    obj.sub = total;
    localStorage.setItem(key, JSON.sltringify(obj));
  });

  deleteBtn.addEventListener("click", () => {
    localStorage.removeItem(key);
    tbody.removeChild(row);
  });
});
function updateTotalSum() {
  let total = 0;
  keys.forEach(key => {
    const obj = JSON.parse(localStorage.getItem(key));
    total += (obj.price * (obj.quantity || 1));
  });

  modalTotal.textContent = total.toFixed(2);

  const bottomTotal = document.getElementById("bottomTotal");
  if (bottomTotal) {
    bottomTotal.textContent = total.toFixed(2);
  }
}
function updateCartTotal() {
  let subtotal = 0;
  document.querySelectorAll(".sub").forEach(cell => {
    subtotal += parseFloat(cell.textContent);
  });

  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");

  subtotalEl.textContent = subtotal.toFixed(2) + "$";
  totalEl.textContent = subtotal.toFixed(2) + "$";
}

document.addEventListener("input", updateCartTotal);
document.addEventListener("DOMContentLoaded", updateCartTotal);