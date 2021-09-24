const billAmountt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#give-cash");
const checkButton = document.querySelector("#btn-check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelector("#no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

console.log(cashGiven.value);

checkButton.addEventListener("click", function validateBillandCashAmount() {
    message.style.display = "none";

    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {

            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Insufficient Cash");
        }
    } else {
        showMessage("Invalid number");
    }
});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );

        amount %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

    function hideMessage() {
        message.style.display = "none";

    }

    function showMessage(msg) {
        message.style.display = "block";
        message.innerText = msg;
    }

};