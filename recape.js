document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const pin = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);

    const updateBalance = document.getElementById('updated-balance').innerText;
    const convertedUpdateBalance = parseFloat(updateBalance);
    

    if(convertedAmount){
        if(convertedPin === 1234){
            const sum = convertedAmount + convertedUpdateBalance;
            document.getElementById('updated-balance').innerText = sum;
        }
        else{
            alert('pin wrong');
        }
    }
else{
    alert('enter amount')
}})
