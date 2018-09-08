import constants from '../constants/actionsConstants';

let nextTodoId = 1;

export const createTodoItem = (text) => ({
    type: constants.CREATE_TODO_ITEM,
    id: nextTodoId++,
    text
});

export const editStatusTodoItem = (id) => ({
    type: constants.EDIT_STATUS_TODO_ITEM,
    id
});

export const editNameTodoItem = (id, text) => ({
    type: constants.EDIT_NAME_TODO_ITEM,
    id,
    text
});

export const removeTodoItem = (id) => ({
    type: constants.REMOVE_TODO_ITEM,
    id: id
});

export const setTodoStatusFilter = (filter) => ({
    type: constants.SET_TODO_STATUS_FILTER,
    filter
});

export const setTodoNameFilter = (filter) => ({
    type: constants.SET_TODO_NAME_FILTER,
    filter
});