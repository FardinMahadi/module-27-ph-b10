document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = Number(document.getElementById("input-add-money").value);
    console.log(addMoney);

    const pinNumber = document.getElementById("input-pin-number").value;
    console.log(pinNumber);
  });
