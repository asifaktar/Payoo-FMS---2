// step no 1 taken the value of input;
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const stringToNumber = parseFloat(inputValue);
    return stringToNumber;
};


// Step no 2 taken the innerText of display number;
function getTextNumberById(id){
    const displayAmount = document.getElementById(id).innerText;
    const strToNumber = parseFloat(displayAmount);

    return strToNumber;
};



// step no 1 feature section;
function getFeatureSection(id){
    // hide all section;
    document.getElementById("add-hidden").classList.add("hidden");
    document.getElementById("cash-hidden").classList.add("hidden");
    document.getElementById("history-hidden").classList.add("hidden");
    //show the section ;
    document.getElementById(id).classList.remove("hidden");
}






