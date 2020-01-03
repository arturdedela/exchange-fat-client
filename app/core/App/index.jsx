import React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppStyled } from './style';
import CreateUser from '../CreateUser';
import StartIPO from '../StartIPO';

function App() {
  return (
    <AppStyled>
      <CreateUser />
      <StartIPO />
    </AppStyled>
  );
}

export default hot(App);
