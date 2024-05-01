function merge<T, U>(objA: T, objB: U): T & U {
return Object.assign({}, objA, objB);
}

const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", hobbies: ["reading", "music"] };

const mergedObj = merge(obj1, obj2);

console.log(mergedObj.name); 
console.log(mergedObj.city); 
console.log(mergedObj.hobbies);
