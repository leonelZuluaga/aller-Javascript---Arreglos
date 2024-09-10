const users = [
    { name: "Carlos", age: 20 },
    { name: "Juana", age: 17 },
    { name: "Oliver", age: 25 },
    { name: "Katherine", age: 30 },
];

const cuarta = (users) => {
  return users
    .filter(user => user.age >= 18) .map(user => ({...user, age_In_Days: user.age * 365 
    }));
};

console.log(cuarta(users));
