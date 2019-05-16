import React from 'react';

const Table = props => {
  return (
    <table className="table">
      <thead className="table__thead">
        <tr className="table__title">
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quanity</th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        {props.electronics.map(electronic => (
          <tr key={electronic.id}>
            <td>{electronic.id}</td>
            <td>{electronic.name}</td>
            <td>{electronic.price}</td>
            <td>{electronic.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
