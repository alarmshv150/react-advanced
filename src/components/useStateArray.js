import React, { useState } from "react";

function UseStateArray() {
  const data = [
    { id: 1, name: "john", age: 34 },
    { id: 2, name: "peter", age: 29 },
    { id: 3, name: "susan", age: 25 },
    { id: 4, name: "anna", age: 31 },
  ];
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <ul>
      {people.map((person) => {
        const { id, name, age } = person;
        return (
          <li key={id}>
            <h4>
              {name} {age}
            </h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </li>
        );
      })}
      <h4>
        Total age:
        {people.reduce((total, person) => (total += person.age), 0)}
      </h4>
      <h4>
        Oldest person age:
        {people.reduce((total, person) => {
          if (total <= person.age) {
            total = person.age;
          }
          return total;
        }, 0)}
      </h4>
      <button onClick={() => setPeople([])}>clear list</button>
    </ul>
  );
}

export default UseStateArray;
