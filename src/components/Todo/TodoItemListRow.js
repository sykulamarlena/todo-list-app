import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const TodoItemListRow = ({ todo, editStatusTodoItem, editNameTodoItem, removeTodoItem }) => (
    <TableRow key={todo.id} hover>
        <TableCell padding={'default'}>
            {todo.text}
        </TableCell>

        <TableCell padding={'checkbox'}>
            <Tooltip id="tooltip-icon" title={todo.completed ? counterpart('app.todo.completed') : counterpart('app.todo.incompleted')}>
                <Checkbox checked={todo.completed} onChange={editStatusTodoItem}/>
            </Tooltip>
        </TableCell>

        <TableCell padding={'default'} numeric={true}>
            <Tooltip id="tooltip-icon" title="Edit name">
                <Button color="primary" aria-label="Edit name" onClick={editNameTodoItem}>
                    <CreateIcon/>
                </Button>
            </Tooltip>

            <Tooltip id="tooltip-icon" title="Delete">
                <Button color="primary" aria-label="Delete" onClick={removeTodoItem}>
                    <DeleteIcon/>
                </Button>
            </Tooltip>
        </TableCell>
    </TableRow>
);

TodoItemListRow.propTypes = {
    todo: PropTypes.object.isRequired,
    editStatusTodoItem: PropTypes.func.isRequired,
    editNameTodoItem: PropTypes.func.isRequired,
    removeTodoItem: PropTypes.func.isRequired
};

export default TodoItemListRow