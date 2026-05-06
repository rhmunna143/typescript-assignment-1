// 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  let evenNumbers: number[] = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });

  return evenNumbers;
};

// 2
const reverseString = (word: string): string => {
  const reversedWord = word.split("").reverse().join("");

  return reversedWord;
};

// 3
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  let type;

  if (typeof input === "string") {
    type = "String";
  } else {
    type = "Number";
  }

  return type;
};

// 4
const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
  return object[key];
};

// 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface BookReadStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): BookReadStatus => {
  const readBook: BookReadStatus = { ...book, isRead: true };

  return readBook;
};

// 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// 7
const getIntersection = (
  firstNumbers: number[],
  secondNumbers: number[],
): number[] => {
  const numbers: number[] = [...firstNumbers, ...secondNumbers];

  const commonNumbers = firstNumbers.filter((num) =>
    secondNumbers.includes(num),
  );

  const uniqueNumbers: number[] = [...new Set(commonNumbers)];

  return uniqueNumbers;
};
