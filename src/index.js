module.exports = function toReadable(number) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];



    if (number == 0) return "zero";

    if (number >= 1000) {
        return convert_hundreds(Math.floor(number / 1000)).trim() + " thousand " + convert_hundreds(number % 1000).trim();
    } else {
        return convert_hundreds(number).trim();
    }

    function convert_hundreds(number) {
        if (number > 99) {
            return ones[Math.floor(number / 100)].trim() + " hundred " + convert_tens(number % 100).trim();
        } else {
            return convert_tens(number).trim();
        }
    }

    function convert_tens(number) {
        if (number < 10) return ones[number].trim();
        else if (number >= 10 && number < 20) return teens[number - 10].trim();
        else {
            return tens[Math.floor(number / 10)].trim() + " " + ones[number % 10].trim();
        }
    }


}
