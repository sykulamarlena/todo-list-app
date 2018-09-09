import React, {Component} from 'react';
import {connect} from 'react-redux';
import counterpart from 'counterpart';
import {bindActionCreators} from 'redux';
import Button from '@material-ui/core/Button';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Modal from "../components/UI/Modal/Modal";
import TextField from '@material-ui/core/TextField';
import {createTodoItem, editTodoItem} from '../actions';
import css from '../styles/globalStyles.scss';

class TodoItemFormModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {
                title: this.props.item.title || '',
                content: this.props.item.content || '',
            },
            confirmationEditItemOpen: false,
        };

        this.handleTodoItem = this.handleTodoItem.bind(this);
    }

    handleChangeTodoText = prop => (event) => {
        const item = {...this.state.item};
        item[prop] = event.target.value;

        this.setState({item});
    };

    handleTodoItem() {
        if (this.props.item.hasOwnProperty('id')) {
            this.setState({confirmationEditItemOpen: true});
        } else {
            this.submitAddItemModal();
        }
    }

    submitAddItemModal = () => {
        let item = this.state.item;
        this.props.createTodoItem(item);
        item.title = '';
        item.content = '';

        this.setState({item});
        this.props.onSubmit(false);
    };

    submitEditItemModal = () => {
        let item = this.state.item;
        this.props.editTodoItem(this.props.item.id, item);
        item.title = '';
        item.content = '';

        this.setState({item});
        this.props.onSubmit(true);
    };

    closeConfirmationItemModal = () => {
        this.setState({confirmationEditItemOpen: false});
        this.props.onClose();
    };

    render() {
        const title = this.props.item.hasOwnProperty('id') ? counterpart('app.todo.editTodo') : counterpart('app.todo.addTodo');

        return (
            <React.Fragment>
                <DialogTitle id="form-dialog-title">
                    {title}
                </DialogTitle>

                <DialogContent>
                    <div className={css.modalContent}>
                        <TextField
                            id="title"
                            name="title"
                            label={counterpart('app.todo.title')}
                            className={css.customInput}
                            value={this.state.item.title}
                            onChange={this.handleChangeTodoText('title')}
                            margin="normal"
                        />

                        <TextField
                            id="content"
                            name="content"
                            label={counterpart('app.todo.content')}
                            className={css.customInput}
                            value={this.state.item.content}
                            onChange={this.handleChangeTodoText('content')}
                            margin="normal"
                            multiline
                            rowsMax="4"
                        />

                        <div className={css.groupButton}>
                            <Button
                                className={css.customButton}
                                color="primary"
                                onClick={this.props.onClose}
                            >
                                {counterpart('app.todo.cancel')}
                            </Button>

                            <Button
                                className={css.customButton}
                                color="secondary"
                                disabled={this.state.item.title === ''}
                                onClick={this.handleTodoItem}
                            >
                                {counterpart('app.todo.save')}
                            </Button>
                        </div>
                    </div>
                </DialogContent>

                <Modal
                    open={this.state.confirmationEditItemOpen}
                    onClose={this.closeConfirmationItemModal}
                    onApproval={this.submitEditItemModal}
                    content={counterpart('app.modal.editItem')}
                />

            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createTodoItem,
        editTodoItem
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(TodoItemFormModal)