var Letter = require("./Letter.js");
var stringArr = [];

var Word = function(word) {
  this.wordBreaker = function(word) {
    var completeLetterArray = [];
    var char = word.split("");
    for (var i = 0; i < char.length; i++) {
      var newLetter = new Letter(char[i]);
      completeLetterArray.push(newLetter);
    }
    return completeLetterArray;
  };
  this.letterArr = this.wordBreaker(word);
  this.stringBuilder = function() {
    for (var i = 0; i < this.letterArr.length; i++) {
      stringArr.push(this.letterArr[i].charGuess());
    }
    console.log(stringArr.join(" "));
  };
  this.guessChecker = function(userletter) {
    console.log(this.letterArr);
    for (var i = 0; i < this.letterArr.length; i++) {
      stringArr.push(this.letterArr[i].userGuess(userletter));
      console.log(this.letterArr);
      console.log(stringArr);
      // if(stringArr[i].Letter.guessed === true){

      // }
      console.log(stringArr[i].Letter.char);
    }
  };
};

var testword = new Word("apple");
testword.stringBuilder();
testword.guessChecker("a");
