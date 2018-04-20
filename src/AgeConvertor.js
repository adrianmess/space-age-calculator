class AgeConvertor {
  constructor(age, inputDate) {
    this.age = age;
    this.inputDate = inputDate;
    this.mercury = .24;
    this.earthYearInSec = 31536000;

  }
  twoDates (){
    // let currentDate = new Date().toLocaleDateString();
    let currentDate = new Date("4/20/2018");
    let subDate = new Date("4/19/2018");
    let timeDiff = Math.abs(currentDate.getTime() - subDate.getTime());
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
