class AgeConvertor {
  constructor(age) {
    this.age = age;
    this.mercury = .24;
  }

  mercuryCalc() {
    return (this.age / .24);
  }
}

export { AgeConvertor };
