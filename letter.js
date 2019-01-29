var Letter = function(char) {
  this.char = char;
  this.guessed = false;
  this.charGuess = function() {
    if (this.guessed === true) {
      return this.char;
    } else {
      return "_";
    }
  };
  this.userGuess = function(userletter) {
    if (userletter === this.char) {
      this.guessed = true;
      this.charGuess();
    }
  };
};

module.exports = Letter;
