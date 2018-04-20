class AgeConvertor {
  constructor(age, inputDate) {
    this.age = age;
    this.inputDate = inputDate;
    this.mercury = .24;
    this.earthYearInSec = 31536000;

  }
  twoDates (){
    let date = new Date().toLocaleDateString(); 
    return(date);
  }
  ageSec(){
    return (this.age * this.earthYearInSec);
  }
  mercuryCalc() {
    return (this.age / .24);
  }
}

export { AgeConvertor };
