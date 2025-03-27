function checkAnswer() {
    let boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        let options = box.querySelectorAll('input[type="radio"]');
        let resultText = box.querySelector("#result");
        let submitBtn = box.querySelector(".btn");
        let correct = false;
        let answered = false;

        options.forEach(option => {
            if (option.checked) {
                answered = true;
                if (option.getAttribute("data-correct") === "true") {
                    correct = true;
                }
            }
        });

        if (!answered) {
            resultText.innerText = "Please select an answer!";
            resultText.style.color = "blue";
            resultText.style.margin = "10px";
            resultText.style.fontSize = "17px";
            return;
        }

        if (correct) {
            resultText.innerText = "Correct Answer!";
            resultText.style.color = "green";
        } else {
            resultText.innerText = "Wrong Answer!";
            resultText.style.color = "red";
        }
        
        resultText.style.margin = "10px";
        resultText.style.fontSize = "17px";

        // Disable submit button after one attempt
        submitBtn.disabled = true;

        // Disable all options after submission
        options.forEach(option => {
            option.disabled = true;
        });
    });
}
