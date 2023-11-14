import React, { useReducer, useState } from "react";
import "./App.css";
import Title from "../Title/Title";
import Add from "../Add/Add";
import Tables from "../Table/Tables";
let DB = [
  { id: 1, taskName: "task 1", status: true },
  { id: 2, taskName: "task 2", status: false },
  { id: 3, taskName: "task 3", status: true },
];
const reducer = (state, { type, id, input }) => {
  switch (type) {
    case "del":
      return state.filter((elem) => {
        return elem.id !== id;
      });
    case "put":
      //add new todo
      if (id === null) {
        if (input.taskName !== "") {
          return [...state, { ...input, id: state.length + 1 }];
        }
      }
      // update existed todo
      if (id !== null) {
        return state.map((elem) => {
          if (elem.id === id) {
            return { ...elem, taskName: input.taskName };
          }
          return elem;
        });
      }
      return state;
      
    case "changeStatus":
      return state.map((elem) => {
        if (elem.id === id) {
          return { ...elem, status: !elem.status };
        }
        return elem;
      });

    default:
      return state;
  }
};
export const MyContext = React.createContext();
function App() {
  const [input, setInput] = useState({ id: null, taskName: "", status: "" });
  const [state, dispatch] = useReducer(reducer, DB);
  return (
    <>
      <Title />
      <MyContext.Provider value={{ state, dispatch, input, setInput }}>
        <Add />
        <Tables />
      </MyContext.Provider>
    </>
  );
}

export default App;
