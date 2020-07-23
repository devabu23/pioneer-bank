//login button event handler
const enterBtn = document.getElementById("enter");
enterBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit button event handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
    const depositNum = getInputNum("depositAmount");

    updateSpanText("currentDeposit", depositNum);
    updateSpanText("currentBalance", depositNum);
    document.getElementById("depositAmount").value="";
})
//withdraw button event handler
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
   const withdrawNum = getInputNum("withdrawAmount");

   updateSpanText("currentWithdraw", withdrawNum);
   updateSpanText("currentBalance", -1 * withdrawNum);
   document.getElementById("withdrawAmount").value="";
})

function getInputNum(id) {
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}
function updateSpanText(id, addNum) {
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const total = addNum + currentNum;
    document.getElementById(id).innerText = total;
    
}