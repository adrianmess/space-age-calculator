import { AgeConvertor } from "./../src/AgeConvertor.js";

describe('AgeConvertor', function() {

  beforeEach(function() {

  });
  it('Determine the difference of two dates in seconds ', function() {
    //date format = 4/20/2018
    let inputDate = "4/19/2018";
    let newDate = new AgeConvertor();

    newDate.twoDates();
    console.log(newDate.twoDates());
    // expect(date.twoDates()).toEqual(verifyDate);
  });
  it('Return age in seconds ', function() {
    let age = 27
    let newAge = new AgeConvertor(age);

    newAge.ageSec()
    console.log(newAge.ageSec())
    expect(newAge.ageSec()).toEqual(851472000);
  });
  it('Return age in Mercury years ', function() {
    let age = 27
    let newAge = new AgeConvertor(age);

    newAge.mercuryCalc()
    console.log(newAge.mercuryCalc())
    expect(newAge.mercuryCalc()).toEqual(112.5);
  });
});
