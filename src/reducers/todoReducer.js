import constants from '../constants/actionsConstants';

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case constants.CREATE_TODO_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case constants.EDIT_STATUS_TODO_ITEM:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case constants.EDIT_NAME_TODO_ITEM:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, text: action.text}
                    : todo
            );
        case constants.REMOVE_TODO_ITEM:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
};

export default todoReducer;