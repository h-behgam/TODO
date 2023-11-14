import React, { useContext } from "react";
import { MyContext } from "../App/App";

function Add() {
  let { dispatch, input, setInput } = useContext(MyContext);
  return (
      <div className="container">
      {/* <!-- Button trigger modal --> */}
      <div style={{ textAlign: "right" }}>
        <button
          type="button"
          className="btn btn-outline-info btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#task-modal"
          data-source="New Task"
        >
          Add Task
        </button>
      </div>

      <div className="modal fade" id="task-modal" tabIndex="-1" aria-labelledby="Label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="Label">
                Add a task
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="task-form-display">
                  Task
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description of task"
                  aria-label="task-name"
                  aria-describedby="basic-addon1"
                  value={input.taskName}
                  onChange={(e) => {
                    Number.isInteger(input.id)
                    ? setInput({ ...input, taskName: e.target.value })
                    : setInput({ id: null, taskName: e.target.value, status: "In Progress" })
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setInput({id: null, taskName: "", status: ""}) }}>
                Close
              </button>
              <button
                id="submit-task"
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  dispatch({ type: "put", id: input.id, input })
                  setInput({id: null, taskName: "", status: ""})
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
