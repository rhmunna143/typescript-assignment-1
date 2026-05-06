"use strict";
// 1
const filterEvenNumbers = (numbers) => {
    let evenNumbers = [];
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    });
    //   console.log(evenNumbers);
    return evenNumbers;
};
// filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// 2
const reverseString = (word) => {
    const reversedWord = word.split("").reverse().join("");
    //   console.log(reversedWord);
    return reversedWord;
};
const checkType = (input) => {
    let type;
    if (typeof input === "string") {
        type = "String";
    }
    else {
        type = "Number";
    }
    //   console.log(type);
    return type;
};
// checkType("Hello");
// checkType(42);
// 4
const getProperty = (object, key) => {
    //   console.log(object[key]);
    return object[key];
};
const toggleReadStatus = (book) => {
    const readBook = { ...book, isRead: true };
    console.log(readBook);
    return readBook;
};
const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};
toggleReadStatus(myBook);
