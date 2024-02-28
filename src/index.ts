export {};

// EXAMPLE 1 - Check if an Object implements an interface in TypeScript

interface Employee {
  id: number;
  name: string;
  salary: number;
}

function isAnEmployee(obj: any): obj is Employee {
  return 'id' in obj && 'name' in obj && 'salary' in obj;
}

const emp: Employee = {
  id: 1,
  name: 'Bobby Hadz',
  salary: 100,
};

console.log(isAnEmployee(emp)); // 👉️ true

console.log(isAnEmployee({ id: 1 })); // 👉️ false

if (isAnEmployee(emp)) {
  // 👉️ TypeScript knows that emp is type Employee
  console.log(emp.id); // 👉️ 1
  console.log(emp.name); // 👉️ "Bobby Hadz"
  console.log(emp.salary); // 👉️ 100
}

// ---------------------------------------------------

// // EXAMPLE 2 - Check if an Object implements an interface by using a `type` property

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
//   type: 'Employee'; // 👈️ add type property
// }

// function isAnEmployee(obj: any): obj is Employee {
//   // 👇️ check for type property
//   return 'type' in obj && obj.type === 'Employee';
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
//   type: 'Employee',
// };

// console.log(isAnEmployee(emp)); // 👉️ true
// console.log(isAnEmployee({ id: 1 })); // 👉️ false

// if (isAnEmployee(emp)) {
//   console.log(emp.id); // 👉️ 1
//   console.log(emp.name); // 👉️ "Bobby Hadz"
//   console.log(emp.salary); // 👉️ 100
//   console.log(emp.type); // 👉️ "Employee"
// }

// ---------------------------------------------------

// // EXAMPLE 3 - A user-defined type guard is a better solution

// interface Dog {
//   bark(): void;
// }

// interface Cat {
//   meow(): void;
// }

// const dog: Dog = {
//   bark() {
//     console.log('woof');
//   },
// };

// const cat: Cat = {
//   meow() {
//     console.log('meow');
//   },
// };

// function isDog(pet: Dog | Cat): pet is Dog {
//   return 'bark' in pet;
// }

// function getPet(): Dog | Cat {
//   return Math.random() > 0.5 ? dog : cat;
// }

// const pet = getPet();

// if (isDog(pet)) {
//   console.log(pet.bark());
// } else {
//   // 👉️ TypeScript knows pet is Cat
//   console.log(pet.meow());
// }
