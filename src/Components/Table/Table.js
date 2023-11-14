import React, { useContext } from "react";
import { Icon } from "react-icons-kit";
import { pencil } from "react-icons-kit/fa/pencil";
import { trashO } from "react-icons-kit/fa/trashO";
import { MyContext } from "../App/App";
// import { DB } from "../App/App";

function Table() {
  let { state, dispatch, setInput } = useContext(MyContext);
  //   console.log(state);
  return (
    <tbody>
      {state.map((elem, index) => {
        return (
          <tr key={elem.id}>
            <td>{index + 1}</td>
            <td>{elem.taskName}</td>
            <td>
              {
                <button
                  type="button"
                  data-source="1"
                  onClick={() => {
                    dispatch({ type: "changeStatus", id: elem.id, input: elem });
                  }}
                  className={`btn btn-sm state text-capitalize 
                  ${elem.status ? "btn-outline-success" : "btn-outline-warning"}
                //   ${elem.status === "complete" ? "btn-outline-success" : null}
                //   ${elem.status === "In Progress" ? "btn-outline-warning" : null}
                  `}
                >
                  {elem.status ? "complete" : "In Progress"}
                </button>
              }
            </td>
            <td>
              <button
                onClick={() => {
                  setInput(elem);
                }}
                type="button"
                className="btn btn-outline-info btn-sm pb-2"
                data-bs-toggle="modal"
                data-bs-target="#task-modal"
                data-source="1"
                data-content="task1"
              >
                <Icon icon={pencil} size={22} />
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  dispatch({ type: "del", id: elem.id });
                }}
                className="btn btn-outline-secondary btn-sm remove pb-2"
                data-source="1"
                type="button"
              >
                <Icon icon={trashO} size={22} />
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default Table;
