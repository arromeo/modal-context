import * as React from 'react';

/* Components */
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

type ContactModalProps = DialogProps;

function ContactModal(props: ContactModalProps) {
  return (
    <Dialog {...props}>
      <DialogTitle>Contact info</DialogTitle>
      <Typography>Some contact info goes here</Typography>
    </Dialog>
  );
}

export default ContactModal;
