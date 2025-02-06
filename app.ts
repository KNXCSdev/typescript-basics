enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  use: Role.ADMIN;
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivities: any[];
favoriteActivities = ["Sports"];

console.log(person.name);
