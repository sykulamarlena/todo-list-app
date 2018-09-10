import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItemListRow = ({todo, editStatusTodoItem, editTodoItem, removeTodoItem}) => (
    <TableRow key={todo.id}>
        <TableCell padding={'default'} className="wrappedCell">
            {todo.title}
        </TableCell>

        <TableCell padding={'default'} className="wrappedCell">
            {todo.content}
        </TableCell>

        <TableCell padding={'default'}>
            <Tooltip id="tooltip-icon"
                     title={todo.completed ? counterpart('app.todo.completed') : counterpart('app.todo.incompleted')}>
                <Checkbox checked={todo.completed} onChange={editStatusTodoItem}/>
            </Tooltip>
        </TableCell>

        <TableCell padding={'default'} numeric={true}>
            <Button color="primary" aria-label="Edit" onClick={editTodoItem}>
                <CreateIcon/>
            </Button>


            <Button color="primary" aria-label="Delete" onClick={removeTodoItem}>
                <DeleteIcon/>
            </Button>
        </TableCell>
    </TableRow>
);

TodoItemListRow.propTypes = {
    todo: PropTypes.object.isRequired,
    editStatusTodoItem: PropTypes.func.isRequired,
    editTodoItem: PropTypes.func.isRequired,
    removeTodoItem: PropTypes.func.isRequired
};

export default TodoItemListRow