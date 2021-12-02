import React, { useState } from "react";

function MultipleInputs() {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.age && person.email) {
      const newPerson = {
        ...person,
        id: new Date().getTime().toString(),
      };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  return (
    <>
      <article>
        <form>
          <div>
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      {people.map((person) => {
        const { id, firstName, email, age } = person;
        return (
          <div key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
            <p>{age}</p>
          </div>
        );
      })}
    </>
  );
}

export default MultipleInputs;
