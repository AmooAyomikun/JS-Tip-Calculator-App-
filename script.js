const billInputEl = document.getElementById('billInput');
const tipBtnEls = document.querySelectorAll('.tip-btn');
const customTip = document.getElementById('custom-tip');
const peoplesNumber = document.getElementById('people');
const tipAmountEl = document.getElementById('tip-amount')
const totalAmountEl = document.getElementById('total-amount')
const totalAmountPerPerson = document.getElementById('total-amountPerPerson')
const calculateBtn = document.getElementById('calculate-btn')
const resetBtn = document.getElementById('reset-btn')

function calculateTip(){
    let billValue = Number(billInputEl.value);
    let activeBtn = document.querySelector('.tip-btn.active')
    let tipPercent;
    let peopleValue = Number(peoplesNumber.value);

    if(activeBtn){
        tipPercent = Number(activeBtn.value)
    }else{
        tipPercent = Number(customTip.value)
    }

    if(!billValue || billValue <= 0){
        alert('Enter a valid bill number');
        return;
    }

    if(!tipPercent || tipPercent<= 0){
        alert('Click or Enter the tip percentage you want');
        return;
    }

    if(!peopleValue || peopleValue <= 0){
        alert('Enter the number of people to calculate for')
        return;
    }

    let tipAmount = (billValue * tipPercent) / 100;
    let totalAmount = billValue + tipAmount;
    let tipPerPerson = totalAmount / peopleValue

    tipAmountEl.innerText = `₦ ${tipAmount.toFixed(2)}`;
    totalAmountEl.innerText = `₦ ${totalAmount.toFixed(2)}`;
    totalAmountPerPerson.innerText = `₦ ${tipPerPerson.toFixed(2)}`;
}

tipBtnEls.forEach(function(btn){
    btn.addEventListener('click', function(){
        tipBtnEls.forEach(function(b){
            b.classList.remove('active')
        })
        btn.classList.add('active');
        customTip.value = "";
    })

    
})

customTip.addEventListener('input', function(){
    tipBtnEls.forEach(function(b){
        b.classList.remove('active')
    })
})

function resetTip(){
    billInputEl.value = "";
    customTip.value = "";
    peoplesNumber.value = "";

    tipBtnEls.forEach(function(btn){
        btn.classList.remove('active')
    })

    tipAmountEl.textContent = "₦ 0 00";
    totalAmountEl.textContent = "₦ 0 00";
    totalAmountPerPerson.textContent = "₦ 0 00";
}

resetBtn.addEventListener('click', resetTip)
calculateBtn.addEventListener('click', calculateTip)

