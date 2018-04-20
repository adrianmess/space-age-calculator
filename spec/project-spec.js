import { AgeConvertor } from "./../src/AgeConvertor.js";

describe('AgeConvertor', function() {

  beforeEach(function() {

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
