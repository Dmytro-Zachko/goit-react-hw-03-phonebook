import React from "react";
import { Input, Button, Finder } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter = ({ value, OnChange, Onclick }) => {
    return ( <form action="">
        <Finder>Find contacts by name</Finder>
        <Input type="text"
        value={value}
        onChange={OnChange}
        />
        <Button onClick={Onclick} >Clear</Button>
   </form> )
    
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func,
    onDelete: PropTypes.func,
}