/****************** YOUR NAME: Saul


The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.


You are encouraged to use the provided naming convention for ease of review.


*/


/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */


// INSERT YOUR CODE HERE


(function () {
    if (window._rajRobotRentalsInit) return;
    window._rajRobotRentalsInit = true;

    let modelName = "XYZ";
    let duration = 0;

    const PRICES = {
        XYZ: 100,
        CPRG: 213
    };

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/


// INSERT YOUR CODE HERE

    function recalculate() {
        const costLabel = document.getElementById("calculated-cost");
        const durationLabel = document.getElementById("duration-text");
        const modelLabel = document.getElementById("model-text");

        if (!costLabel || !durationLabel || !modelLabel) return;

        // Keep the displayed model/duration in sync with variables
        modelLabel.innerHTML = `Model ${modelName}`;
        durationLabel.innerHTML = String(duration);

        const unitPrice = PRICES[modelName] || 0;
        const total = unitPrice * Number(duration || 0);
        costLabel.innerHTML = total.toFixed(2);
    }

/****************** model button logic ******************/


/*
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);


// INSERT YOUR CODE HERE

    function setupModelButton() {
        const modelButton = document.getElementById("model-button");
        if (!modelButton) return;

        function changeModel() {
            modelName = (modelName === "XYZ") ? "CPRG" : "XYZ";
            recalculate();
        }

        modelButton.addEventListener("click", changeModel);
    }

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/


// INSERT YOUR CODE HERE

    function setupDurationButton() {
        const durationButton = document.getElementById("duration-button");
        if (!durationButton) return;

        function changeDuration() {
            const current = duration || 0;
            const reply = prompt("Enter the number of days to book (non-negative integer):", String(current));
            if (reply === null) return;

            const parsed = Math.floor(Number(reply));
            if (!isFinite(parsed) || parsed < 0 || String(parsed) !== String(Number(reply).toFixed(0))) {
                alert("Please enter a valid non-negative integer value for days.");
                return;
            }

            duration = parsed;
            recalculate();
        }

        durationButton.addEventListener("click", changeDuration);
    }

    function init() {
        setupModelButton();
        setupDurationButton();
        recalculate();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();