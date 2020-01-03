import React from 'react';
import { ButtonStyled } from './style';

function Button({ children, ...buttonProps }) {
  return <ButtonStyled {...buttonProps}>{children}</ButtonStyled>;
}

export default Button;
