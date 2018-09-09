import React from 'react';
import counterpart from 'counterpart';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Modal = ({open, onClose, onApproval, title, content, cancelText, submitText}) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title"> {title || counterpart('app.modal.title')}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {content}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
                {cancelText || counterpart('app.modal.cancelText')}
            </Button>
            <Button onClick={onApproval} color="secondary">
                {submitText || counterpart('app.modal.submitText')}
            </Button>
        </DialogActions>
    </Dialog>
);

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onApproval: PropTypes.func.isRequired,
    title: PropTypes.string,
    cancelText: PropTypes.string,
    submitText: PropTypes.string,
};

export default Modal;