import React from 'react';

const Phonebook = () => {
  return (
    <section>
      <h2>Phonebook</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title=""
          required
        />
      </label>
      <button type="button">Add contacts</button>
    </section>
  );
};

export default Phonebook;
