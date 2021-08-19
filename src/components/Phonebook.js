import { Component } from 'react';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.onResetForm();
  };

  onResetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { contactsCount } = this.props;
    console.log(contactsCount);
    const { name, number } = this.state;
    return (
      <section>
        <h2>Phonebook</h2>
        <p>In your phone book: {contactsCount.length} contacts</p>
        <form onSubmit={this.onSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title=""
              required
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.onInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title=""
              required
            />
          </label>

          <button type="submit">Add contacts</button>
        </form>
      </section>
    );
  }
}

export default Phonebook;
