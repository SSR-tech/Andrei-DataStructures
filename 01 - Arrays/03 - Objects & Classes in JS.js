/*------Reference Type-------*/

[] === []; //false
[1] === [1]; // false

var object1 = {value:10};
var object2 = object1; // Connected with object1
var object3 = {value:10}; // Separate value

object1 === object2; //true
object1 === object3; //false

object1.value = 15
object2.value; //15
object3.value; //10




/*-------Context-------*/
const object4 = {
	a: function(){
		console.log(this);
	}
}

object4.a();

/*--------Instantiation--------*/

// Making copy of an object and reuse the code.

class Player {
	constructor(name,type){
		console.log('player',this);
		this.name = name;
		this.type = type;
	}

	introduce(){
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

// Wizard class will have all the properties which the player calss has got.
class Wizard extends Player {
	constructor(name,type){
		super(name,type); // super ensure that we have access to the constructor of the parent calss.
		console.log('wizard',this)
	}
	play(){
		console.log(`WEEEEE I'm a ${this.type}`);
	}
}


const wizard1 = new Wizard("Shelly","Healer");
const wizard2 = new Wizard("Shawn","Dark Magic");


wizard1.play()


