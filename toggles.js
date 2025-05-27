// document.getElementById('cash-out').style.display= 'none';

// document.getElementById('add-money-card').addEventListener('click',function(){
//     handleToggle('add-money','block');
//     handleToggle('cash-out','none')

// })

// document.getElementById('cash-out-card').addEventListener('click',function(){
//     handleToggle('cash-out','block');
//     handleToggle('add-money','none')
// })

// function handleToggle(id,status){
//     document.getElementById(id).style.display= status;
// }

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('transaction-history').style.display = 'none';

    document.getElementById('add-money-card').addEventListener('click', function () {
        handleToggle('add-money', 'block');
        handleToggle('cash-out', 'none');
        handleToggle('transaction-history', 'none');
    });

    document.getElementById('cash-out-card').addEventListener('click', function () {
        handleToggle('cash-out', 'block');
        handleToggle('add-money', 'none');
        handleToggle('transaction-history', 'none');
    });

  
});
