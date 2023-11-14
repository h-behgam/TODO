import React from "react";
import Table from "./Table";

function Tables() {
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

        <Table />
      </table>
    </div>
  );
}

export default Tables;
