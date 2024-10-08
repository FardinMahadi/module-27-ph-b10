// add money
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumberInput = document.getElementById("input-pin-number").value;

    if (pinNumberInput === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });

// cash out
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("input-cash-out").value;
    const pinNumber = document.getElementById(
      "input-cash-out-pin-number"
    ).value;

    if (pinNumber === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const newBalance = parseFloat(balance) - parseFloat(cashOut);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cash out. Please try again later.");
    }
  });

//   show the add money form
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.add("hidden");

    document.getElementById("add-money-form").classList.remove("hidden");
  });

//   show the cash out form
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.remove("hidden");

    document.getElementById("add-money-form").classList.add("hidden");
  });
