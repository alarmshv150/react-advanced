import React, { useState } from "react";
const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

function PropDrilling() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <People people={people} removePerson={removePerson} />
    </section>
  );
}

function People({ people, removePerson }) {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} {...person} removePerson={removePerson} />
      ))}
    </>
  );
}

function Person({ id,name, removePerson }) {
  
  return (
    <>
      <div>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    </>
  );
}

export default PropDrilling;
