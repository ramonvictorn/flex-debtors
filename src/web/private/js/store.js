import { createStore, combineReducers } from 'redux';

import usersReducer from './Reducers/users.js';
import debtorsReducer from './Reducers/debtors.js';
const reducer = combineReducers({
    usersReducer,
    debtorsReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace:true})
);

export default store;