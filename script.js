
document.addEventListener("DOMContentLoaded", function () {

  const products = document.querySelectorAll(".list-products > .card-body");
  const totalPrice = document.querySelector(".total");

  function updateTotal() {
    let total = 0;

    products.forEach(function (product) {
      if (!product.isConnected) return;

      const price = parseFloat(
        product.querySelector(".unit-price").textContent
      );

      const quantity = parseInt(
        product.querySelector(".quantity").textContent
      );

      total += price * quantity;
    });

    totalPrice.textContent = total + " $";
  }

  products.forEach(function (product) {

    const plus = product.querySelector(".fa-plus-circle");
    const minus = product.querySelector(".fa-minus-circle");
    const quantity = product.querySelector(".quantity");
    const deleteButton = product.querySelector(".fa-trash-alt");
    const heart = product.querySelector(".fa-heart");

    plus.addEventListener("click", function () {
      quantity.textContent = Number(quantity.textContent) + 1;
      updateTotal();
    });

    minus.addEventListener("click", function () {
      if (Number(quantity.textContent) > 0) {
        quantity.textContent = Number(quantity.textContent) - 1;
        updateTotal();
      }
    });

    deleteButton.addEventListener("click", function () {
      product.remove();
      updateTotal();
    });

    heart.addEventListener("click", function () {
      if (heart.style.color === "red") {
        heart.style.color = "black";
      } else {
        heart.style.color = "red";
      }
    });

  });

  updateTotal();

});
