function getInputValueById(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    // inputField.value='';
    return inputFieldValue;
}
function getValueByInnterText (TextId){
    const textfield = document.getElementById(TextId);
    const textfieldValueString = textfield.innerText;
    const textfieldValue = parseFloat(textfieldValueString);
    return textfieldValue;
}


document.getElementById('calculate-btn').addEventListener('click', function(){
    const totalIncome = getInputValueById('total-income');


    // expense calculate 
    const foodCost = getInputValueById('food-cost');
    const rentCost = getInputValueById('rent-cost');
    const clothCost = getInputValueById('cloth-cost');

    const totalExpense = foodCost+rentCost+clothCost;
    if(totalExpense>totalIncome){
        alert('Your expense is more than you total income');
        return;
        
    }
    const totalExpenseValue = document.getElementById('total-expense');
    totalExpenseValue.innerText = totalExpense;

    
    const totalBalanceField = totalIncome - totalExpense;
    const balanceField = document.getElementById('balance-amount');
    balanceField.innerText=totalBalanceField;
})

document.getElementById('saving-amount').addEventListener('click', function(){
    const savingAmountValue = getInputValueById('saving-percentage-filed');
    const totalIncomeValue = getInputValueById('total-income');
    //(Number × 20) ÷ 100
    const percentagesCalculate = (totalIncomeValue * savingAmountValue) / 100;
    

    const balanceFiledValue = document.getElementById('balance-amount');
    const balanceFiledValueString = balanceFiledValue.innerText;
    const balanceFiledValueInt = parseFloat(balanceFiledValueString);
    
    const remainingBalance = balanceFiledValueInt - percentagesCalculate;

    const savingAmountOutputFiled = document.getElementById('saving-amount-output');
    savingAmountOutputFiled.innerText = percentagesCalculate;

    const remainingbalanceField = document.getElementById('remianing-balance');
    remainingbalanceField.innerText = remainingBalance;

})

document.getElementById('reset-btn').addEventListener('click', function(){
    location.reload();
})


