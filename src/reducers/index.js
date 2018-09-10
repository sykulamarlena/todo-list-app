import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import todoFilterReducer from './todoFilterReducer';

const rootReducer = combineReducers({
    todoItems: todoReducer,
    todoFilter: todoFilterReducer
});

export default rootReducer;