import React, { useReducer, useState } from "react";
import ModalUseReducer from "./ModalUseReducer";
import { reducer } from "./ReducerUseReducer";

function IndexUseReducer() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    people: [],
    isModalOpen: false,
    modalContent: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <ModalUseReducer
          closeModal={closeModal}
          modalContent={state.modalContent}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>

      {state.people.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: person.id })
            }
          >
            remove
          </button>
        </div>
      ))}
    </>
  );
}

export default IndexUseReducer;
