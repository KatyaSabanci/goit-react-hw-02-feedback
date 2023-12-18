import React from 'react';

const Button = ({ text, Update }) => {
  return <ButtonStyled onClick={Update}>{text}</ButtonStyled>;
};

export default Button;
