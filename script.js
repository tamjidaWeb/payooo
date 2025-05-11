//step 1: id k dhorechi
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    console.log(accountNumber);
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumber);
    if(accountNumber.length === 5){
        console.log(typeof pinNumber)
        if(convertedPinNumber=== 1234){
            window.location.href='./main.html'
        }
        else{
            console.log('thik nai')
        }
    }
    else{
        alert('not valid')
    }
})