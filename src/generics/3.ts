type FirstType = { name: string };

type SecondType = { age: number };

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const merged = merge<FirstType, SecondType>({ name: "Maks" }, { age: 27 });
console.log(merged);
