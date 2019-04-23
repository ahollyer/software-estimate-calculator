/*******************************************************************************
                          Enable Bootstrap Tooltips
*******************************************************************************/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*******************************************************************************
                                Calculator
*******************************************************************************/
var solutionElement = document.getElementById('weightedEstimate');

function calculateWeightedEstimate() {
  var low = parseFloat(document.getElementById("low").value);
  var mid = parseFloat(document.getElementById("mid").value);
  var high = parseFloat(document.getElementById("high").value);
  if(!low || !mid || !high) {
    solutionElement.innerText = '';
    showErrorMessage();
    return;
  }
  hideErrorMessage();
  var weighted = ((low + (mid * 4) + high)/6).toFixed(2);
  solutionElement.innerText = "Weighted Estimate: " + weighted;
}

/*******************************************************************************
                                Error Message
*******************************************************************************/
var errorMessage = document.getElementById('errorMessage');

function showErrorMessage() {
  errorMessage.style.display = 'block';
}

function hideErrorMessage() {
  errorMessage.style.display = 'none';
}
