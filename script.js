let screen = document.getElementById("result");
      let operands = ["+", "-", "*", "/"];

      function addToScreen(value) {
        if (value === "." && screen.value.includes(".")) {
          return;
        }
        if (
          operands.includes(value) &&
          operands.includes(screen.value[screen.value.length - 1])
        ) {
          screen.value = screen.value.substring(0, screen.value.length - 1);
        }
        screen.value += value;
      }

      function clearScreen() {
        screen.value = "";
      }

      function backspace() {
        screen.value = screen.value.substring(0, screen.value.length - 1);
      }

      function calculate() {
        try {
          screen.value = eval(screen.value);
        } catch {
          screen.value = "Error";
        }
      }

// add event listeners to detect key presses
document.addEventListener("keydown", function(event) {
  const key = event.key;
  
  if (/[0-9]/.test(key) || /[-+*/.]/.test(key)) {
    addToScreen(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Escape") {
    clearScreen();
  } else if (key === "Backspace") {
    backspace();
  }
});


