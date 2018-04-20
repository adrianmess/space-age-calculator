class AgeConvertor {
  constructor(age, inputDate) {
    this.age = age;
    this.inputDate = inputDate;
    this.mercury = .24;
    this.earthYearInSec = 31536000;

  }
  twoDates(){
    let currentDate = new Date();
    let userDate = new Date(this.inputDate);
    let timeDiff = Math.abs(currentDate.getTime() - userDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return(diffDays);
  }
  ageSec(){
    return (this.age * this.earthYearInSec);
  }
  mercuryCalc() {
    return (this.age / .24);
  }
}

export { AgeConvertor };
