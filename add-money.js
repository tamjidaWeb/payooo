document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount)

    const pin = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin);

    const number = document.getElementById('account-number').value;
    const convertedNumber = parseInt(number);
    const mainBalance = document.getElementById('updated-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(convertedPin===1234){
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById('updated-balance').innerText = sum;
    }
    else{
        alert('pin sothik na')
    }
})