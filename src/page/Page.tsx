import * as React from 'react';

/* Components */
import Button from '@material-ui/core/Button';

/* Hooks */
import { useModal } from '../modal';

export function Page() {
  const { openModal } = useModal();

  return <Button onClick={openModal}>Press Me!</Button>;
}
