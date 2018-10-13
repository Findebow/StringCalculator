//calculator
function add (numbers) {
    if(numbers == "") {
        return 0;
    }
    else if(numbers.includes(",")) {
        var numberArray = numbers.split(",");
        return sum(numberArray);
    }
    else {
        return parseInt(numbers);
    }
}

function sum (numberArray) {
    var total = 0;
    for(var i in numberArray) {
        total += parseInt(numberArray[i]);
    }
    return total;
}

module.exports = add;