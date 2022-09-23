// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(name) {
    this.name = name;
    this.color = "Silver";
  }
  say(message){
    console.log("*~*"+ message + "*~*")
  }
}

var uni1 = new Unicorn("Garald")
console.log(uni1)
uni1.say("Hi! I'm a super cool unicorn")


// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// // it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
  }
  drink(){
    this.thirsty = false
  }
}

var vamp1 = new Vampire ("Mark",)
console.log(vamp1)

var vamp2 = new Vampire ("Dave","dog");
console.log(vamp2)
vamp2.drink();
console.log(vamp2)



//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
class Dragon {
  constructor(name,rider,color) {
    this.name = name;
    this.color = color;
    this.rider = rider;
    this.isHungry = true;
    this.hungryCounter = 0
  }

  eat(){
    this.hungryCounter += 1
    if (this.hungryCounter >= 4){
      this.isHungry = false
    }


    console.log(this.hungryCounter)
  }
}
var dragon1 = new Dragon("Smaug", "John", "Gold")
console.log(dragon1)
dragon1.eat();
dragon1.eat();
dragon1.eat();
dragon1.eat();
console.log(dragon1)



//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
class Hobbit {
  constructor(name,dispo,hasRing) {
    this.name = name;
    this.dispo = dispo;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false;
  }
  celebrateBirthday(){
    this.age += 1
  }
  makeAdult(){
    if (this.age >= 33){
      this.isAdult = "adult"
    }
  }
  makeOld(){
    if (this.age >= 101){
      this.isOld = "Is old"
    }
  }
  checkForRing(){
    if (this.name === "Frodo"){
      this.hasRing = true
    }
  }
}

var newHobbit = new Hobbit("Frodo", "Marathon Runner")
console.log(newHobbit)
newHobbit.checkForRing();
console.log(newHobbit);
newHobbit.celebrateBirthday();
console.log(newHobbit);
