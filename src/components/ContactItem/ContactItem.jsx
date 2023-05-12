import React from "react";
import { Button, Item } from "./ContactItem.styled";
import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDelete }) => {
    const { id, name, number } = contact;

  return (
    <>
      <li>
        <span>{name}</span>:<Item>{number}</Item>

        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
 contact: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  onDelete: PropTypes.func,
}