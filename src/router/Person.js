import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

function Person() {
  const [name, setName] = useState("default name");
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === +id);
    setName(newPerson.name);
  }, [id]);
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people">Back to People</Link>
    </div>
  );
}

export default Person;
