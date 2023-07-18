function checkMalware() {
    var inputField = document.getElementById("input");
    var resultField = document.getElementById("result");
  
    var userInput = inputField.value.trim();
  
    if (userInput === "") {
      resultField.innerText = "Please enter a file name or URL!";
      return;
    }
  
    // Perform malware prediction logic here
    // You can make an API call or use any prediction model
  
    // Example prediction result:
    var isMalware = Math.random() < 0.5;
  
    if (isMalware) {
      resultField.innerText = "This file or URL is potentially malware!";
    } else {
      resultField.innerText = "This file or URL is safe.";
    }
  }
  