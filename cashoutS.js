document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const account = document.getElementById('account-number').value;
    const amount = getInputValueById('cashout-amount');
    const pin = getInputValueById('cashout-pin-number');
    const updatedBalance = getInnerTextById('updated-balance');
    const banks= document.getElementById('select-bank-cashout').value;
    console.log(banks)


    if(amount>updatedBalance){
        alert('Insufficient balance');
        return;
    }

    if(account.length === 3){
        if(pin === 1234){
            const sum = updatedBalance - amount;
            setInnerTextByIDandValue('updated-balance',sum);

            const container = document.getElementById('transaction-container');
            const p = document.createElement('p');
            p.innerText = `Cash out ${amount} tk from ${account} account in this ${banks}`;
            container.appendChild(p);
        }
        else{
            console.log('pin thik nai');
        }
    }
    else{
        console.log('account number thik nai');
    }
})