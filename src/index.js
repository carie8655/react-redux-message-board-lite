import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './component/Home'
import Detail from './component/Detail'
import MessageDetail from './component/messageDetail';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument())
)

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="home" component={Home} />
            </Route>
            <Route path="detail" component={Detail}> </Route>
            <Route path="messagedetail" component={MessageDetail}> </Route>
        </Router>
    </Provider >,
    document.getElementById('root')
);


registerServiceWorker();
