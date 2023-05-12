import styled from '@emotion/styled'

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const Button = styled.button`
cursor: pointer;
  display: block;
  text-align: center;
width: 100px;
background-color: #fff;
border: none;
box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
border-radius: 4px;

 
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover {
    background-color: blue;
    color: white;
  }
`

export const Input = styled.input`
margin-left: 5px;
border: 1px solid rgba(33, 33, 33, 0.2);
border-radius: 4px;
outline: 1px transparent;
transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:focus {
    border-color: blue;
    
  }
` 
