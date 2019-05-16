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
        {props.phones.map(phone => (
          <tr key={phone.id}>
            <td>{phone.id}</td>
            <td>{phone.name}</td>
            <td>{phone.price}</td>
            <td>{phone.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
