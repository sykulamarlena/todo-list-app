import React, {Component} from "react";
import {connect} from 'react-redux'
import counterpart from 'counterpart';
import TodoItemsList from '../components/Todo/TodoItemsList'
import constants from '../constants/actionsConstants'
import {
    editStatusTodoItem,
    editNameTodoItem,
    removeTodoItem,
    setTodoStatusFilter,
    setTodoNameFilter
} from "../actions/index";
import {bindActionCreators} from "redux";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomSelect from '../components/UI/CustomSelect';

let selectedName = '';

class TodoFilterList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStatus: ''
        };

        this.handleFilterStatus = this.handleFilterStatus.bind(this);
        this.handleFilterName = this.handleFilterName.bind(this);
    }

    handleFilterName(event) {
        selectedName= event.target.value;
        this.props.setTodoStatusFilter(constants.NAME);
    }

    handleFilterStatus(event) {
        this.setState({selectedStatus: event.target.value});
        this.props.setTodoStatusFilter(event.target.value);
    }

    getStatuses() {
        const options = [constants.SHOW_ALL, constants.SHOW_COMPLETED, constants.SHOW_INCOMPLETED];
        return options.map(option => ({
                title: counterpart(option), value: option
            })
        );
    }

    render() {
        const items = this.props.todoItems || [];
        const emptyRows = items.length === 0;

        return (
            <React.Fragment>
                <Table style={{marginTop: '50px'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell key='name' style={{padding: '40px 25px'}}>
                                {counterpart('app.todo.content')}

                            </TableCell>
                            <TableCell key='status' style={{padding: '40px 25px'}}>
                                {counterpart('app.todo.status')}

                                <CustomSelect
                                    id="status"
                                    name="status"
                                    type='select'
                                    label={counterpart('app.todo.chooseStatus')}
                                    options={this.getStatuses()}
                                    onChange={this.handleFilterStatus}
                                    value={this.state.selectedStatus}
                                />

                            </TableCell>
                            <TableCell key='actions' style={{padding: '40px 25px'}} numeric={true}>
                                {counterpart('app.todo.actions')}
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TodoItemsList
                        todoItems={items}
                        emptyRows={emptyRows}
                        editStatusTodoItem={(id) => this.props.editStatusTodoItem(id)}
                        editNameTodoItem={(id) => this.props.editNameTodoItem(id)}
                        removeTodoItem={(id) => this.props.removeTodoItem(id)}
                    />
                </Table>
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
        case constants.NAME:
            return todoItems.filter(todo => todo.text.includes(selectedName));
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
            editNameTodoItem,
            setTodoStatusFilter,
            setTodoNameFilter
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilterList)

