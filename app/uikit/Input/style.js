import styled from 'styled-components';
import { SecondaryText } from '../SecondaryText';

export const InputWrapper = styled.div`
  text-align: left;
`;

export const Label = styled(SecondaryText)`
  display: inline-block;
  margin-bottom: 8px;
`;

export const InputStyled = styled.input`
  background-color: rgba(125, 128, 131, 0.08);
  height: 36px;
  padding: 0 8px;
  outline: none;
  border: none;
  color: inherit;
  border-bottom: 2px solid transparent;
  width: 100%;

  :focus {
    border-color: #e56e17;
  }

  :disabled {
    background-color: rgba(25, 25, 25, 0.5);
  }
`;
