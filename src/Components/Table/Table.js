import React from "react";
import { Icon } from 'react-icons-kit'
import {pencil} from 'react-icons-kit/fa/pencil'
import {trashO} from 'react-icons-kit/fa/trashO'

function Table() {
  return (
    <div className="container table-responsive">
      {/* <!--Todo Table--> */}
      <table className="table">
        <thead>
          <tr>
            <th className="task-id">#</th>
            <th className="task">Task Name</th>
            <th className="status">Status</th>
            <th className="update">Edit</th>
            <th className="update">Remove</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>task1</td>
            <td>
              <button type="button" className="btn btn-outline-warning btn-sm state" data-source="1">
                Todo
              </button>
            </td>
            <td>
              <button
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
              <button className="btn btn-outline-secondary btn-sm remove pb-2" data-source="1" type="button">
                <Icon icon={trashO} size={22} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
