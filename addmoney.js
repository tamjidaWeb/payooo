document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pin = getInputValueById('pin-number')
    const account = document.getElementById('account-number').value;
    const updatedBalance = getInnerTextById('updated-balance');
    const banks= document.getElementById('select-bank').value;

    


    if(amount<0){
        alert('amount can not be negative');
        return;
    }
    else{

    }
    if(account.length === 3){
        if(pin === 1234){
            const sum = amount + updatedBalance;
            setInnerTextByIDandValue('updated-balance',sum);

            const container = document.getElementById('transaction-container');
            const div = document.createElement('div');
            div.classList.add('bg-red-400')
            div.innerHTML= `
            <h1 class="text-yellow-300">Added Money from ${banks}</h1>
            <h3> tk ${amount}</h3>
            <p>Account Number: ${account}</p>
            `
            container.appendChild(div);






        }
        else{
            console.log('pin thik nai');
        }
    }
    else{
        console.log('account number thik nai');
    }
    
})