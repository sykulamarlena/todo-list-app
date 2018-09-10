import * as actions from './index'

describe('actions', () => {
    it('createTodoItem should create CREATE_TODO_ITEM action', () => {
        expect(actions.createTodoItem({})).toEqual({
            type: 'CREATE_TODO_ITEM',
            id: 1,
            item: {}
        })
    });

    it('editStatusTodoItem should create EDIT_STATUS_TODO_ITEM action', () => {
        expect(actions.editStatusTodoItem(1)).toEqual({
            type: 'EDIT_STATUS_TODO_ITEM',
            id: 1
        })
    });

    it('editTodoItem should create EDIT_TODO_ITEM action', () => {
        expect(actions.editTodoItem(1, {})).toEqual({
            type: 'EDIT_TODO_ITEM',
            id: 1,
            item: {}
        })
    });

    it('removeTodoItem should create REMOVE_TODO_ITEM action', () => {
        expect(actions.removeTodoItem(1)).toEqual({
            type: 'REMOVE_TODO_ITEM',
            id: 1
        })
    });

    it('setTodoStatusFilter should create SET_TODO_STATUS_FILTER action', () => {
        expect(actions.setTodoStatusFilter('active')).toEqual({
            type: 'SET_TODO_STATUS_FILTER',
            filter: 'active'
        })
    })
});