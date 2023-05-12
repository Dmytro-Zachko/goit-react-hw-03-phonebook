import React, { Component } from "react";
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import InitContacts from "../json/Contacts.json"
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";

export class App extends Component {
state = {
  contacts: InitContacts,
  filter: ''
  }

  componentDidUpdate(PrevState, Prevprops) {
    if (PrevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }

  }

  componentDidMount() {
    const Contacts = localStorage.getItem('contacts')
    const ParsedContacts = JSON.parse(Contacts)

    if (ParsedContacts) {
      this.setState({ contacts: ParsedContacts })
    }
  }
  
  OnFilterChange = event => {
    
    const {value} = event.currentTarget
    this.setState({
    filter: value
  })
  }

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  ClearFilter = () => {
     this.setState({filter: ''})
  }

  FilterContact = () => {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase().trim()

    return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
  }

  deleteContact = contactId => {
    this.setState(prevstate => ({ contacts: prevstate.contacts.filter(contact => contact.id !== contactId)}))
  }
  render() { 
const {contacts, filter} = this.state

    return (
      <>
        <Section title="Phonebook"> <Form
        contacts={contacts}
        addContact={this.addContact}
        />
        </Section>
        <Section title="Contacts">
          <Filter
          value={filter}
          OnChange={this.OnFilterChange}
          Onclick={this.ClearFilter}
        />
        <ContactList
          contactList={this.FilterContact()}
          onDelete={this.deleteContact}
        />
      </Section>
        </>
        
       )
}}
