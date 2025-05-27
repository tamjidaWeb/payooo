document.getElementById('transaction-history-card').addEventListener('click',function(event){
    event.preventDefault();
    handleToggle('add-money','none');
    handleToggle('cash-out','none');
    handleToggle('transaction-history','block');

})