import { StylesProvider } from '@material-ui/core';
import React from 'react';
import Home from './page/Home';
import { AppContextProvider } from './store/app-context';

export default function App() {
  return (
    <StylesProvider>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </StylesProvider>
  );
}
