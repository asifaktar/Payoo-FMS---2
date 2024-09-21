//  Cash out function;

// Step no 1 button select;
document.getElementById('btn-cash-out').addEventListener("click", function(event){
    event.preventDefault();
    
    // Step no 2 select the input value;
    const cashOutNumber = getInputValueById("add-amount");
    const cashOutPin = getInputValueById('out-pin');
    
    // Step no 3 condition check;
    if (cashOutPin === 1234){
        const displayOutput = getTextNumberById("display-amount");
        const outPut = displayOutput - cashOutNumber;
        
        // step no 4 output total amount;
        document.getElementById("display-amount").innerText = outPut;
    }
    else{
        alert("Please Inter the valid pin.");
    };
});