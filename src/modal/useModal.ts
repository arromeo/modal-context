import * as React from 'react';
import { ModalContext } from './ModalProvider';

export function useModal() {
  const modalContext = React.useContext(ModalContext);

  if (modalContext === undefined) {
    throw Error(
      'This hook must be inside the decendent of a ModalProvider component'
    );
  }

  return modalContext;
}
