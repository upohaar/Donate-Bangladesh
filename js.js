// for history
document.getElementById("History-btn").addEventListener("click", function () {
    const history = document.getElementById("history");
    const donation = document.getElementById("donation");
    donation.classList.add("hidden");
    history.classList.remove("hidden");

    const donationBtn = document.getElementById("donation-btn");
    const historyBtn = document.getElementById("History-btn");
    historyBtn.classList.add("bg-lime-300");
    donationBtn.classList.remove("bg-lime-300")

})
// donation
document.getElementById("donation-btn").addEventListener("click", function (event) {
    const donation = document.getElementById("donation");
    const history = document.getElementById("history");
    history.classList.add("hidden");
    donation.classList.remove("hidden");
    const donationBtn = document.getElementById("donation-btn");
    const historyBtn = document.getElementById("History-btn");
    donationBtn.classList.add("bg-lime-300");
    historyBtn.classList.remove("bg-lime-300")

})


function donation(donationInput, donationFund){
    const noakhaliInput = document.getElementById(donationInput).value;
    const noakhaliFund = document.getElementById(donationFund).innerText;
    const accountBalance = document.getElementById("account-balance").innerText;
    const accountBalanceInt = parseInt(accountBalance);
    const noakhaliInputInt = parseInt(noakhaliInput)

    if (noakhaliInputInt <= accountBalanceInt) {
        if (noakhaliInputInt > 0) {
            const noakhaliTotal = parseInt(noakhaliFund) + parseInt(noakhaliInput);
            document.getElementById(donationFund).innerText = noakhaliTotal;
            const newBalance = accountBalanceInt - parseInt(noakhaliInput);
            document.getElementById("account-balance").innerText = newBalance;
            my_modal.showModal()
            const historyContainer = document.getElementById("history-container");
            const newDiv = document.createElement("div")
            newDiv.classList.add("border")
            newDiv.innerHTML = "<h2> 96500 Taka is Donated for famine-2024 at Feni, Bangladesh </h2> "
            historyContainer.appendChild(newDiv)


            console.log(newDiv);
            
        }
        else {
            alert("invalid number")
        }
    }
    else {
        alert("balance low");
    }
}

// noakhali handel 

function noakhaliDonation() {

    donation("noakhali-input","noakhali-fund")
    
    
}
function feniDonation(){
    donation("feni-input", "feni-fund")
}
function quotaDonation(){
    donation("quota-input", "quota-fund")
}


// function feniDonation(){
//     const feniInput = document.getElementById("feni-input").value;
//     const feniFund = document.getElementById("feni-fund").innerText;
//     const accountBalance = document.getElementById("account-balance").innerText;
//     const accountBalanceInt = parseInt(accountBalance);
//     const feniInputInt = parseInt(feniInput);

//     if (feniInputInt <= accountBalanceInt) {
//         if (feniInputInt > 0) {
//             const feniTotal = parseInt(feniFund) + parseInt(feniInput);
//             document.getElementById("feni-fund").innerText = feniTotal;
//             const newBalance = accountBalanceInt - parseInt(feniInput);
//             document.getElementById("account-balance").innerText = newBalance;
//             my_modal_1.showModal()
//         }
//         else {
//             alert("invalid number")
//         }
//     }
//     else {
//         alert("balance low");
//     }

// }

// function quotaDonation(){
//     const quotaInput = document.getElementById("quota-input").value;
//     const quotaFund = document.getElementById("quota-fund").innerText;
//     const accountBalance = document.getElementById("account-balance").innerText;
//     const accountBalanceInt = parseInt(accountBalance);
//     const quotaInputInt = parseInt(quotaInput);

//     if (quotaInputInt <= accountBalanceInt) {
//         if (quotaInputInt > 0) {
//             const quotaTotal = parseInt(quotaFund) + parseInt(quotaInput);
//             document.getElementById("quota-fund").innerText = quotaTotal;
//             const newBalance = accountBalanceInt - parseInt(quotaInput);
//             document.getElementById("account-balance").innerText = newBalance;
//             my_modal_1.showModal()
//         }
//         else {
//             alert("invalid number")
//         }
//     }
//     else {
//         alert("balance low");
//     }

// }
