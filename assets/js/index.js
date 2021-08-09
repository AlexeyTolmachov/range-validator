"use strict";

class RangeValidator {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }

  get from() {
    return this._from;
  }
  set from(newFrom) {
    if (newFrom > this.to) {
      throw RangeError("number From must less than To");
    }

    if (isNaN(newFrom) || typeof newFrom !== "number") {
      throw new TypeError("From mast be a number");
    }

    if (newFrom < 0) {
      throw new RangeError("From must be positive number");
    }
    this._from = newFrom;
  }

  get to() {
    return this._to;
  }
  set to(newTo) {
    if (this.to > newTo) {
      throw RangeError("number To must be more From");
    }
    if (isNaN(newTo) || typeof newTo !== "number") {
      throw new TypeError("To mast be a number");
    }
    if (newTo < 0) {
      throw new RangeError("To must be positive number");
    }
    this._to = newTo;
  }

  get range() {
    return [this.from, this.to];
  }

  validate(value) {
    if (isNaN(value) || typeof value !== "number") {
      throw new TypeError("the entered number mast be a number");
    }

    if (value < 0) {
      throw new RangeError("the entered number must be positive number");
    }
    if (this.from < value && value < this.to) {
      return value;
    }

    throw RangeError("the entered number is not in the range");
  }
}

// const numb = new RangeValidator(30, 50);
