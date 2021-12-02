import React, { useState, useContext, createContext } from "react";

const Context = createContext();
function ContextAPI() {
  const [people, setPeople] = useState([
    { id: 1, name: "john" },
    { id: 2, name: "peter" },
    { id: 3, name: "susan" },
    { id: 4, name: "anna" },
  ]);
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <Context.Provider value={{ people, removePerson }}>
      <section>
        <h3>Context API</h3>
        <People />
      </section>
    </Context.Provider>
  );
}

function People() {
  const { people } = useContext(Context);
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </>
  );
}

function Person({ id, name }) {
  const { removePerson } = useContext(Context);
  return (
    <>
      <div>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    </>
  );
}

export default ContextAPI;
