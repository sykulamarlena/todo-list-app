import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TodoItemListRow from './TodoItemListRow';

const TodoItemsListBody = ({todoItems, emptyRows, editStatusTodoItem, editTodoItem, removeTodoItem}) => (
    <TableBody>
        {todoItems.map(todo =>
            <TodoItemListRow
                key={todo.id}
                todo={todo}
                editStatusTodoItem={() => editStatusTodoItem(todo.id)}
                removeTodoItem={() => removeTodoItem(todo.id)}
                editTodoItem={() => editTodoItem(todo)}
            />
        )}

        {emptyRows && (
            <TableRow>
                <TableCell colSpan={6} style={{textAlign: 'center'}}>There are no items.</TableCell>
            </TableRow>
        )}
    </TableBody>
);

TodoItemsListBody.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired).isRequired,
    emptyRows: PropTypes.bool.isRequired,
    editStatusTodoItem: PropTypes.func.isRequired,
    editTodoItem: PropTypes.func.isRequired,
    removeTodoItem: PropTypes.func.isRequired
};

export default TodoItemsListBody