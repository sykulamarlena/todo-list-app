import React from 'react';
import PropTypes from 'prop-types';
import TodoItemListRow from './TodoItemListRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TodoItemsList = ({ todoItems, emptyRows, editStatusTodoItem, editNameTodoItem, removeTodoItem }) => (
    <TableBody>
        {todoItems.map(todo =>
            <TodoItemListRow
                key={todo.id}
                todo={todo}
                editStatusTodoItem={() => editStatusTodoItem(todo.id)}
                removeTodoItem={() => removeTodoItem(todo.id)}
                editNameTodoItem={() => editNameTodoItem(todo.id)}
            />
        )}

        {emptyRows && (
            <TableRow>
                <TableCell colSpan={6}>There are no items.</TableCell>
            </TableRow>
        )}
    </TableBody>
);

TodoItemsList.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    emptyRows: PropTypes.bool.isRequired,
    editStatusTodoItem: PropTypes.func.isRequired,
    editNameTodoItem: PropTypes.func.isRequired,
    removeTodoItem: PropTypes.func.isRequired
};

export default TodoItemsList