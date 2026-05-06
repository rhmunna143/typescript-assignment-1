### The Generics in Typescript. Plus point or Useless?
---

In Typescript, the developer provides types without using dynamically typed syntax, as like as the javascript. The typescript variables and functions need to provide type implicitly or explicitly.

The term generics means providing types dynamically on a variable or function, which is almost the same as giving parameters to a function when declaring and providing arguments when calling the function.

The generics type declaration contains the type parameters for declaring types, and the value of the arguments provided during use of the type over any element of the code is written using TypeScript.

---

**Example:**
```ts
const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
  return object[key];
};```

---

After all, the generics help most developers to reuse types in their code, and make code DRY and clean. So, it is a plus point.
