// Number 객체를 가르키는거
// number 파라미터르 가르키는거

let age: number = 24;

age = 12;

let userName: string;

userName = "max";

let isInstructor: boolean;

isInstructor = true;

//배열 하는법

let hobbies: string[];

hobbies = ["fuck you", "hello"];

let numbers: number[];

numbers = [1, 4, 5, 6, 3, 2];

//객체 하는법

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

//객체와 배열을 함께하기

let people: Person[];

// type 추론 type inference

let course = "React - The Complete Guide";

//course = 1234;
// 위에 타입을 지정하지않아도 나중에 사용될때 타입을 추론 해주는게 type inference 이다.

//유니온 타입 union type

let course2: string | number | number[] | boolean = "react hell";

course2 = 213124;
course2 = [2, 6545, 123, 43];

//여러게의 타입을 지정가능

//function and types

function add(a: number, b: number): number {
  //타입지정
  return a + b;
}

function add2(a: number, b: number): number | string {
  // 유니온 타입
  return a + b;
}

function add3(a: number, b: number) {
  // 타입 추론
  return a + b;
}

function printOut(value: any): void {
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3];

updateArray[0].split("");

const stringArray = insertAtBeginning(['a','b','c'], 'k');

stringArray[0].split('');