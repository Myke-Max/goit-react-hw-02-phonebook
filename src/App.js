import React, { Component } from 'react';
import Phonebook from './components/Phonebook';
import ContactsList from './components/ContactList';
import Filter from './components/filterContacts';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  getFilterValue = e => {
    console.log(e.currentTarget.value);
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };

  onDeleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContact = this.getVisibleContacts();
    return (
      <div className="App">
        <Phonebook onSubmit={this.onSubmitForm} contactsCount={contacts} />
        <Filter value={filter} filterChange={this.getFilterValue} />
        <ContactsList contacts={visibleContact} deleteContact={this.onDeleteContact} />
      </div>
    );
  }
}

export default App;
