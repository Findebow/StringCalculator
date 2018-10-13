//calculator
function add (numbers) {

    checkForInputError(numbers);

    if(numbers == "") {
        return 0;
    }

    if(numbers.includes(",") || numbers.includes("\n")) {
        var numberArray = numbers.split(/,|\n/);
        return sum(numberArray);
    }
    else {
        return parseInt(numbers);
    }
}

function sum (numberArray) {
    var total = 0;
    for(var i in numberArray) {
        if(numberArray[i] < 1000) {
            total += parseInt(numberArray[i]);
        }   
    }
    return total;
}

function checkForInputError (numbers) {

    if(numbers.includes("-")) {
        var message = "Negatives not allowed ";

        if(numbers.includes(",") || numbers.includes("\n")) {
            var numberArray = numbers.split(/,|\n/);

            for(var i in numberArray) {
                if(numberArray[i] < 0) {
                    message += numberArray[i] + ",";
                }
            }
            message = message.replace(/,\s*$/, "");
        }
        else {
            message += + numbers;
        }
        throw new Error(message);
    }
}

module.exports = add;