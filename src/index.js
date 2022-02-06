module.exports = function toReadable (number) {
    let units = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifthteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
      ];
      let dozens = [
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
      ];
      
      let numberSting, numberDozens, numberUnits, numberHundreds, numberThuosands;
      
      if (number < 20) {
        numberSting = units[number - 1];
      } else if (number < 100) {
        numberDozens = Math.floor(number / 10);
        numberUnits = number % 10;
        if (numberUnits !== 0) {
          numberSting = dozens[numberDozens - 2] + " " + units[numberUnits - 1];
        } else {
          numberSting = dozens[numberDozens - 2];
        }
      } else if (number < 1000) {
        numberHundreds = Math.floor(number / 100);
        numberDozens = Math.floor(number / 10) % 10;
        numberUnits = number % 10;
        if (numberUnits !== 0 && numberDozens !== 0) {
          numberSting = units[numberHundreds - 1] + " hundred " + dozens[numberDozens - 2] + " " + units[numberUnits - 1];
        } else if (numberUnits == 0 && numberDozens !== 0) {
          numberSting = units[numberHundreds - 1] + " hundred " + dozens[numberDozens - 2];
        } else if (numberUnits !== 0 && numberDozens == 0) {
          numberSting = units[numberHundreds - 1] + " hundred " + " " + units[numberUnits - 1];
        } else {
          numberSting = units[numberHundreds - 1] + " hundred ";
        }
      } return numberSting;

}
