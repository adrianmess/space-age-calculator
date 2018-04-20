class AgeConvertor {
  constructor(age, inputDate) {
    this.age = age;
    this.inputDate = inputDate;
    this.lifeExpect = 68;
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
    this.earthYearInSec = 31536000;

  }
  twoDates(){
    let currentDate = new Date();
    let userDate = new Date(this.inputDate);
    let timeDiff = Math.abs(currentDate.getDate() - userDate.getDate());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var dayToSec = diffDays * 86400;
    return(dayToSec);
  }
  ageSec(){
    return (this.age * this.earthYearInSec);
  }
  mercuryCalc() {
    return parseInt((this.age / this.mercury).toFixed(1));
  }
  venusCalc() {
    return parseInt((this.age / this.venus).toFixed(1));
  }
  marsCalc() {
    return parseInt((this.age / this.mars).toFixed(1));
  }
  jupiterCalc() {
    return parseInt((this.age / this.jupiter).toFixed(1));
  }
  lifeLeftCalc() {
    let lifeLeft = (Math.abs(this.lifeExpect - this.age));
    if (this.age < this.lifeExpect) {
      return ("You have " + lifeLeft + " years left on this planet");
    } else {
      return ("You have lived " + lifeLeft + " years past your life expency on this planet");
    }
  }
}

export { AgeConvertor };
