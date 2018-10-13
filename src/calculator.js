//calculator
function add (numbers) {

    checkForInputError(numbers);

    if(numbers == "") {
        return 0;
    }

    var delimiters = ",|\n";
    if(numbers.includes("//")) {
        delimiters = setDelimiters(numbers, delimiters);
        numbers = numbers.slice(numbers.indexOf("\n") + 1)
    }
    var regex = new RegExp(delimiters,"i");

    if(numbers.includes(",") || numbers.includes("\n")) {
        var numberArray = numbers.split(regex);
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

        var delimiters = ",|\n";
        if(numbers.includes("//")) {
            delimiters = setDelimiters(numbers, delimiters);
            numbers = numbers.slice(numbers.indexOf("\n") + 1)
        }
        var regex = new RegExp(delimiters,"i");

        if(numbers.includes(",") || numbers.includes("\n")) {
            var numberArray = numbers.split(regex);

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

function setDelimiters (numbers,delimiters) {
    var endpoint = numbers.indexOf("\n", 2);
    var delimiter = numbers.substring(2, endpoint);
    delimiters += "|" + delimiter;
    return delimiters
}

module.exports = add;