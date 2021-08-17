import React from 'react';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <button onClick={() => deleteContact(id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
