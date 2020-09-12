const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage

console.log(strings[2]);

// This will add an element to the last of the array
strings.push("e"); // O(1) we are just adding an element, not looping through any.
console.log(strings);

// This will remove the last element of the array
strings.pop(); // O(1)
console.log(strings);

// unshift -> too add the element to the first position
strings.unshift("x");
console.log(strings); // O(n)

// Splice(position,deleteElement,element) -> to add element somewhere in between
strings.splice(2, 0, "alien"); // O(n/2) => O(n)
console.log(strings);

console.log(Math.pow(2,25))