import React, { useState } from "react";
import { Link } from "react-router-dom";
function People() {
  const [people] = useState([
    { id: 1, name: "john" },
    { id: 2, name: "peter" },
    { id: 3, name: "susan" },
    { id: 4, name: "anna" },
  ]);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <Link to={`/person/${person.id}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
}

export default People;
