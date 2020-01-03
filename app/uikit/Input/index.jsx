import React from 'react';
import { InputStyled, InputWrapper, Label } from './style';

function Input({ label, onChange, value, className, ...inputProps }) {
  function handleChange(e) {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }

  return (
    <InputWrapper className={className}>
      {label && <Label>{label}</Label>}
      <InputStyled value={value} onChange={handleChange} {...inputProps} />
    </InputWrapper>
  );
}

export default Input;
