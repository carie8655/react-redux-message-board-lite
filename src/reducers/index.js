import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import onInsertReducers from './onInsertReducers';
import setPageReducers from './setPageReducers';

const route = combineReducers({
    insertData: onInsertReducers,
    changePage: setPageReducers,
    routing: routerReducer
})
export default route;