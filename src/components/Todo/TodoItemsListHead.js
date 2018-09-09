import React from 'react';
import PropTypes from 'prop-types';
import counterpart from "counterpart";
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import CustomSelect from '../UI/CustomSelect/CustomSelect';

const TodoItemsListHead = ({selectedTitle, selectedContent, handleFilter, statuses, selectedStatus, handleFilterStatus}) => (
    <TableHead>
        <TableRow>
            <TableCell key='title' padding={"none"}>
                {counterpart('app.todo.title')}

                <TextField
                    id='title'
                    key='title'
                    name='title'
                    type='search'
                    onChange={handleFilter('title')}
                    value={selectedTitle}
                    style={{display: 'block', marginBottom: '5px'}}
                />
            </TableCell>

            <TableCell key='content' padding={"default"}>
                {counterpart('app.todo.content')}

                <TextField
                    id='title'
                    key='title'
                    name='title'
                    type='search'
                    onChange={handleFilter('content')}
                    value={selectedContent}
                    style={{display: 'block', marginBottom: '5px'}}
                />
            </TableCell>

            <TableCell key='status' padding={"default"}>
                {counterpart('app.todo.status')}

                <CustomSelect
                    id="status"
                    name="status"
                    type='select'
                    label={counterpart('app.todo.chooseStatus')}
                    options={statuses}
                    onChange={(e) => handleFilterStatus(e)}
                    value={selectedStatus}
                    style={{display: 'block', marginBottom: '5px'}}
                />

            </TableCell>
            <TableCell key='actions' padding={"default"} numeric={true}/>
        </TableRow>
    </TableHead>
);

TodoItemsListHead.propTypes = {
    selectedTitle: PropTypes.string.isRequired,
    selectedContent: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    statuses: PropTypes.array.isRequired,
    selectedStatus: PropTypes.string.isRequired,
    handleFilterStatus: PropTypes.func.isRequired
};

export default TodoItemsListHead