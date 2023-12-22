import React from 'react';

import { ButtonStyled } from './Button.styled';

const Button = ({ text, onUpdate }) => {
  return <ButtonStyled onClick={onUpdate}>{text}</ButtonStyled>;
};

export default Button;
