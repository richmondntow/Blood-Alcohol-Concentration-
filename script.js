// Function to calculate Blood Alcohol Concentration (BAC)
function calculateBAC() {
    const alcoholConsumed = parseFloat(document.getElementById('alcoholInput').value);
    
    // Check if the input is valid
    if (isNaN(alcoholConsumed) || alcoholConsumed < 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    // 0.05 liters equals 1% intoxication level
    const intoxicationLevel = (alcoholConsumed / 0.05) * 1;
    
    // Display the result on the webpage
    document.getElementById('result').innerText = `Your intoxication level is ${intoxicationLevel.toFixed(2)}%.`;
}
