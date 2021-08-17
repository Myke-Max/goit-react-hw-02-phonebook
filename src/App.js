import React, { Component } from 'react';
import Phonebook from './components/Phonebook';
import ContactsList from './components/ContactList';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'mike' },
      { id: uuidv4(), name: 'olga' },
      { id: uuidv4(), name: 'vlad' },
    ],
  };

  onDeleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <Phonebook />
        <ContactsList contacts={contacts} deleteContact={this.onDeleteContact} />
      </div>
    );
  }
}

export default App;
