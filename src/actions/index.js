import constants from '../constants/actionsConstants';

let nextTodoId = 1;

export const createTodoItem = (item) => ({
    type: constants.CREATE_TODO_ITEM,
    id: nextTodoId++,
    item
});

export const editStatusTodoItem = (id) => ({
    type: constants.EDIT_STATUS_TODO_ITEM,
    id
});

export const editTodoItem = (id, item) => ({
    type: constants.EDIT_TODO_ITEM,
    id,
    item
});

export const removeTodoItem = (id) => ({
    type: constants.REMOVE_TODO_ITEM,
    id: id
});

export const setTodoStatusFilter = (filter) => ({
    type: constants.SET_TODO_STATUS_FILTER,
    filter
});