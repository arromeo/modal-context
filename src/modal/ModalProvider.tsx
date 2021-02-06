import * as React from 'react';

/* Components */
import { ContactModal } from '../contact';

type ModalContextProps = {
  children: React.ReactNode;
};

type ModalActions = {
  openModal(): void;
  closeModal(): void;
};

export const ModalContext = React.createContext<ModalActions | undefined>(
  undefined
);

export function ModalProvider(props: ModalContextProps) {
  const { children } = props;

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const openModal = React.useCallback(() => setModalOpen(true), []);
  const closeModal = React.useCallback(() => setModalOpen(false), []);

  const modalActions = React.useMemo<ModalActions>(
    () => ({ openModal, closeModal }),
    [openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={modalActions}>
      {children}
      <ContactModal open={modalOpen} />
    </ModalContext.Provider>
  );
}
