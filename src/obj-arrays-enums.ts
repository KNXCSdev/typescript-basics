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
  use: number;
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  use: Role.ADMIN,
};

let favoriteActivities: any[];
favoriteActivities = ["Sports"];

console.log(person.name);
