import React from "react";

function Table({ children }) {
  return (
    <table className="tables__item">
      <thead>
        <tr>
          <th>Game</th>
          <th>Price</th>
          <th>
            <span className="tables__point--border"> 24%</span>
          </th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
