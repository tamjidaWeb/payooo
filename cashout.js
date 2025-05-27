document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const pin = document.getElementById('cashout-pin-number').value.trim();
    const convertedPin = parseInt(pin);

    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);

    const updatedBal = document.getElementById('updated-balance').innerText;
    const convertedUpdateBal = parseFloat(updatedBal);
    // console.log(updatedBal);

    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertedCashOutAmount = parseFloat(cashoutAmount);
    console.log(cashoutAmount);
    // console.log(typeof pin)

    
    if(convertedPin === 1234){
        const deduct = convertedUpdateBal - convertedCashOutAmount;
        // console.log(deduct)

        document.getElementById('updated-balance').innerText= deduct;
    }
    else{
        alert('wrong pin')
    }
})