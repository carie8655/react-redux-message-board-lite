import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import onInsertReducers from './onInsertReducers';
import setPageReducers from './setPageReducers';
import setUID from './setUID';

const route = combineReducers({
    insertData: onInsertReducers,
    changePage: setPageReducers,
    routing: routerReducer,
    setUID: setUID
})
export default route;