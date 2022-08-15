class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.value = 0;
  }

  setRange(min, max) {
    this.max = max;
    this.min = min;
  }

  guess() {
    this.value = Math.floor(this.min + (this.max - this.min + 1) / 2);
    return this.value;
  }

  lower() {
    if (this.value < this.max) {
      this.max = this.value;
    }
  }

  greater() {
    if (this.value > this.min) {
      this.min = this.value;
    }
  }
}

module.exports = GuessingGame;
