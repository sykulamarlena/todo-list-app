import React, {Component} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import counterpart from 'counterpart';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Snackbar from "@material-ui/core/Snackbar";
import Table from '@material-ui/core/Table';
import Toolbar from '@material-ui/core/Toolbar';
import PlusIcon from '@material-ui/icons/Add';
import {editStatusTodoItem, editTodoItem, removeTodoItem, setTodoStatusFilter} from "../actions/index";
import constants from '../constants/actionsConstants'
import TodoItemsListHead from "../components/Todo/TodoItemsListHead";
import TodoItemsListBody from '../components/Todo/TodoItemsListBody'
import TodoItemFormModal from './TodoItemFormModal';
import Modal from "../components/UI/Modal/Modal";
import CustomSnackbarContent from "../components/UI/SnackbarWrapper/SnackbarWrapper";
import css from '../styles/globalStyles.scss';

class TodoItemsListWithFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            selectedStatus: '',
            currentlyDisplayed: this.props.todoItems,
            showFilteredResult: false,
            selectedItem: {},
            itemModalOpen: false,
            modal: {
                open: false,
                content: {}
            },
            snackbar: {
                showMessage: false,
                type: 'success'
            },
        };

        this.handleFilterStatus = this.handleFilterStatus.bind(this);
    }

    handleFilter = prop => (event) => {
        const selected = event.target.value;
        let newlyDisplayed = this.props.todoItems.filter(item => item[prop].toLowerCase().includes(selected.toLowerCase()));

        this.setState({
            [prop]: selected,
            currentlyDisplayed: newlyDisplayed,
            showFilteredResult: selected.length > 0
        });
    };

    handleFilterStatus(event) {
        this.props.setTodoStatusFilter(event.target.value);
        this.setState({selectedStatus: event.target.value, showFilteredResult: false, selectedName: ''});
    }

    getStatuses() {
        const options = [constants.SHOW_ALL, constants.SHOW_COMPLETED, constants.SHOW_INCOMPLETED];
        return options.map(option => ({
                title: counterpart(option), value: option
            })
        );
    }

    handleChangeStatus = (id) => {
        this.props.editStatusTodoItem(id);

        const snackbar = {...this.state.snackbar};
        snackbar.showMessage = counterpart('app.snackbar.itemStatusChangedSuccess');
        this.setState({snackbar: snackbar, showFilteredResult: false, selectedName: ''});
    };

    openItemModal = (item) => this.setState({itemModalOpen: true, selectedItem: item});
    closeItemModal = () => this.setState({itemModalOpen: false});

    submitItemModal = (isFromEdit) => {
        const snackbar = {...this.state.snackbar};

        if (!isFromEdit) {
            snackbar.showMessage = counterpart('app.snackbar.itemAddedSuccess');
        } else {
            snackbar.showMessage = counterpart('app.snackbar.itemEditedSuccess');
        }

        this.props.setTodoStatusFilter(constants.SHOW_ALL);
        this.setState({
            snackbar: snackbar,
            itemModalOpen: false,
            showFilteredResult: false,
            selectedName: '',
            selectedStatus: '',
        })
    };

    handleRemoveItem = () => {
        this.closeModal();
        const selectedId = this.state.modal.selectedId;
        this.props.removeTodoItem(selectedId);

        const snackbar = {...this.state.snackbar};
        snackbar.showMessage = counterpart('app.snackbar.itemDeletedSuccess');
        this.setState({snackbar: snackbar});
    };

    openRemoveModal = (id) => {
        const modal = {...this.state.modal};
        modal.open = true;
        modal.selectedId = id;
        modal.content = counterpart('app.modal.removeItem');
        this.setState({modal: modal});
    };

    closeSnackbar = () => {
        const snackbar = {...this.state.snackbar};
        snackbar.showMessage = false;
        this.setState({snackbar: snackbar});
    };

    closeModal = () => {
        const modal = {...this.state.modal};
        modal.open = false;
        this.setState({modal: modal});
    };

    render() {
        const items = this.state.showFilteredResult ? this.state.currentlyDisplayed : this.props.todoItems;
        const emptyRows = items.length === 0;

        return (
            <React.Fragment>
                <Paper className={css.paperRoot}>

                    <Toolbar className={css.toolbar}>
                        <Button variant="contained" color="secondary" onClick={this.openItemModal}>
                            <PlusIcon />
                            {counterpart('app.todo.addTodo')}
                        </Button>
                    </Toolbar>

                    <div className={css.tableWrapper}>
                    <Table>
                        <TodoItemsListHead
                            selectedTitle={this.state.title}
                            selectedContent={this.state.content}
                            handleFilter={this.handleFilter}
                            statuses={this.getStatuses()}
                            selectedStatus={this.state.selectedStatus}
                            handleFilterStatus={this.handleFilterStatus}
                        />

                        <TodoItemsListBody
                            todoItems={items}
                            emptyRows={emptyRows}
                            editStatusTodoItem={this.handleChangeStatus}
                            editTodoItem={this.openItemModal}
                            removeTodoItem={this.openRemoveModal}
                        />
                    </Table>
                    </div>
                </Paper>

                <Dialog
                    open={this.state.itemModalOpen}
                    onClose={this.closeItemModal}
                    aria-labelledby="form-dialog-title"
                >
                    <TodoItemFormModal
                        item={this.state.selectedItem}
                        onClose={this.closeItemModal}
                        onSubmit={(isFromEdit) => this.submitItemModal(isFromEdit)}
                    />
                </Dialog>

                <Modal
                    open={this.state.modal.open}
                    onClose={this.closeModal}
                    onApproval={this.handleRemoveItem}
                    title={this.state.modal.title}
                    content={this.state.modal.content}
                />

                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                    open={Boolean(this.state.snackbar.showMessage)}
                    autoHideDuration={6000}
                    onClose={this.closeSnackbar}
                >
                    <CustomSnackbarContent
                        onClose={this.closeSnackbar}
                        variant={this.state.snackbar.type}
                        message={this.state.snackbar.showMessage}
                    />
                </Snackbar>

            </React.Fragment>
        );
    }
}

const getFilteredTodos = (todoItems, filter) => {
    switch (filter) {
        case constants.SHOW_ALL:
            return todoItems;
        case constants.SHOW_COMPLETED:
            return todoItems.filter(t => t.completed);
        case constants.SHOW_INCOMPLETED:
            return todoItems.filter(t => !t.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = state => {
    return {
        todoItems: getFilteredTodos(state.todoItems, state.todoFilter),
        todoFilter: state.todoFilter
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            removeTodoItem,
            editStatusTodoItem,
            editTodoItem,
            setTodoStatusFilter
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemsListWithFilters)

