// Cash add function;

// step no 1 click the button;
document.getElementById('btn-add')
.addEventListener("click", function(event){
    event.preventDefault();
    

    // Step no 2 Call the input value;
    const addPin = getInputValueById('add-pin');
    const Amount = getInputValueById("inter-amount");
    
    // step no 3 condition check ;
    if (addPin === 1234){
        const getTheCall = getTextNumberById("display-amount");
        //step no 4 pleases the total number;
        const totalNumber = getTheCall + Amount;

        // step no 5 total number display;
        const totalNumberDisplay = document.getElementById("display-amount").innerText = totalNumber;

    }
    else {
        alert("Please Enter the valid pin");
    }
});
















