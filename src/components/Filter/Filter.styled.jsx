import styled from '@emotion/styled'

export const Input = styled.input`
margin-left: 5px;
border: 1px solid rgba(33, 33, 33, 0.2);;
border-radius: 4px;
outline: 1px transparent;
transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
margin-bottom: 10px;

:focus {
    border-color: blue;
    
  }
` 

export const Button = styled.button`
cursor: pointer;
text-align: center;
width: 50px;
background-color: #fff;
border: none;
box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
border-radius: 4px;
margin-left: 5px;
 transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover {
    background-color: blue;
    color: white;
  }
`

export const Finder = styled.p`
 margin-bottom: 5px;
 ` 