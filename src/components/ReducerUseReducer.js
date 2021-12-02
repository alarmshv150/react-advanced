export const reducer = (state, action) => {
  const newPeople = [...state.people, action.payload];
  const filteredPeople = state.people.filter(
    (person) => person.id !== action.payload
  );

  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "item added",
      };
    case "NO_VALUE":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "please enter value",
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        people: filteredPeople,
      };
    case "ERROR":
      throw new Error("no matching action type");

    default:
      return {
        ...state,
      };
  }
};

// export const reducer = (state, action) => {
//   const newPeople = [...state.people, action.payload];
//   const filteredPeople = state.people.filter(
//     (person) => person.id !== action.payload
//   );
//   if (action.type === "ADD_ITEM") {
//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: "item added",
//     };
//   }
//   if (action.type === "NO_VALUE")
//     return { ...state, isModalOpen: true, modalContent: "please enter value" };
//   if (action.type === "CLOSE_MODAL")
//     return { ...state, isModalOpen: false };
//   if (action.type === "REMOVE_ITEM")
//     return { ...state, people: filteredPeople };

//   throw new Error("no matching action type");
// };
