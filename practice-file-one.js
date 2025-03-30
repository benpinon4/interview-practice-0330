const string1 = "hello this is my favorite world";

function flipHelloWorld(string) {
  const splitString = string.split(" ");
  console.log(splitString.length);
  const helloWorldFlipped = splitString
    .splice(splitString.length - 1, 1)
    .toString();
  const flippedHelloWorldArray =
    helloWorldFlipped + " " + splitString[0].toString();

  return flippedHelloWorldArray;
}

console.log(flipHelloWorld(string1));

class PersonObject {
  firstName;
  lastName;

  constructor() {
    this.firstName = "bob";
    this.lastName = "dillon";
  }

  changeFirstName(firstNameString) {
    this.firstName = firstNameString;
  }
}

let person = new PersonObject();

console.log(person);

person.changeFirstName("danny");

console.log(person);



