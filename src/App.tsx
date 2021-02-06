import React from 'react';

/* Providers */
import { ModalProvider } from './modal';

/* Components */
import { Page } from './page';

function App() {
  return (
    <ModalProvider>
      <Page />
    </ModalProvider>
  );
}

export default App;
