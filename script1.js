//Establish a canva in the OS.

  createWindow_ImportingFunctionAPI();

//Modifying OS Front-End.

  var element = document.getElementById("newWindowImported1_content"); 
  element.innerHTML = "<input id='_calculatorform_'><button onclick=''>Click!</button><br><input id='inputText_processed_result' value=''>";
  
//Functions.

function executeSolving() {
  var inputText = document.getElementById("_calculatorform_").value;
  var textArea1 = document.getElementById("_calculatorform_");
  var inputText_processed = parseInt(inputText_processed);
  inputTextArea1.value = inputText_processed;
  var result = document.getElementById("_calculatorform_").value;
  
  var resultInput = document.getElementById("inputText_processed_result").value;
  resultInput += result;
}
setInterval(executeSolving, 100);
