class AgeConvertor {
  constructor(age, inputDate) {
    this.age = age;
    this.inputDate = inputDate;
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
    return (this.age / this.mercury).toFixed(1);
  }
  venusCalc() {
    return (this.age / this.venus).toFixed(1);
  }
}

export { AgeConvertor };
