import React from 'react';

const Table = props => {
  return (
    <table className="table">
      <thead className="table__thead">
        <tr className="table__title">
          <th onClick={() => props.sort('id')}>ID</th>
          <th onClick={() => props.sort('name')}>Name</th>
          <th onClick={() => props.sort('price')}>Price</th>
          <th onClick={() => props.sort('quantity')}>Quanity</th>
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
