import React, { Component } from "react";
import { nanoid } from "nanoid";
import { FormWrapper, Button, Input } from "./Form.styled";
import PropTypes from 'prop-types';
  
export class Form extends Component {
    state = {
        name: '',
        number: ''
    }
OnInputChange = event => {
    const {name, value} = event.target
    this.setState({
    [name]:value
  })
  }
  OnSubmit = e => {
      e.preventDefault();
      const { contacts, addContact } = this.props;
      const { name, number } = this.state
      const contact = { id: nanoid(), name, number }

       const alreadyExists = contacts.findIndex(item => {
      const name = item.name.toLowerCase();
      const newName = contact.name.toLowerCase();
      return name === newName;
    });
      
      if (alreadyExists >= 0) {
       alert(`${contact.name} is already in contacts`)
        return
      }
      else {
          addContact(contact)
      }
    this.reset()
  }

  reset = () => {
    this.setState({name: '',number: ''})
  }


  render() {
      
const {name, number} = this.state

        return (
      <form onSubmit={this.OnSubmit}>
<FormWrapper>
            <label htmlFor="name">Name
          <Input
  type="text"
      name="name"
      value={name}
      onChange={this.OnInputChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required />
                    </label>
                     <label htmlFor="number">Number
                <Input
                  type="tel"
                  name="number"
                  value={number}
                  onChange={this.OnInputChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/></label>
        <Button type="submit">Add Contact</Button>
          </FormWrapper>
          </form>
      )
    }
}

Form.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  addContact: PropTypes.func,
}