import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";
import { Contactlist } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactList = ({ contactList, onDelete }) => {
  return (
      <Contactlist>
      {contactList.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          ></ContactItem>
        );
      })}
    </Contactlist>
  );
}; 

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  onDelete: PropTypes.func,
}
