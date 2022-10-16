function compute() {
    // Get values from input fields
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Validate principal field
    if (parseInt(principal) <= 0 || principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    // Compute simple interest amount
    var amount = principal * years * rate / 100;

    // Calculate the future year
    var year = new Date().getFullYear() + parseInt(years);

    // Get the references for the label elements that are going to display the results
    document.getElementById("depositmessage").innerHTML = "" + principal;
    document.getElementById("interestmessage").innerHTML = "" + rate;
    document.getElementById("amountmessage").innerHTML = "" + amount;
    document.getElementById("yearmessage").innerHTML = "" + year;

    // Show message
    document.getElementById("result").style.display = "block";
}

function updateRate() {
    // Read the value of the range slider and display it
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
