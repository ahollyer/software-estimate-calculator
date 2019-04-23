/* Displays the solution
when the user presses the "Calculate" button. */
var solutionElement = document.getElementById('weightedEstimate');
/* Displays an error message
if any form fields are blank when the user presses the "Calculate" button. */
var nullValuesError = document.getElementById('nullValuesError');
/* Displays an error message
if any form fields are <=0 when the user presses the "Calculate" button. */
var nonPositiveError = document.getElementById('nonPositiveError');

/* Runs when the user presses the "Calculate" button */
function calculateWeightedEstimate() {
  // Grab string values from form fields & convert to float
  var low = parseFloat(document.getElementById("low").value);
  var mid = parseFloat(document.getElementById("mid").value);
  var high = parseFloat(document.getElementById("high").value);
  // Ensure form is valid
  var errors = checkForErrors(low, mid, high);
  // If valid, calculate the weighted duration & display in solution element
  if(!errors) {
    var weighted = ((low + (mid * 4) + high)/6).toFixed(2);
    solutionElement.innerText = "Weighted Estimate: " + weighted;
  }
}

function checkForErrors(low, mid, high) {
  /* Checks if any of the form input values are falsy:
  null, undefined, NaN */
  var nullErrors = (!low && low !== 0) ||
                   (!mid && mid !== 0) ||
                   (!high && high !== 0);
  /* Checks if any values are <= 0 (values must be positive) */
  var nonPositiveErrors = (low <= 0 || mid <= 0 || high <= 0);
  if(nullErrors && nonPositiveErrors) {
    showNullValuesError();
    showNonPositiveError();
    return true;
  }
  if(nullErrors) {
    hideNonPositiveError(); // clear error message if needed
    showNullValuesError();
    return true;
  }
  if(nonPositiveErrors) {
    hideNullValuesError(); // clear error message if needed
    showNonPositiveError();
    return true;
  }
  /* If no errors found, clear all error messages & return false */
  hideNullValuesError();
  hideNonPositiveError();
  return false;
}

function showNullValuesError() {
  solutionElement.innerText = ''; // clear solution message if needed
  nullValuesError.style.display = 'block';
}

function hideNullValuesError() {
  nullValuesError.style.display = 'none';
}

function showNonPositiveError() {
  solutionElement.innerText = ''; // clear solution message if needed
  nonPositiveError.style.display = 'block';
}

function hideNonPositiveError() {
  nonPositiveError.style.display = 'none';
}
