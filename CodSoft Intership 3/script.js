document.addEventListener("DOMContentLoaded", function () {
    const outputScreen = document.querySelector(".OutputScreen");
    const presentInput = document.querySelector(".PresentInput");
    const buttons = document.querySelectorAll(".btn-n");
    let currentInput = "";
  
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const value = button.textContent;
  
        if (value === "=") {
          try {
            const result = evaluateExpression(currentInput);
            outputScreen.textContent = result;
            presentInput.textContent = currentInput;
            outputScreen.style.color = "black";
            currentInput = result.toString();
          } catch (error) {
            outputScreen.textContent = "Error";
            presentInput.textContent = currentInput;
          }
        } else if (value === "C") {
          currentInput = "";
          outputScreen.textContent = "0";
          presentInput.textContent = "";
        } else if (value === "⌫") { 
            currentInput = currentInput.slice(0, -1);
            outputScreen.textContent = currentInput;
          } else {
          currentInput += value;
          outputScreen.textContent = currentInput;
        }
      });
    });
  });
  
  function evaluateExpression(expression) {
    expression = expression.replace(/x/g, '*');
    return new Function('return ' + expression)();
  }
  