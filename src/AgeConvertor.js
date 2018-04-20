class AgeConvertor {
  constructor(age) {
    this.age = age;
    this.mercury = .24;
    this.earthYearInSec = 31536000;
  }
  ageSec(){
    return (this.age * this.earthYearInSec);
  }
  mercuryCalc() {
    return (this.age / .24);
  }
}

export { AgeConvertor };
