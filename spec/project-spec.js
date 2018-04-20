import { AgeConvertor } from "./../src/AgeConvertor.js";

describe('AgeConvertor', function() {

  beforeEach(function() {

  });
  it('Determine the difference of two dates in seconds ', function() {
    //date format = 4/20/2018
    //Todays Date 4/20/2018 ---- ADJUST AS NEEDED FOR TESTIG-----
    let age = 1;
    let userInput = "4/19/2018";
    let inputDate = new Date(userInput);
    let newDate = new AgeConvertor(age, inputDate);

    console.log(newDate.twoDates());
    expect(newDate.twoDates()).toEqual(86400);
  });

  it('Return age in seconds ', function() {
    let age = 27;
    let newAge = new AgeConvertor(age);

    newAge.ageSec();
    console.log(newAge.ageSec());
    expect(newAge.ageSec()).toEqual(851472000);
  });
  it('Return age in Mercury years ', function() {
    let age = 27;
    let newAge = new AgeConvertor(age);

    newAge.mercuryCalc();
    console.log(newAge.mercuryCalc());
    expect(newAge.mercuryCalc()).toEqual(112);
  });
  it('Return age in Venus years ', function() {
    let age = 27;
    let newAge = new AgeConvertor(age);

    newAge.venusCalc();
    console.log(newAge.venusCalc());
    expect(newAge.venusCalc()).toEqual(43);
  });
  it('Return age in Mars years ', function() {
    let age = 27;
    let newAge = new AgeConvertor(age);

    newAge.marsCalc();
    console.log(newAge.marsCalc());
    expect(newAge.marsCalc()).toEqual(14);
  });
  it('Return age in Jupiter years ', function() {
    let age = 27;
    let newAge = new AgeConvertor(age);

    newAge.jupiterCalc();
    console.log(newAge.jupiterCalc());
    expect(newAge.jupiterCalc()).toEqual(2);
  });
  it('Return life expectancy with statement if current age is less than 68', function() {
    let age = 65;
    let newAge = new AgeConvertor(age);

    newAge.lifeLeftCalc();
    console.log(newAge.lifeLeftCalc());
    expect(newAge.lifeLeftCalc()).toEqual("You have 3 years left on this planet");
  });
  it('Return life expectancy with statement if current age is greater than 68', function() {
    let age = 70;
    let newAge = new AgeConvertor(age);

    newAge.lifeLeftCalc();
    console.log(newAge.lifeLeftCalc());
    expect(newAge.lifeLeftCalc()).toEqual("You have lived 2 years past your life expency on this planet");
  });
});
