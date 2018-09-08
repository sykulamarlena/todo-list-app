import constants from '../constants/actionsConstants';

const todoFilterReducer = (state = constants.SHOW_ALL, action) => {
    switch (action.type) {
        case constants.SET_TODO_STATUS_FILTER:
            return action.filter;
        case constants.SET_TODO_NAME_FILTER:
            return action.filter;
        default:
            return state
    }
};

export default todoFilterReducer;