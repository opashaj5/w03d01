class Hamster {
    constructor(){
        this.owner = '';
        this.name = '';
        this.price = 15;
    }
    wheelRun(){
        console.log('Squeak, Squeak');
    }
    eatFood(){
        console.log('nibble, nibble');
    }
    getPrice(){
        return this.price;
    }
}
class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log("hello" + this.name);
    }
    eat(num){
        this.weight += num;
        this.mood += num;
    }
    exercise(){
        this.weight -= 1;
    }
    ageUp(num){
        this.age += num;
        this.height += num/2;
        this.weight += num * 2
        this.mood -= num
        this.bankAccount += 10 * num
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}
const timmy = new Person('Timmy', 5, 'bummed');
timmy.eat(5)
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.ageUp(9)
console.log(timmy)
const gus = new Hamster()
gus.name = 'Gus';
gus.owner = 'Timmy';
console.log(gus)
timmy.buyHamster(gus)
timmy.ageUp(15)
timmy.eat(2)
timmy.exercise()
timmy.exercise()
console.log(timmy)
class Dinner {
  constructor(appetizer, entree, dessert){
  this.appetizer = appetizer;
  this.entree = entree;
  this.dessert = dessert;
  }
}
class Chef {
  constructor(meal){
    this.meal = meal;
    this.dinner = [];
  }
  makeDinner(appetizer, entree, dessert){
    const newDinner = new Dinner(appetizer, entree, dessert);
    this.dinner.push(newDinner)
  }
}
const meal1 = new Chef('Meals made');
meal1.makeDinner('Ceaser Salad', 'Filet Mignon', 'Chessecake');
meal1.makeDinner('Miso Soup', 'Chicken Parmigiana', 'Lava Cake');
meal1.makeDinner('Arugula Salad', 'Jumbo Hamburger', 'Flam');
console.log(meal1);