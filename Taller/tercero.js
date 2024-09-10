let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let todo = numbers
  .filter(number => number % 2 === 0)  
  .map(number => number * 2);          

console.log("Los numeros pares multiplicados por dos son: ",todo);