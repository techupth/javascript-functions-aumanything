// Exercise #4 : Grouping the Function with Object

// ให้เขียนโปรแกรมตามโจทย์ที่กำหนดดังนี้
// ให้ Declare ตัว Object ที่ชื่อ calculator เพื่อรวบรวมฟังก์ชันที่เขียนจาก Exercise #3 ให้อยู่ใน Object โดยที่

// Object calculator จะมี Key เป็น add และมีค่าเป็นฟังก์ชัน add
// Object calculator จะมี Key เป็น subtract และมีค่าเป็นฟังก์ชัน subtract
// Object calculator จะมี Key เป็น multiply และมีค่าเป็นฟังก์ชัน multiply
// Object calculator จะมี Key เป็น divide และมีค่าเป็นฟังก์ชัน divide
let add = (a,b) => {
    return a + b;
}; 
let subtract = (a,b) => {
    return a - b;
}; 
let multiply = (a,b) => {
    return a * b;
}; 
let divide = (a,b) => {
    return a / b;
}; 
let calculator = {
    add: add(a,b),
    subtract: subtract(a,b),
    multiply: multiply(a,b),
    divide: devide(a,b),
};

// ให้ Declare ตัว Variable ที่มีชื่อว่า addResult
let add

// ให้ Assign ค่าของ addResult โดยที่มี Value เป็นผลลัพธ์จากการ Execute ของฟังก์ชัน add ที่อยู่ใน Object calculator
// ต่อไปให้กำหนด Parameter a เป็น 10 และ b เป็น 20
// ให้แสดงค่าของ addResult ออกมาดูทางหน้าจอด้วย console.log
// ให้ Declare ตัว Variable ที่มีชื่อว่า divideResult

// ให้ Assign ค่าของ divideResult โดยที่มี Value เป็นผลลัพธ์จากการ Execute ของฟังก์ชัน divide ที่อยู่ใน Object calculator
// ต่อไป ให้กำหนด Parameter a เป็น 3000 และ b เป็น 10
// ให้แสดงค่าของ divideResult ออกมาดูทางหน้าจอด้วย console.log

// Start coding here

