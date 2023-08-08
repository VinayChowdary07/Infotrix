document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button:not(#calculate):not(#clear)");
    const calculateButton = document.getElementById("calculate");
    const clearButton = document.getElementById("clear");
    const historyButton = document.getElementById("history-button");
    const historyList = document.getElementById("history-list");

    // Array to store calculation history
    const history = [];

    // Add event listeners to numeric and operator buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            display.value += button.textContent;
        });
    });

    // Add event listener to the calculate button
    calculateButton.addEventListener("click", () => {
        try {
            const expression = display.value;
            const result = eval(expression);
            display.value = result;
            
            // Add calculation to history
            history.unshift({ expression, result });
            if (history.length > 20) {
                history.pop();
            }
        } catch (error) {
            display.value = "Error";
        }
    });

    // Add event listener to the clear button
    clearButton.addEventListener("click", () => {
        display.value = "";
    });

    // Add event listener to the history button
    historyButton.addEventListener("click", () => {
        historyList.innerHTML = "";
        history.forEach(calculation => {
            const li = document.createElement("li");
            li.textContent = `${calculation.expression} = ${calculation.result}`;
            historyList.appendChild(li);
        });
    });
});